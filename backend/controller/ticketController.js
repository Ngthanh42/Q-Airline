import pool from '../config/database.js';

// Danh sách vé
export const getAllTickets = async (req, res) => {
    try {
        const [result] = await pool.query(`
            SELECT 
                t.ticket_id AS id,
                t.seat_number,
                t.price,
                b.status,
                b.booking_date,
                u.full_name AS customer_name,
                f.flight_id,
                a1.name AS departure_airport,
                a2.name AS arrival_airport,
                f.departure_time,
                f.arrival_time
            FROM 
                tickets t
            JOIN 
                bookings b ON t.booking_id = b.booking_id
            JOIN 
                users u ON b.user_id = u.user_id
            JOIN 
                flights f ON t.flight_id = f.flight_id
            JOIN 
                airports a1 ON f.departure_airport_id = a1.airport_id
            JOIN 
                airports a2 ON f.arrival_airport_id = a2.airport_id
            ORDER BY 
                t.ticket_id DESC;
        `);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching tickets:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Thông tin vé cụ thể (lấy theo ID)
export const getTicketById = async (req, res) => {
    const { ticket_id } = req.params;

    try {
        const [result] = await pool.query(`
            SELECT 
                t.ticket_id,
                t.seat_number,
                t.price,
                u.full_name AS customer_name,
                f.flight_id,
                a1.name AS departure_airport,
                a2.name AS arrival_airport,
                f.departure_time,
                f.arrival_time
            FROM 
                tickets t
            JOIN 
                bookings b ON t.booking_id = b.booking_id
            JOIN 
                users u ON b.user_id = u.user_id
            JOIN 
                flights f ON t.flight_id = f.flight_id
            JOIN 
                airports a1 ON f.departure_airport_id = a1.airport_id
            JOIN 
                airports a2 ON f.arrival_airport_id = a2.airport_id
            WHERE 
                t.ticket_id = ?
        `, [ticket_id]);

        if (result.length === 0) {
            return res.status(404).json({ message: "Ticket not found" });
        }

        res.status(200).json(result[0]);
    } catch (error) {
        console.error("Error fetching ticket by ID:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Tạo (thêm) vé
export const addTicket = async (req, res) => {
    const { user_id, flight_id, seat_number, price } = req.body;

    try {
        // Tạo booking
        const [bookingResult] = await pool.query(
            `
        INSERT INTO bookings (user_id, flight_id, booking_date, status)
        VALUES (?, ?, NOW(), 'Confirmed')
        `,
            [user_id, flight_id]
        );
        const booking_id = bookingResult.insertId;

        // Kiểm tra ghế đã được đặt hay chưa
        const [seatCheck] = await pool.query(
            `
        SELECT is_occupied FROM airplane_seats 
        WHERE seat_number = ? AND airplane_id = (SELECT airplane_id FROM flights WHERE flight_id = ?)
        `,
            [seat_number, flight_id]
        );

        if (seatCheck.length > 0 && seatCheck[0].is_occupied) {
            return res.status(400).json({ message: "Seat already occupied" });
        }

        // Tạo ticket
        const [ticketResult] = await pool.query(
            `
        INSERT INTO tickets (booking_id, flight_id, seat_number, price)
        VALUES (?, ?, ?, ?)
        `,
            [booking_id, flight_id, seat_number, price]
        );

        // Cập nhật trạng thái ghế
        await pool.query(
            `
        UPDATE airplane_seats
        SET is_occupied = true, passenger_id = ?
        WHERE seat_number = ? AND airplane_id = (SELECT airplane_id FROM flights WHERE flight_id = ?)
        `,
            [user_id, seat_number, flight_id]
        );

        res.status(201).json({
            message: "Ticket created successfully",
            ticket_id: ticketResult.insertId,
            booking_id,
        });
    } catch (error) {
        console.error("Error adding ticket:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Cập nhật thông tin vé
export const updateTicket = async (req, res) => {
    const { ticket_id } = req.params;
    const { seat_number, price } = req.body;

    try {
        const [result] = await pool.query(`
            UPDATE tickets
            SET seat_number = ?, price = ?
            WHERE ticket_id = ?
        `, [seat_number, price, ticket_id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Ticket not found" });
        }

        res.status(200).json({ message: "Ticket updated successfully" });
    } catch (error) {
        console.error("Error updating ticket:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Xóa vé
export const deleteTicket = async (req, res) => {
    const { ticket_id } = req.params;

    try {
        const [result] = await pool.query(`
            DELETE FROM tickets WHERE ticket_id = ?
        `, [ticket_id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Ticket not found" });
        }

        res.status(200).json({ message: "Ticket deleted successfully" });
    } catch (error) {
        console.error("Error deleting ticket:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Hủy đặt vé
export const cancelBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await pool.query(
            `
            UPDATE bookings
            SET status = 'Canceled'
            WHERE booking_id = ?
            `,
            [id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Booking not found" });
        }

        res.status(200).json({ message: "Booking canceled successfully" });
    } catch (error) {
        console.error("Error canceling booking:", error);
        res.status(500).json({ message: "Server error" });
    }
};