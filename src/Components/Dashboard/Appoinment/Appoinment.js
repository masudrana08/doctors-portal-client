import { Grid } from '@material-ui/core';
import React from 'react';
import Calender from '../../Calender/Calender';
import LeftNavbar from '../LeftNavbar/LeftNavbar';
import AppoinmentTable from './AppoinmentTable';

const Appoinment = () => {
    return (
        <div>
            <Grid container item xs={12}>
                <Grid item xs={2}>
                    <LeftNavbar></LeftNavbar>
                </Grid>
                <Grid container item xs={10}>
                    <Grid item xs={6}>
                        <Calender></Calender>
                    </Grid>
                    <Grid item xs={6}>
                        <AppoinmentTable></AppoinmentTable>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Appoinment;