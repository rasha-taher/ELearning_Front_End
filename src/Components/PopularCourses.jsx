import "../styles/popularCourses.css"

const PopularCourses = ({ image }) => {
  return (
    
      <div className="popularCourses">
        <img className="popular-course-image"src={image}></img>
        <p className="popular-courses-title"> Course Title </p>
        <p className="popular-course-text">
          {" "}
          Java|Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
   
    </div>
  );
};

export default PopularCourses;
