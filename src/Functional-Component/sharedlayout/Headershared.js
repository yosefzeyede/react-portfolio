import React from "react";
import { Link } from "react-router-dom";
function Headershared() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <a href="#" className="logo">
            Yosef
          </a>
          {/* <img src={logo} alt="logo" className="navbar" /> */}
          <ul className="nav-links">
            <li>
              <Link to="home">Home</Link>
            </li>

            <li>
              <Link to="about">About</Link>
            </li>

            <li>
              <Link to="skills">Skills</Link>
            </li>

            <li>
              <Link to="projects">Projects</Link>
            </li>

            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Headershared;
