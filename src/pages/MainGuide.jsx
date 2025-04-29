// src/pages/MainPage.jsx

import React from 'react';
import '../styles/MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <div className="background-overlay" />

      <div className="main-content">
        <div className="main-card">
          <h2 className="card-title">Main Steps</h2>
          <ul className="card-list">
            <li>Shoot the tombstones in correct death order.</li>
            <li>Collect Audio Reels (protect Keeper, throw Li'l Arnies).</li>
            <li>Materialize S.O.P.H.I.A with Turrets.</li>
            <li>Obtain Kronorium from Samantha's room.</li>
            <li>Find and charge Apothicon Eggs.</li>
            <li>Retrieve the Runes of Creation.</li>
            <li>Recover the Summoning Key (boss arena puzzle).</li>
            <li>Throw Summoning Key at EE objects around the map.</li>
          </ul>
        </div>

        <div className="main-card">
          <h2 className="card-title">Tips</h2>
          <ul className="card-list">
            <li>Get Juggernug before round 8.</li>
            <li>Grab Apothicon Servant & Li'l Arnies early.</li>
            <li>Build Keeper Protector early.</li>
            <li>Use Thunder Gun for Margwas.</li>
            <li>Save Parasite rounds for rituals.</li>
            <li>Use Danger Closest Gobblegum for boss fights.</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default MainPage;
