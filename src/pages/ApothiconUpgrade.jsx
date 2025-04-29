import React, { useState } from 'react';
import upgradeData from '../data/ApothiconUpgradeData';
import '../styles/ApothiconUpgrade.css';

const ApothiconUpgrade = () => {
  const [selected, setSelected] = useState(upgradeData[0]);
  const [videoTimes, setVideoTimes] = useState({ start: upgradeData[0].start, end: upgradeData[0].end });
  const [autoplay, setAutoplay] = useState(false);

  const handlePlay = (item) => {
    setSelected(item);
    setVideoTimes({ start: item.start, end: item.end });
    setAutoplay(true);
  };

  return (
    <div className="upgrade-page-container">
      <div className="upgrade-blur-overlay"></div>

      <h1 className="upgrade-main-title">Apothicon Upgrade Locations</h1>

      <div className="upgrade-video-wrapper">
        <iframe
          width="100%"
          height="400"
          src={`https://www.youtube.com/embed/tt3mpH7Rrfo?start=${videoTimes.start}&end=${videoTimes.end}&autoplay=${autoplay ? 1 : 0}&rel=0`}
          title="Apothicon Upgrade Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <small className="upgrade-caption">(Click a section or location to play)</small>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        {selected.name}
      </div>

      <div className="upgrade-cards-container">
        {upgradeData.map((item, index) => (
          <div
            key={index}
            className={`upgrade-card ${selected.name === item.name ? 'active' : ''}`}
            onClick={() => handlePlay(item)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApothiconUpgrade;
