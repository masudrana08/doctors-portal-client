import { Grid } from '@material-ui/core';
import React from 'react';
import dentalPatient from '../../../images/dental-patient.png'
const DentalPatient = () => {
    return (
        <div style={{width:'80%', margin:'auto', marginTop:'100px'}}>
            <Grid container item xs={12} justify='space-around'>
                <Grid item md={4} style={{ width:'200px'}}>
                    <img style={{width:'350px', borderRadius:'10px'}} src={dentalPatient} alt=""/>
                </Grid>
                <Grid item md={6} style={{marginLeft:'40px', paddingRight:'40px'}}>
                    <h1 style={{fontSize:'40px', color:'#757375', fontWeight:'500'}}>Exceptional Dental Care, on Your Terms</h1>
                    <p style={{lineHeight:'30px'}}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda maiores officiis quis ea esse modi cum tenetur optio beatae eos consectetur perspiciatis, enim vel facilis! Aut placeat nulla ullam labore animi odio omnis possimus, pariatur nemo et inventore numquam id odit incidunt eum perferendis corporis cumque laborum obcaecati quasi? Nulla perspiciatis debitis, laboriosam reprehenderit dolore vitae placeat veniam ex neque et expedita autem sint amet. Sequi, consequatur. Optio minima accusantium vero voluptates iusto, voluptatum doloribus, similique consequatur
                    </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default DentalPatient;