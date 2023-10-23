import React from 'react'
import "../styles/QuestionExam.css"
const QuestionExam = () => {
  return (
    <div className="d-flex flex-column mt-4 ">
      <div className=" questionTestInfo d-flex flex-row">
        <p>Question 1</p>
        <p>How to export a mockup in figma ?</p>
        <p>32.5 points</p>
      </div>
      <div className="d-flex flex-column align- row-gap-4">
        <label>
          <input type="radio" name="option" value="#" className="p-5" />
          Value1
        </label>
        <label>
          <input type="radio" name="option" value="#" />
          Value1
        </label>
        <label>
          <input type="radio" name="option" value="#" />
          Value1
        </label>
      </div>
    
    </div>
  );
}

export default QuestionExam