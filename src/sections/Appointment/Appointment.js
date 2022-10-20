import React from 'react';
import './Appointment.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import icon from '../../assets/banner/icons/Calling.png';
import {AiFillHome} from "react-icons/ai";

const Appointment = () => {

    const mapLink = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.72810807265!2d-0.24168024584704212!3d51.52877184047419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sbd!4v1666254073802!5m2!1sen!2sbd'

    return (
        <section className='appointment-section pb-70'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="google-map">
                            <iframe src={mapLink}></iframe>

                            <div className="location-name">
                                <AiFillHome />
                                <p>35 West Dental Street California 1004</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="appointment-form-area">
                            <SectionTitle 
                            subTitle="BOOK APPOINTMENT"
                            title="Care at Dentalist is pleasure"
                            description="Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual"/>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label>Name</label>
                                            <input type="email" class="form-control" placeholder="Enter your name..." />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label>E-mail Address</label>
                                            <input type="email" class="form-control" placeholder="Enter email address..." />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label>Service</label>
                                            <select class="form-control">
                                                <option>Teeth Whitening</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label>Department</label>
                                            <select class="form-control">
                                                <option>Select Department</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div class="form-group">
                                            <label for="exampleFormControlTextarea1">Messages</label>
                                            <textarea class="form-control" placeholder='Enter your messages...' rows="3"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="appointment-call">
                                            <div className='icon'>
                                                <img src={icon} alt="icon" />
                                            </div>
                                            <div className='call-text'>
                                                <p>Dental 24H Emergency</p>
                                                <h6>03 482 394 123</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <button type="submit" class="btn appointment-btn">Book an appointment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Appointment;