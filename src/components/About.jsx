import React from "react";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            About Me
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer currently honing my skills in building web applications.
              I specialize in JavaScript technologies and have experience working with the MERN stack.
              With a strong foundation in creating interactive, efficient, and user-friendly applications,
              I focus on delivering impactful digital solutions.


              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              Beyond development, I enjoy solving aptitude problems, exploring data structures
              and algorithms, and working on innovative projects. Whether it's contributing to
              cloud-based technologies, experimenting with AI, or enhancing my technical expertise,
              I'm always eager to learn and grow.
              </p>
            </div>
            <div className="w-full md:w-auto">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="font-semibold mb-4 dark:text-white text-xl">
                  Quick Info
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="text-blue-500 mr-3" size={20} />
                    <span className="dark:text-gray-300">
                      Nagpur, Maharashtra
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-blue-500 mr-3" size={20} />
                    <span className="dark:text-gray-300">
                      Fresher
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Briefcase className="text-blue-500 mr-3" size={20} />
                    <span className="dark:text-gray-300">
                      Full Stack Developer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
