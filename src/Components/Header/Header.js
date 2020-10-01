import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import './Header.css'
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function Header() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
                {index==0 && <InboxIcon />}
                {index==1 && <MailIcon />}
                {index==2 && <InboxIcon />}
                {index==3 && <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
    <div position="static" color='transparent' >
        <Toolbar>
        <Grid style={{display:'flex', justifyContent:'space-between', width:'100%', alignItems:'center'}}>
        <Grid style={{ display:'flex', alignItems:'center'}}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                {['left'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}><MenuIcon/> </Button>
                    
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)} 
                    </Drawer>
                    </React.Fragment>
                ))}
            </IconButton>
            <Typography variant="h6" className={classes.title}>
            Doctors Portal
            </Typography>
        </Grid>
        <Grid className='header-menu'>
            <Link className='link' to='/'><b color="inherit">Home</b></Link>
            <b color="inherit">About</b>
            <Link className='link' to='/dental-services'><b color="inherit">Dental Services</b></Link>
            <b color="inherit">Reviews</b>
            <b color="inherit">Blog</b>
            <b color="inherit">Contact</b>
        </Grid>
        </Grid>
        </Toolbar>
    </div>
    </div>

    
  );
}