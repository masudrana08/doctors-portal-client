import React from 'react';
import AboutAppoinment from './AboutAppoinment/AboutAppoinment';
import Blogs from './Blogs/Blogs';
import DentalPatient from './DentalPatient/DentalPatient';
import Header from './Header/Header';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <DentalPatient></DentalPatient>
            <AboutAppoinment></AboutAppoinment>
            <Reviews></Reviews>
            <Blogs></Blogs>
        </div>
    );
};

export default Home;