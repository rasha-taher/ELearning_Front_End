import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import "../styles/categories.css";
import "../styles/responsive.css";
import { Link } from "react-router-dom";

const Categories = () => {
  const [languages, setLanguages] = useState([]);
  const saveLanguageId = async (language) => {
        localStorage.setItem("objectIdLanguage", language);
    
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/language/getLanguages"
        );
        console.log(response.data.data);
        setLanguages(response.data.data);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="categories">
      <Header />
      <div className="categories-container">
          <p className="categories-text">Select Courses From Our Variety</p>
        <div className="inside-catg-container">

          {Object.keys(languages).map((categoryTitle) => (

            <div key={categoryTitle} className="catg-div">

              <p className="catg-title">{categoryTitle} Courses</p>

              {languages[categoryTitle].map((language) => (
                <div key={language.language_id}  className="inside-catg-div">
     
                  <div className="div1">
                  <p>{language.language_name}</p>
                  </div>
                  <div className="div1">
                  <Link to ="/learning"><button className="enrol-btn" onClick={() => saveLanguageId(language.language_id)}>Enroll</button></Link>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
