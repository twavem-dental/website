import React from 'react';
import './ContactForm.scss';
import icon from '../../assets/banner/icons/Calling.png';

const ContactForm = () => {
    return (
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
                        <input class="form-control" placeholder="Enter email address..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Contact Number</label>
                        <input class="form-control" placeholder="Enter contact number..." />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div class="form-group">
                        <label>Service</label>
                        <select class="form-control">
                            <option>Teeth Cleaning & Whitening</option>
                            <option>Root Canal Treatment (RCT)</option>
                            <option>Crown & Bridges</option>
                            <option>Dental Implants</option>
                            <option>Complete Dentures</option>
                            <option>Braces & Invisalign</option>
                            <option>Smile Design</option>
                            <option>Kids Dentistry </option>
                            <option>Full Mouth Rehabilitation</option>
                            <option>Comprehensive Treatment</option>
                            <option>Lasers</option>
                            <option>Others</option>
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
                    <button type="submit" class="btn appointment-btn">Book an appointment</button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className='icon'>
                            <img src={icon} alt="icon" />
                        </div>
                        <div className='call-text'>
                            <p>Call Us at</p>
                            <h6>+91 620 560 8922</h6>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;