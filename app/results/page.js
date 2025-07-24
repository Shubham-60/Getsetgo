"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import DestinationCard from '../components/DestinationCard/DestinationCard';
import "./style.css";

export default function Results() {
    const [destinations, setDestinations] = useState([]);
    const [userInterests, setUserInterests] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const saved = localStorage.getItem('userInterests');
        
        if (!saved) {
            router.push('/');
            return;
        }

        const interests = JSON.parse(saved);
        setUserInterests(interests);
        
        fetch('/temp.json')
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(destination => 
                    interests.includes(destination.theme)
                );
                setDestinations(filtered);
            })
            .catch(error => console.error('Error loading destinations:', error));
    }, [router]);

    return (
        <>
            <Header />
            <div className="results-page">
                <div className="results-container">
                    <div className="results-header">
                        <h1 className="results-title">Your Perfect Destinations</h1>
                        <p className="results-subtitle">
                            Based on your interests: <strong>{userInterests.join(', ')}</strong>
                        </p>
                        <p className="results-count">
                            Found {destinations.length} matching destinations
                        </p>
                    </div>

                    <div className="destinations-grid">
                        {destinations.map((destination, index) => (
                            <DestinationCard 
                                key={index} 
                                destination={destination} 
                            />
                        ))}
                    </div>

                    <div className="back-section">
                        <button 
                            onClick={() => router.push('/')}
                            className="btn-secondary"
                        >
                            ← Start New Search
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}