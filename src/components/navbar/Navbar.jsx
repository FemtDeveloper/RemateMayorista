import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import Banner from "../Banner/Banner";

const Navbar = () => {
  const [navbarMobile, setNavbarMobile] = useState(true);
  const handlerClick = () => {
    setNavbarMobile(!navbarMobile);
  };
  /* const showNavbar = () => {
    setNavbarMobile(true);
  }; */
  return (
    <header>
      <div className="header-container">
        <h2>Remate Mayorista</h2>

        <i
          className={navbarMobile ? "fas fa-bars" : "fas fa-times"}
          onClick={handlerClick}
        ></i>

        <div
          className={
            navbarMobile ? "navbar-container " : "navbar-container active"
          }
        >
          <Link to="/">Inicio</Link>
          <Link to="/mujeres">Mujeres</Link>
          <Link to="/hombres">Hombres</Link>
          <Link to="/niños">Niños</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
