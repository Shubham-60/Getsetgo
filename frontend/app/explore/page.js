"use client";
import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header'
import Intro from '../components/Intro/Intro'
import Footer from '../components/Footer/Footer'
import DestinationCard from '../components/DestinationCard/DestinationCard'
import "./style.css"

function explore() {
  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/temp.json')
      .then(response => response.json())
      .then(data => {
        setDestinations(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching destinations:", error);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Header />
      <Intro heading={"Explore Destinations"} description={"Discover amazing places across India tailored to your travel preferences."} />
      <div className="explore-container">
        {loading ? (
          <div className="loading">Loading destinations...</div>
        ) : (
          <div className="destinations-grid">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} destination={destination} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  )
}
export default explore