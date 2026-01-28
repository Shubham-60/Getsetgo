"use client";
import React, { useState } from 'react';
import { useDestination } from '../context/DestinationContext';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './style.css';

export default function DestinationPage() {
    const { selectedDestination } = useDestination();
    const [activeTab, setActiveTab] = useState('flights');

    if (!selectedDestination) {
        return (
            <>
                <Header />
                <div style={{ padding: '40px', textAlign: 'center' }}>
                    <h1>No destination selected</h1>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            <div className="destination-page">
                <div className="destination-container">
                    <div className="destination-main">
                        <img
                            src={selectedDestination.Image}
                            alt={selectedDestination.title}
                            className="destination-hero-image"
                        />

                        <div className="destination-info">
                            <h1>About {selectedDestination.title}</h1>
                            <p className="destination-description">
                                {selectedDestination.description || selectedDestination.about?.text}
                            </p>

                            <div className="highlights-section">
                                <h2>Highlights</h2>
                                <ul className="highlights-list">
                                    {selectedDestination.card_highlight ?
                                        selectedDestination.card_highlight.split(', ').map((highlight, index) => (
                                            <li key={index}>{highlight}</li>
                                        )) :
                                        <li>No highlights available</li>
                                    }
                                </ul>
                            </div>

                            <div className="best-time">
                                <h3>Best time to visit:</h3>
                                <div className="time-info">
                                    <img src="/images/calendar.svg" alt="calendar" className="calendar-icon" />
                                    <span>October to March when the weather is pleasant and cool</span>
                                </div>
                            </div>
                        </div>

                        <div className="tabs-section">
                            <div className="tabs">
                                <button
                                    className={`tab ${activeTab === 'flights' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('flights')}
                                >
                                    Flights
                                </button>
                                <button
                                    className={`tab ${activeTab === 'hotels' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('hotels')}
                                >
                                    Hotels
                                </button>
                                <button
                                    className={`tab ${activeTab === 'activities' ? 'active' : ''}`}
                                    onClick={() => setActiveTab('activities')}
                                >
                                    Activities
                                </button>
                            </div>

                            <div className="tab-content">
                                {activeTab === 'flights' && (
                                    <div className="flights-section">
                                        <h3>Available Flights</h3>
                                        {selectedDestination.flights ?
                                            selectedDestination.flights.map((flight, index) => (
                                                <div key={index} className="flight-card">
                                                    <div className="flight-info">
                                                        <div className="airline">
                                                            <strong>{flight.airline}</strong>
                                                            <p>{flight.route}</p>
                                                        </div>
                                                        <div className="flight-times">
                                                            <div className="departure">
                                                                <strong>{flight.departure_time}</strong>
                                                                <p>{flight.departure_location}</p>
                                                            </div>
                                                            <div className="duration">
                                                                <span>{flight.duration}</span>
                                                                <span>{flight.stops}</span>
                                                            </div>
                                                            <div className="arrival">
                                                                <strong>{flight.arrival_time}</strong>
                                                                <p>{flight.arrival_location}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flight-price">
                                                        <span className="price">₹ {flight.price_per_person}</span>
                                                        <span className="per-person">per person</span>
                                                    </div>
                                                </div>
                                            )) :
                                            <p>No flights available</p>
                                        }
                                    </div>
                                )}

                                {activeTab === 'hotels' && (
                                    <div className="hotels-section">
                                        <h3>Available Hotels</h3>
                                        {selectedDestination.hotels ?
                                            selectedDestination.hotels.map((hotel, index) => (
                                                <div key={index} className="hotel-card">
                                                    <div className="hotel-image">
                                                        <img src={hotel.image_url} alt={hotel.name} />
                                                    </div>
                                                    <div className="hotel-details">
                                                        <div className="hotel-header">
                                                            <h4>{hotel.name}</h4>
                                                            <div className="hotel-rating">
                                                                <span className="star">★</span>
                                                                <span className="rating-value">{hotel.ratings}</span>
                                                            </div>
                                                        </div>
                                                        <div className="hotel-location">
                                                            <img src="/images/location.svg" alt="location" className="location-icon" />
                                                            <span>{hotel.location}</span>
                                                        </div>
                                                        <div className="hotel-amenities">
                                                            {hotel.amenities.map((amenity, amenityIndex) => (
                                                                <span key={amenityIndex} className="amenity">{amenity}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <div className="hotel-booking">
                                                        <div className="hotel-price">
                                                            <span className="price">₹ {hotel.price_per_night.toLocaleString()}</span>
                                                            <span className="per-night">Avg. per night</span>
                                                        </div>
                                                        <a href={hotel.ref} className="book-now-btn">Visit Now</a>
                                                    </div>
                                                </div>
                                            )):
                                            <p>No hotels available</p>
                                        }
                                    </div>
                                )}

                                {activeTab === 'activities' && (
                                    <div className="activities-section">
                                        <h3>Available Activities</h3>
                                        <div className="activities-grid">
                                            {selectedDestination.activities ?
                                                selectedDestination.activities.map((activity, index) => (
                                                    <div key={index} className="activity-card">
                                                        <div className="activity-header">
                                                            <h4>{activity.title}</h4>
                                                            <div className="activity-rating">
                                                                <span className="star">★</span>
                                                                <span className="rating-value">{activity.ratings}</span>
                                                            </div>
                                                        </div>
                                                        <div className="activity-duration">
                                                            <img src="/images/clock.svg" alt="time" className="time-icon" />
                                                            <span>{activity.time_required}</span>
                                                        </div>
                                                        <p className="activity-brief">{activity.brief}</p>
                                                        <div className="activity-price">
                                                            <span className="price">₹ {activity.price.toLocaleString()}</span>
                                                        </div>
                                                    </div>
                                                )) :
                                                <p>No activities available</p>
                                            }
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}