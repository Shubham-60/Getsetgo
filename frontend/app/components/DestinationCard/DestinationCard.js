import React from 'react';
import Link from 'next/link';
import { useDestination } from '../../context/DestinationContext';
import './style.css';

export default function DestinationCard({ destination }) {
    const { setSelectedDestination } = useDestination();

    const handleClick = () => {
        setSelectedDestination(destination);
    };
    
    return (
        <Link href="/destination">
            <div className="destination-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
                <div className="destination-image">
                    <img src={destination.Image} />
                    <div className="rating">
                        <span className='rating-text'>{destination.ratings} <span className="star">★</span></span>
                    </div>
                </div>

                <div className="destination-content">
                    <h3>{destination.title}</h3>
                    <div className="destination-location">
                        <img src='./images/location.svg' />
                        <span>{destination.location}</span>
                    </div>

                    <p className="destination-description">{destination.description}</p>

                    <div className="destination-tags">
                        {destination.card_highlight.split(', ').map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>

                    <div className="destination-footer">
                        <div className="price">
                            <img className='price-img' src='./images/currency.svg' />
                            <p className="price-value">{destination.price_per_person}</p>
                            <span className="per-person">/ person</span>
                        </div>
                        <div className="duration">
                            <img className='duration-img' src='./images/calendar.svg' />
                            <span>{destination.duration_days} days</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}