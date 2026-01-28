import React from 'react';
import './style.css';

export default function CoreValues() {
    const valueImages = [
        "./images/auth.svg",
        "./images/trans.svg",
        "./images/sustainability.svg",
        "./images/excell.png"
    ];
    const valueTitles = ["Authenticity", "Transparency", "Sustainability", "Excellence"];
    const valueDescriptions = [
        "We believe in promoting authentic travel experiences that reflect the true culture and heritage of destinations.",
        "We maintain complete transparency in our pricing and recommendations, with no hidden costs.",
        "We promote responsible travel practices and support local communities at our recommended destinations.",
        "We strive for excellence in every aspect of our service, from recommendations to customer support."
    ];

    return (
        <div className="core-values">
            <h2 className="core-values-title">Our Core Values</h2>

            <div className="values-container">
                {valueImages.map((img, index) => (
                    <div key={index} className="value-item">
                        <div className="value-icon">
                            <img src={img} alt={valueTitles[index]} />
                        </div>
                        <div className="value-content">
                            <h3 className="value-title">{valueTitles[index]}</h3>
                            <p className="value-description">
                                {valueDescriptions[index]}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}