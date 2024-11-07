'use client';
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen px-4 py-8 bg-gradient-to-br from-white via-[#E9E5F4] to-white sm:px-8 sm:py-12"
    >
      {/* Header Section */}
      <motion.div 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-3xl font-bold text-blue-600 sm:text-4xl md:text-5xl">About Me</h1>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">Get to know more about my journey and skills.</p>
      </motion.div>

      {/* Introduction Section */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-4xl mx-auto"
      >
        <div className="p-8 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
          <h2 className="mb-6 text-2xl font-semibold text-gray-800 md:text-3xl">Hello, I am Manasseh</h2>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="mb-6 leading-relaxed text-gray-600">
              I am a software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.
            </p>
            <p className="mb-6 leading-relaxed text-gray-600">
              With a strong foundation in modern web technologies and a keen eye for detail, I specialize in creating seamless digital experiences that make a difference. My approach combines technical expertise with creative problem-solving to deliver solutions that exceed expectations.
            </p>
            <p className="mb-8 leading-relaxed text-gray-600">
              When I am not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of industry trends to deliver cutting-edge solutions.
            </p>
          </motion.div>
          
          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-white transition-all duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 hover:shadow-lg"
            >
              <span className="text-lg">View Resume</span>
              <svg
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-[#E9E5F4] to-purple-50 animate-gradient" />
        <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-white/20 to-transparent" />
      </div>
    </motion.div>
  );
};

export default AboutPage;
