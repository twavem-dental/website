import React from 'react';
import { Link } from 'react-router-dom';
import './AboutBanner.scss';
import bannerOne from '../../assets/about/banner/banner_1.png'
import bannerTwo from '../../assets/about/banner/banner_2.png'
import pattern from '../../assets/banner/pattern.png'

const AboutBanner = () => {
    return (
        <section className='about-section pt-100' data-aos="fade-up" data-aos-duration="2000">
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="about-banner-text">
                                    <h2>About Us</h2>
                                    <br/>
                                    <br/>
                                    <p>Located in the heart of Patna on Boring Canal Road, Twamev Dental Clinic is your trusted destination for comprehensive dental care. We specialize in a wide range of treatments designed to enhance your oral health and bring out your best smile.</p>
                                    <p>Our expert team, led by Dr. Aman Raj (BDS, MDS), is dedicated to providing top-quality care in a comfortable and professional environment. From Dental Implants and Root Canal Treatments (RCTs) to Crowns and Bridges, Teeth Cleaning and Whitening, and Painless Tooth Extractions, we excel in every aspect of modern dentistry.</p>
                                    <p>At Twamev Dental Clinic, we combine advanced technology, personalized care, and a commitment to excellence to ensure your dental experience is nothing short of exceptional.</p>
                                    <div className="theme-btn">
                                        <Link to='/'>Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="about-banner-img">
                                    <img src={bannerOne} alt="about banner"/>
                                    <img src={bannerTwo} alt="about banner two"/>
                                    <img className='pattern' src={pattern} alt="about banner two"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBanner;