import React from 'react'
import Layout from './components/Layout'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
  return (
   <Layout>
     <div className='bg-gray-900 h-screen text-white'>
      <div className='w-screen flex items-center  justify-center'>
          <h1 className='text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-20 '>Get In Touch</h1>
        </div>

        <div className='flex  px-96 '>
          <div>
              <h1 class="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Let's Talk</h1>
              <h1 className='w-[600px] text-lg py-2'>I am a highly motivated fresher, available for work opportunities. With a strong foundation in JavaScript, HTML and Tailwind CSS, I am eager to learn and contribute to a team.Let's connect!</h1>
              <div className='flex gap-3 text-2xl items-center py-2'>
                <EmailIcon/>
                <h1>mhdaffan0000@gmail.com</h1>
              </div>
              <div className='flex gap-3 text-2xl items-center py-2'>
                <PhoneIcon/>
                <h1>+91 7736999627</h1>
              </div>
              <div className='flex gap-3 text-2xl items-center py-2'>
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