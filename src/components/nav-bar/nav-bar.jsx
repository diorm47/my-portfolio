import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav-bar.css";
import menu from "../../assets/icons/menu.png";
import close from "../../assets/icons/close.png";

const NavBar = () => {
  const [menuActive, setActive] = useState(false);
  return (
    <>
      <nav>
        <div className="nav__bar-wrapper">
          <div className="nav__bar-logo">
            <span>DIYOR</span>
          </div>
          <div className="nav__bar-items">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
          <div className="menu_close">
            <img
              className={!menuActive ? "menu" : "hide_menu"}
              onClick={() => setActive(true)}
              src={menu}
              alt="menu"
            />
            <img
              className={menuActive ? "close" : "hide_close"}
              onClick={() => setActive(false)}
              src={close}
              alt="close"
            />
          </div>
        </div>
      </nav>

      <div className={menuActive ? "menu_bar nav__bar-items" : "close_menu"}>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </>
  );
};

export default NavBar;
