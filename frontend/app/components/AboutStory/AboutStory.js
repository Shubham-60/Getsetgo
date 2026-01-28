import React from 'react';
import './style.css';

function AboutStory() {
  return (
    <div className="about-story-container">
      <div className="about-story-content">
        <h2 className="about-story-title">Our Story</h2>

        <p>
          GetSetGo was founded in 2022 by a group of passionate travelers who believe
          that everyone deserves personalized travel experiences that match their unique
          preferences and budget.
        </p>

        <p>
          We recognized that many travelers in India face challenges in finding authentic
          experiences that align with their interests while staying within budget. That's why
          we created a platform that uses smart recommendation algorithms to match
          travelers with their ideal destinations.
        </p>

        <p>
          Our mission is to make travel in India more accessible, personalized, and enriching
          for everyone, whether you're a solo adventurer, a couple on a romantic getaway, or
          a family looking for memorable experiences.
        </p>
      </div>

      <div className="about-story-image">
        <img src="https://images.pexels.com/photos/5324316/pexels-photo-5324316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Langza Statue" />
      </div>
    </div>
  );
}

export default AboutStory;