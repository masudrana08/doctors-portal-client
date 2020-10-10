import React from 'react';
import MainHeader from './MainHeader/MainHeader';
import Navbar from './Navbar/Navbar';
import './Header.css'
import BusinessInfo from './BusinessInfo/BusinessInfo';
const Header = () => {
    return (
        <div className='header-container'>
            <Navbar></Navbar>
            <MainHeader></MainHeader>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;