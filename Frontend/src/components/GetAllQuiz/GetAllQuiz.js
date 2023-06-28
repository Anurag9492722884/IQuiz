import { Button } from "react-bootstrap";
import axios from "axios";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminNavbar from '../Navbar/AdminNavbar';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function GetAllQuiz(){
    var gg = JSON.parse(localStorage.getItem("user"));
    const [Data,setData] = useState([]);
    const history = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            `http://localhost:7018/api/Quiz/getAllQuizzes`,{
                headers: {
                    Authorization : 'Bearer ' + gg.accessToken
                }
            }
          );
            console.log(result.data);
          setData(result.data);
        };
    
        fetchData();
      }, []);
return (
  
   <div>
            <AdminNavbar/>
              <h1 className="headingd" style={{ marginLeft: "521px", marginTop: "48px" }}>Quizzes created by you are :</h1>
              <div className='quizzy' style={{ marginTop: "83px", marginLeft: "13px" }}>
              
                  {
                    Data.length===0 ? 
                      <h1 className="nothing" style={{ marginLeft: "492px", marginTop: "139px" ,color: "red"}}>No quizzes created as of now</h1>
                    
                    :
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Quiz Name</TableCell>
                              <TableCell align="right">Modify Something</TableCell>
                              <TableCell align="right">Delete this quiz</TableCell>
                              <TableCell align="right">Add a question to this quiz</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            {Data.length>0 && Data.map((item) => (
                              <TableRow
                                key={item.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {item.heading}
                                </TableCell>
                                <TableCell align="right"><Button className='play' onClick={()=> {
                                history("/modify-quiz",{state : {
                                    quiz_id : item.id,
                                    heading_of_quiz : item.heading
                                }});
                              }}>Modify something in this quiz</Button></TableCell>
                                <TableCell align="right"><Button className="Deletingquiz" style={{ marginLeft: "7px" }} onClick={ async()=>{
                                await axios.get(
                                  `http://localhost:7018/api/Quiz/deleteAQuiz/${item.id}`,{
                                      headers: {
                                          Authorization : 'Bearer ' + gg.accessToken
                                      }
                                  }
                                );
                                await axios.get(
                                  `http://localhost:7018/api/Quiz/DeleteScoreQuiz/${item.heading}`,{
                                      headers: {
                                          Authorization : 'Bearer ' + gg.accessToken
                                      }
                                  }
                                );
                                window.location.reload();
                              }}>Delete this Quiz</Button></TableCell>
                                <TableCell align="right"><Button onClick={()=>history("/add-a-question",{state : {
                                quiz_id : item.id,
                                heading_of_quiz : item.heading
                            }})}>add one question to this quiz</Button></TableCell>
                              </TableRow>
                            )) }
                          </TableBody>
                        </Table>
                      </TableContainer>
                          
                          }
                          </div>
      </div>
);
}
export default GetAllQuiz;