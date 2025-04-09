import React from 'react'
import Layout from './components/Layout'
import pp1 from "../image/pp1.png"
import pp2 from "../image/pp2.png"
import pp3 from "../image/pp3.png"
import pp5 from "../image/pp10.png"
import pp6 from "../image/pp9.png"
import pp7 from "../image/pp8.png"


const Projects = () => {
  return (
    <Layout>
      <hr className='border-2 border-black'/>
        <div className='bg-gray-300'>
            <div className='flex items-center justify-center  '>
                <h1 className='lg:text-6xl md:text-5xl text-4xl  font-semibold pt-8 pb-10'>Projects</h1>
            </div>

          <div className='md:px-20 sm:px-16 px-6 flex flex-col gap-24 pb-20 bg-gray-300'>

              <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
                <div className="text-center md:text-left">
                  <h2 className="text-sm md:text-base text-fuchsia-500 font-medium">React.js</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 to-fuchsia-950 uppercase">Rolling Frames</h1>
                  <p className="text-sm md:text-base text-fuchsia-800 mt-2">HTML, Tailwind CSS, JavaScript, React, GitHub, Flowbite</p>
                </div>
                <div className="transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <a href="https://candidnovia.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={pp7} alt="Rolling Frames" className="lg:h-[350px] bg-fuchsia-800 p-2 rounded-lg shadow-md" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-56">
                <div className="transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <a href="https://mhddailyeggs.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={pp6} alt="Daily Eggs" className="lg:h-[350px] bg-[#2ba9f2] p-2 rounded-lg shadow-md" />
                  </a>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-sm md:text-base text-[#3093CC] font-medium">React.js</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#3093CC] to-blue-900 uppercase">Daily Eggs</h1>
                  <p className="text-sm md:text-base text-blue-900 mt-2">HTML, Tailwind CSS, JavaScript, React, GitHub, Figma</p>
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
                <div className="text-center md:text-left">
                  <h2 className="text-sm md:text-base text-gray-600 font-medium">Full Stack</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold underline bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-gray-900">To-Do App</h1>
                  <p className="text-sm md:text-base text-gray-800 mt-2">JavaScript, HTML, Tailwind CSS, GitHub, React, MongoDB, Express.js</p>
                </div>
                <div className="transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <a href="https://github.com/dusndjnks/client">
                    <img src={pp5} alt="To-Do App" className="lg:h-[350px] bg-gray-500 p-2 rounded-lg shadow-md" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
                <div className="transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <a href="https://legacyelegance-mhd.netlify.app/">
                    <img src={pp2} alt="Legacy Elegance" className="lg:h-[350px] bg-yellow-300 p-2 rounded-lg shadow-md" />
                  </a>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-sm md:text-base text-yellow-600 font-medium">Ecommerce Site</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold underline bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-600">LEGACY ELEGANCE</h1>
                  <p className="text-sm md:text-base text-green-800 mt-2">JavaScript, HTML, Tailwind CSS, GitHub, React (Full Stack)</p>
                </div>
              </div>

              <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20">
                <div className="text-center md:text-left">
                  <h2 className="text-sm md:text-base text-gray-600 font-medium">UI/UX Design</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold underline bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-blue-600">VS Code Clone</h1>
                  <p className="text-sm md:text-base text-blue-800 mt-2">JavaScript, HTML, Tailwind CSS, GitHub, React</p>
                </div>
                <div className="transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <a href="https://mhd-vscode-clone.netlify.app/">
                    <img src={pp3} alt="VS Code Clone" className="lg:h-[350px] bg-blue-500 p-2 rounded-lg shadow-md" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-10 md:gap-16 lg:gap-20 xl:gap-64">
              <div className="transition-transform duration-300 transform hover:-translate-y-1 hover:scale-105">
                  <a href="https://mhdpatekphilippe.netlify.app/">
                    <img src={pp1} alt="Patek Philippe" className="lg:h-[350px] bg-orange-300 p-2 rounded-lg shadow-md" />
                  </a>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-sm md:text-base text-red-800 font-medium">Ecommerce Site</h2>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold underline bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-800">PATEK PHILIPPE</h1>
                  <p className="text-sm md:text-base text-orange-800 mt-2">JavaScript, HTML, Tailwind CSS, React, GitHub, Netlify (Nested Route)</p>
                </div>
              </div>

            </div>

</div>



<hr className='border-2 border-black'/>
    </Layout>
  )
}

export default Projects