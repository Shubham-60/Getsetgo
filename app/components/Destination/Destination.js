import React from 'react'
import ShortCard from '../ShortCard/ShortCard'
import "./style.css";

function Destination() {
  return (
    <div className="destination-section">
        <h1>Popular Destinations</h1>
        <p>Discover our most beloved travel spots, filled with extraordinary experiences and memories waiting to be made.</p>
        <div className="destination-cards">
            <ShortCard
            image="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Taj Mahal & Agra"
            location="Uttar Pradesh"
            price={"12,500"}
            rating={4.8}
            />
            <ShortCard
            image="https://lp-cms-production.imgix.net/2025-04/shutterstock2454866115.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800"
            title="Backwaters of Kerela"
            location="Kerela"
            price={"18,000"}
            rating={4.9}
            />
            <ShortCard
            image="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            title="Taj Mahal & Agra"
            location="Uttar Pradesh"
            price={12500}
            rating={4.8}
            />
            <ShortCard
            image="https://lp-cms-production.imgix.net/2025-04/shutterstock2454866115.jpg?auto=compress&format=auto&fit=crop&q=50&w=1200&h=800"
            title="Backwaters of Kerela"
            location="Kerela"
            price={"18,000"}
            rating={4.9}
            />
        </div>
    </div>
  )
}

export default Destination