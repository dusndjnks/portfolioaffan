import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='h-24 font-serif bg-gray-200'>
            <nav className=' h-24  flex justify-between items-center px-32' >
                <div>
                    <Link to="/" className='text-5xl '>Affan</Link>
                </div>
                <div className='text-2xl gap-3 flex '>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact" className='text-2xl '>Contact</Link>
                </div>
            </nav>
            <div>
                <hr className='border border-black'/>
            </div>
        </div>
    </div>
  )
}

export default Navbar