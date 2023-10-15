import React from 'react'
import image from "../images/blended-learning.png";
import PopularCourses from "./PopularCourses";

const PopularCoursePage = () => {
  return (
 
      <div id="popluarcourse">
        <p className="about-title"> Our Popular Courses</p>
      <div className="popular-course-container">
        <PopularCourses image={image} />
        <PopularCourses image={image} />
        <PopularCourses image={image} />
      </div>
      </div>

  )
}

export default PopularCoursePage
