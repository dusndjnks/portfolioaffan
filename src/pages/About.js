import React from 'react'
import Layout from './components/Layout'
import img3 from "../image/img1.jpg"
import WorkIcon from '@mui/icons-material/Work';
import PhoneIcon from '@mui/icons-material/Phone';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


const About = () => {
  return (
   <Layout>
    <div className=' flex flex-col bg-gray-300'>

<div className='flex flex-col items-center justify-center '>
      <h1 className='text-6xl font-semibold pt-10
      '>About Me</h1>
      <h1 className='text-2xl'>My Introdution</h1>

    </div>

<div>
<div className='flex justify-center gap-40 h-full py-20 items-center'>
  <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
    <img src={img3} alt="" className=' hover:transition ease-in-out  w-96 h-96 rounded-xl border-4 drop-shadow-2xl ' />
  </div>
  <div className='flex flex-col'>
    <div className='flex gap-4'>
      <div className='border-4 drop-shadow-2xl h-40 w-40  rounded-xl  bg-gray-100 flex flex-col  items-center justify-center'>
        <WorkHistoryIcon/>
          <h1 className='text-2xl'>Experience</h1>
          <h1 className='text-lg'>9 Months</h1>
      </div>
      <div className='border-4 h-40 w-40  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
        <WorkIcon/>
          <h1 className='text-2xl'>Completed</h1>
          <h1 className='text-lg'>4 Projects</h1>
      </div>
     <div className='border-4 h-40 w-40  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
      <PhoneIcon/>
          <h1 className='text-2xl'>Contact</h1>
          <h1 className='text-lg'>7736999627</h1>
      </div>
     
    </div >
      <h1 className='w-[600px] pt-10'>Hardworking Software Developer focused on JavaScript, with a strong foundation and a commitment to continuous learning. Actively building skills in React and Node.js. Excited to bring a fresh perspective, problem-solving mindset, and enthusiasm for growth to a team.</h1>
  </div>
</div>
</div>


  <div className='flex flex-col items-center justify-center '>
      <h1 className='text-6xl font-semibold'>Skills</h1>
      <h1 className='text-2xl'>My Technical Level</h1>
  </div>



   <div className='flex justify-between px-72 py-20 '>
   <div className=' gap-9 border-4  rounded-xl px-16 py-7 drop-shadow-2xl bg-gray-100 flex flex-col items-center ' >
    <h1 className='text-3xl font-bold underline'>Frontend Skill</h1>
            <div className='flex gap-10'>
            <div className=''>
              <div>
              <h1 className='text-2xl font-semibold'>HTML</h1>
              <h1 className='text-lg'>Basic</h1>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>CSS</h1>
              <h1 className='text-lg'>Basic</h1>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>Tailwind CSS</h1>
              <h1 className='text-lg'>Advanced</h1>
              </div>
            </div>
            <div>
              <div>
              <h1 className='text-2xl font-semibold'>Bootstrap</h1>
              <h1 className='text-lg'>Below Average</h1>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>Git</h1>
              <h1 className='text-lg'>Good</h1>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>React</h1>
              <h1 className='text-lg'>Basic</h1>
              </div>
            </div>
            </div>
    </div>
    <div className=' gap-9 border-4  rounded-xl px-16 py-7 drop-shadow-2xl bg-gray-100 flex flex-col items-center ' >
    <h1 className='text-3xl font-bold underline'>Backend Skill</h1>
            <div className='flex gap-10'>
            <div className=''>
              <div>
              <h1 className='text-2xl font-semibold'>JavaScript</h1>
              <h1 className='text-lg'>Basic</h1>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>React</h1>
              <h1 className='text-lg'>Basic</h1>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>Mongo DB</h1>
              <h1 className='text-lg'>Advanced</h1>
              </div>
            </div>
            <div>
              <div>
              <h1 className='text-2xl font-semibold'>Node JS</h1>
              <h1 className='text-lg'>Below Average</h1>
              </div>
              <div>
              <h1 className='text-2xl font-semibold'>GitHub</h1>
              <h1 className='text-lg'>Good</h1>
              </div>
            </div>
            </div>
    </div>
   </div>

</div>
   </Layout>
  )
}

export default About