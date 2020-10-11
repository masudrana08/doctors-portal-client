import { Grid } from '@material-ui/core';
import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Address = () => {
    return (
        <Grid item md={3}>
        <h3 className='brand-text'>Our Address</h3>
        <p className='secondary-text'>New Yorks, 101010 Hadson Yards</p>
        <div style={{display:'flex', alignItems:'center'}}>
            <FacebookIcon style={{color:'rgb(60, 221, 159)', fontSize:'40px'}}></FacebookIcon>
            <LinkedInIcon style={{color:'rgb(60, 221, 159)', fontSize:'40px'}}></LinkedInIcon>
            <TwitterIcon style={{color:'rgb(60, 221, 159)', fontSize:'40px'}}></TwitterIcon>
        </div>
        <div style={{marginTop:'40px'}}>
            <h4 className='secondary-text'>Call Now</h4>
            <button className="button">+1349438049</button>
        </div>
    </Grid>
    );
};

export default Address;