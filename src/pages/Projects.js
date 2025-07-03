import React, { useEffect } from 'react';
import Layout from './components/Layout';
import pp1 from "../image/ppp/pp (1).png";
import pp2 from "../image/ppp/pp (2).png";
import pp3 from "../image/ppp/pp (3).png";
import pp4 from "../image/ppp/pp (4).png";
import pp5 from "../image/ppp/pp (5).png";
import pp6 from "../image/ppp/pp (6).png";
import pp7 from "../image/ppp/pp (7).png";
import pp8 from "../image/ppp/pp8.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

const projectData = [
  {
    title: "Paper Plane Wedding",
    subtitle: "Photography Company",
    description: "React , Tailwind CSS , Cloud Fare , GitHub , Form to Sheet + Email via Apps Script ",
    url: "https://www.paperplanewedding.com/",
    img: pp3,
    reverse: false
  },
  {
    title: "Millennial RK",
    subtitle: "Photography Company",
    description: "React, Tailwind CSS, Framer Motion, AOS, GitHub, Netlify",
    url: "https://millennialrk.netlify.app/",
    img: pp4,
    reverse: true
  },
  {
    title: "Rolling Frames",
    subtitle: "Photography Company",
    description: "HTML, Tailwind CSS, JavaScript, React, GitHub, Flowbite",
    url: "https://candidnovia.netlify.app/",
    img: pp5,
    reverse: false
  },
  {
    title: "Daily Eggs",
    subtitle: "Egg Company",
    description: "HTML, Tailwind CSS, JavaScript, React, GitHub, Figma",
    url: "https://mhddailyeggs.netlify.app/",
    img: pp6,
    reverse: true
  },
  {
    title: "To-Do App",
    subtitle: "Full Stack",
    description: "JavaScript, HTML, Tailwind CSS, GitHub, React, MongoDB, Express.js",
    url: "https://github.com/dusndjnks/client",
    img: pp8,
    reverse: false
  },
  {
    title: "LEGACY ELEGANCE",
    subtitle: "Ecommerce Site",
    description: "JavaScript, HTML, Tailwind CSS, GitHub, React (Full Stack)",
    url: "https://legacyelegance-mhd.netlify.app/",
    img: pp7,
    reverse: true
  },
  {
    title: "VS Code Clone",
    subtitle: "UI/UX Design",
    description: "JavaScript, HTML, Tailwind CSS, GitHub, React",
    url: "https://mhd-vscode-clone.netlify.app/",
    img: pp1,
    reverse: false
  },
  {
    title: "PATEK PHILIPPE",
    subtitle: "Ecommerce Site",
    description: "JavaScript, HTML, Tailwind CSS, React, GitHub, Netlify (Nested Route)",
    url: "https://mhdpatekphilippe.netlify.app/",
    img: pp2,
    reverse: true
  }
];

const Projects = () => {
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
      <div className="border-y-2 border-gray-800 bg-white"> {/* Thicker border */}
        <section className="md:py-24 py-10 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
              Project Portfolio
            </h1>
            <div className="w-24 h-0.5 bg-gray-800 mx-auto " /> 
          </div>

          <div className="max-w-7xl mx-auto md:space-y-20 sm:space-y-14 space-y-10">
            {projectData.map((project, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
                className={`flex flex-col ${project.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} 
                items-center gap-12 lg:gap-16 bg-white p-8 lg:p-10 rounded-xl shadow-sm 
                border-2 border-gray-300 hover:shadow-md transition-all duration-300`} 
              >
                <div className="w-full lg:w-1/2">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-auto max-h-[500px] object-contain rounded-lg border-2 border-gray-200 shadow-lg" /* Free size + border */
                    />
                  </a>
                </div>
                
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="space-y-3">
                    <span className="text-xs font-medium text-gray-600 tracking-widest uppercase">
                      {project.subtitle}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-normal text-gray-800">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 font-light leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors duration-200 border-b-2 border-gray-300 pb-1" /* Thicker underline */
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Projects;