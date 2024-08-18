import "./HeroImgStyles.css";
import React from "react";
import intro from "../assets/intro.jpg"; 
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={intro} alt="city-pl" />
      </div>
      <div className="content">
        <p>THIS IS MIX MARTIAL ARTS</p>
        <span>
          <h1>
            <Typewriter 
              options={{
                strings: [
                  '"I am going to smash your boy" - Khabib Nurmagomedov',
                  '"I am the best fighter in the world." - Fedor Emelianenko.',
                  '"I am the best." - Anderson Silva',
                  '"I’m the best ever." - Israel Adesanya',
                  '"I’m the greatest of all time." - Jon Jones',
                  '"We are not here to take part; we are here to take over." - Conor McGregor',
                  '"I’m not here to be a champion. I’m here to be the greatest." - Khabib Nurmagomedov'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h1>
        </span>
        <div className="cool-button-container">
          <ul className="cool-button"><Link to="/premier">The Eagle</Link></ul>
          <ul className="cool-button"><Link to="/contact">Contact</Link></ul>
        </div>
      </div>
    </div>
  );
}

export default HeroImg;
