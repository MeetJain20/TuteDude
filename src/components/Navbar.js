import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-none container">
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{ textDecoration: "none" }}
          to="/"
        >
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.FNeJjWcJDFTPFb8xvRAA3wHaGC&pid=Api&P=0"
            alt="Loading"
            className="tutelogo"
          />
          TuteDude
        </Link>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <ul className="navbar-nav mb-2 d-flex navbarull">
            <li className="nav-item linkk">
              <a className="nav-link" href="/">
                My Assignment
              </a>
            </li>
            <li className="nav-item linkk">
              <a className="nav-link mentorr" href="/">
                Chat with Mentor
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle droppp"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fa-solid fa-user mx-2"></i>
                ProfileName
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
