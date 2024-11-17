import React from 'react'
import Layout from './components/Layout'
import img from "../image/img.jpg"
import { Link } from 'react-router-dom'
import Affan from "../image/Affan.CV.2024.pdf"

const Home = () => {
  return (
    <Layout>
        <div>
        <div className='flex justify-between px-64  h-full py-20 items-center  text-white bg-gray-800'>
                <div className='flex flex-col'>
                    <div className=''>
                    <h1 className='text-2xl'>Hello I'm</h1>
                    <h1 className='text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 '>Muhammed Affan</h1>
                    <h1 className='text-3xl pb-5'>Software Developer</h1>
                    </div>
                    {/* <h1 className='w-[600px]'>A motivated and hardworking Software Developer with a focus on JavaScript, eager to begin a career in tech. Skilled in JavaScript fundamentals and actively learning frameworks like React and Node.js. Known for problem-solving abilities, a commitment to clean code, and a passion for continuous learning. Excited to contribute to a collaborative team and develop innovative solutions while expanding technical skills.</h1> */}
                  <div className='py-3'>
                    <div className='flex'>
                        <a href={Affan} download="resume" className="download btn text-2xl px-10 py-2 border-2 border-black rounded-full mx-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-gradient-to-l from-indigo-500 via-purple-500 to-pink-500" >Download</a>
                        <Link to="contact" className='text-2xl px-5 py-2 border-2 border-black rounded-full mx-2 bg-black text-white'>Contact Info</Link>
                    </div>
                    
                  </div>
                </div>
                <div>
                    <img src={img} alt="" className='w-[400px] rounded-2xl' />
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Home