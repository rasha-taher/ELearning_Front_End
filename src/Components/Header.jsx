import React from "react";
import "../styles/header.css";
import icon from "../images/user.svg";

const Header = () => {
  return (
    <div id="menu">
      <div className="menu">
        <div>
          <h1 className="logo">MindX</h1>
        </div>
        <div>
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
        <div>
          <button className="sign-log-button">
            <div className="login-bt displays">Log in </div>
            <div className="signin-bt displays">Sign in </div>
          </button>
        </div>
        <div>
          <img src={icon} className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
