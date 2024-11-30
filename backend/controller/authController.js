import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { findUserByEmail, createUser, assignRoleToUser } from '../models/userModel.js';
import { getUserRole } from '../data/getUserMeLoader.js'

export const register = async (req, res) => {
  const { full_name, email, password } = req.body;

  try {
    // Kiểm tra email đã tồn tại chưa
    const user = await findUserByEmail(email);
    if (user) {
      return res.status(400).json({ message: 'Email đã được sử dụng' });
    }

    // Mã hóa mật khẩu
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Tạo người dùng mới
    const userId = await createUser(full_name, email, hashedPassword);

    const roleAssigned = await assignRoleToUser(userId, 'Customer');

    res.status(201).json({ message: 'Đăng ký thành công', userId, roleAssigned });
  } catch (error) {
    console.error('Lỗi khi đăng ký:', error);
    res.status(500).json({ message: 'Lỗi máy chủ' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Kiểm tra email
    const user = await findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    // So sánh mật khẩu
    const validPassword = await bcrypt.compare(password, user.password_hash);
    if (!validPassword) {
      return res.status(401).json({ message: 'Email hoặc mật khẩu không đúng' });
    }

    // Lấy vai trò của người dùng
    const role = await getUserRole(user.user_id);

    // Tạo JWT
    const token = jwt.sign(
      { id: user.user_id, email: user.email, role: role.role_name },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({
      message: 'Đăng nhập thành công',
      token,
      user: {
        id: user.user_id,
        username: user.full_name,
        email: user.email,
        avatar: user.avatar || null,
        dob: user.birth_date || null,
        phone: user.phone_number || null,
        country: user.country || null,
        address: user.address || null,
        role: role.role_name,
        isEmailVerified: user.is_email_verified,
        createdAt: user.created_at,
        updatedAt: user.updated_at,
      },
    });
  } catch (error) {
    console.error('Lỗi khi đăng nhập:', error);
    res.status(500).json({ message: 'Lỗi máy chủ' });
  }
};
