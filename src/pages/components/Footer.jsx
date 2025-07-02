import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-300 h-24 flex items-center justify-center font-serif">
      <div className="flex gap-6 sm:gap-10 md:gap-20 text-lg sm:text-xl md:text-2xl text-gray-800">
        <a
          href="https://www.instagram.com/_a_ffan_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-300"
        >
          Instagram
        </a>
        <a
          href="https://www.linkedin.com/in/muhammed-affan-87456724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-300"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/dusndjnks"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-colors duration-300"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
