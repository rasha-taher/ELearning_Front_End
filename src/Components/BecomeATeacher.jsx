import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import'../styles/BecomeATeacher.css'
import gif1 from'../images/giphy.gif'
import gif2 from '../images/giphy-25.gif'
const BecomeATeacher = () => {
  return (
    <div>
      <Header />
      <div className="become-container">
        <div className="inside-become-container">
          <p className="become-title">Become A Part of Our Family</p>
        
          <div className="apply">
            <div className="gif-cont">
             <img src={gif1} alt =" gif 1" className="apply-gif"/>
            </div>
            <div className="apply-form">
                <div>
          <p className="user-info"> Full Name: </p>
              <input type="text" className="user-input f "></input>
              </div>
              <div>
              <p className="user-info">Email: </p>
              <input type="text" className="user-input f"></input>
              </div>
              <div>
              <p className="user-info">Tell Us Why Join Us!</p>
              <textarea type="text" className='text-input' />
              </div>
              <div>
              <button className="join-btn"> Send Request </button>
              </div>
          </div>
          <div className="gif-cont">
          <img src={gif2} alt =" gif 1" className="apply-gif"/>
          </div>
          </div>
        </div>
    </div>
      <Footer />
    </div>
  );
};

export default BecomeATeacher;
