import React from "react";

const caseStudies = [
  {
    title: "🔄 SwapSkill – Skill Sharing Platform",
    problem:
      "College students lacked a way to exchange skills like design for development help.",
    solution:
      "Built a MERN stack platform with JWT authentication, request system, and chat feature for skill exchange.",
    impact:
      "20+ students tested the platform; feedback was positive for usability and concept.",
    techStack: "React, Redux Toolkit, Node.js, MongoDB, JWT, Tailwind CSS",
  },
  {
    title: "💬 Chatlyfy – Real-Time Chat App",
    problem:
      "No simple and modern chat app for project collaboration during college projects.",
    solution:
      "Created a WhatsApp-style chat app using Socket.io, image uploads, and typing indicators.",
    impact:
      "Helped teammates communicate faster during hackathons. Deployed version used in 2 internal events.",
    techStack:
      "React, Redux, Node.js, Express.js, MongoDB, Socket.io, Cloudinary",
  },
];

const CaseStudies = () => {
  return (
    <section
      id="casestudies"
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-10">
          Impact
        </h2>

        {caseStudies.map((study, index) => (
          <div
            key={index}
            className="mb-10 bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow-md"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {study.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Problem:
              </span>{" "}
              {study.problem}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold text-green-600 dark:text-green-400">
                Solution:
              </span>{" "}
              {study.solution}
            </p>

            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                Impact:
              </span>{" "}
              {study.impact}
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-sm mt-3">
              <span className="font-semibold text-gray-900 dark:text-white">
                Tech Stack:
              </span>{" "}
              {study.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
