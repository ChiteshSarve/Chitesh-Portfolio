import React from 'react';
import { Award, ExternalLink, CheckCircle } from 'lucide-react';

// Importing certificate PDFs from the assets folder
import googleCloudCert from '../assets/google-cloud-certification.pdf';
import cppCert from '../assets/cpp-certification.png';
import javaCert from '../assets/java-bootcamp-certification.pdf';
import sqlCert from '../assets/sql-bootcamp-certification.pdf';
import pythonCert from '../assets/python-certification.png';
import htmlCssCert from '../assets/html-css-bootstrap-certification.pdf';

const certificationData = [
  {
    name: 'Google Cloud Professional Cloud Architect Certification',
    issuer: 'Udemy',
    link: googleCloudCert,
  },
  {
    name: 'C++ Complete Course',
    issuer: 'Scaler Academy',
    link: cppCert,
  },
  {
    name: 'JAVA Bootcamp From Zero to Hero',
    issuer: 'Udemy',
    link: javaCert,
  },
  {
    name: 'SQL Bootcamp: From Zero to Hero',
    issuer: 'Udemy',
    link: sqlCert,
  },
  {
    name: 'Python Certification Course: Master the Essentials',
    issuer: 'Scaler Academy',
    link: pythonCert,
  },
  {
    name: 'HTML, CSS & Bootstrap for Beginners',
    issuer: 'Udemy',
    link: htmlCssCert,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
            Certifications
          </span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center mb-8">
            <Award className="text-purple-500 mr-3" size={32} />
            <h3 className="text-2xl font-semibold dark:text-white">Professional Achievements</h3>
          </div>
          <div className="space-y-6">
            {certificationData.map((cert, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-purple-500"
              >
                <div className="flex items-start">
                  <CheckCircle className="text-green-500 mr-4 mt-1" size={24} />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-lg dark:text-white mb-1">
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                      >
                        {cert.name}
                        <ExternalLink size={18} className="ml-2" />
                      </a>
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">{cert.issuer}</p>
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

export default Certifications;
