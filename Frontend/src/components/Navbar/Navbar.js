import '../Navbar/Navbar.css'
import { Link, useNavigate } from 'react-router-dom';
function Navbar() {
    const history = useNavigate();

    const Logout = () => {
        try {
            console.log(localStorage.getItem("user"));
            localStorage.removeItem("user");
            history("/");
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/dashboard">Welcome to quiz app</a>
        <a className="is-light" href="/quizzes" style={{ marginLeft: "40px" }}>Quizzes</a>
        <a className="is-light" href="/scores-page" style={{ marginLeft: "40px" }}>Scores</a>
       
           
            <a className="is-light" style={{ paddingLeft: "56.5rem", cursor: "pointer" }} onClick={Logout}>
                                    Log Out
       </a>    
       </nav>
    );
  }
  
  export default Navbar;
  