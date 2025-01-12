import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
// import Emergency from '../sections/Emergency/Emergency';
import Team from '../sections/Team/Team';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Services_Section from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Services_Section/>
            <Expert/>
            <Team />
            <Testimonial/>
            <Blogs/>
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;