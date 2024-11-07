'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import skillsData from '@/components/skills.json';

const SkillsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="flex items-center justify-center gap-3 mb-4 text-4xl font-bold text-white md:text-5xl">
            <span className="text-3xl">💻</span>
            Skills & <span className="text-yellow-400">Abilities</span>
          </h1>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {skillsData.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              className="flex flex-col items-center justify-center p-6 transition-all duration-300 bg-navy-900 bg-opacity-40 backdrop-blur-sm rounded-xl hover:bg-opacity-50 hover:transform hover:scale-105"
            >
              <div className="relative w-12 h-12 mb-3">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <p className="text-sm font-medium text-center text-white">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
