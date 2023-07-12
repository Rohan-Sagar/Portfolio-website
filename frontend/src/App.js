import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/index";
import Home from "./components/Home";

function App() {
  const [isBackgroundDark, setIsBackgroundDark] = useState(true);

  const experienceSection = document.getElementById("experience-section");
  const projectSection = document.getElementById("projects-section");

  useEffect(() => {
    const handleScroll = () => {
      if (experienceSection && projectSection) {
        if (experienceSection?.getBoundingClientRect().top - 60 <= 0) {
          setIsBackgroundDark(false);
          console.log(isBackgroundDark);
          if (projectSection?.getBoundingClientRect().top - 60 <= 0) {
            setIsBackgroundDark(true);
          }
        } else {
          setIsBackgroundDark(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <NavBar isBackgroundDark={isBackgroundDark} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
