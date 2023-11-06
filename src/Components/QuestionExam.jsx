import { useState } from "react";
import "../styles/QuestionExam.css";
const QuestionExam = ({
  id,
  grade,
  quiz,
  option1,
  option2,
  option5,
  option4,
  onRadioChange,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handelRadioChnage = (e) => {
    const result = e.target.value;
    setSelectedOption(result);
    onRadioChange(e.target.value);
  };

  return (
    <div className="d-flex flex-column mt-4 " name={`div${id}`}>
      <div className=" questionTestInfo d-flex flex-row">
        <p>Question </p>
        <p>{quiz}?</p>
        <p>{grade}points</p>
      </div>

      <div className="d-flex flex-column align- row-gap-4">
        <label for={`option${id}`}>
          <input
            id={`option${id}`}
            type="radio"
            name={`option${id}`}
            value={option1}
            className="p-5"
            checked={selectedOption === option1}
            onChange={handelRadioChnage}
          />
          {option1}
        </label>
        <label for={`option${id}`}>
          <input
            id={`option${id}`}
            type="radio"
            name={`option${id}`}
            value={option2}
            checked={selectedOption === option2}
            onChange={handelRadioChnage}
          />
          {option2}
        </label>

        <label for={`option${id}`}>
          <input
            id={`option${id}`}
            type="radio"
            name={`option${id}`}
            value={option5}
            checked={selectedOption === option5}
            onChange={handelRadioChnage}
          />
          {option5}
        </label>

        <label for={`option${id}`}>
          <input
            id={`option${id}`}
            type="radio"
            name={`option${id}`}
            value={option4}
            checked={selectedOption === option4}
            onChange={handelRadioChnage}
          />
          {option4}
        </label>
      </div>
    </div>
  );
};

export default QuestionExam;
