import React, { useState } from "react";
import "../styles/header.css";
import icon from "../images/user.svg";
import { Link } from "react-router-dom";
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
            <Link to="/" className="logo">
              MindX
            </Link>
          </div>
          <div className="burger" onClick={toggleMenu}>
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
          <div className={`menu-links ${isOpen ? "open" : ""}`}>
            <ul className="menu-ul">
            
              <li className="menu-li">
                <Link href="#">Categories </Link>
              </li>
              <li className="menu-li">
                <Link to="/Appoitments"> Book Appointment </Link>
              </li>
              <li className="menu-li">
                <Link to="/BecomeATeacher"> Become A Teacher </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="buttons">
          <Link to="/SignIn#sign-up-container">
            {" "}
            <button className="login-bt common-button"> Sign In </button>
          </Link>
          <Link to="/SignIn#sign-in-container">
            {" "}
            <button className="signin-bt common-button"> Log In </button>
          </Link>
        </div>
        <div className="profile">
          {" "}
          <Link to="/ProfilePage">
            <img src={icon} className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
