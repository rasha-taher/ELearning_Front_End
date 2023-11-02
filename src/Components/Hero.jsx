import React from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";
import myGif from '../images/ams.gif'
const Hero = () => {
  return (
    <div className="home-container">
      <div id="hero">
      <div className="inside-home">
        <div className="inside-left-home">
          <div className="welcome-message">
            {" "}
            Welcome to <p className="w-text"> MindX</p>
          </div>
          <p className="home_text">
            {" "}
            Learn New Skills With Our Experts Any Time, AnyWhere
          </p>
          <div className="buttons-container">
          <Link to="/SignIn">  <button className="join-btn"> Join Us</button></Link>
            <button className="all-courses-btn "> See all Courses</button>
          </div>
        </div>
        <div className="inside-right-home">
            <img src={myGif} alt ="home gif"></img>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;
