import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Services />
            <Emergency />
            <Features />
            <Expert />
            <Testimonial />
        </>
    );
};

export default Home;