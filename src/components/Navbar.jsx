import React from "react";
import { NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm sticky-top">
    <div className="container">
      <NavLink className="navbar-brand fw-bold text-white" to="/">
        Nex Pipe Tech
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <NavLink
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-white"}`
              }
              to="/"
            >
              LANDING PAGE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-white"}`
              }
              to="/services"
            >
              WHY CHOOSE US
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-white"}`
              }
              to="/about-us"
            >
              HISTORI
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-white"}`
              }
              to="/blog-in"
            >
              CONTENT HUB
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-white"}`
              }
              to="/gallery-in"
            >
              SHOWCASE
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                `nav-link ${isActive ? "fw-bold text-warning" : "text-white"}`
              }
              to="/FAQ-IN"
            >
              NEED HELP?
            </NavLink>
          </li>

        </ul>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink
              className="nav-link btn btn-warning fw-bold text-dark px-3"
              to="/contact"
            >
              REACH US
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
