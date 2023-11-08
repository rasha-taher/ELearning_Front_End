import { useState, useEffect } from "react";
import QuestionExam from "../Components/QuestionExam";
import "../styles/test.css";
import axios from "axios";

const Test = ({ idLanguage }) => {
  const [quiz, setQuiz] = useState([]);

let [val, setVal] = useState([]);
  let [userAnswer, setUserAnswer] = useState({});
const handleUserAnswer = (questionId, answer) => {
  setUserAnswer((prevUserAnswer) => ({
    ...prevUserAnswer,
    [questionId]: answer,
  }));
  
};
  // const handleRadioChange = (choose) => {
  //   setUserAnswer([...userAnswer, choose]);
  //   console.log(" the answer being writen" + userAnswer);
  // };

  console.log("idLang", idLanguage);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res1 = await axios.get(
          `http://127.0.0.1:5000/quiz/getQuizByLanguageId/${idLanguage}`
        );

        console.log(res1.data.data);
        setQuiz(res1.data.data);

        console.log(quiz, "quiz");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
    const checkAnswerHandler = (e) => {
      e.preventDefault();
      console.log("answer", userAnswer);
      
      {
        quiz && quiz.map((quest) => {
          let val2 = (quest.answer)
          setVal(val2)
        
        });
      }
      // for (let i = 0; i < userAnswer.length; i++){
      //   if (userAnswer[i]===)
      // }
      console.log("val", val);
    };
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-align-center">Quiz figma Design</h1>
      <form onSubmit={checkAnswerHandler}>
        {quiz &&
          quiz.map((quest) => (
            <QuestionExam
              id={quest.quiz_id}
              grade={quest.grade}
              quiz={quest.quiz}
             
            onRadioChange={(answer) => handleUserAnswer(quest.quiz_id, answer)}
            answer={quest.answer}
            option1={quest.option1}
            option2={quest.option2}
            option3={quest.option3}
            option4={quest.option4}
          />
        ))}
      <button
        type="submit"
        
        className="rounded-pill test-submit"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Submit
        </button>
        </form>
      {/* <!-- Button trigger modal --> */}
      {/* <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Launch static backdrop modal
      </button> */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Modal title
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;