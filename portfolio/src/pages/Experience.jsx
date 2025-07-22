import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Experience</h2>

        {/* Experience Card */}
        <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">Frontend Web Developer</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">CODTECH INTERNSHIPS · Internship</p>
            </div>
            <div className="mt-2 md:mt-0 text-sm text-gray-500 dark:text-gray-400">
              Jul 2024 – Aug 2024 · <span className="font-medium text-black dark:text-white">2 months</span>
            </div>
          </div>

          {/* Location */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">📍 India · Remote</p>

          {/* Description */}
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-[15px]">
            <li>
              Built 3+ responsive frontend apps using <span className="font-semibold text-blue-600 dark:text-blue-400">React.js</span> & <span className="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS</span>, improving user experience.
            </li>
            <li>
              Used <span className="font-semibold text-green-600 dark:text-green-400">Redux</span> & <span className="font-semibold text-green-600 dark:text-green-400">Context API</span> for efficient state management in complex components.
            </li>
            <li>
              Added smooth animations with <span className="font-semibold text-purple-600 dark:text-purple-400">GSAP</span> and applied responsive UI principles.
            </li>
            <li>
              Worked in a remote team environment and contributed to creative and scalable web projects.
            </li>
          </ul>

          {/* Tech Stack */}
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-800 dark:text-white">Tech Stack:</span> React.js, Tailwind CSS, Redux, Context API, GSAP
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
