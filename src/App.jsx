// App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Committees from './pages/Committees';
import AboutUs from './pages/AboutUs';
import Registration from './pages/Registration';
import CallForPapers from './pages/CallForPapers';
import ContactUs from './pages/ContactUs';
import Title from './pages/Title';
import Navbar from './components/Navbar';  // Keep Navbar only for medium and large screens
import MobileNavbar from './components/MobileNavbar';  // Mobile Navbar for small screens only

function App() {
  return (
    <>
      {/* Title Section */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Title />
        {/* MobileNavbar is only shown on small screens */}
      
      </div>

      {/* Navbar for medium and large screens */}
      <div className="hidden md:block"> {/* Ensures Navbar is hidden on small screens */}
        <Navbar />
      </div>

      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/committees" element={<Committees />} />
        <Route path="/call-for-papers" element={<CallForPapers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </>
  );
}

export default App;
