import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Conditions from './components/Conditions';
import Header from './components/Header';
import Footer from './components/Footer';
import spinnerImage from './images/spinner.png';

function LoadingSpinner() {
  return (
    <div className="spinner-overlay">
      <img src={spinnerImage} alt="Loading..." className="spinner-image" />
      <div className="loading-text">Loading..</div>
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

  const wrapComponent = (child) => (
    <div>
      <Header />
      {isLoading && <LoadingSpinner />}
      {child}
      <Footer />
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={wrapComponent(<Home />)} />
        <Route path="/about" element={wrapComponent(<About />)} />
        <Route path="/term" element={wrapComponent(<Conditions />)} />
      </Routes>
    </>
  );
}

export default App;
