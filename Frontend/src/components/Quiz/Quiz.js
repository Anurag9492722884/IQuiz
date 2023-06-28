import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import {  useNavigate } from 'react-router-dom';
import { Button } from '@mui/joy';


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
function Quiz() {
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
        <div className='Dashboard'>
       <Navbar/>
        
        <h1 style={{ marginTop: "48px",marginLeft: "433px" }}>Here are quizzes assigned to you !</h1>
        <div className='quizzy'>
        
       {
        Data.length===0 ? <h1 className='important' style={{ marginLeft: "422px", marginTop: "163px",color: "red" }}>No quizzes assigned to you as of now.</h1>
        :
                              <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                  <TableHead>
                                    <TableRow>
                                      <TableCell>Quiz name</TableCell>
                                      <TableCell align="right">Attempt this quiz by pressing this button.</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {Data.length>0 && Data.map((item,index) => (
                                      
                                      <TableRow
                                        key={item.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                      >
                                        <TableCell component="th" scope="row">
                                        {item.heading}
                                        </TableCell>
                                        <TableCell align="right"><Button className='play' onClick={()=> {
                    
                    history("/questions",{state : {tem : item}})
                  }}>play this one !</Button></TableCell>
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
  
  export default Quiz;
  