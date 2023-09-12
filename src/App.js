import React from 'react';


import Banner from './components/Banner';
import About from './components/About';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Conditions from './components/Conditions';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <Header />
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="term" element={<Conditions />} />
          </Route>
        </Routes>
      <Footer />
    </>
  );
}

export default App;