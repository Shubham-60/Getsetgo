import React from 'react';
import './style.css';

export default function MapSection() {
    return (
        <div className="map-section">
            <h2 className="map-heading">Find Us on the Map</h2>
            <div className="map-container">
                <div className="map-placeholder">
                    <img src="https://www.worldmap1.com/map/india/delhi/delhi%20map.jpg" alt="Map" className="map-image" />
                </div>
            </div>
        </div>
    );
}