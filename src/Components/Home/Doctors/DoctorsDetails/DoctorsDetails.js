import { Grid } from '@material-ui/core';
import React from 'react';

const DoctorsDetails = ({data}) => {
    return (
        <Grid container direction='column' alignItems='center' item md={4} >
            <div style={{height:'250px', overflow:'hidden' }}>
                <img style={{width:'350px'}} src={data.img} alt=""/>
            </div>
            <h3 style={{color:'#4e4d4e', marginBottom:'7px'}}>{data.name}</h3>
            <b style={{margin:'0',color:'rgba(78, 77, 78, 0.451)'}}>{data.phone}</b>
        </Grid>
    );
};

export default DoctorsDetails;