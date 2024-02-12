import React from 'react'
import { Linkedin, Github, Facebook } from 'lucide-react'

const Footer = () => {
    return (
        <footer className='px-5 md:px-10 lg:px-20 py-5 mx-auto flex justify-center sm:justify-between items-center flex-wrap gap-5 sm:gap-3 border-t-2 border-cardBGColor '>
            <div>
                <p className="text-sm sm:text-base text-white">Copyright © 2024, All Rights Reserved</p>
            </div>
            <div className="flex justify-center items-center gap-5">
                <a href="https://www.linkedin.com/in/waqas-tariq-705a671bb/"><Linkedin size={22} className='cursor-pointer text-white/80 hover:text-textOrange transition-all duration-200 hover:scale-125' /></a>
                <a href="https://github.com/waqastariq05"><Github size={22} className='cursor-pointer text-white/80 hover:text-textOrange transition-all duration-200 hover:scale-125' /></a>
                <a href="https://www.facebook.com/waqas.tariq05"><Facebook size={22} className='cursor-pointer text-white/80 hover:text-textOrange transition-all duration-200 hover:scale-125' /></a>
            </div>
        </footer >
    )
}

export default Footer
