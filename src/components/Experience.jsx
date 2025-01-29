import React from 'react';
import { Briefcase, Calendar, ExternalLink } from 'lucide-react';

import paloAltoCert from '../assets/Palo_Alto_Certificate.pdf';
import aimlCert from '../assets/Google_AIML_Certificate.pdf';
import androidCert from '../assets/Google_Android_Certificate.pdf';

const experiences = [
  {
    company: 'ICEICO Technologies Pvt. Ltd., Nagpur',
    position: 'Web Developer Intern',
    period: 'Mar 2024 - Present',
    description: [
      'Designed and optimized responsive web pages using HTML5, CSS3, JavaScript, and Bootstrap',
      'Collaborated with teams on real-world projects in a dynamic tech environment',
      'Gained hands-on experience in frontend web development within the IT products sector'
    ]
  },
  {
    company: 'Palo Alto Networks (Eduskills)',
    position: 'Cybersecurity Virtual Internship',
    period: 'Apr 2024 - Jun 2024',
    pdf: paloAltoCert,
    description: [
      'Gained hands-on experience in analyzing and mitigating cybersecurity threats',
      'Developed skills in threat detection, network security, and firewall management using Palo Alto tools',
      'Enhanced proficiency in configuring advanced firewalls and securing networks'
    ]
  },
  {
    company: 'Google (Eduskills)',
    position: 'AIML Virtual Internship',
    period: 'Jan 2024 - Mar 2024',
    pdf: aimlCert,
    description: [
      'Developed skills in object detection and image classification using TensorFlow Lite for mobile app deployment',
      'Gained experience integrating neural networks for image recognition and visual product search',
      'Enhanced proficiency in building and training custom AI models for real-world applications'
    ]
  },
  {
    company: 'Google (Eduskills)',
    position: 'Android Developer Virtual Internship',
    period: 'Sep 2023 - Nov 2023',
    pdf: androidCert,
    description: [
      'Gained hands-on experience with app development processes, including wireframe design in Figma, layouts, and navigation',
      'Developed Android applications using Kotlin and integrated AI/ML APIs like Vision API and Natural Language API',
      'Enhanced proficiency in mobile app functionalities such as data persistence, work manager, and internet connectivity'
    ]
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Experience
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold dark:text-white flex items-center">
                      <Briefcase className="text-purple-500 mr-2" size={20} />
                      {exp.position}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 text-sm flex items-center mt-2 md:mt-0">
                    <Calendar className="mr-1" size={16} />
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 mb-4">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {/* Conditionally render "View Certificate" button */}
                {exp.pdf && (
                  <a
                    href={exp.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    View Certificate
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
