import React from "react";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

const Hero = ({ darkMode, setDarkMode }) => {
  return (
    <section className="pt-28 pb-10 px-4 bg-white dark:bg-gray-900" id="hero">
      <div className="max-w-md md:max-w-4xl mx-auto shadow-md rounded-2xl p-8 flex flex-col items-center md:flex-row md:items-start gap-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <img
          src={profile}
          alt="Nekal Singh"
          className="w-28 h-28 object-cover rounded-xl"
        />
        <div className="w-full flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-3xl font-extrabold whitespace-nowrap">
            Nekal Singh Salaria
          </h1>
          <p className="text-m text-gray-600 dark:text-gray-300 mt-1 font-semibold">
            Full-Stack Developer & Competitive Programmer
          </p>

          {/* Dark Mode Button */}
          <div className="flex gap-3 mt-3">
            <a
              href="https://github.com/nekalsalaria"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/nekalsingh/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
              title="Toggle Dark Mode"
            >
              {darkMode ? (
                <FiSun className="text-lg text-yellow-400" />
              ) : (
                <FiMoon className="text-lg text-blue-500" />
              )}
            </button>
          </div>

          {/* Location & Email */}
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-4">
            <GoLocation className="text-md" />
            <span className="font-medium">Jaipur, India</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 mt-1">
            <MdEmail className="text-md" />
            <span className="break-all font-medium">
              nekalsingh987@gmail.com
            </span>
          </div>

          {/* Bio */}
          <p className="text-sm text-gray-700 dark:text-gray-200 mt-4 leading-relaxed font-semibold">
            Whether it's building full-stack web apps or solving DSA challenges,
            I love merging logic with creativity to craft robust digital
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
