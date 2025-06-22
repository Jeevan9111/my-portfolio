import React from "react";

function Home() {
  return (
    <section className="home show-animate" id="home">
      <div className="home-content">
        <h1>
          Hi, I'm <span>Jeevan Patidar</span>
          <span className="animate" style={{ "--i": 2 }}></span>
        </h1>
        <div className="text-animate">
          <h3>Web Developer</h3>
          <span className="animate" style={{ "--i": 3 }}></span>
        </div>
        <p>
          Building innovative real-time solutions with AI,React and Node. 
          <span className="animate" style={{ "--i": 4 }}></span>
        </p>
        <div className="btn-box">
          <a href="#contact" className="btn">
            Hire Me
          </a>
          <a href="https://wa.me/919111497381" className="btn" target="_blank" rel="noopener noreferrer">
          Let's Talk
          </a>

          <a href="/Jeevan Patidar Resume.pdf" download className="btn"><i className='bx bx-download' style={{ marginRight: '8px' }}>
          </i>Download Resume</a>
          <span className="animate" style={{ "--i": 5 }}></span>
        </div>
      </div>

      <div className="home-sci">
       <a href="mailto:jeevanpatidarmds123@gmail.com" target="_blank" rel="noopener noreferrer"><i className='bx bx-envelope'></i></a>
       <a href="https://github.com/Jeevan9111" target="_blank"><i className='bx bxl-github'></i></a>
       <a href="https://www.linkedin.com/in/jeevanpatidar/" target="_blank"><i className='bx bxl-linkedin-square'></i></a>
        <span className="animate" style={{ "--i": 6 }}></span>
      </div>

      <div className="home-imgHover"></div>
      <span className="animate home-img" style={{ "--i": 7 }}></span>
    </section>
  );
}

export default Home;
