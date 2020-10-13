import { Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import LeftNavbar from '../LeftNavbar/LeftNavbar';

const AddDoctor = () => {
    const [doctorsInfo,setDoctorsInfo]=useState([])
    const [doctor,setDoctor]=useState({})
    useEffect(()=>{
        fetch('http://localhost:3001/show-doctors')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setDoctorsInfo(data)
        })
    },[])
    const addDoctorFormHandler=(e)=>{
        e.preventDefault()
        const formData=new FormData()
        formData.append('file',doctor.file)
        formData.append('name',doctor.name)
        formData.append('email',doctor.email)
        
        fetch('http://localhost:3001/add-doctor',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            console.log(result)
        })
    }
    const inputHandler=(e)=>{
        setDoctor({...doctor, [e.target.name]:e.target.value})
    }
    return (
        <div>
            <Grid container item xs={12}>
                <Grid item xs={2}>
                    <LeftNavbar></LeftNavbar>
                </Grid>
                <Grid item xs={10}>
                    <form onSubmit={addDoctorFormHandler}>
                        <input onBlur={inputHandler} type="text" name='name' placeholder='name'/><br/>
                        <input onBlur={inputHandler} type="email" name='email' placeholder='email'/><br/>

                        <input onBlur={event=>setDoctor({...doctor,file:event.target.files[0]})} type="file" name='name' placeholder='upload'/><br/>
                        <button type='submit'>submit</button>
                        {
                            doctorsInfo.map(myimage=>{
                                console.log(myimage)
                                return(
                                    <div>
                                        <img style={{width:'100px'}} src={`data:${myimage.image.contentType};base64,${myimage.image.img}`} />
                                    </div>
                                )
                            })
                        }
                    </form>
                </Grid>
            </Grid>
        </div>
    );
};

export default AddDoctor;