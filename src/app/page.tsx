import Hero from '@/components/Hero';
import Navbar from '@/components/navbar';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* Add other sections of the page here */}
    </div>
  );
};

export default HomePage;