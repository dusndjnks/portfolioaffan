import React, { useEffect } from 'react';
import Layout from './components/Layout';
import img3 from "../image/img1.jpg";
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-in-out-quint',
      offset: 120
    });
  }, []);

  return (
    <Layout>
      <div className="border-y-2 border-gray-800 bg-white">
        <section className="py-16 px-6 sm:px-8">
          {/* Header Section */}
          <div className="max-w-3xl mx-auto text-center mb-12" data-aos="fade-up">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-3">
              About Me
            </h1>
            <p className="text-md text-gray-600">A quick introduction</p>
            <div className="w-20 h-0.5 bg-gray-800 mx-auto mt-4" />
          </div>

          {/* Profile Section */}
          <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 mb-20" data-aos="fade-up">
            <div className="w-full lg:w-2/5">
              <img 
                src={img3} 
                alt="Muhammed Affan" 
                className="w-full h-auto rounded-lg shadow-md border-2 border-gray-300"
              />
            </div>
            <div className="w-full lg:w-3/5 space-y-4">
              <h2 className="text-xl md:text-2xl font-medium text-gray-800">
                Hi, I'm Muhammed Affan
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed">
                I'm a creative and self-taught software developer who loves turning ideas into clean, responsive web experiences. From frontend interfaces with React and Tailwind CSS to backend logic with Node.js and MongoDB, I build projects that reflect both simplicity and impact. This portfolio is a collection of everything I enjoy — smooth UI, thoughtful design, and expressive code.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-20" data-aos="fade-up">
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-300 flex flex-col items-center text-center">
              <EmailIcon className="!w-6 !h-6 text-gray-700 mb-2" />
              <h3 className="text-xs font-medium text-gray-600 tracking-wider uppercase mb-1">
                Email
              </h3>
              <p className="text-sm text-gray-800">mhdaffan0000@gmail.com</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-300 flex flex-col items-center text-center">
              <WorkIcon className="!w-6 !h-6 text-gray-700 mb-2" />
              <h3 className="text-xs font-medium text-gray-600 tracking-wider uppercase mb-1">
                Projects
              </h3>
              <p className="text-sm text-gray-800">8 Completed</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border-2 border-gray-300 flex flex-col items-center text-center">
              <PhoneIcon className="!w-6 !h-6 text-gray-700 mb-2" />
              <h3 className="text-xs font-medium text-gray-600 tracking-wider uppercase mb-1">
                Phone
              </h3>
              <p className="text-sm text-gray-800">7736999627</p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="max-w-5xl mx-auto" data-aos="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-3">
                My Skills
              </h2>
              <p className="text-md text-gray-600">Technical expertise</p>
              <div className="w-20 h-0.5 bg-gray-800 mx-auto mt-4" />
            </div>

            <div className="flex flex-col lg:flex-row gap-6 justify-center">
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300 w-full lg:w-1/2">
                <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                  Frontend
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-center justify-center">HTML</li>
                  <li className="flex items-center justify-center">CSS</li>
                  <li className="flex items-center justify-center">Tailwind CSS</li>
                  <li className="flex items-center justify-center">React</li>
                  <li className="flex items-center justify-center">JavaScript</li>
                  <li className="flex items-center justify-center">Git</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-gray-300 w-full lg:w-1/2">
                <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                  Backend
                </h3>
                <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
                  <li className="flex items-center justify-center">Node.js</li>
                  <li className="flex items-center justify-center">Express.js</li>
                  <li className="flex items-center justify-center">MongoDB</li>
                  <li className="flex items-center justify-center">EmailJS</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;