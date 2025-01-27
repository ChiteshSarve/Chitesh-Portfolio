import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const accessKey = process.env.REACT_APP_ACCESS_KEY;
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      setSubmitSuccess(true);
      setSubmitError(false);
      event.target.reset();
    } else {
      setSubmitSuccess(false);
      setSubmitError(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Get in Touch
          </span>
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 dark:text-white">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-pink-500 mr-3" size={20} />
                  <a href="mailto:chitesh2024@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                    chitesh2024@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="text-pink-500 mr-3" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">Nagpur</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-6 dark:text-white">Social Links</h3>
                <div className="flex space-x-4">
                  <a href="https://github.com/ChiteshSarve" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                    <Github size={24} />
                  </a>
                  <a href="https://linkedin.com/in/chiteshsarve" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                    <Linkedin size={24} />
                  </a>
                  <a href="https://www.instagram.com/chiteshsarve" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                    <Instagram size={24} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>

              {/* Success/Error Message */}
              {submitSuccess && (
                <div className="mt-4 text-green-500 font-semibold">Great! Your message has been successfully submitted. We'll get back to you as soon as possible.</div>
              )}
              {submitError && (
                <div className="mt-4 text-red-500 font-semibold">There was an error sending your message. Please try again later.</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
