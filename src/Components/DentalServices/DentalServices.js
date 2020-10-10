import React from 'react';
import Calender from '../Calender/Calender';
import { Grid } from '@material-ui/core';
import transparentDentalChair from '../../images/transparent-dental-chair.png'
import dentalChair from '../../images/dental-chair.png'
import AvailableAppoinments from './AvailableApoinments/AvailableAppoinments';
import Navbar from '../Home/Header/Navbar/Navbar';


const DentalServices = () => {
  return (
    <>
    <div style={
      {backgroundImage: `url(${transparentDentalChair})`, 
      height:"100vh", backgroundSize:"cover",
      padding:"0 30px"
      }}>
      <Navbar></Navbar>

      <Grid item container justifyContent='space-between' md={12}>
        <Grid item md={6} style={{padding:'10px'}}>
          <Calender></Calender>
        </Grid>
        <Grid item md={6} style={{padding:'20px'}}>
          <img style={{width:"100%"}} src={dentalChair} alt=""/>
        </Grid>
      </Grid>
      
    </div>
    <AvailableAppoinments></AvailableAppoinments>
    </>
  );
};

export default DentalServices;