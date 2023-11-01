import React from "react";
import "../styles/footer.css";
import facebook from "../images/facebook-black.svg";
import mail from "../images/mail-black.svg";
import instagram from "../images/instagram-black.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-div">
          <p className="footer-title"> Mindx</p>
          <p className="footer-text">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt .{" "}
          </p>
          <div className="social-icons">
            <img
              src={facebook}
              className="footer-icons "
              alt="social icons"
            ></img>
            <img src={mail} className="footer-icons" alt="social icons"></img>
            <img
              src={instagram}
              className="footer-icons "
              alt="social icons"
            ></img>
          </div>
        </div>
        <div className="footer-div">
          <p> Subscribe To Our News Letter</p>
          <input type="text" className="subscribe-input"></input>
          <button className="join-btn"> Suubscribe </button>
        </div>
        <div className="footer-div">
          <ul className="menu-ul-footer">
            <li className="menu-li">
              <a href="#menu">
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className="menu-li">
              <a href="#about">About</a>
            </li>
            <li className="menu-li">
              <a href="#">Categories </a>
            </li>
            <li className="menu-li">
              <a href="#">
                <Link to="/Appoitments"> Book Appoitment</Link>{" "}
              </a>
            </li>
            <li className="menu-li">
              <a href="#contact">
                {" "}
                <Link to="#contact">Contact Us</Link>{" "}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
