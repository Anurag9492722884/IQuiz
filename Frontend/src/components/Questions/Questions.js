import "../Questions/Questions.css";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Question() {
  const [Value, setValue] = useState("");
  const [Score, setScore] = useState(0);
  const location = useLocation();
  const history = useNavigate();

  const heading = location.state.tem.heading;
  const id_of_quiz = location.state.tem.id;
  const array_of_questions = location.state.tem.questions;

  const handleScore = () => {
    history("/score", {
      state: {
        score: Score,
        heading_of_quiz: heading,
        id: id_of_quiz,
      },
    });
  };

  return (
    <div>
      <Navbar />
      <h1
        className="heading"
        style={{ marginLeft: "404px", marginTop: "19px" }}
      >
        You have to answer these questions
      </h1>
      {array_of_questions.map((it, key) => (
        <div className="question ml-sm-5 pl-sm-5 pt-2" key={it.id}>
          <div className="py-2 h5">
            <b>
              {it.id}.{it.question}
            </b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <label className="options">
              {it.option1}
              <input
                type="radio"
                value={it.option1}
                name={key}
                onChange={(e) => {
                  setValue(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="options">
              {it.option2}
              <input
                type="radio"
                name={key}
                value={it.option2}
                onChange={(e) => {
                  setValue(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="options">
              {it.option3}
              <input
                type="radio"
                name={key}
                value={it.option3}
                onChange={(e) => {
                  setValue(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <span className="checkmark"></span>
            </label>
            <label className="options">
              {it.option4}
              <input
                type="radio"
                name={key}
                value={it.option4}
                onChange={(e) => {
                  setValue(e.target.value);
                  console.log(e.target.value);
                }}
              />
              <span className="checkmark"></span>
            </label>
          </div>
          <Button
            onClick={(e) => {
              e.preventDefault();
              console.log(Value);
              if (Value === it.answer) {
                setScore(Score + 1);
              }
            }}
          >
            Mark this option
          </Button>
        </div>
      ))}
      <Button
        className="submitting"
        style={{
          marginLeft: "569px",
          marginTop: "39px",
        }}
        onClick={handleScore}
      >
        {" "}
        Click here to submit the quiz and see score
      </Button>
    </div>
  );
}

export default Question;
