import React, { useState, useEffect, useMemo } from 'react';
import Layout from './components/Layout';
import img from "../image/img.jpg";
import { Link } from 'react-router-dom';
import Affan from "../image/Affan-Resume-2025.pdf";
import { motion } from "framer-motion";

const Home = () => {
  const roles = useMemo(() => [
    'Software Developer',
    'Frontend Developer',
    'MERN Stack Developer'
  ], []);

  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 80;
    const delayBetweenRoles = 1500;

    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length === currentRole.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenRoles);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentRoleIndex, isDeleting, roles]);

  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-900 text-white px-5 sm:px-20 md:px-14 lg:px-32 xl:px-56 2xl:px-72 py-10 md:py-14 lg:py-20 min-h-screen">
        {/* Image Section */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <img
            src={img}
            alt="Muhammed Affan"
            className="w-[280px] md:w-[300px] lg:w-[350px] rounded-2xl shadow-lg border-2 border-gray-700 hover:border-gray-500 transition-all duration-300"
          />
        </motion.div>

        {/* Text + Buttons */}
        <motion.div 
          className="flex-1 flex flex-col items-start text-left space-y-4"
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div>
            <motion.p 
              className="text-lg md:text-xl font-medium text-gray-400"
              whileHover={{ scale: 1.02 }}
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Muhammed Affan
            </motion.h1>
            
            <div className="h-12 md:h-16 flex items-center">
              <motion.div
                key={currentRoleIndex}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl md:text-2xl font-medium text-gray-300"
              >
                {displayText}
              </motion.div>
            </div>
          </div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href={Affan}
              download="Affan.mernstack.CV.2025.pdf"
              className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-600 text-white transition-all duration-300 font-medium"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Download Resume
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="contact"
                className="px-6 py-2 rounded-lg border border-gray-400 bg-transparent hover:bg-gray-800 text-white transition"
              >
                Contact Info
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Home;