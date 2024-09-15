import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        
        {/* Left Side: Name and Description */}
        <div className="text-center md:text-left">
          <h2 className="text-xl text-white font-bold">Apoorv Vikram</h2>
          <p className="mt-2 text-sm">Full Stack Developer | JavaScript, React, Node.js</p>
        </div>

        {/* Middle: Quick Links with NavLink */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              `hover:text-white transition duration-300 ${
                isActive ? "text-white" : "text-gray-400"
              }`
            }
          >
            Contact
          </NavLink>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/apoorvvikram01"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/apoorv-vikram-2177b7278/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      {/* Bottom Divider and Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>© {new Date().getFullYear()} Apoorv Vikram. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


