import React from "react";
import "../styles/chapterInfo.css";
import QuestionChapterInfo from "../Components/QuestionChapterInfo";

const ChapterInfo = ({key, title, chapterContent }) => {
  console.log({title},{chapterContent})

  return (
    <div className="d-flex  flex-column chapterInfo-container">
      <div className="chapterInfo-header d-flex flex-row">
        <h3>{title}</h3>
      </div>
      <div className=" text-intro d-flex flex-column justify-content-center">
        <p>
         {chapterContent}
        </p>
        <div className=" chapterInfoTitle fs-3">Test Your knowlede</div>
     
          
          <QuestionChapterInfo />

        <button className=" rounded-pill button-complete">
          Course Complete
        </button>
      </div>
    </div>
  );
};

export default ChapterInfo;
