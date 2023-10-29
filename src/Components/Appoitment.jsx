import React from "react";
import "../styles/ourTeacher.css";
import "../styles/F_responsive.css";

const Appoitment = () => {
  return (
    <div className="Appoitment">
      <div className="start">
        <div className="ligne"></div>
        <div className="T_title">Book Appoitment</div>
        <div className="ligne"></div>
      </div>
      <form className="BookAppoitment">
        <label className="app-label">
          Name:<br></br>
          <input className="input_appoitment" type="text"></input>
        </label>
        <br></br>
        <label className="app-label">
          Student Name:<br></br>
          <input className="input_appoitment" type="text"></input>
        </label>
        <br></br>
        <label className="app-label">
          Teacher:<br></br>
          <select className="input_appoitment">
            <option>Teacher1</option>
            <option>Teacher2</option>
            <option>Teacher3</option>
            <option>Teacher4</option>
          </select>
        </label>
        <br></br>
        <label className="app-label">
          Status:<br></br>
          <input className="input_appoitment" type="text"></input>
        </label>
        <br></br>
        <label className="app-label">
          Date:<br></br>
          <input className="input_appoitment" type="date"></input>
        </label>
        <br></br>
        <label className="app-label">
          Start Time:<br></br>
          <input className="input_appoitment" type="time"></input>
        </label>
        <br></br>
        <label className="app-label">
          End Time:<br></br>
          <input className="input_appoitment" type="time"></input>
        </label>
        <br></br>
        <button className="book-app">Book Appoitment</button>
      </form>
    </div>
  );
};

export default Appoitment;
