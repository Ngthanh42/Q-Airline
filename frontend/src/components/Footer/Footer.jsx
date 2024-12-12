import React, {useEffect} from "react"

import {TiSocialFacebook,} from "react-icons/ti"
import {AiOutlineTwitter, AiFillYoutube, AiFillGoogleCircle} from "react-icons/ai"

import Aos from "aos"
import "aos/dist/aos.css"

const Footer = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    }, []);

    return (
        <div className="footer">
            <div className="sectionContainer container grid">
                <div data-aos='fade-up' data-aos-duration='2500' className="gridOne">
                    <div className="logoDiv">
                    <a href="/home">
                    <img src="logo QAirLine.png" alt="logo" className="Logo" />
                    </a>
                    <div>
                <div class="logoName">QAirLine</div>
                     </div>
                    </div>
                    <p>Your mind should be stronger than your feelings, fly!</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className="icon" />
                        <AiOutlineTwitter className="icon" />
                        <AiFillYoutube className="icon" />
                        <AiFillGoogleCircle className="icon" />
                    </div>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>

                    <li>
                        <a href="">Explore</a>
                    </li>

                    <li>
                        <a href="">Flight status</a>
                    </li>

                    <li>
                        <a href="">Travel</a>
                    </li>

                    <li>
                        <a href="">Check-In</a>
                    </li>

                    <li>
                        <a href="">Manage your booking</a>
                    </li>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Qick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>

                    <li>
                        <a href="">How to</a>
                    </li>
                    
                    <li>
                        <a href="">Features</a>
                    </li>

                    <li>
                        <a href="">Baggage</a>
                    </li>

                    <li>
                        <a href="">Route Map</a>
                    </li>

                    <li>
                        <a href="">Our communities</a>
                    </li>
                </div>

                <div data-aos='fade-up' data-aos-duration='2500' className="footerLinks">
                    <span className="linkTitle">Qick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>

                    <li>
                        <a href="">How to</a>
                    </li>
                    
                    <li>
                        <a href="">Features</a>
                    </li>

                    <li>
                        <a href="">Baggage</a>
                    </li>

                    <li>
                        <a href="">Route Map</a>
                    </li>

                    <li>
                        <a href="">Our communities</a>
                    </li>
                </div>
            </div>

            <div className="copyRightDiv flex">
                <p>Courtesy Design | Developed by <a href="">Team 11</a></p>
            </div>
        </div>
    )
}

export default Footer