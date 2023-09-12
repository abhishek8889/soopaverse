import React from 'react';
import Banner from './components/Banner';
import About from './components/About';
import {Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Conditions from './components/Conditions';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const wrapComponent = (child)=>{
    return <><Header />{child} <Footer /></>
  }

  return (
    <>
        <Routes>
          <Route path="/" element={wrapComponent(<Home /> )} />
          <Route path="/about" element={wrapComponent(<About />)} />
          <Route path="/term" element={wrapComponent(<Conditions />)} />
        </Routes>
    </>
  );
}

export default App;