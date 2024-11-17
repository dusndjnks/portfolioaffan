import React from 'react'
import Layout from './components/Layout'
import pp1 from "../image/pp1.png"
import pp2 from "../image/pp2.png"
import pp3 from "../image/pp3.png"
import pp4 from "../image/pp4.png"


const Projects = () => {
  return (
    <Layout>
        <div className='bg-gray-300'>
            <div className='w-screen   flex items-center justify-center  '>
                <h1 className='text-6xl text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pb-20 pt-10 '>Projects</h1>
            </div>

      <div className='px-64 flex flex-col gap-14 pb-20'>
      <div className=''>
          <div className='flex justify-center gap-32 items-center'>
            <div>
              <h1 className='text-lg text-gray-600'>UI/UX Design</h1>
              <h className='text-5xl underline text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-blue-600'>VS Code Clone</h>
              <h1 className='text-lg text-blue-800'>JavaScript,HTML,Tailwind CSS,Github,React</h1>
            </div>
            <div>
              <a href="https://mhd-vscode-clone.netlify.app/">
              <img src={pp3} alt="" className='h-[350px] bg-blue-500 p-2' />
              </a>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='flex justify-center gap-32 items-center'>
          <div>
            <a href="https://dusndjnks.github.io/RouterDom/">
            <img src={pp2} alt="" className='h-[350px] bg-yellow-300 p-2' />
            </a>
            </div>
            <div>
              <h1 className='text-lg text-yellow-600'>Ecommerce Site</h1>
              <h1 className='text-5xl underline text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-600'>Dress Store</h1>
              <h1 className='text-lg text-green-800'>JavaScript,HTML,Tailwind CSS,Github,React(Full Stack)</h1>
            </div>
          </div>
        </div>
     
        <div className=''>
          <div className='flex justify-center gap-32 items-center'>
            <div>
              <h1 className='text-lg text-red-800'>Ecommerce Site</h1>
              <h1 className='text-5xl underline text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-800'>Watch Store</h1>
              <h1 className='text-lg text-orange-800'>JavaScript,HTML,Tailwind CSS,React,Github,Netlify(Nested Route)</h1>
            </div>
            <div>
              <a href="https://mhdpatekphilippe.netlify.app/">
              <img src={pp1} alt="" className='h-[350px] bg-orange-300 p-2' />
              </a>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='flex justify-center gap-32 items-center'>
          <div>
            <a href="https://mhd-plant-homepage.netlify.app/">
            <img src={pp4} alt="" className='h-[350px] bg-green-500 p-2' />
            </a>
            </div>
            <div className='pr-10'>
              <h1 className='text-lg text-blue-600'>UI/UX Design</h1>
              <h1 className='text-5xl underline text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-800'>Plant Store</h1>
              <h1 className='text-lg text-green-800'>JavaScript,HTML,Tailwind CSS,Github</h1>
            </div>
          </div>
        </div>
      </div>
</div>
    </Layout>
  )
}

export default Projects