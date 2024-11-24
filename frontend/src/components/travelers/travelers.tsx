import React, {useEffect} from "react"

import paris from "../../assets/paris.jpg"
import dubai from "../../assets/dubai.jpg"
import london from "../../assets/london.jpg"
import tokyo from "../../assets/tokyo.jpg"
import newYork from "../../assets/new-york.jpg"
import hanoi from "../../assets/hanoi.jpg"
import seoul from "../../assets/seoul.jpg"
import berlin from "../../assets/berlin.jpg"

import traveler_1 from "../../assets/user.jpg"

import Aos from "aos"
import "aos/dist/aos.css"

const travelers = [
    {
        id: 1,
        destinationImage: paris,
        destinationName: "Paris, France",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },

    {
        id: 2,
        destinationImage: dubai,
        destinationName: "Dubai, UAE",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },

    {
        id: 3,
        destinationImage: london,
        destinationName: "London, England",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },

    {
        id: 4,
        destinationImage: tokyo,
        destinationName: "Tokyo, Japan",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },

    {
        id: 5,
        destinationImage: newYork,
        destinationName: "New York, USA",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },

    {
        id: 6,
        destinationImage: hanoi,
        destinationName: "Hanoi, Vietnam",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },

    {
        id: 7,
        destinationImage: seoul,
        destinationName: "Seoul, Kroea",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },

    {
        id: 8,
        destinationImage: berlin,
        destinationName: "Berlin, Germany",
        travelerImage: traveler_1,
        travelerName: "Chu Viet Kien",
        socialLink: "@chuvietkien"
    },
]

const Travelers = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);
    
    return (
        <div className="travelers container section">
            <div className="sectionContainer">
                <h2 data-aos='fade-down' data-aos-duration='2500'>Top travelers of this month!</h2>

                <div className="travelersContainer grid">
                    {/* Single passsanger card */}
                    {
                        travelers.map(({ id, destinationImage, destinationName, travelerImage, travelerName, socialLink }) => {
                            return (
                                <div data-aos='fade-up' data-aos-duration='2500' key={id} className="singleTraveler">
                                    <img src={destinationImage} alt="" className="destinationImage" />
                                    <div className="travelerDetails">
                                        <div className="travelerPicture">
                                            <img src={travelerImage} alt="" className="travelerImage" />
                                        </div>

                                        <div className="travelerName">
                                            <span>{destinationName}</span>
                                            <p>{socialLink}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Travelers