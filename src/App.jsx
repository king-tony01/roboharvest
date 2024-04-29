import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './Nav/Nav';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import SpeakersPage from './Pages/SpeakersPage';
import SchedulePage from './Pages/SchedulePage';
import RegistrationPage from './Pages/RegistrationPage';
import VenuePage from './Pages/VenuePage';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/venue" element={<VenuePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
