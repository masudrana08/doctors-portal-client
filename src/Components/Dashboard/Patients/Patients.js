import { Grid } from '@material-ui/core';
import React from 'react';
import LeftNavbar from '../LeftNavbar/LeftNavbar';

const Patients = () => {
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

export default Patients;