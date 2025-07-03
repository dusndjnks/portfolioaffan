import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const location = useLocation();

  // Auto-close menu on route change
  React.useEffect(() => {
    setExtendNavbar(false);
  }, [location.pathname]);

  return (
    <header className="bg-gray-200 font-serif z-50 w-full shadow-md sticky top-0">
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 flex justify-between items-center md:h-24 h-20">
        {/* Logo */}
        <Link to="/" className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          Affan
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-xl md:text-2xl text-gray-700">
          <Link to="/about" className="hover:text-black transition">About</Link>
          <Link to="/experience" className="hover:text-black transition">Experience</Link>
          <Link to="/project" className="hover:text-black transition">Projects</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </div>

        {/* Toggle Button (Mobile) */}
        <div className="md:hidden text-gray-800 z-50" onClick={() => setExtendNavbar(!extendNavbar)}>
          {extendNavbar ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-24 left-0 w-full bg-gray-200 z-40 overflow-hidden transition-all duration-500 ease-in-out ${
          extendNavbar ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center space-y-6 py-6 text-xl text-gray-800">
          <Link to="/about" className="hover:text-black transition">About</Link>
          <Link to="/experience" className="hover:text-black transition">Experience</Link>
          <Link to="/project" className="hover:text-black transition">Projects</Link>
          <Link to="/contact" className="hover:text-black transition">Contact</Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
