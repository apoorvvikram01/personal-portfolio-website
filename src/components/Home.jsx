import { useEffect } from "react";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing icons from react-icons


const certifications = [
  { id: 1, title: "React Developer", issuer: "Coursera", date: "July 2023" },
  { id: 2, title: "Full Stack Developer", issuer: "Udemy", date: "May 2023" },
  { id: 3, title: "JavaScript Specialist", issuer: "Codecademy", date: "March 2023" },
];

const projects = [
  { id: 1, title: "Portfolio Website", description: "A personal portfolio showcasing my projects.", link: "#" },
  { id: 2, title: "E-commerce App", description: "A full-stack e-commerce application with React and Node.js.", link: "#" },
  { id: 3, title: "Chat Application", description: "A real-time chat application using Socket.io.", link: "#" },
];

function Home  ()  {
 
  return (

    <div className="bg-gray-900 text-gray-300 min-h-screen py-10">
      {/* Main Profile Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Left Side: Profile Picture and Social Buttons */}
        <div className="md:w-1/3 flex flex-col items-center mb-10 md:mb-0">
          <img
            src='https://res.cloudinary.com/dopmbuods/image/upload/v1726410797/agwvtmcqfeqem23nu9ea.jpg'
            alt="Profile"
            className="rounded-full w-48 h-48 border-4 border-cyan-500 shadow-lg mb-6"
          />
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/apoorv-vikram-2177b7278/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-cyan-500 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/apoorvvikram01"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white p-3 rounded-full hover:bg-cyan-500 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Right Side: Description */}
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-4xl font-bold text-white mb-4">Hi, I'm Apoorv Vikram</h1>
          <p className="text-lg">
            I'm a passionate Full Stack Developer with a focus on creating clean, efficient, and user-friendly web applications. 
            My expertise lies in JavaScript, React, Node.js, and other modern technologies. I'm always eager to learn new skills 
            and work on exciting projects.
          </p>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="container mx-auto mb-12">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Top Certifications</h2>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-center"
            >
              <h3 className="text-xl text-white font-semibold mb-2">{cert.title}</h3>
              <p className="text-gray-400 mb-1">{cert.issuer}</p>
              <p className="text-gray-500">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Projects</h2>
        <div className="flex flex-wrap justify-center space-x-4 space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-full md:w-1/3 flex flex-col items-center"
            >
              <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-cyan-500 hover:text-cyan-400 transition duration-300"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
