import React from 'react';
import { Link } from 'react-router-dom';
import './LeftNavbar.css'
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import DescriptionIcon from '@material-ui/icons/Description';
import SettingsIcon from '@material-ui/icons/Settings';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
const LeftNavbar = () => {
    return (
        <div className='left-navbar' style={{display:'flex', flexDirection:'column'}}>
            {
                ['Dashboard','Appoinment','Patients','Prescription','Add-Doctor','Setting'].map((data,index)=>{
                    return(
                        <Link className='link' to={'/dashboard/'+data.toLowerCase()}>
                            
                            <div style={{display:'flex', marginBottom:'20px'}}>
                                {index==0 && <DashboardIcon style={{color:'white'}}></DashboardIcon>}
                                {index==1 && <EventIcon style={{color:'white'}}></EventIcon>}
                                {index==2 && <PeopleOutlineIcon style={{color:'white'}}></PeopleOutlineIcon>}
                                {index==3 && <DescriptionIcon style={{color:'white'}}></DescriptionIcon>}
                                {index==4 && <PersonAddIcon style={{color:'white'}}></PersonAddIcon>}
                                {index==5 && <SettingsIcon style={{color:'white'}}></SettingsIcon>}
                                
                                <b style={{color:'white', marginLeft:'10px'}}>{data}</b>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    );
};

export default LeftNavbar;