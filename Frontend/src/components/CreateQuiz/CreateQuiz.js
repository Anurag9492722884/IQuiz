import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { Button } from "react-bootstrap";
import AdminNavbar from '../Navbar/AdminNavbar';
function CreateQuiz(){
    const history = useNavigate();
    const [Heading,setHeading] = useState('');
    const [Questions,setQuestions] = useState([]); 
    const [Question,setQuestion] = useState('');
    const [Option1,setOption1] = useState('');
    const [Option2,setOption2] = useState('');
    const [Option3,setOption3] = useState('');
    const [Option4,setOption4] = useState(''); 
    const [Answer,setAnswer] = useState('');
    var gg = JSON.parse(localStorage.getItem("user"));
    const handleAddingQuestion = (e)=>{
        e.preventDefault();
        var ankit = {question : Question,option1 : Option1,option2 : Option2,option3 : Option3,option4 : Option4,answer : Answer};
        console.log(ankit);
        setQuestions([
            ...Questions, ankit
        ]);
        setQuestion('');
        setOption1('');
        setOption2('');
        setOption3('');
        setOption4('');
        setAnswer('');
    }
    return (
    <div >
    <AdminNavbar/>
   <div className="gaming" style={{ marginBottom: "41px" }}>
   <h1 style={{ marginLeft: "402px", marginTop: "41px" } }>Create a Quiz by filling below form</h1>
    
              <form>
            <div class="form-group">
            
              {/* <div className="kljhgd" style={{ marginLeft: "400px", marginRight: "249px" }}>
              </div> */}
              <div className="hoto" style={{ paddingRight: "286px", marginRight: "-34px" }}>
              <div className="different" style={{ marginLeft: "402px", marginTop: "20px" }}>
              <label for="name of quiz">Heading of Quiz</label>
              <input type="text" class="form-control" placeholder="name of quiz" value= {Heading} onChange={(e) => setHeading(e.target.value)}/>
            
                  <label for="name of quiz">Question</label>
                  <input type="text" class="form-control"  placeholder="enter the question" value= {Question} onChange={(e) => setQuestion(e.target.value)}/>
                  <label for="name of quiz">Option1</label>
                  <input type="text" class="form-control"  placeholder="option 1" value= {Option1} onChange={(e) => setOption1(e.target.value)}/>
                  <label for="name of quiz">Option2</label>
                  <input type="text" class="form-control"  placeholder="option 2" value= {Option2} onChange={(e) => setOption2(e.target.value)}/>
                  <label for="name of quiz">Option3</label>
                  <input type="text" class="form-control"  placeholder="option 3" value= {Option3} onChange={(e) => setOption3(e.target.value)}/>
                  <label for="name of quiz">Option4</label>
                  <input type="text" class="form-control"  placeholder="option 4" value= {Option4} onChange={(e) => setOption4(e.target.value)}/>
                  <label for="name of quiz">Answer</label>
                  <input type="text" class="form-control"  placeholder="answer" value= {Answer} onChange={(e) => setAnswer(e.target.value)}/>
                  <Button style={{ marginLeft: "4px", marginTop: "31px" }} onClick={handleAddingQuestion}>add question under this quiz</Button>
              </div>
              </div>
            </div>
            <div className="meeting" style={{ marginLeft: "653px", marginTop: "-54px" }}>
                <Button type="submit" class="btn btn-primary" onClick={async (e)=>{
                  e.preventDefault();
                  const result = await axios.post(
                      `http://localhost:7018/api/Quiz/createQuiz`,{
                          heading : Heading,
                          questions : Questions
                      },{
                          headers: {
                              Authorization : 'Bearer ' + gg.accessToken
                          }
                      }
                    );
                    console.log(result);
                  history('/Admin-page')
                  // console.log(Questions);
                  // console.log(Heading);
                  }
                }>Create the quiz</Button>
          </div>
          </form>
    </div>
    </div>
);
}
export default CreateQuiz;