import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Importing icons for the mobile menu

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-gray-900 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Left Side - Your Name */}
          <div className="text-white text-3xl font-bold">
            Apoorv Vikram
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle navigation"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>

          {/* Right Side - Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white text-lg font-medium transition duration-300 ${
                  isActive ? 'border-b-2 border-cyan-500' : ''
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white text-lg font-medium transition duration-300 ${
                  isActive ? 'border-b-2 border-cyan-500' : ''
                }`
              }
            >
              About 
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white text-lg font-medium transition duration-300 ${
                  isActive ? 'border-b-2 border-cyan-500' : ''
                }`
              }
            >
              Contact 
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-gray-300 hover:text-white text-lg font-medium transition duration-300 ${
                  isActive ? 'border-b-2 border-cyan-500' : ''
                }`
              }
            >
              Projects
            </NavLink>
          </div>
        </div>

        {/* Mobile Menu - Visible when isOpen is true */}
        <div
          className={`md:hidden bg-gray-800 ${
            isOpen ? 'block' : 'hidden'
          } transition-all duration-300`}
        >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-gray-300 hover:text-white text-lg font-medium transition duration-300 p-4 ${
                isActive ? 'border-b-2 border-cyan-500' : ''
              }`
            }
            onClick={toggleMenu} // Close menu when a link is clicked
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-gray-300 hover:text-white text-lg font-medium transition duration-300 p-4 ${
                isActive ? 'border-b-2 border-cyan-500' : ''
              }`
            }
            onClick={toggleMenu}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-gray-300 hover:text-white text-lg font-medium transition duration-300 p-4 ${
                isActive ? 'border-b-2 border-cyan-500' : ''
              }`
            }
            onClick={toggleMenu}
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `block text-gray-300 hover:text-white text-lg font-medium transition duration-300 p-4 ${
                isActive ? 'border-b-2 border-cyan-500' : ''
              }`
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Header;
