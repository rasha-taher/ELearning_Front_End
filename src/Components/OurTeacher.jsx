import React from "react";
import "../styles/ourTeacher.css";
import "../styles/F_responsive.css";
import teacher1 from "../images/teacher1.jpg";
import teacher2 from "../images/teacher2.jpg";
import teacher3 from "../images/teacher3.jpg";
import teacher4 from "../images/teacher4.jpg";

const OurTeacher = () => {
  return (
    <div className="OurTeacher">
      <div className="start">
        <div className="ligne"></div>
        <div className="T_title">Our Teacher</div>
        <div className="ligne"></div>
      </div>
      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt .
      </p>
      <div className="teachers">
        <div className="two_teachers">
          <div className="teacher">
            <img className="I_teacher" src={teacher1}></img>
            <h2>Name</h2>
            <p>Discreption</p>
          </div>
          <div className="teacher">
            <img className="I_teacher" src={teacher2}></img>
            <h2>Name</h2>
            <p>Discreption</p>
          </div>
        </div>
        <div className="two_teachers">
          <div className="teacher">
            <img className="I_teacher" src={teacher3}></img>
            <h2>Name</h2>
            <p>Discreption</p>
          </div>
          <div className="teacher">
            <img className="I_teacher" src={teacher4}></img>
            <h2>Name</h2>
            <p>Discreption</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeacher;
