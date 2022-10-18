import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Banner from '../sections/Banner/Banner';
import Services from '../sections/Services/Services';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Services />
        </>
    );
};

export default Home;