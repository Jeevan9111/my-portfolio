import React from "react";

function Skills() {
  return (
    <section className="skills show-animate" id="skills">
      <h2 className="heading">
        My <span>Skills</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="skills-row">
        {/* Technical Skills Column */}
        <div className="skills-column">
          <h3 className="title">Technical Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>HTML <span>90%</span></h3>
                <div className="bar"><span style={{ width: "90%" }}></span></div>
              </div>

              <div className="progress">
                <h3>CSS <span>80%</span></h3>
                <div className="bar"><span style={{ width: "80%" }}></span></div>
              </div>

              <div className="progress">
                <h3>JavaScript <span>50%</span></h3>
                <div className="bar"><span style={{ width: "50%" }}></span></div>
              </div>

              <div className="progress">
                <h3>React <span>75%</span></h3>
                <div className="bar"><span style={{ width: "75%" }}></span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Skills Column */}
        <div className="skills-column">
          <h3 className="title">Professional Skills</h3>

          <div className="skills-box">
            <div className="skills-content">
              <div className="progress">
                <h3>Communication <span>70%</span></h3>
                <div className="bar"><span style={{ width: "70%" }}></span></div>
              </div>

              <div className="progress">
                <h3>Team Work <span>85%</span></h3>
                <div className="bar"><span style={{ width: "85%" }}></span></div>
              </div>

              <div className="progress">
                <h3>Creativity <span>80%</span></h3>
                <div className="bar"><span style={{ width: "80%" }}></span></div>
              </div>

              <div className="progress">
                <h3>Problem Solving <span>75%</span></h3>
                <div className="bar"><span style={{ width: "75%" }}></span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
