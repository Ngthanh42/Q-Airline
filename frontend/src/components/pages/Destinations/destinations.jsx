import React, { useState } from 'react';
import { 
  GoogleMap, 
  LoadScript, 
  Marker 
} from '@react-google-maps/api';
import './destinations.css'

const destinationsData = [
    {
      id: 1,
      name: "Tokyo, Japan",
      description: "A vibrant metropolis blending ultra-modern technology with traditional culture.",
      image: "./images/tokyo.jpg",
      coordinates: { lat: 35.6762, lng: 139.6503 }
    },
    {
      id: 2,
      name: "Paris, France", 
      description: "The city of love, art, and iconic landmarks like the Eiffel Tower.",
      image: "./images/paris.jpg",
      coordinates: { lat: 48.8566, lng: 2.3522 }
    },
    {
      id: 3,
      name: "New York, USA",
      description: "The bustling city that never sleeps, home to countless iconic attractions.",
      image: "./images/newyork.jpg",
      coordinates: { lat: 40.7128, lng: -74.0060 }
    },
    {
      id: 4,
      name: "Sydney, Australia",
      description: "A stunning coastal city known for its iconic Opera House and beautiful harbors.",
      image: "./images/sydney.jpg",
      coordinates: { lat: -33.8688, lng: 151.2093 }
    }
  ];
  
  // Map container style
  const mapContainerStyle = {
    width: '100%',
    height: '650px'
  };

  const Destinations = () => {
    const [selectedDestination, setSelectedDestination] = useState(destinationsData[0]);
  
    const handleDestinationSelect = (destination) => {
      setSelectedDestination(destination);
    };
  
  return (
    <div className="destinations-container">
      <h1 className="destinations-title">Our Destinations</h1>
        
      <div className="destinations-content">
        {/* Destinations List */}
        <div className="destinations-list">
          {destinationsData.map((destination) => (
            <div 
              key={destination.id} 
              className={`destination-card ${selectedDestination.id === destination.id ? 'active' : ''}`}
              onClick={() => handleDestinationSelect(destination)}
            >
              <img 
                src={destination.image} 
                alt={destination.name} 
                className="destination-image"
              />
              <div className="destination-info">
                <h3 className="destination-name">{destination.name}</h3>
                <p className="destination-description">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Selected Destination Details */}
        <div className="map-container">
            <LoadScript
                googleMapsApiKey="AIzaSyA84fVQJ4Mee12oEl1JjssOCRUQrDNN5OU"
            >
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={selectedDestination.coordinates}
                zoom={11}
              >
                  <Marker 
                    position={selectedDestination.coordinates}
                    title={selectedDestination.name}
                  />
              </GoogleMap>
            </LoadScript>
        </div>       
  
        {/* Call to Action */}
        <div className="destinations-cta">
          <h3>Ready to Explore?</h3>
          <p>Book your next adventure with QAirline and discover these incredible destinations.</p>
          <button className="book-flight-btn">Book Now</button>
        </div>
      </div>
    </div>  
  );
};
  
export default Destinations;
