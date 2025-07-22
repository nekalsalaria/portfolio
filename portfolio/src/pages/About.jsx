import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
        <p className="text-[17px] text-gray-800 dark:text-gray-300 leading-relaxed">
          I'm a <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Web Developer</span> skilled in React, Node.js, MongoDB, Tailwind CSS & more.
        </p>
        <p className="text-[17px] text-gray-800 dark:text-gray-300 mt-3 leading-relaxed">
          Also a <span className="font-semibold text-green-600 dark:text-green-400">Competitive Programmer</span> with 400+ LeetCode problems solved (Rating: 1450+).
        </p>
        <p className="text-[17px] text-gray-800 dark:text-gray-300 mt-3 leading-relaxed">
          I love <span className="font-semibold text-purple-600 dark:text-purple-400">writing technical blogs</span> & story-style content.
        </p>
        <p className="text-[17px] text-gray-800 dark:text-gray-300 mt-3 leading-relaxed">
          <span className="font-semibold text-red-600 dark:text-red-400">Open to:</span> internships, freelance work & full-stack opportunities. Let’s connect 💻🚀
        </p>
      </div>
    </section>
  );
};

export default About;
