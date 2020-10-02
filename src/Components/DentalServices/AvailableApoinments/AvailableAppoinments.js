import { button, Grid } from '@material-ui/core';
import React, { useContext } from 'react';
import './AvailableAppoinments.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { myHost, UserContext } from '../../../App';
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

    const handleOpen = () => {
      // user.isSignedIn 
      user.isSignedIn? setOpen(true)
      : history.push('/auth')
    };
  
   const successAlertHandler=()=>{
    setSuccessAlert(true)
    setOpen(false)
   }
    const handleClose = () => {
      setOpen(false);
    };

    return (
        <div>
            <h2 style={{color:'#5ab7d6', textAlign:"center"}}>Available Appoinments on {date}</h2>
            <Grid className="appoinments-container" container item xs={12} spacing={6} style={{width:"90%", margin:"auto"}} >
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth orthodontics</h3>
                    <h4>08.00 AM - 9.00 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Appoinment Book</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Cosmetic Dentistry</h3>
                    <h4>10.00 AM - 11.30 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Appoinment Book</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth Cleaning</h3>
                    <h4>05.00 PM - 6.30 PM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Appoinment Book</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth orthodontics</h3>
                    <h4>08.00 AM - 9.00 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Appoinment Book</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth orthodontics</h3>
                    <h4>08.00 AM - 9.00 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Appoinment Book</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth orthodontics</h3>
                    <h4>08.00 AM - 9.00 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Appoinment Book</button>
                </Grid>
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
            <form action={myHost+'/appoinment-booking'} method='post' className='form-control'>
                {/* <input type='text' name='time' placeholder='Select time'/><br/> */}
                <select name="time" id="cars" style={{width:'393px'}}>
                    <option value="8:00">8:00 AM</option>
                    <option value="10:00">10:00 AM</option>
                    <option value="17:00">5:00 PM</option>
                </select><br/>
                <input type='text' name='name' placeholder='Name'/><br/>
                <input type='text' name='phone' placeholder='Phone Number'/><br/>
                <input type='text' name='email' value={user.email}/><br/>
                <input type='text' name='date' placeholder='dd/mm/year'/><br/>
                <button onClick={successAlertHandler} type='submit' >Send</button>
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
              <CheckCircleIcon style={{color:'green',fontSize:'100px'}}/>
              <h3 style={{color:'grey'}}>Appoinment request Sent</h3>
          </div>
        </Fade>
      </Modal>
    </div>

        </div>
    );
};

export default AvailableAppoinments;