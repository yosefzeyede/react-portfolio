import React from "react";
import yosef from "../image/yosef.jpg";
function About() {
  return (
    <>
      <section id="home">
        <section id="about">
          <div className="section-container">
            <h2>About Me</h2>

            <div className="about-content">
              <div className="about-image">
                <img src={yosef} alt="Yosef Zeyede" />
              </div>

              <div className="about-text">
                <h3>Who I Am</h3>

                <p>
                  I’m a passionate Computer Science student and aspiring Web
                  Developer, turning creative ideas into responsive,
                  interactive, and user-friendly digital experiences while
                  continuously growing my skills through code.
                </p>

                <p>
                  I enjoy learning new technologies, solving programming
                  problems, and turning ideas into real-world software projects.
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default About;
