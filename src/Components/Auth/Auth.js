import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormGroup,  Grid,  Input, InputLabel } from '@material-ui/core';
import { UserContext } from '../../App';
import firebase from 'firebase'
import { firebaseConfig } from '../../firebaseConfig';
import { useHistory } from 'react-router-dom';
import authBg from '../../images/auth-bg.png'
import google from '../../images/google.png'
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
      fetch('http://localhost:3001/userRole',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          email:result.user.email
        }
      })
      .then(res=>res.json())
      .then(data=>{
        
        setUser({...user, email:result.user.email, name:result.user.displayName, uid:result.user.uid, isSignedIn:true, role:data.role})
      })

      history.location.state ? history.replace(history.location.state.pathname)
      : history.goBack()

    })
    .catch(error=>console.log(error))
  }
  const emailPassSignupHandler=()=>{
    firebase.auth().createUserWithEmailAndPassword(`${user.inputEmail}`, `${user.inputPassword}`)
    .then(result => {
      setUser({...user, isSignedUp:true})

      fetch('http://localhost:3001/addUser',{
        method:'POST',
        body:JSON.stringify({email:user.inputEmail,role:'user'}),
        headers:{'Content-Type':'application/json'}
      })
      .then(res=>res.json())
    })
    .catch(error=>console.log(error))
  }

  const emailPassSigninHandler = ()=>{
    firebase.auth().signInWithEmailAndPassword(`${user.inputEmail}`, `${user.inputPassword}`)
    .then(result=>{

      fetch('http://localhost:3001/userRole',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          email:user.inputEmail
        }
      })
      .then(res=>res.json())
      .then(data=>{
        setUser({...user, isSignedIn:true, email:result.user.email, role:data.role})
      })

      history.location.state ? history.replace(history.location.state.pathname)
      : history.goBack()

    })
    .catch(error=>console.log(error))
  }
  console.log(user)
  return (
   <Grid container item xs={12}>
     <Grid container item md={6} justify='center'>
     <FormGroup style={{width:"350px", margin:'auto', border:'1px solid lightgray', padding:'20px', borderRadius:'10px'}}>
        {
          user.isSignedUp ? <b style={{textAlign:'center'}}>Login</b>
          : <b style={{textAlign:'center'}}>Create an Account</b>
        }
        <FormControl style={{margin:"10px 0"}}>
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input onBlur={(event)=>setUser({...user, inputEmail:event.target.value})} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl style={{marginBottom:"15px"}}>
            <InputLabel htmlFor="my-input">Password</InputLabel>
            <Input onBlur={(event)=>setUser({...user, inputPassword:event.target.value})} id="my-input" aria-describedby="my-helper-text" />
        </FormControl>
        {
          user.isSignedUp? <button onClick={emailPassSigninHandler} className='button'>Sign in</button>
          : <button onClick={emailPassSignupHandler} className='button'>Sign up</button>
        }
        {
          !user.isSignedUp ? 
            <p style={{cursor:'pointer', textAlign:'center'}} onClick={()=>setUser({...user, isSignedUp:!user.isSignedUp})}>
              Already have an account? 
              <span style={{color:'#f15454'}}> Signin</span>
            </p>
          :
            <p style={{cursor:'pointer', textAlign:'center'}} onClick={()=>setUser({...user, isSignedUp:!user.isSignedUp})}>
              Don't have an account? 
              <span style={{color:'#f15454'}}> Signup</span>
            </p>
        }

        <div onClick={googleSigninHandler} style={{cursor:'pointer',display:'flex',justifyContent:'center', alignItems:'center'}}>
          <img style={{width:'40px'}} src={google} alt=""/>
          <p className='secondary-text' style={{marginLeft:'10px'}}>Signin with Google</p>
          </div>
    </FormGroup>
    </Grid>
    <Grid item md={6}>
        <img style={{height:'100vh'}} src={authBg} alt=""/>
    </Grid>
   </Grid>
  );
}
