import React from "react";
import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6 border-b-4 border-blue-500 inline-block">
          Let’s Connect 🤝
        </h2>

        <p className="text-gray-700 dark:text-gray-300 text-lg mb-10 max-w-2xl leading-relaxed">
          I’m always open to exciting opportunities — internships, freelance work, or tech collaborations. Reach out and let’s build something impactful together!
        </p>

        <div className="space-y-5 text-gray-800 dark:text-gray-200 font-medium text-[17px]">
          {/* Email */}
          <div className="flex items-center gap-3 hover:text-blue-600 transition">
            <MdEmail className="text-xl" />
            <a href="mailto:nekalsingh987@gmail.com">nekalsingh987@gmail.com</a>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-3 hover:text-blue-600 transition">
            <FaLinkedin className="text-xl" />
            <a
              href="https://www.linkedin.com/in/nekalsingh/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin.com/in/nekalsingh
            </a>
          </div>

          {/* GitHub */}
          <div className="flex items-center gap-3 hover:text-black dark:hover:text-white transition">
            <FaGithub className="text-xl" />
            <a
              href="https://github.com/nekalsalaria"
              target="_blank"
              rel="noreferrer"
            >
              github.com/nekalsalaria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
