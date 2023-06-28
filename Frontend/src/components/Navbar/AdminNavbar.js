import '../Navbar/AdminNavbar.css'
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
        <a className="navbar-brand" href="/Admin-page">Welcome to quiz app Admin Panel</a>
       
           
            <a className="is-light Feature" onClick={Logout}>
                                    Log Out
       </a>    
       </nav>
    );
  }
  
  export default Navbar;
  