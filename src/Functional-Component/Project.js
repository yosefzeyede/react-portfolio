import React from "react";
import inventory from "../image/HighValue.jpg";
import learning from "../image/e-learning-icons-flat_1284-3950.avif";
import web from "../image/1_j0gjLpN1aaHuRowTKgr6yQ.jpg";
function Project() {
  return (
    <>
      <section id="projects">
        <div className="section-container">
          <h2>My Projects</h2>

          <p className="section-description">
            Some of the projects I have built while learning software
            development.
          </p>

          <div className="projects-container">
            <div className="project-card">
              <img src={inventory} alt="Inventory Management System" />

              <div className="project-content">
                <h3>Inventory Management System</h3>

                <p>
                  A web-based system for managing products, suppliers,
                  purchases, stock, and transactions.
                </p>

                <p className="technologies">
                  HTML | CSS | JavaScript | PHP | MySQL
                </p>

                <div className="project-buttons">
                  <a
                    href="https://github.com/yosefzeyede/Inventory_management-system"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href="https://yosefinventorymanagement.ct.ws/inventory_managment_system/"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src={learning} alt="E-Learning System" />

              <div className="project-content">
                <h3>E-Learning System</h3>

                <p>
                  An online learning platform designed to help students access
                  courses and learning materials.
                </p>

                <p className="technologies">
                  HTML | CSS | JavaScript | React | Node.js
                </p>

                <div className="project-buttons">
                  <a
                    href="https://github.com/yosefzeyede/E-Learning"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href="YOUR-ELEARNING-LIVE-DEMO-LINK"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <img src={web} alt="Web Project" />

              <div className="project-content">
                <h3>Web Application</h3>

                <p>
                  A responsive web application created to practice modern
                  frontend development.
                </p>

                <p className="technologies">
                  HTML | CSS | JavaScript | Bootstrap
                </p>

                <div className="project-buttons">
                  <a
                    href="https://github.com/yosefzeyede"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>

                  <a
                    href="YOUR-WEB-APP-LIVE-DEMO-LINK"
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
