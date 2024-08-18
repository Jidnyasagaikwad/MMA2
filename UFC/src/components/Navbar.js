import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [color, setColor] = useState(false);

    const handleClick = () => setClick(!click);

    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/">
                <h1 className="ufc-font">Mix Martial Arts</h1>
            </Link>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className="glow-text">
                    <Link to="/">Home</Link>
                </li>
                <li className="glow-text">
                    <Link to="/premier">The Eagle</Link>
                </li>
                <li className="glow-text">
                    <Link to="/about">G.O.A.T.s</Link>
                </li>
                <li className="glow-text">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick} aria-label="Toggle menu">
                {click ? <FaTimes size={20} style={{ color: "white" }} /> 
                : <FaBars size={20} style={{ color: "white" }} />}
            </div>
        </div>
    );
};

export default Navbar;
