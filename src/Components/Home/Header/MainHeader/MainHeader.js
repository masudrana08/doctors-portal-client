import { Grid } from '@material-ui/core';
import React from 'react';
import dentalChair from '../../../../images/dental-chair.png'
import './MainHeader.css'
const MainHeader = () => {
    return (
        <div >
            <Grid  container item xs={12} justify='space-between' style={{height:'400px',marginTop:'70px'}}>
                <Grid item md={5} style={{paddingLeft:'150px'}}>
                    <h1 style={{fontSize:'40px', color:'#757375', margin:'0 0 20px'}}>Your New Smile Starts Here</h1>
                    <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, deleniti. Exercitationem nemo hic ex cum architecto perspiciatis eligendi pariatur </small><br/>
                    <button style={{marginTop:'20px'}} className="button">Get Appoinment</button>
                </Grid>
                <Grid item md={5}>
                    <img style={{width:'500px'}} src={dentalChair} alt=""/>
                </Grid>
            </Grid>
        </div>
    );
};

export default MainHeader;