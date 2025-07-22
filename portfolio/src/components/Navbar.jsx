import React from 'react';
import { Link } from 'react-scroll';

const navItems = [
  { name: 'About', to: 'hero' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-sm z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center">
        <ul className="flex gap-8 text-gray-500 dark:text-gray-300 font-medium text-sm md:text-base">
          {navItems.map((item, index) => (
            <li key={index} className="relative group">
              <Link
                to={item.to}
                smooth={false}
                duration={0}
                offset={-50}
                className="cursor-pointer hover:text-black dark:hover:text-white transition"
              >
                {item.name}
              </Link>

              {/* 🔥 Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-1000 ease-in-out"></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
