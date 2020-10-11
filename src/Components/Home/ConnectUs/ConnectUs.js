import React from 'react';
import dentalChair from '../../../images/dental-chair.png'
const ConnectUs = () => {
    return (
        <div style={{background:`linear-gradient(rgba(49, 46, 73,0.95),rgba(49, 46, 73,0.95)),
         url(${dentalChair})`, padding:'30px'}}>
           <div style={{textAlign:'center'}}>
                <h3 className='brand-text'>Contact Us</h3>
                <h1 style={{color:'white'}}>Always Connect with Us</h1>
           </div>
           <div style={{textAlign:'center'}}>
            <form>
                <input className='my-input' placeholder='Email address*' type="text" required/><br/>
                <input className='my-input' placeholder='Subject*' type="text" required/><br/>
                <textarea className='my-textarea' placeholder='Your message*' type="text" required/><br/>
                <button className="button">SUBMIT</button>
            </form>
           </div>
        </div>
    );
};

export default ConnectUs;