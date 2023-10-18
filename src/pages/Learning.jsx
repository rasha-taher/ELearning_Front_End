import React from "react";
import Chapter from "../Components/Chapter";
import "../styles/Learning.css"
import {Link } from "react-router-dom";
import shehede from "./shehede.png"
import profile from "./myImage.jpg"


// import axios from "axios";
const Learning = () => {
  // const getData = () => {
  //   axios.get()
  //    .then((res) => {
  //       console.log("done");
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  return (
    <div className="d-flex  flex-column learning-container">
      <div className=" Learning-header d-flex flex-row">
      
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="40"
            fill="currentColor"
            class="bi bi-arrow-left-circle-fill"
            viewBox="0 0 16 16"
            className="back-arow ms-3"
          >
            <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
          </svg>
       

        <div className=" learning-header-pic d-flex flex-column row-gap-2 ">
          <div className="d-flex flex-row align-items-center column-gap-2">
            <img
              src={profile}
              alt="instructor"
              className="profile-pic rounded-circle object-fit-cover"
            />

            <div className="d-flex flex-column">
              <h3> Ms Shirin Ahmad</h3>
              <h5> UI UX Designer</h5>
            </div>
          </div>
          <p className="learning-title">Dashboard Design In Figma</p>
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        <img
          src={shehede}
          alt="shehede"
          className="learning-course-img object-fit-cover"
        />
        <div className="clearfix">
          <div className="score-level"></div>
        </div>
      </div>
      <div className=" learning-content-text d-flex flex-row  align-item-center">
        <div className=" learning-content-text-one d-flex flex-column ">
          <p>Course Content</p>
          <div className="d-flex flex-row column-gap-3">
            <p>4 Sections</p>
            <p>7 Questions</p>
          </div>
        </div>
        <div>
          <p>40 Students Enroll</p>
        </div>
      </div>
      <Link to="/src/pages/ChapterInfo.jsx">
        <Chapter/>
      </Link>
    </div>
  );
};

export default Learning;
