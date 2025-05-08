"use client"
import React, { useState } from "react";
import "./Form.css";

const interests = ["Beaches", "Mountains", "Historical Sites", "Food & Cuisine", "Wildlife", "Adventure","Cultural","Shopping","Relaxation"];

const travelStyles = ["Balanced Experience","Luxury","Budget","Family Friendly","Solo Adventure"];

export default function Form() {
    const [tab, setTab] = useState("what-you-like");
    const [selectedInterests, setSelectedInterests] = useState([]);
    const [travelStyle, setTravelStyle] = useState(travelStyles[0]);
    const [budget, setBudget] = useState(60000);
    const [travelDate, setTravelDate] = useState("");
    const [travelers, setTravelers] = useState(2);


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
                <div className="form-tabs">
                    <button
                        className={`form-tab-btn ${tab === "what-you-like" ? "active" : ""}`}
                        onClick={() => setTab("what-you-like")}
                    >
                        What You Like
                    </button>
                    <button
                        className={`form-tab-btn ${tab === "trip-details" ? "active" : ""}`}
                        onClick={() => setTab("trip-details")}
                    >
                        Trip Details
                    </button>
                </div>
                {tab === "what-you-like" && (
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
                )}
                {tab === "trip-details" && (
                    <div className="form-section">
                        <div className="form-label">Your Budget (₹ per person)</div>
                        <div className="range-slider-container">
                            <div className="budget-labels">
                                <span>₹10,000</span>
                                <span className="budget-value">₹{budget.toLocaleString()}</span>
                                <span>₹100,000</span>
                            </div>
                            <input
                                type="range"
                                min="10000"
                                max="100000"
                                step="1000"
                                value={budget}
                                onChange={(e) => setBudget(Number(e.target.value))}
                                className="budget-slider"
                            />
                        </div>

                        <div className="form-row">
                            <div className="form-col">
                                <div className="form-label">When do you want to travel?</div>
                                <div className="input-with-icon">
                                    <span className="input-icon">📅</span>
                                    <input
                                        type="text"
                                        placeholder="Select a date"
                                        className="form-input"
                                        value={travelDate}
                                        onChange={(e) => setTravelDate(e.target.value)}
                                        onFocus={(e) => { e.target.type = "date" }}
                                        onBlur={(e) => { if (!e.target.value) e.target.type = "text" }}
                                    />
                                </div>
                            </div>

                            <div className="form-col">
                                <div className="form-label">Number of Travelers</div>
                                <div className="input-with-icon">
                                    <span className="input-icon">👥</span>
                                    <select
                                        className="form-input"
                                        value={travelers}
                                        onChange={(e) => setTravelers(Number(e.target.value))}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                            <option key={num} value={num}>
                                                {num} {num === 1 ? "traveler" : "travelers"}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
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