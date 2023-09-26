import React, { useState } from "react";
import propTypes from "prop-types";
import ToggleSwitch from "./ToggleSwitch";
import { Link } from "react-router-dom";

const Navbar = ({ title, parameter1, parameter2, currentMode, toggle }) => {
  const [ismobile, setIsMobile] = useState(window.innerWidth <= 990);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 990);
  };
  window.addEventListener("resize", handleResize);

  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary sticky-top"
      data-bs-theme={currentMode}
      >
      <div className="container-fluid ">
        <Link className="navbar-brand" to="/textutils">
          {title}
        </Link>
        <div className="d-flex align-items-center">
          {ismobile ? (
            <ToggleSwitch
            parameter1={parameter1}
            parameter2={parameter2}
              currentVal={currentMode}
              toggle={toggle}
            />
          ) : null}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/textutils" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Us
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            {ismobile ? null : (
              <ToggleSwitch
              parameter1={parameter1}
              parameter2={parameter2}
              currentVal={currentMode}
              toggle={toggle}
              />
              )}
          </form>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  currentMode: propTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Your title here",
};

export default Navbar;
