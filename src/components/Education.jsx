import React from 'react';
import { GraduationCap, Calendar, School } from 'lucide-react';

const educationData = [
  {
    degree: 'Bachelor of Technology in Information Technology',
    institution: 'St. Vincent Pallotti College of Engineering and Technology, Nagpur',
    period: '2021 - 2025'
  },
  {
    degree: 'Higher Secondary Education (Class XII)',
    institution: 'J. M. Patel College of Arts Commerce and Science, Bhandara',
    period: '2019 - 2020'
  },
  {
    degree: 'Secondary Education (Class X)',
    institution: 'Maharishi Vidya Mandir, Tumsar',
    period: '2017 - 2018'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
            Education
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <GraduationCap className="text-blue-500 mr-3" size={32} />
            <h3 className="text-2xl font-semibold dark:text-white">Academic Journey</h3>
          </div>
          <div className="space-y-8">
            {educationData.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-start">
                  <School className="text-teal-500 mr-4 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold text-xl dark:text-white mb-2">{edu.degree}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={16} className="mr-2" />
                      {edu.period}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

