import React from 'react';


import Banner from './components/Banner';
import About from './components/About';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Conditions from './components/Conditions';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/term" element={<Conditions />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;