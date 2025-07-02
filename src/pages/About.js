import React, { useEffect } from 'react';
import Layout from './components/Layout';
import img3 from "../image/img1.jpg";
import { FiMail, FiPhone, FiCode, FiCpu, FiLayout } from 'react-icons/fi';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
  }, []);

  return (
    <Layout>
      <div className="bg-white font-sans">
        {/* Hero Section */}
        <section className="py-20 px-6 max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-2/5" data-aos="fade-right">
              <img 
                src={img3} 
                alt="Muhammed Affan" 
                className="w-full rounded-xl object-cover shadow-lg transition-all hover:shadow-xl"
              />
            </div>
            
            <div className="w-full lg:w-3/5 space-y-8" data-aos="fade-left">
              <div>
                <h1 className="text-4xl font-light text-gray-900 tracking-tight">
                  Muhammed Affan
                </h1>
                <div className="h-px w-20 bg-gray-400 my-6" />
                <p className="text-lg text-gray-700 leading-relaxed">
                  Full Stack Developer specializing in clean, efficient web applications built with modern technologies.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-5">
                <div className="flex-1 min-w-[250px] p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <FiPhone className="text-gray-700 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-base text-gray-900 font-medium">7736999627</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 min-w-[250px] p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <FiCode className="text-gray-700 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Projects</p>
                      <p className="text-base text-gray-900 font-medium">8 Completed</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-[250px] p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <FiMail className="text-gray-700 text-xl mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs text-gray-600 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-base text-gray-900 font-medium break-words">mhdaffan0000@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16" data-aos="fade-up">
              <h2 className="text-3xl font-light text-gray-900 mb-3">
                Technical Skills
              </h2>
              <div className="h-px w-20 bg-gray-400 mx-auto" />
              <p className="text-lg text-gray-700 mt-6">
                Technologies I work with
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-aos="fade-up">
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <FiLayout className="text-gray-700 text-2xl mr-4" />
                  <h3 className="text-xl font-light text-gray-900">
                    Frontend Development
                  </h3>
                </div>
                <ul className="space-y-3 text-base text-gray-700">
                  {['React', 'JavaScript', 'Tailwind CSS', 'HTML/CSS', 'Next.js'].map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center mb-6">
                  <FiCpu className="text-gray-700 text-2xl mr-4" />
                  <h3 className="text-xl font-light text-gray-900">
                    Backend Development
                  </h3>
                </div>
                <ul className="space-y-3 text-base text-gray-700">
                  {['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Mongoose'].map((skill, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-gray-500 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
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