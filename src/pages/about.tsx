import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen px-4 sm:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">About Me</h1>
        <p className="text-gray-600 mt-4">Get to know more about my journey and skills.</p>
      </div>

      {/* Introduction Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between mb-12">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/profile2.png"
            alt="Profile"
            width={400}
            height={400}
            className="rounded-full mx-auto lg:mx-0"
          />
        </div>
        <div className="lg:w-1/2 lg:pl-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hello, I am Manasseh</h2>
          <p className="text-gray-600 mb-4">
            I am a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.
          </p>
          <p className="text-gray-600">
            I am a quick learner and a team player that gets the job done. I am also a strong communicator and a problem solver who is always looking for new challenges.
          </p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">JavaScript</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">React</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Node.js</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">TypeScript</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">CSS</span>
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">HTML</span>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
