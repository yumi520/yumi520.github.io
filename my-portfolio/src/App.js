// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './pages/About';
import Footer from './components/Footer';
import Sunney from './pages/Sunney';
import Spotify from './pages/SocialSpotify.js';
import CETR from './pages/CETR.js';
import Groupify from './pages/Groupify.js';
import Code from './pages/Code.jsx';
import Design from './pages/Design.jsx';
import Playground from './pages/Playground.jsx';
import ColorBlobs from './components/shared/ColorBlobs';

function AppContent() {
  return (
    <div className="App">
      <ColorBlobs />
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/about" element={<About />} />
        <Route path="/code" element={<Code />} />
        <Route path="/design" element={<Design />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/sunney" element={<Sunney />} />
        <Route path="/spotify" element={<Spotify />} />
        <Route path="/cetr" element={<CETR />} />
        <Route path="/groupify" element={<Groupify />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
