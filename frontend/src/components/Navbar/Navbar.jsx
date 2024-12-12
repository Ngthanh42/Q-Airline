import React, {useState} from "react";
import { Link } from "react-router-dom";

import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

const Navbar = () => {
    // Remove the navbar in the small width screens
    const [active, setActive] = useState('navBarMenu');
    const showNavBar = () => {
        setActive('navBarMenu showNavBar');
    };

    const removeNavBar = () => {
        setActive('navBarMenu');
    };

    // Add a background color to the second NavBar
    const [noBg, addBg] = useState('navBarTwo');
    const addBgColor = () => {
        if(window.scrollY >= 10) {
            addBg('navBarTwo navbar_With_Bg');
        } else {
            addBg('navBarTwo');
        }
    }
    window.addEventListener('scroll', addBgColor);
    
    return (
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className="icon" />
                </div>

                <div className="none flex">
                    <li className="flex"><BsPhoneVibrate className="icon" />Support</li>
                    <li className="flex"><AiOutlineGlobal className="icon" />Languages</li>
                </div>

                <div className="atb flex">
                    <span>
                        <Link to="/signin">Sign In</Link>
                    </span>
                    <span><Link to="/signup">Sign Up</Link></span>
                </div>
            </div>

            <div className={noBg}>
                <div className="logoDiv">
                   <div class="logoBlock">
                    <a href="/home">
                    <img src="\logo QAirLine.png" alt="logo" className="Logo" />
                    </a>
                    <div class="logoSlogan">Enjoy every trip</div>
                 </div>
                <div class="logoName">QAirLine</div>
            </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="/">Home</Link>
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="/about-us">About</Link>
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="">Offers</Link>
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="">Seats</Link>
                        </li>
                        <li onClick={removeNavBar} className="listItem">
                            <Link to="">Destinations</Link>
                        </li>
                    </ul>

                    <button onClick={removeNavBar} className="btn flex btnOne">
                        Contact
                    </button>
                </div>

                <button className="btn flex btnTwo">
                    Contact
                </button>

                <div onClick={showNavBar} className="toggleIcon">
                    <CgMenuGridO className="icon"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar