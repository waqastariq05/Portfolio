import React from 'react'
import { Poppins } from 'next/font/google'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebookF,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

const poppins = Poppins({
    weight: '800',
    subsets: ['latin'],
})

const TopNav = () => {
    return (
        <div className='md:absolute relative md:left-0 md:right-0 md:top-0 z-30'>
            <nav className='container mx-auto flex flex-wrap sm:justify-between justify-evenly sm:gap-3 gap-4 items-center py-3 md:px-20 sm:px-10 px-5'>
                <div>
                    <Link href="/" className={`text-4xl text-White uppercase ${poppins.className}`}>Waqas<span className='text-orange-600'>.</span></Link>
                </div>
                <div className='flex items-center justify-center gap-4 cursor-pointer'>
                    <a href='https://www.facebook.com/waqas.tariq05' aria-label="Facebook" target='_blank' className='hover:-translate-y-1 transition-all duration-300'>
                        <FontAwesomeIcon icon={faFacebookF} className='text-xl text-orange-700' />
                    </a>
                    <a href="https://github.com/waqastariq05" aria-label="Github" target='_blank' className='hover:-translate-y-1 transition-all duration-300'>
                        <FontAwesomeIcon icon={faGithub} className='text-xl text-orange-700' />
                    </a>
                    <a href="https://www.instagram.com/waqastariq274/" aria-label="Instagram" target='_blank' className='hover:-translate-y-1 transition-all duration-300'>
                        <FontAwesomeIcon icon={faInstagram} className='text-xl text-orange-700' />
                    </a>
                    <a href="https://www.linkedin.com/in/waqas-tariq-705a671bb/" aria-label="Linkedin" target='_blank' className='hover:-translate-y-1 transition-all duration-300'>
                        <FontAwesomeIcon icon={faLinkedin} className='text-xl text-orange-700' />
                    </a>
                </div>
            </nav>
        </div>
    )
}

export default TopNav
