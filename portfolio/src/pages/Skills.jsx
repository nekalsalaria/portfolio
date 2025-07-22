import React from 'react';

const skills = [
  'React.js', 'JavaScript', 'Tailwind CSS', 'GSAP',
  'Node.js', 'Express.js', 'JWT', 'MongoDB', 'SQL',
  'Redux', 'Context API',
  'Postman', 'Figma', 'Git', 'GitHub'
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* Heading aligned left */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Skills</h2>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-50 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-200 px-4 py-2 rounded-full shadow-sm hover:scale-105 transition"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
