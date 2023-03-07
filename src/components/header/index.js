import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./style.css";
import { Images } from "../../helpers";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const location = useLocation();

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: location.pathname === "/" ? "transparent" : "black",
      }}
    >
      <div className="container">
        <NavLink to="/" className="logo">
          <img
            src={Images.spacex_logo}
            alt="SpaceX"
            className="img-contain"
            width={200}
            height={50}
          />
        </NavLink>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img
            src={Images.ham_menu}
            alt="menu"
            className="img-contain"
            width={30}
            height={30}
          />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/history">History</NavLink>
            </li>
            <li>
              <NavLink to="/launches">Launches</NavLink>
            </li>
            <li>
              <NavLink to="/rockets">Rockets</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
