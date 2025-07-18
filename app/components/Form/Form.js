"use client"
import React, { useState } from "react";
import "./Form.css";

const interests = ["Beaches", "Mountains", "Historical Sites", "Food & Cuisine", "Wildlife", "Adventure", "Cultural", "Shopping", "Relaxation"];

const travelStyles = ["Balanced Experience", "Luxury", "Budget", "Family Friendly", "Solo Adventure"];

export default function Form() {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [travelStyle, setTravelStyle] = useState(travelStyles[0])


    const toggleInterest = (interest) => {
        setSelectedInterests((prev) =>
            prev.includes(interest)
                ? prev.filter((i) => i !== interest)
                : [...prev, interest]
        );
    };

    return (
        <div id="travel-form" className="form-bg">
            <div className="form-header">
                <h1>Discover Your Perfect Destination</h1>
                <p>Tell us what you enjoy, and we'll find the ideal place in India for your next adventure</p>
            </div>
            <div className="form-container">
                <div className="form-section">
                    <div>
                        <div className="form-label">What interests you? (Select all that apply)</div>
                        <div className="form-interests">
                            {interests.map((interest) => (
                                <button
                                    key={interest}
                                    type="button"
                                    className={`form-interest-btn ${selectedInterests.includes(interest) ? "selected" : ""}`}
                                    onClick={() => toggleInterest(interest)}
                                >
                                    {interest}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="form-label">Your travel style</div>
                        <select
                            className="form-select"
                            value={travelStyle}
                            onChange={(e) => setTravelStyle(e.target.value)}
                        >
                            {travelStyles.map((style) => (
                                <option key={style} value={style}>
                                    {style}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
                <button className="form-submit-btn">
                    Find My Perfect Destination
                </button>
                <div className="form-helper-text">
                    We'll analyze your preferences to suggest places you'll love
                </div>
            </div>
        </div>
    );
}