import React from "react";
import profilePic from "/images/jeevanpic.jpg"; // This works since the image is in the public folder

function About() {
  return (
    <section className="about show-animate" id="about">
      <h2 className="heading">
        About <span>Me</span>
        <span className="animate scroll" style={{ "--i": 1 }}></span>
      </h2>

      <div className="about-img">
        <img src={profilePic} alt="About" />
        <span className="circle-spin"></span>
        <span className="animate scroll" style={{ "--i": 2 }}></span>
      </div>

      <div className="about-content">
  <h3>
    Web Developer
    <span className="animate scroll" style={{ "--i": 3 }}></span>
  </h3>
  <div className="about-text">
    <p>
      I am a Computer Science graduate with strong technical skills in web development and problem-solving.
      During my internship, I worked on real-time frontend projects using React.js.
      I regularly sharpen my skills through DSA practice in Java.
      I believe in continuous improvement, teamwork, and learning from challenges.
      <span className="animate scroll" style={{ "--i": 4 }}></span>
    </p>
  </div>
</div>

    </section>
  );
}

export default About;
