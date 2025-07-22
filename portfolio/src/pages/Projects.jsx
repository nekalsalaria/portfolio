import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import swapskillImg from "../assets/swapskill.png";
import foodImg from "../assets/fooddelivery.png";
import chatImg from "../assets/chatlyfy.png";

const fullStackProjects = [
  {
    title: "🔄 SwapSkill",
    image: swapskillImg,
    github: "https://github.com/nekalsalaria/SwapSkill.com",
    live: "https://swapskill-com-1.onrender.com",
    description:
      "A skill-sharing platform built with the MERN stack where students can connect to learn & teach skills. Includes requests, chat, auth, and state management.",
    features: [
      "🔐 JWT Auth, Protected Routes",
      "📨 Request/Offer System",
      "✅ Accept/Decline + 💬 Chat",
      "📁 MongoDB + Redux Toolkit",
      "📱 Fully Responsive",
    ],
    tech: "React, Redux Toolkit, Tailwind CSS, Node.js, Express.js, MongoDB, JWT",
  },
  {
    title: "🍔 Food Delivery Website",
    image: foodImg,
    github: "https://github.com/nekalsalaria",
    live: "https://food-delivery-hazel-iota.vercel.app",
    description:
      "Modern food delivery web app with search, category filter, cart functionality, and real-time toast notifications.",
    features: [
      "🏠 Home + Filter + Search",
      "🛒 Cart + Toast Alerts",
      "📱 Fully Responsive Design",
      "🔄 Redux + Context API",
      "🎨 Tailwind CSS Styling",
    ],
    tech: "React, Redux, Context API, Tailwind CSS, React Toastify",
  },
  {
    title: "💬 Chatlyfy",
    image: chatImg,
    github: "https://github.com/nekalsalaria",
    live: "https://chatlyfy-com.onrender.com",
    description:
      "A real-time WhatsApp-style chat app built with the MERN stack and Socket.io. Includes live typing, user status, and image upload.",
    features: [
      "✅ 1:1 Messaging via Socket.io",
      "💬 Typing Indicators + Status",
      "📁 Cloudinary Image Upload",
      "🔄 Redux Toolkit State",
      "📱 Fully Responsive",
    ],
    tech: "React, Redux, Tailwind CSS, Node.js, Express.js, MongoDB, Socket.io, JWT, Cloudinary",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("fullstack");

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Projects
        </h2>

        {/* Tabs */}
        <div className="flex gap-6 mb-10">
          <button
            onClick={() => setActiveTab("fullstack")}
            className={`px-4 py-2 rounded-md font-medium transition ${
              activeTab === "fullstack"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            🔧 Projects
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`px-4 py-2 rounded-md font-medium transition ${
              activeTab === "design"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
            }`}
          >
            🎨 Designs
          </button>
        </div>

        {/* Content */}
        {activeTab === "design" ? (
          <div className="text-center text-gray-700 dark:text-gray-300 text-xl font-semibold mt-10">
            🎨 Design Projects Coming Soon...
          </div>
        ) : (
          fullStackProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-10 flex flex-col md:flex-row gap-6 transition-colors duration-300"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-60 rounded-lg object-contain"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 md:mb-0">
                    {project.title}
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm flex items-center gap-1"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm flex items-center gap-1"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  </div>
                </div>

                <p className="text-gray-700 dark:text-gray-300 text-[15px] mt-3 leading-relaxed">
                  {project.description}
                </p>

                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-[15px] mt-4 space-y-1">
                  {project.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>

                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-semibold text-gray-800 dark:text-white">
                    Tech Stack:
                  </span>{" "}
                  {project.tech}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
