import { button, Grid } from '@material-ui/core';
import React from 'react';
import './AvailableAppoinments.css'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

const AvailableAppoinments = () => {
    const date=new Date().toDateString()
    
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
  
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
                    <button onClick={()=>handleOpen()}>Book Appoinment</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Cosmetic Dentistry</h3>
                    <h4>10.00 AM - 11.30 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Book Appoinment</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth Cleaning</h3>
                    <h4>05.00 PM - 6.30 PM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Book Appoinment</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth orthodontics</h3>
                    <h4>08.00 AM - 9.00 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Book Appoinment</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth orthodontics</h3>
                    <h4>08.00 AM - 9.00 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Book Appoinment</button>
                </Grid>
                <Grid className="appoinments-item" item xs={12} md={4}>
                    <h3>Teeth orthodontics</h3>
                    <h4>08.00 AM - 9.00 AM</h4>
                    <p>10 spaces available</p>
                    <button onClick={()=>handleOpen()}>Book Appoinment</button>
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
            <h2 style={{textAlign:'center', color:'#5ab7d6'}} id="transition-modal-title">Book Appoinment</h2>
            <form action="" className='form-control'>
                {/* <input type='text' name='time' placeholder='Select time'/><br/> */}
                <select id="cars" style={{width:'393px'}}>
                    <option value="volvo">8:00 AM</option>
                    <option value="saab">10:00 AM</option>
                    <option value="vw">5:00 PM</option>
                </select><br/>
                <input type='text' name='name' placeholder='Name'/><br/>
                <input type='text' name='phone' placeholder='Phone Number'/><br/>
                <input type='text' name='email' placeholder='Email'/><br/>
                <input type='text' name='date' placeholder='dd/mm/year'/><br/>
                <button>Send</button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>

        </div>
    );
};

export default AvailableAppoinments;