import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 dark:text-gray-300">
            © 2025 Chitesh Sarve. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#about"
                  className="text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-pink-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-pink-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-pink-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
