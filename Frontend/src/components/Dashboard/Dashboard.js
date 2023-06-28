import Navbar from '../Navbar/Navbar';
function Dashboard() {
    var gg = JSON.parse(localStorage.getItem("user"));
    console.log(gg.roles)
    return (
        <div className='Dashboard'>
       <Navbar/>
        <h1 style={{ marginTop: "280px",marginLeft: "511px" }}>Welcome to User Dashboard, {gg.username}! </h1>
        </div>
    );
  }
  
  export default Dashboard;
  