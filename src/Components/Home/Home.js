import React from 'react';
import Footer from '../Shared/Footer/Footer';
import AboutAppoinment from './AboutAppoinment/AboutAppoinment';
import Blogs from './Blogs/Blogs';
import ConnectUs from './ConnectUs/ConnectUs';
import DentalPatient from './DentalPatient/DentalPatient';
import Doctors from './Doctors/Doctors';
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
            <Doctors></Doctors>
            <ConnectUs></ConnectUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;