import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Navbar from './components/Navbar/Navbar';
import Quizzes from './components/Quiz/Quiz';
import Question from "./components/Questions/Questions";
import Scores from './components/Score/Score';
import ScoresPage from "./components/ScoresPage/ScoresPage";
import AdminDashboard from './components/Dashboard/AdminDashboard';
import CreateQuiz from './components/CreateQuiz/CreateQuiz';
import GetAllQuiz from "./components/GetAllQuiz/GetAllQuiz";
import SummaryQuiz from "./components/SummaryQuiz/SummaryQuiz";
import ModifyQuiz from "./components/ModifyQuiz/ModifyQuiz";
import UpdateQuestion from "./components/UpdateQuestion/UpdateQuestion";
import StudentStats from "./components/StudentStats/StudentStats";
import QuizStats from "./components/QuizStats/QuizStats";
import AddAQuestion from "./components/AddAQuestion/AddAQuestion";
function App() {
  return (
    <div className="App">
       
    <Router>
        <Routes >
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/sign-up' element={<Register/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/quizzes' element={<Quizzes/>}/>
        <Route exact path='/questions' element={<Question/>}/>
        <Route exact path='/score' element={<Scores/>}/>
        <Route exact path='/scores-page' element={<ScoresPage/>}/>
        <Route exact path='/Admin-page' element={<AdminDashboard/>}/>
        <Route exact path='/create-quiz' element={<CreateQuiz/>}/>
        <Route exact path='/see-all-quiz' element={<GetAllQuiz/>}/>
        <Route exact path='/quiz-summary' element={<SummaryQuiz/>}/>
        <Route exact path='/updating-a-question' element={<UpdateQuestion/>}/>
        <Route exact path='/modify-quiz' element={<ModifyQuiz/>}/>
        <Route exact path='/student-stats' element={<StudentStats/>}/>
        <Route exact path='/quiz-stats' element={<QuizStats/>}/>
        <Route exact path='/add-a-question' element={<AddAQuestion/>}/>
        </Routes >
    </Router>
      </div>
  );
}

export default App;
