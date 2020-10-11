import React from 'react';
import Calender from '../Calender/Calender';
import { Grid } from '@material-ui/core';
import transparentDentalChair from '../../images/transparent-dental-chair.png'
import dentalChair from '../../images/dental-chair.png'
import AvailableAppoinments from './AvailableApoinments/AvailableAppoinments';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';



const DentalServices = () => {
  return (
    <>
    <div style={
      {backgroundImage: `url(${transparentDentalChair})`, 
      height:"100vh", backgroundSize:"cover",
      padding:"0 30px"
      }}>
      <Navbar myColor='grey'></Navbar>
      <h2 className='brand-text' style={{marginLeft:'30px'}}>Appoinment</h2>
      <Grid item container justifyContent='space-between' alignItems='center' md={12} >
        <Grid item md={6} style={{padding:'10px'}}>
          <Calender></Calender>
        </Grid>
        <Grid item md={6} style={{padding:'20px'}}>
          <img style={{width:"100%"}} src={dentalChair} alt=""/>
        </Grid>
      </Grid>
      
    </div>
    <AvailableAppoinments></AvailableAppoinments>
    <Footer></Footer>
    </>
  );
};

export default DentalServices;