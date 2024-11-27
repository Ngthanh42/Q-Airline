import pool from "../config/database.js";

export const getUsers = async (req, res) => {
    try {
        // Query lấy danh sách người dùng
        const [rows] = await pool.query(
            `SELECT u.user_id AS id, u.full_name AS username, u.email, 
              u.phone_number AS phone, ur.role_id, r.role_name AS role, 
              u.created_at, u.updated_at
       FROM users u
       LEFT JOIN user_roles ur ON u.user_id = ur.user_id
       LEFT JOIN roles r ON ur.role_id = r.role_id`
        );

        // Kiểm tra nếu không có người dùng
        if (rows.length === 0) {
            return res.status(404).json({ message: "Không có người dùng nào được tìm thấy." });
        }

        // Trả về danh sách người dùng
        res.status(200).json(rows);
    } catch (error) {
        console.error("Lỗi khi lấy danh sách người dùng:", error);
        res.status(500).json({ message: "Lỗi máy chủ." });
    }
};

export const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await pool.query(
            `SELECT u.user_id AS id, u.full_name AS username, u.email, 
                u.phone_number AS phone, ur.role_id, r.role_name AS role, 
                u.created_at, u.updated_at
         FROM users u
         LEFT JOIN user_roles ur ON u.user_id = ur.user_id
         LEFT JOIN roles r ON ur.role_id = r.role_id
         WHERE u.user_id = ?`,
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        res.status(200).json(rows[0]); // Trả về thông tin người dùng
    } catch (error) {
        console.error("Lỗi khi lấy chi tiết người dùng:", error);
        res.status(500).json({ message: "Lỗi máy chủ." });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const [result] = await pool.query(
            `UPDATE users SET ? WHERE user_id = ?`,
            [updatedData, id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Người dùng không tồn tại" });
        }

        res.status(200).json({ message: "Cập nhật thông tin thành công" });
    } catch (err) {
        console.error("Lỗi khi cập nhật thông tin người dùng:", err);
        res.status(500).json({ message: "Lỗi máy chủ" });
    }
};
