import React from "react";

function Education() {
  return (
    <section className="education show-animate" id="education">
      <h2 className="heading">
        My <span>Journey</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="education-row">
        {/* Column 1 */}
        <div className="education-column">
          <h3 className="title">Education</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> 2021 - 2025
                </div>
                <h3>B.Tech in CSIT</h3>
                <p>IPS Academy, Indore</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> 2020 - 2021
                </div>
                <h3>Higher Secondary</h3>
                <p>N.S. Singhvi School, MP Board</p>
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="education-column">
          <h3 className="title">Experience</h3>
          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> June 2024 - August 2024
                </div>
                <h3>Web Developer Intern</h3>
                <p>Edit Quasar, Bankura</p>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year">
                  <i className="bx bxs-calendar"></i> October 2023 - December 2023
                </div>
                <h3>Eziii Scholarship Platform</h3>
                <p>Developed in SIH 2023</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
