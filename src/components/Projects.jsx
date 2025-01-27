import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Import project images from the img folder
import PortfolioImage from '../img/Portfolio.png';
import handSolveAIImage from '../img/Handsolve.jpg';
import noteKeeperImage from '../img/NoteKeeper.jpg';
import artziImage from '../img/Artzi.png';

const projects = [
  {
    title: 'Portfolio',
    description: 'A dynamic portfolio website built using React to showcase Skills, Projects, Experience, Education and Certifications. Features responsive design and modular components for seamless navigation and user engagement.Implements a theme toggle for enhanced user experience and personalization.',
    image: PortfolioImage,
    technologies: ['React', 'Tailwind CSS', 'JavaScript'],
    github: '',
    demo: ''
  },
  {
    title: 'HandSolve AI',
    description: 'It is an innovative application combining computer vision, hand gesture recognition, and AI to solve mathematical problems in real-time. It has hand tracking and gesture input using Python.',
    image: handSolveAIImage,
    technologies: ['Python', 'OpenCV', 'Google Generative AI', 'Streamlit'],
    github: 'https://github.com/ChiteshSarve/HandSolve-AI.git',
    demo: 'https://www.linkedin.com/posts/chiteshsarve_innovation-ai-educationtech-activity-7269250394646532097-61q3?utm_source=share&utm_medium=member_desktophttps://demo.com'
  },
  {
    title: 'Note Keeper Application',
    description: 'Note Keeper is a simple Java application designed to help users write and manage notes, Demonstrates Java and Swing GUI toolkit with essential note-taking functionalities.',
    image: noteKeeperImage,
    technologies: ['JAVA', 'Java Swing', 'AWT (Abstract Window Toolkit)'],
    github: 'https://github.com/ChiteshSarve/Note-Keeper-App.git'
  },
  {
    title: 'ARTZI Website',
    description: 'Web application showcasing various artwork and drawing styles. Engaging platform for exploring art styles, learning techniques, and purchasing/creating sketches.',
    image: artziImage,
    technologies: ['Html', 'Css', 'Javascript', 'Bootstrap'],
    github: 'https://github.com/ChiteshSarve/Artzi-Website.git',
    demo: 'https://chiteshsarve.github.io/Artzi-Website/'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                    >
                      <ExternalLink size={20} className="mr-2" />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
