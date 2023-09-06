'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebookF,
    faLinkedin,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";

import {
    faMoon,
    faBars
} from "@fortawesome/free-solid-svg-icons";
import { useState } from 'react';

const Navbar = () => {
    const pathname = usePathname()
    const navLink = [
        {
            name: "home",
            link: "/"
        },
        {
            name: "about",
            link: "/about"
        },
        {
            name: "service",
            link: "/service"
        },
        {
            name: "portfolio",
            link: "/portfolio"
        },
        {
            name: "contact",
            link: "/contact"
        }
    ]

    const icons = [
        {
            name: "Facebook",
            icon: faFacebookF,
            link: "https://www.facebook.com/waqas.tariq05",
            color: "text-cyan-600"
        },
        {
            name: "Github",
            icon: faGithub,
            link: "https://github.com/waqastariq05",
            color: "text-black"
        },
        {
            name: "Instagram",
            icon: faInstagram,
            link: "https://www.instagram.com/waqastariq274/",
            color: "text-pink-700"
        },
        {
            name: "Linkedin",
            icon: faLinkedin,
            link: "https://www.linkedin.com/in/waqas-tariq-705a671bb/",
            color: "text-blue-600"
        },
    ]

    const [toggle, setToggle] = useState(false);
    const handleToggle = () => {
        toggle ? setToggle(false) : setToggle(true)
    }

    return (

        <header className="">
            <div className="container mx-auto flex flex-wrap items-center lg:justify-start justify-between py-3 md:px-20 sm:px-10 px-5">
                <nav className="lg:flex lg:w-2/5 hidden flex-wrap items-center">
                    {navLink.map((nav, index) => {
                        return (
                            <Link className={`text-base text-black capitalize font-bold hover:text-black 
                            transition-all duration-300 cursor-pointer p-1 mx-2 ${nav.link === pathname && "text-black border-b-2 border-black"}`} aria-label={nav.name} href={nav.link} key={index}>{nav.name}  </Link>
                        )
                    })}
                </nav>
                <a href='/' className="flex lg:w-1/5 items-center lg:items-center lg:justify-center cursor-pointer">
                    <span className='bg-black text-white text-xl rounded-full py-4 px-3 font-bold tracking-wide hover:bg-purple-700 transition-all duration-300'>WT</span>
                </a>
                <div className="hidden lg:w-2/5 lg:inline-flex lg:justify-end ml-5 lg:ml-0">
                    <div className='flex items-center justify-center gap-7 cursor-pointer'>
                        {icons.map((icon) => {
                            return (
                                <a href={icon.link} aria-label={icon.name} target='_blank' className='hover:-translate-y-1 transition-all duration-300'>
                                    <FontAwesomeIcon icon={icon.icon} className={`text-2xl ${icon.color}`} />
                                </a>
                            )
                        })}
                        <span><FontAwesomeIcon icon={faMoon} className='text-2xl text-black' /></span>
                    </div>
                </div>
                <div className='lg:hidden flex items-center justify-start text-black text-2xl' onClick={handleToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </div>
            <div className={`${toggle ? "scale-100" : "scale-0"} transition-all duration-200 fixed top-20 left-5 bottom-5 right-5 bg-black/90 backdrop-blur-sm rounded-lg z-30`}>
                <nav className="flex items-center justify-center flex-col h-full">
                    {navLink.map((nav, index) => {
                        return (
                            <Link className={`text-base text-white capitalize font-bold hover:text-white 
                            transition-all duration-300 cursor-pointer p-1 my-1 ${nav.link === pathname && "text-white border-b-2 border-white"}`} aria-label={nav.name} href={nav.link} key={index}>{nav.name}  </Link>
                        )
                    })}
                    <div className='flex items-center justify-center gap-5 cursor-pointer mt-7'>
                        {icons.map((icon) => {
                            return (
                                <a href={icon.link} aria-label={icon.name} target='_blank' className='hover:-translate-y-1 transition-all duration-300'>
                                    <FontAwesomeIcon icon={icon.icon} className={`text-2xl ${icon.name === "Github" ? "text-white" : icon.color}`} />
                                </a>
                            )
                        })}
                        <span><FontAwesomeIcon icon={faMoon} className='text-2xl text-white' /></span>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar
