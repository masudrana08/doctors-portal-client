import React, { useContext, useEffect, useState } from 'react';
import firebase from 'firebase'
import { UserContext } from '../../../App';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.lightgrey,
      color: 'grey',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  
  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });

const MainDashboard = () => {
    const classes=useStyles();
    const [user]=useContext(UserContext)
    const [appoinmentData, setAppoinmentData] = useState([])

    useEffect(()=>{
        // firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        // .then(token=>{
            fetch('https://doctors-portal-full.herokuapp.com/appoinment',{
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    // authtoken : token,
                    uid:user.uid,
                    email:'rana028511@gmail.com' //user.email
                }
            })
            .then(res=>res.json())
            .then(result=>setAppoinmentData(result))
        // })
        // .catch(error=>{
        //     console.log(error)
        // });
    },[])
    return (
        <div>
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SL No</StyledTableCell>
            <StyledTableCell align="right">Date</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right">Prescription</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {appoinmentData.map((data,index)=>{
            return(
                <StyledTableRow key={data.name}>
              <StyledTableCell component="th" scope="row">
                {index+1}
              </StyledTableCell>
              <StyledTableCell align="right">{data.date}</StyledTableCell>
              <StyledTableCell align="right">{data.time}</StyledTableCell>
              <StyledTableCell align="right">{data.name}</StyledTableCell>
              <StyledTableCell align="right">{data.phone}</StyledTableCell>
              <StyledTableCell align="right">
                  <button className="button">view</button>
              </StyledTableCell>
              <StyledTableCell align="right">Action</StyledTableCell>
            </StyledTableRow>
            )
            })
        }
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default MainDashboard;