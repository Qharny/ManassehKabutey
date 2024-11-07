import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import AboutPage from '@/pages/about';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutPage />
      {/* Add other sections of the page here */}
    </div>
  );
};

export default HomePage;