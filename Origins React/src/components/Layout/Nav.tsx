import React from "react";
import { Link } from "react-router-dom";
import { FaRegSnowflake } from "react-icons/fa";
import { GiWhirlwind, GiFireTail, GiLightningHelix, GiCrownedSkull } from "react-icons/gi";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-links">
        {/* Skull Icon before the title for Main Guide */}
        <Link to="/MainGuide">
          <GiCrownedSkull /> <span className="main-text">Main Guide</span>
        </Link>
        <Link to="/IceStaff">
          <FaRegSnowflake /> Ice Staff
        </Link>
        <Link to="/FireStaff">
          <GiFireTail /> Fire Staff
        </Link>
        <Link to="/WindStaff">
          <GiWhirlwind /> Wind Staff
        </Link>
        <Link to="/LightningStaff">
          <GiLightningHelix /> Lightning Staff
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
