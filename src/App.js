import React from 'react';


import Banner from './components/Banner';
import About from './components/About';
import { BrowserRouter, Routes,  Route } from "react-router-dom";
import Home from './components/Home';
import Conditions from './components/Conditions';


function App() {
  return (
    <>
 
      <BrowserRouter>
        <Routes>
        <Route path="about" element={<About />}/>
        <Route path="/" element={<Banner />}/>
        <Route path="term" element={<Conditions />}/>

        
        </Routes>
      </BrowserRouter>
      <Home />
    </>
  );
}

export default App;