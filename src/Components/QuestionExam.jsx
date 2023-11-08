import { useState } from "react";
import "../styles/QuestionExam.css";

const QuestionExam = ({
  id,
  grade,
  quiz,
  option1,
  option2,
  option3,  // Corrected from option5 to option3
  option4,
  onRadioChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleRadioChange = (e) => {  // Corrected function name
    const result = e.target.value;
    setSelectedOption(result);
    onRadioChange(e.target.value);
  };

  return (
    <div className="d-flex flex-column mt-4 " >
      <div className="questionTestInfo d-flex flex-row">
        <p>Question </p>
        <p>{quiz}?</p>
        <p>{grade} points</p>
      </div>

      <div className="d-flex flex-column align-items-start row-gap-4">
        {['option1', 'option2', 'option3', 'option4'].map((opt, index) => (
          <label htmlFor={`option${id}-${index}`} key={index}>
            <input
              id={`option${id}-${index}`}
              type="radio"
              name={`uestion${id}`}
              value={eval(opt)}
              className="p-5"
              checked={selectedOption === eval(opt)}
              onChange={handleRadioChange}
            />
            {eval(opt)}
          </label>
        ))}
      </div>
    </div>
  );
};

export default QuestionExam;