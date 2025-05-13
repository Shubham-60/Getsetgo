import React from 'react';
import './style.css';

export default function ContactInfo() {
    return (
        <div className="contact-info-container">
            <h2 className="contact-info-heading">Contact Information</h2>

            <p className="contact-info-intro">
                Have questions or need personalized assistance? Reach out to our team using any of the
                contact methods below.
            </p>

            <div className="contact-method">
                <div className="contact-icon">
                    <img src="./images/location.svg" alt="Location" width="24" height="24" />
                </div>
                <div className="contact-details">
                    <h3>Our Location</h3>
                    <p>123 Nomad Street,<br />Connaught Place,<br />New Delhi - 110001, India</p>
                </div>
            </div>

            <div className="contact-method">
                <div className="contact-icon">
                    <img src="./images/call.svg" alt="Phone" width="24" height="24" />
                </div>
                <div className="contact-details">
                    <h3>Phone Number</h3>
                    <p>+91 98765 43210<br />Toll-Free: 1800-123-4567</p>
                </div>
            </div>

            <div className="contact-method">
                <div className="contact-icon">
                    <img src="./images/mail.svg" alt="Email" width="24" height="24" />
                </div>
                <div className="contact-details">
                    <h3>Email Address</h3>
                    <p>info@nomadrupee.com<br />support@nomadrupee.com</p>
                </div>
            </div>

            <div className="office-hours">
                <h3>Office Hours</h3>
                <p>Our team is available to assist you during the following hours:</p>
                <div className="hours-table">
                    <div className="hours-row">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="hours-row">
                        <span>Saturday:</span>
                        <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="hours-row">
                        <span>Sunday:</span>
                        <span>Closed</span>
                    </div>
                </div>
            </div>
        </div>
    );
}