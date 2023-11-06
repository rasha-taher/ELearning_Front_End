import React from 'react'
import image from "../images/frontend-development-tools.png";
import image2 from "../images/backend-image.avif"
import PopularCourses from "./PopularCourses";

const PopularCoursePage = () => {
  return (
 
      <div id="popluarcourse">
        <p className="about-title"> Our Popular Courses</p>
      <div className="popular-course-container">
        <div className='pop-2-course'>
        <PopularCourses image={image} />
        <PopularCourses image={image2} />
        </div>
        <div className='pop-2-course'>
        <PopularCourses image={image} />
         <PopularCourses image={image2} />
         </div>
      </div>
      </div>

  )
}

export default PopularCoursePage
