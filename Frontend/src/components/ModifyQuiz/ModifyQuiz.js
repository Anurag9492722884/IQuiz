import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import AdminNavbar from '../Navbar/AdminNavbar';
function ModifyQuiz() {
  const location = useLocation();
  const heading_of_quiz = location.state.heading_of_quiz;
  const id_of_quiz = location.state.quiz_id;
  
  console.log(heading_of_quiz);
  console.log(id_of_quiz);
  const history = useNavigate();
  var gg = JSON.parse(localStorage.getItem("user"));
  const [Data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:7018/api/Quiz/GetAllQuestions/${id_of_quiz}`,
        {
          headers: {
            Authorization: "Bearer " + gg.accessToken,
          },
        }
      );
      console.log(result.data.questions);
      setData(result.data.questions);
    };

    fetchData();
  }, []);

  return (
    <div>
      <AdminNavbar/>
      <h1 style={{ marginLeft: "299px", marginTop: "24px" }}>
        Welcome to {heading_of_quiz} Quiz modification page Admin ! 
        
      </h1>
      {Data.length > 0 ? (
          Data.map((it,index) => (
          <div className="question ml-sm-5 pl-sm-5 pt-2" style={{ marginTop: "44px", marginBottom: "44px" }} key={it.id}>
                  <div className="py-2 h5">
                    <b>
                      {index+1}.{it.question}
                    </b>
                  </div>
                  <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
                    <label className="options">
                      {it.option1}

                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      {it.option2}

                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      {it.option3}

                      <span className="checkmark"></span>
                    </label>
                    <label className="options">
                      {it.option4}

                      <span className="checkmark"></span>
                    </label>
            </div>
                <Button
                className="deleting"
                onClick={async () => {
                    await axios.get(
                    `http://localhost:7018/api/Quiz/RemoveAQuestion/${id_of_quiz}/${it.id}`,
                    {
                        headers: {
                        Authorization: "Bearer " + gg.accessToken,
                        },
                    }
                    );
                    window.location.reload();
                }}
                >
                Delete this question
                </Button>
                <Button
                className="Updating"
                style={{ marginLeft: "19px" }}
                onClick={() => {
                    history("/updating-a-question", { state: { question: it,quiz_id : id_of_quiz } });
                }}
                >
                Update this question
                </Button>
          </div>
        ))
      ) : (
        <h2
          className="not-present"
          style={{ marginTop: "217px", marginLeft: "399px" }}
        >
          No questions present under this quiz as of now !
        </h2>
      )}
      

    </div>
  );
}
export default ModifyQuiz;
