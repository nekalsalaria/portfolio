import React, { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiSun, FiMoon } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { AiFillHeart } from "react-icons/ai";

const Hero = ({ darkMode, setDarkMode }) => {
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Load likes and like status from localStorage on mount
  useEffect(() => {
    const savedLikes = localStorage.getItem("likeCount");
    const likedStatus = localStorage.getItem("hasLiked");

    if (savedLikes) setLikes(parseInt(savedLikes));
    if (likedStatus === "true") setHasLiked(true);
  }, []);

  const handleLike = () => {
    if (!hasLiked) {
      const newLikes = likes + 1;
      setLikes(newLikes);
      setHasLiked(true);
      localStorage.setItem("likeCount", newLikes);
      localStorage.setItem("hasLiked", "true");

      // Show popup
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 2000); // Hide after 2s
    }
  };

  return (
    <section className="pt-28 pb-10 px-4 bg-white dark:bg-gray-900" id="hero">
      {/* Like popup */}
      {showPopup && (
        <div className="fixed top-8 right-8 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50 animate-bounce">
          You liked this portfolio!
        </div>
      )}

      <div className="relative max-w-md md:max-w-4xl mx-auto shadow-md rounded-2xl p-8 flex flex-col items-center md:flex-row md:items-start gap-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        
        {/* Like Button */}
        <div className="absolute top-4 right-4 flex items-center gap-1">
          <button
            onClick={handleLike}
            disabled={hasLiked}
            className={`text-2xl transition-transform ${
              hasLiked
                ? "text-red-500 cursor-not-allowed"
                : "text-red-500 hover:scale-110"
            }`}
            title={hasLiked ? "You already liked" : "Like"}
          >
            <AiFillHeart />
          </button>
          <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
            {likes}
          </span>
        </div>

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

          {/* Social + Dark Mode Toggle */}
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
            <a
              href="https://leetcode.com/u/nekalsingh987/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-100 dark:bg-gray-700 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
            >
              <SiLeetcode className="text-lg" />
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
