import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormGroup,  Input, InputLabel } from '@material-ui/core';
import { UserContext } from '../../App';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Auth() {
    const [user,setuser]=useContext(UserContext)
    console.log(user)
  const classes = useStyles();

  return (
   <>
     <FormGroup style={{width:"400px", margin:'auto', border:'1px solid lightgray', padding:'20px', borderRadius:'10px'}}>
        <b style={{textAlign:'center'}}>Login</b>
        <FormControl style={{marginBottom:"5px"}}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{marginBottom:"15px"}}>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <button className='button'>Sign In</button>
        <button>Google</button>

    </FormGroup>
   </>
  );
}
