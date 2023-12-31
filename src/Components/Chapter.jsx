import React from "react";
import "../styles/chapter.css";
import ChapterInfo from "../pages/ChapterInfo";
import { Link } from "react-router-dom";

const Chapter = ({title}) => {
  // const goToSection = () => {
  // <Link to="/src/pages/ChapterInfo.jsx">{ <ChapterInfo/>}</Link>
    
  //   }
  return (
    <div class="card mb-4">
      <div class="card-body">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="#e67e9f"
          className="bi bi-arrow-right-circle-fill me-2"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
      {title}
      </div>
      <div class="card-body chapter-text">3 Questions</div>
    </div>
  );
};

export default Chapter;
