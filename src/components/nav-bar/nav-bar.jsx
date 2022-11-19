import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";
import "./nav-bar.css";
import menu from "../../assets/icons/menu.png";
import close from "../../assets/icons/close.png";
import { useEffect } from "react";

const NavBar = () => {
  const [menuActive, setActive] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <nav>
        <div className="nav__bar-wrapper">
          <div
            className="nav__bar-logo"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <span>DIYOR</span>
          </div>
          <div
            className="nav__bar-items"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/resume">Resume</NavLink>
          </div>
          <div
            className="menu_close"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
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

      <div
        onClick={() => setActive(false)}
        className={menuActive ? "menu_bar nav__bar-items" : "close_menu"}
      >
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </>
  );
};

export default NavBar;
