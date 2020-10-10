import { Grid } from '@material-ui/core';
import React from 'react';

const ServicesDetails = ({data}) => {
    return (
        <Grid item md={4} >
            <div style={{textAlign:'center', width:'70%', margin:'auto'}}>
                <img style={{width:'40px'}} src={data.img} alt=""/>
                <h3 style={{color:'#312e49'}}>{data.title}</h3>
                <p style={{color:'#696969'}}>{data.description}</p>
            </div>
        </Grid>
    );
};

export default ServicesDetails;