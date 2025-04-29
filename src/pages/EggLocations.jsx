// src/pages/EggLocations.jsx

import React, { useState } from 'react';
import '../styles/EggLocations.css';
import eggData from '../data/eggData';

const EggLocations = () => {
  const [videoTimes, setVideoTimes] = useState({ start: 380, end: 540 });
  const [autoplay, setAutoplay] = useState(false);
  const [currentCard, setCurrentCard] = useState(null); // Selected main card

  // Handle playing a video section
  const handlePlaySection = (start, end) => {
    setVideoTimes({ start, end });
    setAutoplay(true);
  };

  // Handle selecting a new featured card
  const handleSelectCard = (section) => {
    setCurrentCard(section);
    handlePlaySection(section.sectionStart, section.sectionEnd);
  };

  return (
    <div className="egg-locations-container">
      <div className="egg-blur-overlay"></div>

      {/* Main Title */}
      <h1
        className="egg-main-title clickable"
        onClick={() => handlePlaySection(380, 400)}
      >
        Egg Locations
      </h1>

      {/* Video Wrapper */}
      <div className="egg-video-wrapper">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/tt3mpH7Rrfo?start=${videoTimes.start}&end=${videoTimes.end}&autoplay=${autoplay ? 1 : 0}&rel=0`}
          title="Egg Spawn Map Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <small className="egg-caption">(Click a section or location to play)</small>
      </div>

      {/* Featured Selected Card */}
      {currentCard && (
        <div className="egg-glass-card featured-card">
          <h2 className="egg-subtitle">{currentCard.section}</h2>
          {currentCard.locations.map((location, idx) => (
            <p
              key={idx}
              className="egg-text clickable"
              onClick={() => handlePlaySection(location.start, location.end)}
            >
              - {location.name}
            </p>
          ))}
        </div>
      )}

      {/* Other Available Cards */}
      {eggData.map((section, index) => (
        section !== currentCard && ( // Only show if not selected
          <div
            key={index}
            className="egg-glass-card clickable"
            onClick={() => handleSelectCard(section)}
          >
            <h2 className="egg-subtitle">{section.section}</h2>
            {section.locations.map((location, idx) => (
              <p key={idx} className="egg-text">
                - {location.name}
              </p>
            ))}
          </div>
        )
      ))}
    </div>
  );
};

export default EggLocations;
