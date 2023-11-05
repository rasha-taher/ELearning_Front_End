import React from 'react'
import "../styles/QuestionExam.css"
const QuestionExam = ({id,grade,quiz,option1,option2,option3,option4}) => {
  return (
    <div className="d-flex flex-column mt-4 ">
      <div className=" questionTestInfo d-flex flex-row">
        <p>Question </p>
        <p>{quiz}?</p>
        <p>{grade}points</p>
      </div>
      <div className="d-flex flex-column align- row-gap-4">
        <label>
          <input
            type="radio"
            name={`option${id}`}
            value={option1}
            className="p-5"
          />
          {option1}
        </label>
        <label>
          <input type="radio" name={`option${id}`} value={option2} />
          {option2}
        </label>
        <label>
          <input type="radio" name={`option${id}`} value={option3} />
          {option3}
        </label>
        <label>
          <input type="radio" name={`option${id}`} value={option4} />
          {option4}
        </label>
      </div>
    </div>
  );
}

export default QuestionExam