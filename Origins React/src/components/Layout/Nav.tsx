import React from "react";
import { Link } from "react-router-dom";
import { FaRegSnowflake } from "react-icons/fa";
import { GiWhirlwind, GiFireTail, GiLightningHelix, GiCrownedSkull } from "react-icons/gi";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-links">
        <Link to="/" className="nav-link main">
          <GiCrownedSkull /> <span className="main-text">Main Guide</span>
        </Link>
        <Link to="/IceStaff" className="nav-link ice">
          <FaRegSnowflake /> Ice Staff
        </Link>
        <Link to="/FireStaff" className="nav-link fire">
          <GiFireTail /> Fire Staff
        </Link>
        <Link to="/WindStaff" className="nav-link wind">
          <GiWhirlwind /> Wind Staff
        </Link>
        <Link to="/LightningStaff" className="nav-link lightning">
          <GiLightningHelix /> Lightning Staff
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
