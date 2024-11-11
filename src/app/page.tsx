import Education from '@/components/Education';
import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import AboutPage from '@/pages/about';
import SkillsPage from '@/pages/skills';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutPage />
      <SkillsPage />
      <Education />
      {/* Add other sections of the page here */}
    </div>
  );
};

export default HomePage;