import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  // Function to check if a route is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-[#E9F1FA] py-4 px-8 shadow-md hidden md:block">
      <ul className="flex gap-12 list-none items-center justify-center m-0 p-0">
        {/* Links with dynamic styling */}
        <li>
          <Link
            to="/"
            className={`font-bold text-base ${
              isActive('/') ? 'text-[#00ABE4] text-lg' : 'text-gray-900'
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/committees"
            className={`font-bold text-base ${
              isActive('/committees') ? 'text-[#00ABE4] text-lg' : 'text-gray-900'
            }`}
          >
            Committees
          </Link>
        </li>
        <li>
          <Link
            to="/call-for-papers"
            className={`font-bold text-base ${
              isActive('/call-for-papers') ? 'text-[#00ABE4] text-lg' : 'text-gray-900'
            }`}
          >
            Call for Papers
          </Link>
        </li>
        <li>
          <Link
            to="/registration"
            className={`font-bold text-base ${
              isActive('/registration') ? 'text-[#00ABE4] text-lg' : 'text-gray-900'
            }`}
          >
            Registration
          </Link>
        </li>
        <li>
          <Link
            to="/contact-us"
            className={`font-bold text-base ${
              isActive('/contact-us') ? 'text-[#00ABE4] text-lg' : 'text-gray-900'
            }`}
          >
            Contact Us
          </Link>
        </li>
        <li>
          <Link
            to="/about-us"
            className={`font-bold text-base ${
              isActive('/about-us') ? 'text-[#00ABE4] text-lg' : 'text-gray-900'
            }`}
          >
            About Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
