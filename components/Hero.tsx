/* eslint-disable react/no-unescaped-entities */

import React from 'react';
import TabNavigation from './TabNavigation'; // Assuming this is for navigation within the hero

//<section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./images/hero.jpg')" }}> 

const Hero: React.FC = () => {
  return (
    <>
      <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('./images/hero.jpg')" }}> 
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          
          <TabNavigation />
          
        </div>
      </section>
    </>
  );
};

export default Hero;
