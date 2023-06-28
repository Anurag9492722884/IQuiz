import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AdminNavbar from '../Navbar/AdminNavbar';
function Dashboard() {
    var gg = JSON.parse(localStorage.getItem("user"));
    console.log(gg.roles)
    const history = useNavigate();
    return (
        <div className='Dashboard'>
            <AdminNavbar/>
            <div className="kjhg" style={{ marginLeft: "1350px", marginTop: "28px" }}>
        
     
   </div>
   <div className="mjkh" style={{ marginTop: "168px", marginLeft: "20px" }}>
        <h1 className="heading" style={{ marginTop: "26px",marginLeft: "371px" }}>Welcome to Admin Dashboard {gg.username}! </h1>
        
        <div className="tekken" style={{ marginLeft: "100px" }}>
        <div className="create" style={{ marginLeft: "339px", marginTop: "100px" }} onClick={() => history('/create-quiz')}>
            <Button>create a quiz</Button>
            </div>
        <div className="see" style={{ marginLeft: "510px", marginTop: "-37px" }
            }>
                <Button onClick={()=> history('/see-all-quiz')}>see created quizzes</Button>
            </div>
            <div className="stats" style={{ marginLeft: "721px", marginTop: "-39px" }}
            >
                <Button onClick={()=> history('/student-stats')}>show quizzes stats</Button>
            </div>
        </div>
        </div>
        </div>
    );
  }
  
  export default Dashboard;
  