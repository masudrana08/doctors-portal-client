import React, { Component, useContext } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../App';
import './Calender.css'
const Calender = () => {
const [date,setDate]=useState(new Date())
const [user,setUser]=useContext(UserContext)

const handleDate=(checkDate)=>{
  setDate(checkDate)

  
  let mydate = new Date(checkDate).toDateString()

  fetch('https://doctors-portal-full.herokuapp.com/appoinment-by-date',{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
       mydate:mydate
      }
  })
  .then(res=>res.json())
  .then(result=>{
    setUser({...user, appoinmentByDate:result})
    console.log(result)
  })
}

  return (
    <div>
        <Calendar 
          onChange={handleDate}
          value={date}
          className='calender'
          tileClassName='tile-calender'
        />
      </div>
  );
};

export default Calender;
