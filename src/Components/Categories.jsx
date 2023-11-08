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
  };

  const handleEnroll = async (languageId) => {
    try {
      const userId = document.cookie
        .split("; ")
        .find((row) => row.startsWith("userId"))
        .split("=")[1];
      const enrolled_day = new Date().toISOString().split("T")[0];
      const days_of_attendance = 1;
      const completed = false;
      const scores_count = 0;
      const chapters_completed = 0;

      const days_to_complete = 30;
      const expected_finish_day = new Date(enrolled_day);
      expected_finish_day.setDate(
        expected_finish_day.getDate() + days_to_complete
      );

      const response = await axios.post(
        "http://localhost:5000/studentInfo/enrollCourse",
        {
          student_id: userId,
          language_id: languageId,
          days_of_attendance,
          completed,
          scores_count,
          chapters_completed,
          enrolled_day,
          expected_finish_day: expected_finish_day.toISOString().split("T")[0], // Convert to YYYY-MM-DD format
        }
      );

      const data = response.data;

      if (data.success) {
        alert("You have enrolled successfully!");
        window.location.href = "/learning";
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error enrolling:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/language/getLanguages"
        );
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
                <div key={language.language_id} className="inside-catg-div">
                  <div className="div1">
                    <p>{language.language_name}</p>
                  </div>
                  <div className="div1">
                    <button
                      className="enrol-btn"
                      onClick={() => {
                        saveLanguageId(language.language_id);
                        handleEnroll(language.language_id);
                      }}
                    >
                      Enroll
                    </button>
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
