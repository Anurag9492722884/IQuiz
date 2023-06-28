import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import AdminNavbar from '../Navbar/AdminNavbar';
function UpdateQuestion() {
  const location = useLocation();
  const question_details = location.state.question;
  const quiz_id = location.state.quiz_id;
  var gg = JSON.parse(localStorage.getItem("user"));
  const [Question_id, setQuestion_id] = useState(question_details.id);
  const [Question, setQuestion] = useState(question_details.question);
  const [Option1, setOption1] = useState(question_details.option1);
  const [Option2, setOption2] = useState(question_details.option2);
  const [Option3, setOption3] = useState(question_details.option3);
  const [Option4, setOption4] = useState(question_details.option4);
  const [Answer, setAnswer] = useState(question_details.answer);
  const history = useNavigate();
  return (
    <>
    <AdminNavbar/>
      <h1
        className="updation"
        style={{ marginLeft: "449px", marginTop: "25px" }}
      >
        On Question Updation page!
      </h1>
      <div
        className="different"
        style={{ marginLeft: "402px", marginTop: "20px", marginRight: "325px"  }}
      >
        <label for="name of quiz">Question</label>
        <input
          type="text"
          className="form-control"
          placeholder="enter the question"
          value={Question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label for="name of quiz">Option1</label>
        <input
          type="text"
          className="form-control"
          placeholder="option 1"
          value={Option1}
          onChange={(e) => setOption1(e.target.value)}
        />
        <label for="name of quiz">Option2</label>
        <input
          type="text"
          className="form-control"
          placeholder="option 2"
          value={Option2}
          onChange={(e) => setOption2(e.target.value)}
        />
        <label for="name of quiz">Option3</label>
        <input
          type="text"
          className="form-control"
          placeholder="option 3"
          value={Option3}
          onChange={(e) => setOption3(e.target.value)}
        />
        <label for="name of quiz">Option4</label>
        <input
          type="text"
          className="form-control"
          placeholder="option 4"
          value={Option4}
          onChange={(e) => setOption4(e.target.value)}
        />
        <label for="name of quiz">answer</label>
        <input
          type="text"
          className="form-control"
          placeholder="answer"
          value={Answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
        <Button
          style={{ marginLeft: "4px", marginTop: "31px" }}
          onClick={async () => {
            const tt = await axios.post(
              `http://localhost:7018/api/Quiz/UpdateAQuestion/${Question_id}`,
              {
                question: Question,
                option1: Option1,
                option2: Option2,
                option3: Option3,
                option4: Option4,
                answer: Answer,
              },
              {
                headers: {
                  Authorization: "Bearer " + gg.accessToken,
                },
              }
            );
          
         history("/modify-quiz",{state : {quiz_id :quiz_id}});
          }}
        >
          Update question
        </Button>
      </div>
      {/* <div className="backing" style={{ marginTop: "-544px", marginLeft: "1283px" }}>
        <Button  onClick={() => history("/Admin-page")}>Back to Admin Dashboard</Button>
        </div>
        <div className="mofification" style={{ marginTop: "-46px", marginLeft: "20px" }}>
        <Button  onClick={() => history("/modify-quiz",{state : {quiz_id : quiz_id} })}>Back to Modify Question page</Button>
        </div> */}
    </>
  );
}
export default UpdateQuestion;
