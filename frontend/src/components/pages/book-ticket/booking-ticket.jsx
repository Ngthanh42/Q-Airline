import React, { useState } from "react";
import axiosInstance from "../../config/axiosInstance";

const BookTicket = () => {
    const [flightId, setFlightId] = useState("");
    const [passengerName, setPassengerName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleBook = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/api/tickets/book", {
                flightId,
                passengerName,
                email,
            });
            setMessage("Đặt vé thành công!");
        } catch (error) {
            setMessage("Có lỗi xảy ra, vui lòng thử lại.");
        }
    };

    return (
        <div className="book-ticket">
            <h2>Đặt vé</h2>
            <form onSubmit={handleBook}>
                <input
                    type="text"
                    placeholder="Mã chuyến bay"
                    value={flightId}
                    onChange={(e) => setFlightId(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Tên hành khách"
                    value={passengerName}
                    onChange={(e) => setPassengerName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Đặt vé</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default BookTicket;
