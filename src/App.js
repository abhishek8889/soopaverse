import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Conditions from "./components/Conditions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import spinnerImage from "./images/spinner.png";

function LoadingSpinner() {
  return (
    <div className="spinner-overlay">
      <img src={spinnerImage} alt="Loading..." className="spinner-image" />
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <Router>
      <Header />
      {isLoading && <LoadingSpinner />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/term" element={<Conditions />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;