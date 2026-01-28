"use client";
import React from "react";
import { useState } from "react";
import "./style.css";

export default function ContactForm() {
    const [result, setResult] = useState("");
    const [status, setStatus] = useState(""); // "success", "error", "sending"

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        setStatus("sending");
        const formData = new FormData(event.target);

        formData.append("access_key", "b3c34957-b179-49c8-8660-b8c9848a2c89");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent successfully!");
                setStatus("success");
                event.target.reset();
            } else {
                setResult(data.message || "Something went wrong");
                setStatus("error");
            }
        } catch (error) {
            setResult("Something went wrong. Please try again.");
            setStatus("error");
        }
    };

    return (
        <div className="contact-form-container">
            <h2 className="form-heading">Send Us a Message</h2>
            
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="name" 
                        name="name" 
                        placeholder="Enter your name" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
                        required 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="subject" 
                        name="subject" 
                        placeholder="What is this about?" 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea 
                        className="form-control" 
                        id="message" 
                        name="message" 
                        placeholder="How can we help you?" 
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submit-btn">Send Message</button>
            </form>
            
            {result && (
                <span className={`result-message result-${status}`}>
                    {result}
                </span>
            )}
        </div>
    );
}