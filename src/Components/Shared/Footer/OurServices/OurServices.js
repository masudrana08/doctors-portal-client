import { Grid, Link } from '@material-ui/core';
import React from 'react';

const OurServices = () => {
    return (
        <Grid item md={3}>
            <h3 className='brand-text'>Services</h3>
            <Link className='link' to='/'><h4 className='secondary-text'>Emergency Dental Care</h4></Link>
            <Link className='link' to='/'><h4 className='secondary-text'>Check Up</h4></Link>
            <Link className='link' to='/'><h4 className='secondary-text'>Treatement of Personal Disease</h4></Link>
            <Link className='link' to='/'><h4 className='secondary-text'>Tooth Extraction</h4></Link>
            <Link className='link' to='/'><h4 className='secondary-text'>Check Up</h4></Link>
            <Link className='link' to='/'><h4 className='secondary-text'>Check Up</h4></Link>
            <Link className='link' to='/'><h4 className='secondary-text'>Check Up</h4></Link>
        </Grid>
    );
};

export default OurServices;