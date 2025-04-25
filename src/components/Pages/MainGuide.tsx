import React from 'react';
import './MainGuide.css';
import SkullEmblem from '../../assets/Pictures/Skull.png'; // Updated to use SkullEmblem
import Audio1 from '../../assets/Audio/origins_robot.mp3';
import Audio2 from '../../assets/Audio/zombie_intro.mp3';

const KRONORIUM_URL = 'https://kronorium.com/';

const MainGuide = () => {
  return (
    <div className="main-guide">
      <div className="guide-grid">
        <div className="left-column">
          <section className="guide-section">
            <h2><img src={SkullEmblem} alt="Skull Emblem" className="revive-icon" /> Main Steps</h2>
            <ul>
              <li>Craft All Staffs (Ice, Fire, Wind, Lightning)</li>
              <li>Upgrade all staffs</li>
              <li>Place staffs inside robots: Lightning to spawn (Thor), Wind to Middle (Odin), Ice to Church (Freya)</li>
              <li>Obtain Air Strike Monkeys</li>
              <li>Enter accessible robot and press red button, then throw a air-strike at Gen5</li>
              <li>Obtain Maxis Drone and throw it into the hole</li>
              <li>Kill 10 to 15 Panzer Soldiers</li>
              <li>Punch white arm zombies under pack (everyone) till completion (rock will drop)</li>
              <li>Kill the zombie while in zombie blood mode (should be running clockwise)</li>
              <li>Go into Agatha and get 50-100 kills by using the thunder-fists (should get achievement)</li>
              <li>If you want the cut-scene throw maxis in the air while in Agatha</li>
            </ul>
          </section>

          <section className="guide-section">
            <h2><img src={SkullEmblem} alt="Skull Emblem" className="revive-icon" /> Elemental Fist</h2>
            <ul>
              <li>Obtain thunder-fists (Fill all 4 soul-boxes with 50 kills)</li>
              <li>Get stone at the tank station then purify it with souls at top church then bring it back without touching the mud</li>
              <li>Have all upgraded staffs</li>
              <li>Release 10–15 Panzer’s</li>
              <li>Destroy plane when in (Zombie Blood Mode) he should be running around pack-a-punch clockwise – (Must kill zombie in ZBM or game will glitch-out)</li>
              <li>Place Staffs in Freya, Odin, Thor</li>
              <li>Punch white armed zombies under pack-a-punch and get dropped stone everyone must do this</li>
            </ul>
          </section>
        </div>

        <div className="right-column">
          <section className="guide-section">
            <h2><img src={SkullEmblem} alt="Skull Emblem" className="revive-icon" /> Tips</h2>
            <ul>
              <li>Get Juggernog before round 8</li>
              <li>Get staffs early</li>
              <li>Leave a zombie to get all staffs and upgrade them</li>
              <li>Fill soul-boxes early and obtain thunder-fists before round 18</li>
              <li>Use your upgraded staffs to revive by hitting left on the D-Pad</li>
              <li>Get these <em><u>PERKS</u></em></li>
            </ul>
            <p className="credits">
              <em>MrRoflWaffles – Staff Images</em><br />
              <a href={KRONORIUM_URL} target="_blank" rel="noreferrer">Kronorium.com</a>
            </p>
            <div className="audio-players">
              <audio controls src={Audio1}></audio>
              <audio controls src={Audio2}></audio>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainGuide;
