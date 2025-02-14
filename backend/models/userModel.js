import pool from '../config/database.js';

// Tìm người dùng theo email
export const findUserByEmail = async (email) => {
    const [result] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    return result[0];
};

// Tìm người dùng theo id
export const findUserById = async (id) => {
    const [rows] = await pool.query(
        `SELECT u.user_id AS id, u.full_name AS username, u.email, 
            u.avatar, u.birth_date AS dob, u.phone_number AS phone, 
            u.country, u.address, u.is_email_verified, 
            ur.role_id, r.role_name AS role, 
            u.created_at, u.updated_at, u.password_hash AS password
         FROM users u
         LEFT JOIN user_roles ur ON u.user_id = ur.user_id
         LEFT JOIN roles r ON ur.role_id = r.role_id
         WHERE u.user_id = ?`,
        [id]
    );
    if (rows.length === 0) {
        throw new Error("Người dùng không tồn tại");
    }
    return rows[0];
};

// Tạo người dùng mới
export const createUser = async (fullName, email, hashedPassword, phone, address, country, gender, dob, avatar) => {
    const [result] = await pool.query(
        `INSERT INTO users (full_name, email, password_hash, phone_number, address, country, gender, birth_date, avatar) 
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [fullName, email, hashedPassword, phone || null, address || null, country || null, gender, dob || null, avatar || null]
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