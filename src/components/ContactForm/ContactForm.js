import React, { useState } from "react";
import "./ContactForm.scss";
import icon from "../../assets/banner/icons/Calling.png";

import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contact: "",
        service: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false); // Loader state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.contact
        ) {
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Please fill at least name and contact-number.",
                timer: 10000,
                timerProgressBar: true,
            });
            return;
        }
        setIsLoading(true);

        try {
            await emailjs.send(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                {
                    name: formData.name,
                    mail: formData.email,
                    number: formData.contact,
                    service: formData.service,
                    message: formData.message,
                },
                YOUR_PUBLIC_KEY
            );
            setFormData({
                name: "",
                email: "",
                contact: "",
                service: "",
                message: "",
            });
            Swal.fire({
                icon: "success",
                title: "Appointment Booked!",
                text: "Your appointment request has been sent successfully. We will contact you shortly.",
                timer: 10000,
                timerProgressBar: true,
            }).then(() => {
                window.location.reload();
            });
        } catch (err) {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Oops!",
                text: "Unable to book appointment. Please try again later or call us at +91 620 560 8922.",
                timer: 25000,
                timerProgressBar: true,
            });
        } finally {
            setIsLoading(false);
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
                <button
                        type="submit"
                        className="btn appointment-btn"
                        disabled={isLoading} // Disable button when loading
                        style={{
                            cursor: isLoading ? "not-allowed" : "pointer",
                            opacity: isLoading ? 0.6 : 1,
                        }}
                    >
                        {isLoading ? (
                            <>
                                <span
                                    className="spinner-border spinner-border-sm"
                                    role="status"
                                    aria-hidden="true"
                                ></span>{" "}
                                Sending request...
                            </>
                        ) : (
                            "Book an appointment"
                        )}
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
