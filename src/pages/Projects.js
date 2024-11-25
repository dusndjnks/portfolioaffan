import React from 'react'
import Layout from './components/Layout'
import pp1 from "../image/pp1.png"
import pp2 from "../image/pp2.png"
import pp3 from "../image/pp3.png"
import pp4 from "../image/pp4.png"
import pp5 from "../image/pp5.jpg"


const Projects = () => {
  return (
    <Layout>
      <hr className='border-2 border-black'/>
<div className='bg-gray-300'>
            <div className='w-screen   flex items-center justify-center  '>
                <h1 className='lg:text-6xl md:text-5xl text-4xl  font-semibold pt-5 pb-10 font-extrabold  '>Projects</h1>
            </div>

    <div className='2xl:px-64 xl:px-56 lg:px- md:px-20 sm:px-16 s:px-12 px-4  flex flex-col gap-20 pb-20 '>

    <div className=''>
          <div className='md:flex-row flex flex-col justify-center 2xl:gap-32 xl:gap-28 lg:gap-16 md:gap-14 sm:gap-8 gap-4 l items-center'>
          <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
            <a href="https://affan-portfolio03.netlify.app/">
            <img src={pp5} alt="" className='lg:h-[350px] bg-purple-600 p-2' />
            </a>
            </div>
            <div className='pr-10'>
              <h1 className='lg:text-lg md:text-md text-sm text-blue-600'>UI/UX Design</h1>
              <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl underline  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>PORTFOLIO</h1>
              <h1 className='lg:text-lg md:text-md text-sm text-pink-600'>JavaScript,HTML,Tailwind CSS,Github</h1>
            </div>
          </div>
        </div>


          <div className='md:flex-row flex flex-col-reverse	 justify-center 2xl:gap-32 xl:gap-18 lg:gap-8 md:gap-14 sm:gap-8 gap-4 l items-center'>
            <div>
              <h1 className='lg:text-lg md:text-md text-sm text-gray-600'>UI/UX Design</h1>
              <h className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl underline  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-blue-600 '>VS Code Clone</h>
              <h1 className='lg:text-lg md:text-md text-sm text-blue-800'>JavaScript,HTML,Tailwind CSS,Github,React</h1>
            </div>
            <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
              <a href="https://mhd-vscode-clone.netlify.app/">
              <img src={pp3} alt="" className='lg:h-[350px]  bg-blue-500 p-2' />
              </a>
            </div>
          </div>



        <div className=''>
          <div className='md:flex-row flex flex-col justify-center 2xl:gap-32 xl:gap-18 lg:gap-16 md:gap-14 sm:gap-8 gap-4 l items-center'>
          <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
            <a href="https://dusndjnks.github.io/RouterDom/">
            <img src={pp2} alt="" className='lg:h-[350px] bg-yellow-300 p-2' />
            </a>
            </div>
            <div>
              <h1 className='lg:text-lg md:text-md text-sm text-yellow-600'>Ecommerce Site</h1>
              <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl underline font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-600'>LEGACY ELEGANCE</h1>
              <h1 className='lg:text-lg md:text-md text-sm text-green-800'>JavaScript,HTML,Tailwind CSS,Github,React(Full Stack)</h1>
            </div>
          </div>
        </div>
     
          <div className='md:flex-row flex flex-col-reverse justify-center 2xl:gap-32 xl:gap-28 lg:gap-16 md:gap-14 sm:gap-8 gap-4 l items-center'>
            <div>
              <h1 className='lg:text-lg md:text-md text-sm text-red-800'>Ecommerce Site</h1>
              <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl underline    font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-800'>PATEK PHILIPPE</h1>
              <h1 className='lg:text-lg md:text-md text-sm text-orange-800'>JavaScript,HTML,Tailwind CSS,React,Github,Netlify(Nested Route)</h1>
            </div>
            <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
              <a href="https://mhdpatekphilippe.netlify.app/">
              <img src={pp1} alt="" className='lg:h-[350px] bg-orange-300 p-2' />
              </a>
            </div>
          </div>

        <div className=''>
          <div className='md:flex-row flex flex-col justify-center 2xl:gap-32 xl:gap-28 lg:gap-16 md:gap-14 sm:gap-8 gap-4 l items-center'>
          <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
            <a href="https://mhd-plant-homepage.netlify.app/">
            <img src={pp4} alt="" className='lg:h-[350px] bg-green-500 p-2' />
            </a>
            </div>
            <div className='pr-10'>
              <h1 className='lg:text-lg md:text-md text-sm text-blue-600'>UI/UX Design</h1>
              <h1 className='lg:text-6xl md:text-5xl sm:text-4xl text-3xl underline  font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-800'>MONSTERA</h1>
              <h1 className='lg:text-lg md:text-md text-sm text-green-800'>JavaScript,HTML,Tailwind CSS,Github</h1>
            </div>
          </div>
        </div>


        

    </div>
</div>



<hr className='border-2 border-black'/>
    </Layout>
  )
}

export default Projects