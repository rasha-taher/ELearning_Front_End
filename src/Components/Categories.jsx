import Header from "./Header";
import Footer from "./Footer";
import "../styles/categories.css";
import img from "../images/frontend-development-tools.png";
const Categories = () => {
  return (
    <div className="categories">
      <Header />
      <div className="categories-container">
        <div className="inside-catg-container">
          <p className="categories-text"> Select Courses From Our Variety</p>

          <div className="catg-div">
            <p className="catg-title"> Front End</p>
          <p> In depth learning of the basic skill to launch your career. These courses ar given by our best tutors!</p>
                <img src={img} className="image" alt="categorie image"/>
          
            <ul className="catg-ul">
              <li className="catg-li"> Language 1  <button className="enrol-btn"> Enroll</button></li>
              <li className="catg-li"> Language 1  <button className="enrol-btn"> Enroll</button></li>
              <li className="catg-li"> Language 1  <button className="enrol-btn"> Enroll</button></li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
