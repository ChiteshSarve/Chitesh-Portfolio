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

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const result = await response.json();

      if (result.success) {
        setSubmitSuccess(true);
        setSubmitError(false);
        event.target.reset();
      } else {
        setSubmitSuccess(false);
        setSubmitError(true);
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      setSubmitSuccess(false);
      setSubmitError(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
            Get in Touch
          </span>
        </h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
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
                {[
                  { href: "https://github.com/ChiteshSarve", icon: Github },
                  { href: "https://linkedin.com/in/chiteshsarve", icon: Linkedin },
                  { href: "https://www.instagram.com/chiteshsarve", icon: Instagram },
                ].map(({ href, icon: Icon }, index) => (
                  <a key={index} href={href} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                <input type="text" id="name" name="name" required placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input type="email" id="email" name="email" required placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
                <textarea id="message" name="message" required rows={4} placeholder="Write your message here..." className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-pink-500 dark:focus:ring-pink-400 focus:border-pink-500 dark:focus:border-pink-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>
              </div>
              <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
                Send Message
              </button>
            </form>

            {/* Success/Error Message with Animation */}
            {submitSuccess && (
              <div className="mt-4 text-green-500 font-semibold animate-fade-in">
                ✅ Your message has been sent successfully! I'll get back to you soon.
              </div>
            )}
            {submitError && (
              <div className="mt-4 text-red-500 font-semibold animate-fade-in">
                ❌ Something went wrong. Please try again later.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
