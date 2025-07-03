import React, { useEffect, useRef, useState } from 'react';
import Layout from './components/Layout';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-in-out-quint',
      offset: 120
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_991ztg1', // Replace with your actual service ID
      'template_vpbzgdq', // Replace with your actual template ID
      formRef.current,
      'myBJ-9y0Yz72y_NdU' // Replace with your public key
    )
    .then(() => {
      setSuccess(true);
      formRef.current.reset();
    })
    .catch((error) => {
      console.error('EmailJS error:', error);
    });
  };

  return (
    <Layout>
      <div className="border-y-2 border-gray-800 bg-white">
        <section className="md:py-24 py-10 px-6 sm:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10 md:mb-20" data-aos="fade-up">
            <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-4">
              Get In Touch
            </h1>
            <div className="w-24 h-0.5 bg-gray-800 mx-auto mt-6" />
          </div>

          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-1/2" data-aos="fade-right">
              <h2 className="text-3xl md:text-4xl font-normal text-gray-800 mb-6">
                Let's Talk
              </h2>
             <p className="text-gray-600 font-light leading-relaxed mb-8">
                I'm a passionate developer who enjoys crafting smooth, modern web apps using JavaScript, React, and Tailwind CSS. I love learning new things and building clean, responsive interfaces that feel great to use.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <EmailIcon className="!w-8 !h-8 text-gray-700" />
                  <span className="text-gray-800 font-light">mhdaffan0000@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <PhoneIcon className="!w-8 !h-8 text-gray-700" />
                  <span className="text-gray-800 font-light">+91 7736999627</span>
                </div>
                <div className="flex items-center gap-4">
                  <LocationOnIcon className="!w-8 !h-8 text-gray-700" />
                  <span className="text-gray-800 font-light">TVM, Kerala, India</span>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2" data-aos="fade-left">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-gray-50 p-8 rounded-xl border border-gray-200 space-y-6 shadow-sm"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                />
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="Your Message"
                  className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-gray-300"
                />
                <button
                  type="submit"
                  className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-700 transition"
                >
                  Send Message
                </button>
                {success && <p className="text-green-600 text-sm">Message sent successfully!</p>}
              </form>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
