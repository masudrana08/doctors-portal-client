import { Grid } from '@material-ui/core';
import React from 'react';
import fluoride from '../../../images/fluoride.png'
import cavity from '../../../images/cavity.png'
import whitening from '../../../images/whitening.png'

import ServicesDetails from './ServicesDetails/ServicesDetails';
const Services = () => {
    const servicesData=[
        {
            title:'Fluoride Treatment',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit quam voluptate veniam ipsam iste?',
            img:fluoride
        },
        {
            title:'Cavity Filling',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit quam voluptate veniam ipsam iste?',
            img:cavity
        }, 
        {
            title:'Teeth Whitening',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque sit quam voluptate veniam ipsam iste?',
            img:whitening
        }
    ]
    return (
       <div style={{width:'90%', margin:'auto'}}>
           <div style={{textAlign:'center', marginBottom:'100px'}}>
                <h2 style={{color:'#1CC7C1'}}>Our services</h2>
                <h1 style={{fontSize:'40px',color:'#757375'}}>Services We Provide</h1>
           </div>
            <Grid container item xs={12}  >
            {
                servicesData.map(data=>{
                    return <ServicesDetails data={data}></ServicesDetails>
                })
            }
        </Grid>
       </div>
    );
};

export default Services;