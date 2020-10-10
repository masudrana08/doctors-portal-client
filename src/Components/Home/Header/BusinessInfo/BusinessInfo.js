import { Grid } from '@material-ui/core';
import React from 'react';
import BusinessDetails from '../BusinessDetails/BusinessDetails';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
const BusinessInfo = () => {
    const businessData=[
        {
            title:'Opening Hours',
            description:'lorem ipsum is simply dummy ',
            background:'#1CC7C1',
            icon:<AccessTimeIcon style={{color:'white', fontSize:'55px'}}></AccessTimeIcon>
        },
        {
            title:'Visit Out Location',
            description:'Broklyn, NY 10036, United States ',
            background:'#3A4256',
            icon:<RoomIcon style={{color:'white', fontSize:'60px'}}></RoomIcon>
        },
        {
            title:'Contact Us Now',
            description:'+1234144535',
            background:'#1CC7C1',
            icon:<CallIcon style={{color:'white', fontSize:'60px'}}></CallIcon>
        }
    ]
    return (
        <div style={{width:'80%',margin:'auto', color:'white'}}>
            <Grid container item xs={12} justify='space-between' spacing='2'>
             {
                 businessData.map(data=>{
                     return <BusinessDetails data={data}></BusinessDetails>
                 })
             }
            </Grid>
        </div>
    );
};

export default BusinessInfo;