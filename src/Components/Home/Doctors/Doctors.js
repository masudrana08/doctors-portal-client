import { Grid } from '@material-ui/core';
import React from 'react';
import doctor from '../../../images/doctor1.png'
import DoctorsDetails from './DoctorsDetails/DoctorsDetails';
const Doctors = () => {
    const doctorsData=[
        {
            name:'Dr. Caudi',
            phone:'+132487483',
            img:doctor
        },
        {
            name:'Dr. Caudi',
            phone:'+132487483',
            img:doctor
        },
        {
            name:'Dr. Caudi',
            phone:'+132487483',
            img:doctor
        }
    ]
    return (
        <div style={{marginTop:'100px', marginBottom:'100px'}}>
            <h3 style={{textAlign:'center'}} className='brand-text'>Our Doctors</h3>
            <Grid container item xs={12}>
                {
                    doctorsData.map(data=><DoctorsDetails data={data}></DoctorsDetails>)
                }
            </Grid>
        </div>
    );
};

export default Doctors;