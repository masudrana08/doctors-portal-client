import { Grid } from '@material-ui/core';
import React from 'react';

const BusinessDetails = ({data}) => {
    return (
        <Grid item md={4}>
            <div  style={{textAlign:'center', background:data.background, padding:'20px', 
            display:'flex', alignItems:'center', borderRadius:'5px', justifyContent:'center'}}>
                <div >
                    {data.icon}
                </div>
                <div style={{paddingLeft:'5px'}}>
                    <h3 style={{margin:'0'}}>{data.title}</h3>
                    <small style={{margin:'0'}}>{data.description}</small>
                </div>
            </div>
        </Grid>
    );
};

export default BusinessDetails;