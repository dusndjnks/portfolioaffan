import React, { useEffect } from 'react';
import Layout from './components/Layout';
import ser from "../image/service.jpg";
import drinks from "../image/drinks.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const experiences = [
  {
    title: "Divegrid",
    role: "Frontend Developer",
    duration: "3 Months",
    description: "Developed responsive UI components using React.js and Tailwind CSS. Collaborated with backend teams to build scalable features.",
    image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg",
  },
  {
    title: "Westleys Qissa Cafe",
    role: "Service, Bartender",
    duration: "6 Months",
    description: "Served beverages, managed customer interactions, and ensured high standards of hygiene and hospitality in a busy environment.",
    image: drinks,
  },
  {
    title: "Hakuna Matata Cafe",
    role: "Service",
    duration: "3 Months",
    description: "Assisted guests with orders, maintained clean dining areas, and supported kitchen staff during rush hours.",
    image: ser,
  },
];

const Experience = () => {
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
        <section className="py-24 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center mb-20" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
              Experience
            </h1>
            <div className="w-24 h-0.5 bg-gray-800 mx-auto mt-6" />
          </div>

          <div className="max-w-7xl mx-auto space-y-28">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className={`flex flex-col ${index % 2 ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
                items-center gap-12 lg:gap-16 bg-white p-8 lg:p-10 rounded-xl shadow-sm 
                border-2 border-gray-300 hover:shadow-md transition-all duration-300`}
              >
                <div className="w-full lg:w-1/2">
                  <img
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-auto max-h-[500px] object-contain rounded-lg border-2 border-gray-200 shadow-lg"
                  />
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-3">
                    <h2 className="text-2xl md:text-3xl font-normal text-gray-800">
                      {exp.title}
                    </h2>
                    <p className="text-lg font-semibold text-gray-600">
                      {exp.role}
                    </p>
                    <p className="text-gray-700 font-medium">
                      Duration: {exp.duration}
                    </p>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Experience;