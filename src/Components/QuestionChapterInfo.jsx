import React from 'react'
import "../styles/QuestionChapterInfo.css"
const QuestionChapterInfo = ({number,question}) => {
  return (
    <div className="d-flex flex-column question-container">
      <div className="d-flex flex-row column-gap-5">
        <div>{number}</div>
        <div>{question}</div>
        
      </div>
      <div className='d-flex flex-row solution'>
        <input type="text" className="rounded-pill input-solution" />
        <button className="rounded-pill button-submit-solution">
          Check Answer
        </button>
      </div>
    </div>
  );
}

export default QuestionChapterInfo