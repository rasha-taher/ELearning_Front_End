import React from "react";
import "../styles/chapterInfo.css";
import QuestionChapterInfo from "../Components/QuestionChapterInfo";

const ChapterInfo = ({ title, chapterContent, question1, question2, question3 }) => {
  const questions =[question1,question2,question3]
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
        {questions.map((info) => (
          
          <QuestionChapterInfo  question={info} />))}

        <button className=" rounded-pill button-complete">
          Course Complete
        </button>
      </div>
    </div>
  );
};

export default ChapterInfo;
