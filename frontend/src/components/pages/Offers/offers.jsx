import React from 'react';
import { Calendar, MapPin, Zap } from 'lucide-react';
import './offers.css';

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Asia Flight Mega Deal",
      destination: "Japan Expedition",
      price: "$290",
      discount: "30% OFF",
      validPeriod: "Jan 15-30, 2025",
      description: "Explore the Land of the Rising Sun with an incredible travel opportunity!",
      icon: <MapPin className="offer-icon" />
    },
    {
        id: 2,
        title: "Weekend Flash Sale",
        destination: "Coastal Getaway",
        price: "$129",
        discount: "40% OFF",
        validPeriod: "Fri-Sun Weekly",
        description: "Grab our special short-haul weekend flight promotions now!",
        icon: <Zap className="offer-icon" />
      },
      {
        id: 3,
        title: "Midnight Flight Special",
        destination: "City Night Routes",
        price: "$89",
        discount: "25% OFF",
        validPeriod: "22:00 - 04:00 Daily",
        description: "Exclusive late-night flight deals with unbeatable prices!",
        icon: <Calendar className="offer-icon" />
      }
    ];

    return (
        <div className="airline-offers-container">
          <div className="offers-header">
            <h1>Incredible Flight Offers</h1>
            <p>Discover exclusive promotions tailored just for you</p>
          </div>
          <div className="offers-grid">
            {offers.map((offer) => (
              <div key={offer.id} className="offer-card">
                <div className="offer-card-header">
                  {offer.icon}
                  <h2>{offer.title}</h2>
                </div>
                <div className="offer-card-body">
                  <div className="offer-destination">{offer.destination}</div>
                  <div className="offer-price-section">
                    <span className="offer-price">{offer.price}</span>
                    <span className="offer-discount">{offer.discount}</span>
                  </div>
                  <p className="offer-description">{offer.description}</p>
              <div className="offer-validity">
                <span>Valid: {offer.validPeriod}</span>
              </div>
            </div>
            <button className="offer-button">Book Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers