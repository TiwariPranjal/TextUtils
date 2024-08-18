
import './App.css';
import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';
import About from './components/About';
import React, { useState } from 'react';
import Alerts from './components/Alerts';

import {
  BrowserRouter as Router,
  Route,
  Routes, // Updated import
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000); // Clear alert after 2 seconds
  }

  const toggle = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#333"; // Dark background
      document.body.style.color = "#fff"; // Light text color
      showAlert("Dark Mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff"; // Light background
      document.body.style.color = "#000"; // Dark text color
      showAlert("Light Mode enabled", "success");
    }
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggle} />
        <Alerts mode={mode} alert={alert} /> {/* Pass mode if needed for Alerts */}
        <div className="container my-5">
          <Routes> {/* Updated from Switch to Routes */}
            <Route path="/about" exact element={<About />} />
            <Route path="/" exact element={<TextFrom heading="Try TextUtils -word counter, character counter, remove extra spaces" mode={mode} showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;


