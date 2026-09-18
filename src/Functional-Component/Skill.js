import React from "react";
function Skill() {
  return (
    <>
      <section id="skills">
        <div className="section-container">
          <h2>My Skills</h2>

          <p className="section-description">
            Technologies and tools I use to build web applications.
          </p>

          <div className="skills-container">
            <div className="skill-card">
              <h3>HTML</h3>
              <p>Building the structure and semantic content of web pages.</p>
            </div>

            <div className="skill-card">
              <h3>CSS</h3>
              <p>
                Creating responsive layouts, styling, animations, and modern
                interfaces.
              </p>
            </div>

            <div className="skill-card">
              <h3>JavaScript</h3>
              <p>
                Adding interactivity and dynamic behavior to web applications.
              </p>
            </div>

            <div className="skill-card">
              <h3>Bootstrap</h3>
              <p>
                Building responsive interfaces using reusable components and
                grid systems.
              </p>
            </div>

            <div className="skill-card">
              <h3>React</h3>
              <p>Building reusable and interactive user interfaces.</p>
            </div>

            <div className="skill-card">
              <h3>Node.js</h3>
              <p>Building server-side applications using JavaScript.</p>
            </div>

            <div className="skill-card">
              <h3>MySQL</h3>
              <p>Developing dynamic web applications and database systems.</p>
            </div>

            <div className="skill-card">
              <h3>Git & GitHub</h3>
              <p>
                Managing source code and collaborating on software projects.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
