import React from 'react'
import Layout from './components/Layout'
import ser from "../image/service.jpg"
import drinks from "../image/drinks.jpg"
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


const Experience = () => {
  return (
    <Layout>
          <hr className='border-2 border-black '/>
    <div className='bg-gray-300 px-2'>
        <div className='flex flex-col items-center justify-center '>
              <h1 className='lg:text-6xl md:text-5xl  sm:text-4xl text-3xl font-semibold pt-10'>Experience</h1>
        </div>
       
        <div className='md:flex-row flex flex-col lg:px-12 h-full lg:py-20 py-7 justify-center items-center lg:gap-56 md:gap-20 gap-2 px-4 '>
          <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
            <img src={drinks} alt="" className='2xl:w-[450px] lg:w-[550px] md:w-[400px] sm:w-[400px]
            s:w-[320px]    rounded-xl border-4' />
          </div>
          <div className='flex flex-col'>
            <div className='flex justify-center'>
            <h1 className='lg:text-4xl md:text-2xl text-xl  font-semibold py-4'>Westleys Qissa Cafe</h1>
            </div>
            <div className='flex gap-4'>
              <div className='border-4 drop-shadow-2xl lg:h-40 lg:w-40 h-28 w-28 rounded-xl  bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkHistoryIcon/>
                  <h1 className='lg:text-2xl md:text-lg text-md'>Experience</h1>
                  <h1 className='lg:text-lg md:text-md text-sm'>6 Months</h1>
              </div>
              <div className='border-4 lg:h-40 lg:w-40 h-28 w-28  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkIcon/>
                  <h1 className='lg:text-2xl md:text-lg text-md'>Work</h1>
                  <h1 className='lg:text-lg md:text-md text-sm'>Service,Bartender</h1>
              </div>
            </div>
          </div>
        </div>
        
        <div className='md:flex-row flex flex-col-reverse lg:px-12 h-full lg:py-20 py-7 justify-center items-center lg:gap-56 md:gap-20 gap-2 px-4 xs:pt-14 pt-1'>
          <div className='flex flex-col'>
            <div className='flex justify-center'>
            <h1 className='lg:text-4xl md:text-2xl text-xl  font-semibold py-4'>Hakuna Matata Cafe</h1>
            </div>
            <div className='flex gap-4'>
              <div className='border-4 drop-shadow-2xl lg:h-40 lg:w-40 h-28 w-28 rounded-xl  bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkHistoryIcon/>
                  <h1 className='lg:text-2xl md:text-lg text-md'>Experience</h1>
                  <h1 className='lg:text-lg md:text-md text-sm'>3 Months</h1>
              </div>
              <div className='border-4 lg:h-40 lg:w-40 h-28 w-28  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkIcon/>
                  <h1 className='lg:text-2xl md:text-lg text-md'>Work</h1>
                  <h1 className='lg:text-lg md:text-md text-sm'>Service</h1>
              </div>
            </div>
          </div>
          <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
            <img src={ser} alt="" className='2xl:w-[450px] lg:w-[550px] md:w-[400px] sm:w-[400px]
            s:w-[320px]    rounded-xl border-4 ' />
          </div>
        </div>
    </div>

        <hr className='border-2 border-black'/>
    </Layout>
  )
}

export default Experience