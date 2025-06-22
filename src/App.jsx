import React, { useEffect } from "react"; // ✅ Add useEffect here
import './assets/style.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Messages from "./components/Messages";

function App() {
  useEffect(() => {
    const menuIcon = document.querySelector("#menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
      menuIcon.onclick = () => {
        menuIcon.classList.toggle("bx-x");
        navbar.classList.toggle("active");
      };
    }

    // Optional: auto-close menu on scroll
    const handleScroll = () => {
      menuIcon?.classList.remove("bx-x");
      navbar?.classList.remove("active");
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
      {/* <Messages /> */}
    </>
  );
}

export default App;
