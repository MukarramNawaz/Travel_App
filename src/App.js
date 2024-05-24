import React from 'react';
import Navbar from './components/Navbar';
import MainImage from './components/MainImage';
import MidPlaces from './components/MidPlaces';
import Features from './components/Features';
import Footer from './components/Footer';
import './css/style.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainImage />
      <MidPlaces />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
