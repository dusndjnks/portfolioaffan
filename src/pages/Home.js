import React from 'react'
import Layout from './components/Layout'
import img from "../image/img.jpg"
import { Link } from 'react-router-dom'
import Affan from "../image/Affan.CV.2024.pdf"

const Home = () => {
  return (
    <Layout>
        <div className='md:flex-row justify-between flex flex-col 2xl:px-72 xl:px-56 lg:px-32 md:px-14 sm:px-20 px-10 h-full lg:py-20 md:py-14 py-10 items-center  text-white bg-gray-800 gap-10'>
                <div>
                    <img src={img} alt="" className='lg:w-[350px] md:w-[300px] sm:w-[250px] w-[220px]  rounded-2xl' />
                </div>
                <div className='flex flex-col'>
                    <div className=''>
                    <h1 className='md:text-2xl text-lg'>Hello I'm</h1>
                    <h1 className='lg:text-5xl md:text-4xl s:text-3xl text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>Muhammed Affan</h1>
                    <h1 className='md:text-3xl text-xl pb-5'>Software Developer</h1>
                    </div>
                    <div className='flex py-3'>
                        <a href={Affan} download="resume" className="lg:text-2xl md:text-xl text-lg lg:px-6 md:px-4 px-3 py-2 flex items-center justify-center  text-center rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500" >Download</a>
                        <Link to="contact" className='lg:text-2xl md:text-xl text-lg  lg:px-5 md:px-4 px-2     py-2 border-2 border-black rounded-full mx-2 bg-black text-white'>Contact Info</Link>
                    </div>
                </div>
            </div>
    </Layout>
  )
}

export default Home