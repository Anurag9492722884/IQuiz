import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import AdminNavbar from '../Navbar/AdminNavbar';

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function StudentStats(){
    const history = useNavigate();
    var gg = JSON.parse(localStorage.getItem("user"));
    const [Data,setData] = useState([]);
    
   
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
    <>
    <AdminNavbar/>
    <h1 className="stats" style={{ marginLeft: "471px", marginTop: "74px" }}>Welcome to quiz stats, Admin !</h1>
    <div className="backing" style={{ marginLeft: "1280px", marginTop: "-63px" }} onClick={() => {
history("/Admin-page");
    }}>
    
    </div>
    <div className='quizzy' style={{ marginTop: "140px", marginLeft: "13px" }}>
    {
                    Data.length===0 ? 
                      <h1 className="nothing" style={{ marginLeft: "492px", marginTop: "139px" ,color: "red"}}>No quizzes created as of now</h1>
                    
                    :
                      <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                            <TableRow>
                              <TableCell>Quiz Name</TableCell>
                              <TableCell align="right">Stats</TableCell>
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
       
                                    history("/quiz-stats",{state : {tem : item}})
                                  }}>Stats for this one !</Button></TableCell>
                              </TableRow>
                            )) }
                          </TableBody>
                        </Table>
                      </TableContainer>
                          
                          }
        
        </div>
    </>
);
}

export default StudentStats;