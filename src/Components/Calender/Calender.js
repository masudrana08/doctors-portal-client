import React, { Component } from 'react';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calender.css'
const Calender = () => {
const [date,setDate]=useState(new Date())
const handleDate=(checkDate)=>{
  setDate(checkDate)
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
