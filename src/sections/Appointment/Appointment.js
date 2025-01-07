import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d43479.50886596056!2d85.09309880512342!3d25.62307835778204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x39ed5900369e9357%3A0x34440cab9465e79a!2s3rd%20FLoor%2C%20J4FF%2B4QX%20Saraswati%20Basant%20Enclave%2C%20E%20Boring%20Canal%20Rd%2C%20near%20Alankar%20Maruti%20showroom%2C%20Rajapur%2C%20Buddha%20Colony%2C%20Patna%2C%20Bihar%20800001!3m2!1d25.6228125!2d85.1244375!5e0!3m2!1sen!2sin!4v1735983871895!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

    return (
        <section className='appointment-section pb-70' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 col-md-6">
                        <div className="google-map">
                            <iframe title='map' src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>3rd Floor, Saraswati Basant Enclave, Rajapur Pul, East Boring Canal Road, Patna - 800001</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-6">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Twamev Dental is a pleasure"
                            description="Experience exceptional dental care with a personal touch at Twamev Dental Clinic, where your comfort and smile are our priorities."/>

                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;