import { button, Grid } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import './AvailableAppoinments.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { UserContext } from '../../../App';
import { useHistory } from 'react-router-dom';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper ,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    }
    
  }));

const AvailableAppoinments = () => {
    const date=new Date().toDateString()
    const [user,setUser]=useContext(UserContext)
    const history=useHistory()
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [successAlert, setSuccessAlert] = React.useState(false);

    const handleOpen = (event) => {
      setUser({...user,appoinmentTitle:event.title})
      true? setOpen(true)
      : history.push('/auth')
    };
  
   const successAlertHandler=()=>{
    setSuccessAlert(true)
    setOpen(false)
   }
    const handleClose = () => {
      setOpen(false);
    };

    const appoinmentsData=[
      {
        title:'Teeth Orthodontics',
        time:'08:00 AM - 09:00 AM',
        space:'10 spaces available'
      },
      {
        title:'Cosmetic Dentistry',
        time:'09:00 AM - 10:00 AM',
        space:'10 spaces available'
      },
      {
        title:'Teeth Cleaning',
        time:'10:00 AM - 11:00 AM',
        space:'10 spaces available'
      },
      {
        title:'Teeth Orthodontics',
        time:'04:00 PM - 05:00 PM',
        space:'10 spaces available'
      },
      {
        title:'Cosmetic Dentistry',
        time:'05:00 AM - 06:00 PM',
        space:'10 spaces available'
      },
      {
        title:'Teeth Cleaning',
        time:'07:00 AM - 08:00 PM',
        space:'10 spaces available'
      },
      
    ]
    const [appoinment,setAppoinment]=useState({})

    const appoinmentFormHandler=(event)=>{
      event.preventDefault()
      
      fetch('https://doctors-portal-full.herokuapp.com/appoinment-booking',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(appoinment)
      })
      .then(res=>res.json())
      .then(result=>{
        if(result){
          successAlertHandler()
        }
      })
    }
    return (
        <div style={{width:"90%", margin:"auto",marginBottom:'100px'}}>
            <h2 style={{color:'#5ab7d6', textAlign:"center",margin:'70px'}}>
              Available Appoinments on {user.calenderDate?.toDateString() || date}
            </h2>
            <Grid className="appoinments-container" container item xs={12} spacing='6'  >
               {
                 appoinmentsData.map(data=>{
                   return(
                    <Grid className="appoinments-item" item md={4}>
                      <div style={{ borderRadius:'10px',boxShadow:'0px 2px 5px lightgray', padding:'30px'}}>
                      <h3>{data.title}</h3>
                      <h4>{data.time}</h4>
                      <p>{data.space}</p>
                      <button onClick={()=>handleOpen(data)}>Appoinment Book</button>
                      </div>
                      
                    </Grid>
                   )
                 })
               } 
            </Grid>

            <div>

   
      <Modal 
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 style={{textAlign:'center', color:'#5ab7d6'}} id="transition-modal-title">Appoinment Book</h2>
            <form onSubmit={appoinmentFormHandler} className='form-control'>
                <select onBlur={event=>setAppoinment({...appoinment,time:event.target.value})} name="time" id="cars" style={{width:'393px'}}>
                    <option value="8:00">8:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="17:00">5:00 PM</option>
                </select><br/>
                <input onBlur={event=>setAppoinment({...appoinment,name:event.target.value})} type='text' name='name' placeholder='Name'/><br/>
                <input onBlur={event=>setAppoinment({...appoinment,phone:event.target.value})} type='text' name='phone' placeholder='Phone Number'/><br/>
                <input onBlur={event=>setAppoinment({...appoinment,email:user.email})} type='text' name='email' placeholder='Email address' value={user.email}/><br/>
                <input onBlur={event=>setAppoinment({...appoinment,title:user.appoinmentTitle})} type='text' name='title' placeholder='Appoinment Title' value={user.appoinmentTitle}/><br/>
                <input onBlur={event=>setAppoinment({...appoinment,date:new Date(event.target.value).toDateString()})} type='date' name='date' placeholder='dd/mm/year'/><br/>
                <button type='submit' >Send</button>
            </form>
          </div>
        </Fade>
      </Modal>


      <Modal onClick={()=>setSuccessAlert(false)}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={successAlert}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 5,
        }}
      >
        <Fade in={successAlert}>
          <div className={classes.paper} style={{textAlign:'center', padding:'50px'}}>
              <CheckCircleIcon style={{color:'rgb(52, 189, 93)',fontSize:'100px'}}/>
              <h3 style={{color:'grey'}}>Appoinment request Sent</h3>
          </div>
        </Fade>
      </Modal>
    </div>

        </div>
    );
};

export default AvailableAppoinments;