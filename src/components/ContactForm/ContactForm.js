import React, { useState } from "react";
import "./ContactForm.scss";
import icon from "../../assets/banner/icons/Calling.png";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const response = await fetch("/.netlify/functions/emailer", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
    
        if (response.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Failed to send email. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your name..."
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>E-mail Address</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email address..."
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Contact Number</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter contact number..."
                            name="contact"
                            value={formData.contact}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="form-group">
                        <label>Service</label>
                        <select
                            className="form-control"
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                        >
                            <option value="" disabled>Select a service</option>
                            <option>Teeth Cleaning & Whitening</option>
                            <option>Root Canal Treatment (RCT)</option>
                            <option>Crown & Bridges</option>
                            <option>Dental Implants</option>
                            <option>Complete Dentures</option>
                            <option>Braces & Invisalign</option>
                            <option>Smile Design</option>
                            <option>Kids Dentistry</option>
                            <option>Full Mouth Rehabilitation</option>
                            <option>Comprehensive Treatment</option>
                            <option>Lasers</option>
                            <option>Others</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="form-group">
                        <label>Message</label>
                        <textarea
                            className="form-control"
                            placeholder="Enter your message..."
                            rows="3"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                </div>
                <div className="col-lg-6">
                    <button type="submit" className="btn appointment-btn">
                        Book an appointment
                    </button>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-call">
                        <div className="icon">
                            <img src={icon} alt="icon" />
                        </div>
                        <div className="call-text">
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
