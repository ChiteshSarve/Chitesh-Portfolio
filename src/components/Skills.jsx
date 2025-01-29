import React from 'react';
import { Code, Server, PenToolIcon as Tool } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: <Code className="text-blue-500" size={24} />,
    skills: ['HTML5', 'CSS', 'Bootstrap','Javascript', 'Tailwind CSS', 'React.js']
  },
  {
    title: 'Backend',
    icon: <Server className="text-green-500" size={24} />,
    skills: ['Node.js','Javascript','PostgreSQL']
  },
  {
    title: 'Tools & Others',
    icon: <Tool className="text-purple-500" size={24} />,
    skills: ['Git', 'Github', 'Google Cloud Platform','VS Code']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-red-500">
            Skills
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold ml-2 dark:text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
