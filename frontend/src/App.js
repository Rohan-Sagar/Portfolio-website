import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from "./components/NavBar/index";
import Home from "./components/Home";
import Dropdown from "./components/NavBar/swiper";

function App() {
  return (
    <>
    <NavBar/>
    <Router>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
