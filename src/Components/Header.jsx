import React, { useState } from "react";
import "../styles/header.css";
import icon from "../images/user.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="menu">
      <div className="menu-container">
      <div className={`menu ${isOpen ? "open" : ""}`}>
        <div className="logo-class">
          <h1 className="logo">MindX</h1>
        </div>
        <div className="burger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className={`menu-links ${isOpen ? "open" : ""}`}>
          <ul className="menu-ul">
            <li className="menu-li">
              <a href="#about">About</a>
            </li>
            <li className="menu-li">
              <a href="#">Categories </a>
            </li>
            <li className="menu-li">
              <a href="#"> Book Appointment </a>
            </li>
            <li className="menu-li">
              <a href="#contact"> Contact Us </a>
            </li>
          </ul>
        </div>

      </div>
        <div className="buttons">
          <button className="login-bt common-button">Log in </button>
          <button className="signin-bt common-button">Sign in </button>
        </div>
        <div className="profile"> 
        <img src={icon} className="icon" />
        </div>
        
    </div>
    </div>
  );
};

export default Header;
