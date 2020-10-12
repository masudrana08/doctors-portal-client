import React, { useContext } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';

import { Grid} from '@material-ui/core';
import './Navbar.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Navbar({myColor}) {
  const [user,setUser]=useContext(UserContext)

  return (
   
        <Grid style={{display:'flex', justifyContent:'space-between', width:'100%',
         alignItems:'center', padding:'20px 0'}}>
        <Grid ></Grid>
        <Grid className='header-menu' style={{padding:'0 10px'}}>
            <Link className='link' to='/'><b>Home</b></Link>
            <Link className='link' to='/about'><b>About</b></Link>
            <Link className='link' to='/dental-services'><b>Dental Services</b></Link>
            <Link className='link' to='/dashboard'><b style={{color:myColor || '#ffffffb2'}}>Dashboard</b></Link>
            <Link className='link' to='/blog'><b style={{color:myColor || '#ffffffb2'}}>Blog</b></Link>
            <Link className='link' to='/contact'><b style={{color:myColor || '#ffffffb2'}}>Contact us</b></Link>
            {/* {
              user.isSignedIn ? <b>Hello, {user.name || 'user'}</b>
              : <Link  to='/auth'><button className="button">SignIn</button></Link>
            } */}
        </Grid>
        </Grid>
        


    
  );
}