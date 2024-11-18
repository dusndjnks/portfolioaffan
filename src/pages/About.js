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
      <h1 className='lg:text-6xl md:text-5xl  sm:text-4xl text-3xl font-semibold pt-5'>About Me</h1>
      <h1 className='md:text-2xl text-xl'>My Introdution</h1>
    </div>

       <div className='px-8'>
     <div className='md:flex-row flex flex-col justify-center h-full xl:gap-20 lg:gap-12 md:gap-12 md:py-20 py-10 items-center'>
     <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
       <img src={img3} alt="" className='z-[-1] hover:transition ease-in-out lg:w-96 lg:h-96  md:w-80 md:h-80 w-56 h-56  rounded-xl border-4 drop-shadow-2xl ' />
     </div>
     <div className='flex flex-col items-center justify-center md:pt-0 pt-5 '>
       <div className='flex items-center justify-center gap-4'>
         <div className='border-4 drop-shadow-2xl lg:h-32 lg:w-32 md:w-24 md:h-24 w-20 h-20  rounded-xl  bg-gray-100 flex flex-col  items-center justify-center'>
           <WorkHistoryIcon/>
             <h1 className='lg:text-2xl md:text-lg text-md'>Experience</h1>
             <h1 className='lg:text-lg md:text-md text-sm'>9 Months</h1>
         </div> 
         <div className='border-4 lg:h-32 lg:w-32 md:w-24 md:h-24 h-20 w-20  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
           <WorkIcon/>
             <h1 className='lg:text-2xl md:text-lg text-md'>Completed</h1>
             <h1 className='lg:text-lg md:text-md text-sm'>4 Projects</h1>
         </div> 
        <div className='border-4 lg:h-32 lg:w-32 md:w-24 md:h-24 w-20 h-20  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
         <PhoneIcon/>
             <h1 className='lg:text-2xl md:text-lg text-md'>Contact</h1>
             <h1 className='lg:text-lg md:text-md text-sm'>7736999627</h1>
         </div> 
       </div >
         <h1 className='lg:w-[600px] md:w-[300px] pt-10 text-center'>Hardworking Software Developer focused on JavaScript, with a strong foundation and a commitment to continuous learning. Actively building skills in React and Node.js. Excited to bring a fresh perspective, problem-solving mindset, and enthusiasm for growth to a team.</h1>
     </div>
    </div>
  </div>


  <div className='flex flex-col items-center justify-center '>
      <h1 className='lg:text-6xl md:text-4xl sm:text-3xl text-2xl font-semibold'>Skills</h1>
      <h1 className='md:text-2xl text-xl'>My Technical Level</h1>
  </div>



   {/* <div className='flex justify-between px-72 py-20 '>
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
   </div> */}

</div>
   </Layout>
  )
}

export default About