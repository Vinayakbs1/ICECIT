import React from 'react';
import MobileNavbar from '../components/MobileNavbar';
import { Link } from 'react-router-dom';

const colorPalette = {
  primary: '#2f6690',
  secondary: '#3a7ca5',
  accent1: '#E9F1FA', // Background color
  accent2: '#16425b',
  accent3: '#81c3d7',
  lightBlue: '#E9F1FA',
  brightBlue: '#00ABE4',
  white: '#FFFFFF'
};

function Title() {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: colorPalette.accent1,
        padding: '1.5rem',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <Link
          to="/" // This is the homepage link
          className="flex-shrink-0 transform hover:scale-105 transition-transform duration-300"
        >
          <img
            src="http://icsses.sit.ac.in/assets/sit-removebg-preview-Dgeiue2e.png"
            alt="SIT Logo"
            className="h-24 w-auto" // Increased height from h-20 to h-24
            style={{ minWidth: '100px' }} // Ensures minimum width for responsiveness
          />
        </Link>

        {/* Text Section */}
        <div
          className="text-center flex-grow px-4"
          style={{
            color: colorPalette.primary,
            minWidth: '200px', // Ensures adequate space for wrapping text
          }}
        >
          <h1
            className="text-xl md:text-3xl font-bold tracking-tight uppercase"
            style={{
              whiteSpace: 'normal', // Allows text wrapping
              wordBreak: 'break-word', // Handles long words properly
            }}
          >
            Siddaganga Institute of Technology, Tumakuru
          </h1>
        </div>

        {/* Mobile Navbar */}
        <div className="flex-shrink-0 relative">
          <MobileNavbar />
        </div>
      </div>
    </div>
  );
}

export default Title;
