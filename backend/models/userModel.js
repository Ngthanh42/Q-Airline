import pool from '../config/database.js';

// Tìm người dùng theo email
export const findUserByEmail = async (email) => {
    const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return result[0];
};

// Tạo người dùng mới
export const createUser = async (fullName, email, hashedPassword) => {
    const [result] = await pool.query(
        'INSERT INTO users (full_name, email, password_hash) VALUES (?, ?, ?)',
        [fullName, email, hashedPassword]
    );
    return result.insertId;
};

// Tìm role_id theo role_name
export const findRoleIdByName = async (roleName) => {
    const [result] = await pool.query('SELECT role_id FROM roles WHERE role_name = ?', [roleName]);
    return result[0]?.role_id || null;
};

// Gán vai trò mặc định cho người dùng
export const assignRoleToUser = async (userId, roleName) => {
    const roleId = await findRoleIdByName(roleName);

    if (!roleId) {
        throw new Error(`Vai trò '${roleName}' không tồn tại trong hệ thống`);
    }

    const [result] = await pool.query(
        'INSERT INTO user_roles (user_id, role_id) VALUES (?, ?)',
        [userId, roleId]
    );
    return result.insertId; // Trả về ID của user_role vừa tạo
};