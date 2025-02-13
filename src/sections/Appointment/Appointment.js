import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import {AiFillHome} from "react-icons/ai";
import ContactForm from '../../components/ContactForm/ContactForm';

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d57558.35724919202!2d85.12537133886715!3d25.62493534466117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5900369e9357%3A0x34440cab9465e79a!2sTwamev%20Dental%20Clinic%20%26%20Implant%20Centre%20%7C%20Best%20Dentist%20in%20Patna!5e0!3m2!1sen!2sus!4v1736681784530!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

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