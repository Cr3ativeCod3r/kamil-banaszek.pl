
import React from 'react';
import ThreeCanvas from './ThreeCanvas';
import { FaAnglesDown } from "react-icons/fa6";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <ThreeCanvas />
      <div className="relative z-10 p-6 flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 leading-tight">
          <span className="block">Building Solutions With</span>
          <span className="block text-sky-400">Full Stack Development</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
          I'm a dedicated full stack developer and IT engineering student passionate about creating robust web applications and innovative digital experiences.
        </p>
        <a
          href="#projects"
          className="bg-sky-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-sky-600 transition-transform duration-300 transform hover:scale-105"
        >
          View My Work
        </a>
      </div>


      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center text-white hover:text-sky-400 transition-colors duration-300">
          <div className="animate-bounce">
            <FaAnglesDown className="w-8 h-8 font-xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
