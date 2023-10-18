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
        <label>
          Name:<br></br>
          <input className="input_appoitment" type="text"></input>
        </label>
        <br></br>
        <label>
          Teacher:<br></br>
          <select>
            <option>Teacher1</option>
            <option>Teacher2</option>
            <option>Teacher3</option>
            <option>Teacher4</option>
          </select>
        </label>
        <br></br>
        <label>
          Date:<br></br>
          <input className="input_appoitment" type="date"></input>
        </label>
        <br></br>
        <label>
          Start Time:<br></br>
          <input className="input_appoitment" type="text"></input>
        </label>
        <br></br>
        <label>
          End Time:<br></br>
          <input className="input_appoitment" type="text"></input>
        </label>
        <br></br>
        <button>Book Appoitment</button>
      </form>
    </div>
  );
};

export default Appoitment;
