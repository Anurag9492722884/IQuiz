import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect,useState } from "react";
import { Button } from "react-bootstrap";
import AdminNavbar from '../Navbar/AdminNavbar';


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function QuizStats()
{
    const location = useLocation();
    console.log(location);
    const history = useNavigate();
    var gg = JSON.parse(localStorage.getItem("user"));
    const [Data,setData] = useState([]);
    var kat = []
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            `http://localhost:7018/api/Quiz/ScoreForQuiz/${location.state.tem.heading}`,{
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
       <div className="heading" style={{ marginLeft: "255px", marginTop: "41px" }}> 
       <h1>All the students based on their ranks in this quiz are : </h1>
       <p className="notince" style={{ marginLeft: "126px" }}>***Note that in case of tie, the one who submitted first will be given rank better than latter one.***</p>
       </div>
         <div className='quizzy' style={{ marginTop: "93px", marginLeft: "9px" }}>
                
                {
                    Data.map(item =>{
                        if(item.number==0){
                            kat.push(item);
                        }
                    })
                }

            <h2>Passed Candidates</h2>
            {kat.length===Data.length ? 
            
            <h2 className="kiwi" style={{ marginLeft: "163px" }}>Nobody Passed the quiz</h2> 
            
            :
            
            <h2>
                      
                {    
                     <TableContainer component={Paper}>
                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
                       <TableHead>
                         <TableRow>
                           <TableCell>Rank</TableCell>
                           <TableCell align="right">Username</TableCell>
                           <TableCell align="right">Marks</TableCell>
                         </TableRow>
                       </TableHead>
                       <TableBody>
                         {  Data.length>0 && Data.map((item,index) => (
                           item.number>0 &&
                           <TableRow
                             key={item.id}
                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                           >
                             <TableCell component="th" scope="row">
                             {index+1}
                             </TableCell>
                             <TableCell align="right">{item.userame}</TableCell>
                             <TableCell align="right">{item.number}</TableCell>
                           </TableRow>

                         )) }
                       </TableBody>
                     </Table>
                   </TableContainer>
                                    
                                    
                                
                               
                }
          
          </h2>
        
        }
        </div>
        <div className="falild" style={{ marginLeft: "9px", marginTop: "39px" }}>
        <h3 >Failed candidates : </h3>   
                {
                   kat.length===0 
                   ? 
                   <h2 style={{ marginLeft: "163px" }}>Nobody Failed the quiz</h2> 
                   : 
                               
                                    <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                      <TableHead>
                                        <TableRow>
                                          <TableCell>Student Number</TableCell>
                                          <TableCell align="right">Username</TableCell>
                                          <TableCell align="right">Marks</TableCell>
                                        </TableRow>
                                      </TableHead>
                                      <TableBody>
                                        {kat.length>0 && kat.map((item,index) => (
                                          item.number===0 &&
                                          <TableRow
                                            key={item.id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                          >
                                            <TableCell component="th" scope="row">
                                            {index+1}
                                            </TableCell>
                                            <TableCell align="right">{item.userame}</TableCell>
                                            <TableCell align="right">{item.number}</TableCell>
                                          </TableRow>

                                        )) }
                                      </TableBody>
                                    </Table>
                                  </TableContainer>
                                
                                   
                }
        </div>
        <div>
            
        </div>
        
        </>
    );
}
export default QuizStats;