import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    const handleClick = () => {
        window.location.href = "#contact"
    }


    return (
        <div className='bg-[#0e1630] fixed top-0 left-0 right-0 w-full px-5 py-[14px] md:py-1 flex items-center justify-between mx-auto z-10 md:px-10 lg:px-16 border-b-2 border-cardBGColor'>
            <a href="/" className='flex items-center'>
                <span className='text-3xl font-bold text-textOrange'>{"<"}</span >
                <h2 className='text-2xl uppercase font-extrabold text-white tracking-wide mx-2'>waqas</h2>
                <span className='text-3xl font-bold text-textOrange'>{"/>"}</span >
            </a>
            <div className='block md:hidden cursor-pointer' onClick={handleToggle}>
                {!toggle ? (<Menu color='#fd481d' size={40} />) : (<X color='#fd481d' size={40} />)
                }
            </div>
            <nav className={`${!toggle ? "-translate-x-[100%]" : "-translate-x-0"} transition-all duration-300 py-5 bg-cardBGColor/50 backdrop-blur-md z-10 shadow-md absolute left-0 right-0 top-[70px] md:bg-transparent h-screen md:h-auto md:static md:py-0 md:-translate-x-0 md:shadow-none`}>
                <ul className={`flex flex-col items-center h-[80%] md:h-auto justify-center md:flex-row gap-7`}>
                    <li><a href="#home" className='nav_link text-white text-base font-bold uppercase tracking-wide hover:text-textOrange transition-all duration-300 active' onClick={handleToggle}>Home</a>
                    </li>
                    <li><a href="#skill" className='nav_link text-white text-base font-bold uppercase tracking-wide hover:text-textOrange transition-all duration-300' onClick={handleToggle}>Skills</a>
                    </li>
                    <li><a href="#project" className='nav_link text-white text-base font-bold uppercase tracking-wide hover:text-textOrange transition-all duration-300' onClick={handleToggle}>Projects</a>
                    </li>
                    <li><a href="#contact" className='nav_link text-white text-base font-bold uppercase tracking-wide hover:text-textOrange transition-all duration-300' onClick={handleToggle}>Contact</a>
                    </li>
                    <li className='block mt-5 md:hidden'>
                        <button onClick={handleClick} className='btn text-sm sm:text-base tracking-wide rounded-full px-20 border-0'>Hire Me</button>
                    </li>
                </ul>
            </nav>
            <div className='hidden md:block'>
                <button onClick={handleClick} className='btn px-6 py-[10px] tracking-wide rounded-full border-0'>Hire Me</button>
            </div>
        </div >
    )
}

export default Navbar
