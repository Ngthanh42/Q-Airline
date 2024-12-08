import React, { useState, useEffect } from "react";
import axiosInstance from "../../config/axiosInstance";

const MyTickets = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        const fetchTickets = async () => {
            try {
                const response = await axiosInstance.get("/api/tickets/my");
                setTickets(response.data);
            } catch (error) {
                console.error("Error fetching tickets:", error);
            }
        };

        fetchTickets();
    }, []);

    return (
        <div className="my-tickets">
            <h2>Vé đã đặt</h2>
            <ul>
                {tickets.map((ticket) => (
                    <li key={ticket.id}>
                        {ticket.flightNumber} - {ticket.passengerName} ({ticket.status})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MyTickets;
