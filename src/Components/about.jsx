import "../styles/about.css";
import search from "../images/search.svg";
import book from "../images/book.svg";
import users from "../images/users.svg";
import user_click from "../images/user-circle.svg";

const About = () => {
  
  return (
    <div id="about">
      <div className="about-container">
        <p className="about-title"> Get To Know Us</p>
        <p className="pink-text">
          We are an online platform that helps college students connect with
          their college courses and teachers
        </p>


        <div className="pink-container">
          <div className="pink-box">
            <img className="svgs" src={search}></img>
          </div>
          <p className="pink-title">Search Courses</p>
          <p className="pink-text">
            Look through a variety of programming that will help you launch your
            career{" "}
          </p>
        </div>

        <div className="double-pink-container">
          <div className="div1">
            <div className="pink-box">
              <img className="svgs" src={book}></img>
            </div>
            <p className="pink-title">Book Appoitment</p>
            <p className="pink-text">
            Book a one-on-one with our expert teacher to help you through your studies
            </p>
          </div>
          <div className="div1">
            
          </div>
          <div className="div1">
            <div className="pink-box">
              <img className="svgs" src={user_click}></img>
            </div>
            <p className="pink-title">Sign Up</p>
            <p className="pink-text">
            Students can easily sign up to the website and start taking courses of their choice
            </p>
          </div>
        </div>
        <div className="pink-container">
        <div className="pink-box">
              <img className="svgs" src={users}></img>
            </div>
            <p className="pink-title">Start Learning</p>
            <p className="pink-text">
            Begin studying anywhere anytime in your comfort of you own home
            </p>
        </div>
      </div>
    </div>
  );
};

export default About;
