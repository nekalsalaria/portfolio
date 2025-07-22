import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-12 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 dark:text-gray-300">
        <p className="mb-3 md:mb-0">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800 dark:text-white">
            Nekal Singh Salaria
          </span>{" "}
          • All rights reserved.
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/nekalsalaria"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nekalsingh/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:nekalsingh987@gmail.com"
            className="hover:text-red-600 dark:hover:text-red-400 transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
