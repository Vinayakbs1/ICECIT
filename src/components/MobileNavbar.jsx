import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'lucide-react';

const colorPalette = {
  primary: '#2f6690',
  secondary: '#3a7ca5',
  accent1: '#d9dcd6',
  accent2: '#16425b',
  accent3: '#81c3d7',
  lightBlue: '#E9F1FA',
  brightBlue: '#00ABE4',
  white: '#FFFFFF',
  darkLightBlue: '#C5D8E9'
};

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/committees', label: 'Committees' },
    { path: '/call-for-papers', label: 'Call for Papers' },
    { path: '/registration', label: 'Registration' },
    { path: '/contact-us', label: 'Contact Us' },
    { path: '/about-us', label: 'About Us' }
  ];

  return (
    <div className="relative md:hidden"> {/* Ensures it's hidden on larger screens */}
      {/* Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-3 focus:outline-none hover:bg-[#2f6690] rounded-lg transition-colors duration-200"
        style={{ backgroundColor: colorPalette.primary, color: colorPalette.white }}
      >
        <Menu size={28} color={colorPalette.white} />
      </button>

      {/* Full-Screen Dropdown Menu */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backgroundColor: colorPalette.darkLightBlue,
          filter: 'brightness(90%)'
        }}
      >
        <nav className={`flex flex-col items-center p-4 space-y-4 transition-transform duration-300 transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className="space-y-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded-md transition-colors duration-200 text-center ${
                    isActive(link.path)
                      ? 'bg-[#00ABE4] text-white'
                      : 'text-gray-800 hover:bg-[#2f6690] hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          
          {/* Cancel Button as the last option */}
          <button
            onClick={() => setIsOpen(false)}
            className="mt-4 px-4 py-2 rounded-md bg-[#2f6690] text-white"
            aria-label="Cancel"
          >
            Cancel
          </button>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavbar;