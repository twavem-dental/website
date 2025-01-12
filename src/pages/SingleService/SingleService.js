import React from 'react';
import './SingleService.scss';
import Navbar from '../../components/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import ServiceData from '../../sections/Services/ServiceData';
import ServiceBanner from '../../sections/ServiceBanner/ServiceBanner';
import Symptoms from '../../sections/Symptoms/Symptoms';
import Footer from '../../sections/Footer/Footer';

const SingleService = () => {

    const {url} = useParams();
    const service = ServiceData.find(service => service.url === url);
    const {title, img, symptoms, symptomsHeader, bannerText} = service;

    return (
        <>
            <Navbar />
            <ServiceBanner serviceBanner = {img} title={title} bannerText={bannerText}/>
            <Symptoms symptomsHeader={symptomsHeader} symptomsData={symptoms}/>
            <Footer/>
        </>
    );
};

export default SingleService;