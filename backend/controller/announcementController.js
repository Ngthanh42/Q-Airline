import pool from '../config/database.js';

export const createAnnouncement = async (req, res) => {
    const { title, content } = req.body;
    try {
        const [result] = await pool.query(
            "INSERT INTO announcements (title, content) VALUES (?, ?)",
            [title, content]
        );
        res.status(201).json({ message: "Announcement created successfully", announcement_id: result.insertId });
    } catch (error) {
        console.error("Error creating announcement:", error);
        res.status(500).json({ message: "Server error" });
    }
};

export const getAnnouncements = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM announcements ORDER BY created_at DESC");
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching announcements:", error);
        res.status(500).json({ message: "Server error" });
    }
};