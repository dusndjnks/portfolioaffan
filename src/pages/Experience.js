import React from 'react'
import Layout from './components/Layout'
import ser from "../image/service.jpg"
import drinks from "../image/drinks.jpg"
import WorkIcon from '@mui/icons-material/Work';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';


const Experience = () => {
  return (
    <Layout>
          <hr className='border-2 border-black'/>
                 <div className='bg-gray-300'>
        <div className='flex flex-col items-center justify-center '>
              <h1 className='text-6xl font-semibold pt-10'>Experience</h1>
        </div>
       
        <div>
        <div className='flex h-full py-20 justify-center items-center gap-56 '>
          <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
            <img src={drinks} alt="" className='w-[450px]  rounded-xl border-4 drop-shadow-2xl ' />
          </div>
          <div className='flex flex-col'>
            <div>
            <h1 className='text-4xl  font-semibold py-4'>Westleys Qissa Cafe</h1>
            </div>
            <div className='flex gap-4'>
              <div className='border-4 drop-shadow-2xl h-40 w-40  rounded-xl  bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkHistoryIcon/>
                  <h1 className='text-2xl'>Experience</h1>
                  <h1 className='text-lg'>6 Months</h1>
              </div>
              <div className='border-4 h-40 w-40  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkIcon/>
                  <h1 className='text-2xl'>Work</h1>
                  <h1 className='text-lg'>Service,Bartender</h1>
              </div>
            </div>
          </div>
        </div>
        </div>

        <div>
        <div className='flex h-full py-20 justify-center items-center gap-56 '>
          <div className='flex flex-col'>
            <div>
            <h1 className='text-4xl  font-semibold py-4'>Hakuna Matata Cafe</h1>
            </div>
            <div className='flex gap-4'>
              <div className='border-4 drop-shadow-2xl h-40 w-40  rounded-xl  bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkHistoryIcon/>
                  <h1 className='text-2xl'>Experience</h1>
                  <h1 className='text-lg'>3 Months</h1>
              </div>
              <div className='border-4 h-40 w-40  rounded-xl drop-shadow-2xl bg-gray-100 flex flex-col  items-center justify-center'>
                <WorkIcon/>
                  <h1 className='text-2xl'>Work</h1>
                  <h1 className='text-lg'>Service</h1>
              </div>
            </div>
          </div>
          <div className='transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110'>
            <img src={ser} alt="" className='w-[450px]  rounded-xl border-4 drop-shadow-2xl ' />
          </div>
        </div>
        </div>
        </div>
        <hr className='border-2 border-black'/>
    </Layout>
  )
}

export default Experience