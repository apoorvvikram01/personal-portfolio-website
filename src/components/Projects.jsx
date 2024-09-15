import React from 'react';

function Projects() {
  // Array of project objects
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio website built with React and TailwindCSS to showcase my projects and skills.',
      link: 'https://github.com/apoorvvikram/portfolio',
    },
    {
      title: 'E-commerce Platform',
      description:
        'A full-featured e-commerce platform using Node.js and MongoDB, with user authentication and payment integration.',
      link: '',
    },
    {
      title: 'Chat Application',
      description:
        'A real-time chat application using Socket.io and Express.js with support for multiple chat rooms.',
      link: 'https://github.com/apoorvvikram/chat-app',
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

// ProjectCard Component
function ProjectCard({ project }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md transition duration-300 hover:shadow-lg hover:bg-gray-700">
      <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>

      {/* Show link if it exists */}
      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-500 hover:text-cyan-400 transition duration-300 underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}

export default Projects;
