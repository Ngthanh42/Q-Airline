import pool from '../config/database.js';

export const getBookings = async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT b.booking_id, u.full_name AS customer, f.flight_id, f.departure_time, f.arrival_time, 
                    f.ticket_price, b.status, b.booking_date 
             FROM bookings b
             JOIN users u ON b.user_id = u.user_id
             JOIN flights f ON b.flight_id = f.flight_id
             ORDER BY b.booking_date DESC`
        );
        res.status(200).json(rows);
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Server error" });
    }
};
