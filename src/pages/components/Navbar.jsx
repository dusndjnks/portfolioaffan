import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {

    const [extendNavbar , setExtendNavbar] = useState(false)
    console.log(extendNavbar);
    
  return (
    <div>
        <div className="font-serif bg-gray-200 justify-center h-24 items-center  ">
            <nav className={`flex h-24  justify-between bg-gray-200  md:px-20 px-10 md:static ${extendNavbar ? "h-72 pt-8" : "h-24 items-center"}`}>
                <div>
                    <Link to="/" className='md:text-5xl text-3xl s:text-4xl h-24 items-center '>Affan</Link>
                </div>
                <div className={`md:text-2xl text-xl gap-3 flex md:flex-row  duration-500 md:static absolute   xs:flex flex-col ${extendNavbar ? " left-10 top-28" : "left-[-200px] top-28"}  `}>
                    <Link to="/about">About</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/project">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className='md:hidden' onClick={() => {setExtendNavbar(open => !open)}}>
                    {
                        extendNavbar ? <CloseIcon/> : <MenuIcon/>
                    }
                </div>
            </nav>
        </div>
        <div>
            <hr className='border border-black'/>
        </div>      
    </div>
  )
}

export default Navbar

