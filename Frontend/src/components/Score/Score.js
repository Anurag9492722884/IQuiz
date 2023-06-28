import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';
import axios from 'axios';
function Score(){
    const location = useLocation();
    const Score  = location.state.score;
     const heading = location.state.heading_of_quiz;
    const history = useNavigate();
    
    var gg = JSON.parse(localStorage.getItem("user"));
    const name = gg.username;
    const handleClick = async () => {
        const result = await axios.post(
            `http://localhost:7018/api/Quiz/AddScore`,{
                quizname : heading,
                score : Score,
                username : name
            },{
                headers: {
                    Authorization : 'Bearer ' + gg.accessToken
                }
            }
          );
          console.log(result);
        history('/dashboard');
    }
    const handleQuizPage  = async ()=>{
        const result = await axios.post(
            `http://localhost:7018/api/Quiz/AddScore`,{
                quizname : heading,
                score : Score,
                username : name
            },{
                headers: {
                    Authorization : 'Bearer ' + gg.accessToken
                }
            }
          );
          console.log(result);
        history('/quizzes');
    }
    return (<>
       
        <h1 style={{ marginLeft: "515px", marginTop: "290px" }}>Your score is {Score} in Quiz {heading} .</h1>
        <Button className='back' style={{ marginLeft: "546px", marginTop: "33px" }} onClick={handleClick}>Get back to Dashboard page</Button>
        <Button className='bench' onClick={handleQuizPage}>Get back to Quizzes page</Button>
    </>);
}
export default Score;