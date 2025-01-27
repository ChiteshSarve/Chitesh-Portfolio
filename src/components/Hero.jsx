import React from "react";
import { ArrowRight } from "lucide-react";

import resume from "../assets/Chitesh_Sarve_Resume.pdf";
import chiteshImage from "../img/Chitesh-ph.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src={chiteshImage}
            alt="Chitesh Sarve"
            className="w-40 h-40 rounded-full mx-auto mb-8 object-cover shadow-lg border-4 border-white dark:border-gray-800"
          />
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              Chitesh Sarve
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up animation-delay-200">
            Innovative Full Stack Developer passionate about crafting scalable web applications and cutting-edge digital solutions
          </p>
          <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-400">
            <a
              href="#contact"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center transition-colors"
            >
              Get in touch
              <ArrowRight className="ml-2" size={20} />
            </a>
            <a
              href={resume}
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-lg transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
