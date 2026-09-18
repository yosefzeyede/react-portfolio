import React from "react";

function Contact() {
  return (
    <>
      <section id="contact">
        <div className="section-container">
          <h2>Contact Me</h2>

          <p className="section-description">
            Have a project or opportunity? Feel free to contact me.
          </p>

          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Talk</h3>

              <p>
                I am interested in web development, and technology projects.
              </p>

              <p>
                <strong>Email:</strong>
                yosefzeyede12@gmail.com
              </p>

              <p>
                <strong>Phone:</strong>
                +251 963691452
              </p>
            </div>

            <form className="contact-form">
              <input type="text" name="name" placeholder="Your Name" required />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>
              <div className="sizess">
                <button type="submit" className="btn sizes">
                  Send Message
                </button>
                <button type="reset" className="btn sizes">
                  clear
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
