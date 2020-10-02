import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormGroup,  Input, InputLabel } from '@material-ui/core';
import { UserContext } from '../../App';
import firebase from 'firebase'
import { firebaseConfig } from '../../firebaseConfig';
import { useHistory } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Auth() {
  const [user,setUser]=useContext(UserContext)
  const classes = useStyles();
  const history=useHistory()

  const googleSigninHandler = () =>{
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
    .then(result=>{
      console.log(history)
      setUser({...user, email:result.user.email, name:result.user.displayName, isSignedIn:true})
      history.location.state ? history.replace(history.location.state.pathname)
      : history.goBack()
    })
    .catch(error=>console.log(error))
  }

  const emailPassSignupHandler=()=>{
    firebase.auth().createUserWithEmailAndPassword(`${user.inputEmail}`, `${user.inputPassword}`)
    .then(result => {
      setUser({...user, isSignedUp:true})
    })
    .catch(error=>console.log(error))
  }

  const emailPassSigninHandler = ()=>{
    firebase.auth().signInWithEmailAndPassword(`${user.inputEmail}`, `${user.inputPassword}`)
    .then(result=>{
      setUser({...user, isSignedIn:true, email:result.user.email})
    })
    .catch(error=>console.log(error))
  }
  return (
   <>
     <FormGroup style={{width:"400px", margin:'auto', border:'1px solid lightgray', padding:'20px', borderRadius:'10px'}}>
        {
          user.isSignedIn ? <b style={{textAlign:'center'}}>Login</b>
          : <b style={{textAlign:'center'}}>Create an Account</b>
        }
        <FormControl style={{marginBottom:"5px"}}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input onBlur={(event)=>setUser({...user, inputEmail:event.target.value})} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{marginBottom:"15px"}}>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input onBlur={(event)=>setUser({...user, inputPassword:event.target.value})} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        {
          user.isSignedIn? <button onClick={emailPassSigninHandler} className='button'>Sign in</button>
          : <button onClick={emailPassSignupHandler} className='button'>Sign up</button>
        }
        <button onClick={googleSigninHandler}>Google</button>

    </FormGroup>
   </>
  );
}