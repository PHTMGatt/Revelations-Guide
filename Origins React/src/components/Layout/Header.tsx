import React from "react";
import ReviveIcon from "../../assets/Pictures/Revive_Icon.png";
import Nav from "./Nav";
import "./Header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="title-box">
        <img src={ReviveIcon} alt="Revive Icon" className="revive-header-icon" />
        <h1>
          Origins Easter Egg <span>Little Lost Girl</span>
        </h1>
        <img src={ReviveIcon} alt="Revive Icon" className="revive-header-icon" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
