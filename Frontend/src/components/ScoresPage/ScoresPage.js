import { useEffect,useState } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function ScoresPage(){
    var gg = JSON.parse(localStorage.getItem("user"));
    const [Data,setData] = useState([]);
    var attempt=1;
    var hash = [];
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get(
            `http://localhost:7018/api/Quiz/GetAllScores`,{
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
    <Navbar/>
    <h1 className="heading" style={ { marginLeft: "501px", marginTop: "33px" }}>Welcome to your Scores-Page</h1>
    {
      <div className="df" style={{
        marginTop: "32px",
        marginBottom: "63px",
        marginLeft: "22px"
      }
      }>

                {
                  Data.length===0 ? 
                  <h1 className="gaming" style={{ marginLeft: "476px", marginTop: "163px" ,color: "red" }}> You haven't played any quiz yet.</h1>
                  :
                  <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Quiz name</TableCell>
                        <TableCell align="right">Attempt Number</TableCell>
                        <TableCell align="right">Marks</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Data.length>0 && Data.map((item,index) => (
                        
                        <TableRow
                          key={item.id}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell component="th" scope="row">
                          {item.quizname}
                          </TableCell>
                          <TableCell align="right">{((hash.indexOf(item.quizname)>-1) ? (attempt=attempt+1) : (hash.push(item.quizname) && (attempt=1) ) )}</TableCell>
                          <TableCell align="right">{item.score}</TableCell>
                        </TableRow>

                      )) }
                    </TableBody>
                  </Table>
                  </TableContainer>

                      }
         
      
      </div>
    }
    </>

);
}

export default ScoresPage;