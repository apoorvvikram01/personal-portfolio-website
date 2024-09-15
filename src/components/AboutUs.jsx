import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

function AboutUs() {
  const cld = new Cloudinary({ cloud: { cloudName: 'dopmbuods' } });
  


  return (

    <div className="bg-gray-900 text-white min-h-screen p-8">
      <div className="container mx-auto">
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Apoorv Vikram</h1>
          <img
            src='https://res.cloudinary.com/dopmbuods/image/upload/v1726410797/agwvtmcqfeqem23nu9ea.jpg'  // Replace with your picture URL
            alt="Apoorv Vikram"
            className="mx-auto rounded-full w-40 h-40 object-cover "
          />
        </div>

        {/* About Me Description */}
        <div className="text-center mb-12">
          <p className="text-lg max-w-2xl mx-auto">
            Hi, I'm Apoorv Vikram, a passionate developer and tech enthusiast. I
            love working with modern technologies and continuously improving my
            skills. My focus is on creating efficient, user-friendly
            applications and solving complex problems with innovative solutions.
            I'm always eager to learn new things and collaborate with others in
            the tech community to build great things together.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkillCard skill="JavaScript" />
            <SkillCard skill="React" />
            <SkillCard skill="TailwindCSS" />
            <SkillCard skill="Node.js" />
            <SkillCard skill="Git & GitHub" />
            <SkillCard skill="HTML & CSS" />
            {/* Add more skills as needed */}
          </div>
        </div>
      </div>
    </div>
  );
}

// SkillCard Component
function SkillCard({ skill }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-xl font-semibold mb-2">{skill}</h3>
    </div>
  );
}

export default AboutUs;
