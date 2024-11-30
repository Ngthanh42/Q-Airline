import pool from '../config/database.js';

// Tạo máy bay
export const createAirplane = async (req, res) => {
    const {
        model,
        manufacturer,
        year_of_manufacture,
        registration_number,
        fuel_capacity,
        last_inspection_date,
        capacity,
        status,
        avatar
    } = req.body;

    try {
        // Kiểm tra xem `registration_number` đã tồn tại chưa
        const [existingAirplane] = await pool.query(
            "SELECT * FROM airplanes WHERE registration_number = ?",
            [registration_number]
        );

        if (existingAirplane.length > 0) {
            return res.status(400).json({
                message: "Registration number already exists.",
            });
        }

        // Tạo mới máy bay
        const [result] = await pool.query(
            `INSERT INTO airplanes (
            model, manufacturer, year_of_manufacture, 
            registration_number, fuel_capacity, last_inspection_date, 
            capacity, status, avatar, created_at, updated_at
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
            [
                model,
                manufacturer,
                year_of_manufacture,
                registration_number,
                fuel_capacity,
                last_inspection_date || null,
                capacity,
                status || "active",
                avatar
            ]
        );

        res.status(201).json({
            message: "Airplane created successfully.",
            airplaneId: result.insertId,
        });
    } catch (error) {
        console.error("Error creating airplane:", error);
        res.status(500).json({
            message: "Server error. Could not create airplane.",
        });
    }
};

// Danh sách máy bay
export const getAirplanes = async (req, res) => {
    try {
        const [rows] = await pool.query(
            `SELECT 
          airplane_id AS id,
          model,
          manufacturer,
          year_of_manufacture,
          registration_number,
          fuel_capacity,
          last_inspection_date,
          capacity,
          status,
          avatar,
          created_at,
          updated_at
        FROM airplanes`
        );
        res.status(200).json(rows);
    } catch (err) {
        console.error("Error fetching airplanes:", err);
        res.status(500).json({ message: "Server error." });
    }
};

// Thông tin máy bay theo id
export const getAirplaneById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await pool.query(
            `SELECT 
          airplane_id AS id,
          model,
          manufacturer,
          year_of_manufacture,
          registration_number,
          fuel_capacity,
          last_inspection_date,
          capacity,
          status,
          avatar,
          created_at,
          updated_at
        FROM airplanes
        WHERE airplane_id = ?`,
            [id]
        );

        if (rows.length === 0) {
            return res.status(404).json({ message: "Airplane not found." });
        }

        res.status(200).json(rows[0]);
    } catch (err) {
        console.error("Error fetching airplane by ID:", err);
        res.status(500).json({ message: "Server error." });
    }
};

// Tạo chuyến bay
export const createFlight = async (req, res) => {
    const {
        airplane_id,
        departure_airport_id,
        arrival_airport_id,
        departure_time,
        arrival_time,
        ticket_price,
        ticket_class
    } = req.body;

    try {
        const [result] = await pool.query(
            `INSERT INTO flights 
            (airplane_id, departure_airport_id, arrival_airport_id, departure_time, arrival_time, ticket_price, ticket_class) 
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [
                airplane_id,
                departure_airport_id,
                arrival_airport_id,
                departure_time,
                arrival_time,
                ticket_price,
                ticket_class
            ]
        );
        res.status(201).json({ message: "Flight created successfully", flight_id: result.insertId });
    } catch (error) {
        console.error("Error creating flight:", error);
        res.status(500).json({ message: "Server error" });
    }
};

// Thay đổi giờ khởi hành (delay) cho chuyến bay
export const updateFlightDepartureTime = async (req, res) => {
    const { flight_id } = req.params;
    const { new_departure_time } = req.body;

    try {
        const [result] = await pool.query(
            "UPDATE flights SET departure_time = ?, status = 'delayed' WHERE flight_id = ?",
            [new_departure_time, flight_id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Flight not found" });
        }

        res.status(200).json({ message: "Flight departure time updated successfully" });
    } catch (error) {
        console.error("Error updating flight departure time:", error);
        res.status(500).json({ message: "Server error" });
    }
};
