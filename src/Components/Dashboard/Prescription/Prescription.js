import React from 'react';
import { Grid } from '@material-ui/core';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
const Prescription = () => {
    return (
        <div>
            <Grid container item xs={12}>
                <Grid item xs={2}>
                    <LeftNavbar></LeftNavbar>
                </Grid>
                <Grid item xs={10}>

                </Grid>
            </Grid>
        </div>
    );
};

export default Prescription;