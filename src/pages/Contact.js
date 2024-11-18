import React from 'react'
import Layout from './components/Layout'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
  return (
   <Layout>
     <div className='bg-gray-900 h-screen text-white '>
      <div className='w-screen flex items-center  justify-center'>
          <h1 className='lg:text-6xl md:text-4xl text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 md:py-20 py-5 '>Get In Touch</h1>
        </div>

        <div className='flex   lg:px-72 md:px-32 sm:px-24 s:px-18 px-7'>
          <div>
              <h1 class="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Let's Talk</h1>
              <h1 className='md:w-[600px] md:text-lg text-md py-2'>I am a highly motivated fresher, available for work opportunities. With a strong foundation in JavaScript, HTML and Tailwind CSS, I am eager to learn and contribute to a team.Let's connect!</h1>
              <div className='flex md:gap-3 gap-2  md:text-2xl text-xl items-center py-2'>
                <EmailIcon/>
                <h1>mhdaffan0000@gmail.com</h1>
              </div>
              <div className='flex md:gap-3 gap-2  md:text-2xl text-xl items-center py-2'>
                <PhoneIcon/>
                <h1>+91 7736999627</h1>
              </div>
              <div className='flex md:gap-3 gap-2  md:text-2xl text-xl items-center py-2'>
                <LocationOnIcon/>
                <h1>TVM,Kerala,India</h1>
              </div>
          </div>
        </div>
      </div>
   </Layout>
  )
}

export default Contact