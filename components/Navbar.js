'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHome,
    faUser,
    faListCheck,
    faProjectDiagram,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const pathname = usePathname()
    const navLink = [
        {
            icon: faHome,
            name: "home",
            link: "/"
        },
        {
            icon: faUser,
            name: "about",
            link: "/about"
        },
        {
            icon: faListCheck,
            name: "service",
            link: "/service"
        },
        {
            icon: faProjectDiagram,
            name: "portfolio",
            link: "/portfolio"
        },
        {
            icon: faEnvelope,
            name: "contact",
            link: "/contact"
        }
    ]
    return (
        <div>
            <nav className="flex flex-col items-center md:justify-center gap-y-4 fixed md:right-5 top-0 bottom-0 h-max mt-auto w-full md:w-16 md:max-w-md md:h-screen z-30">
                <ul className='flex md:flex-col w-full md:w-auto justify-between md:justify-center items-center gap-1 bg-white/10 backdrop-blur-sm shadow-lg md:rounded-full md:py-5 py-2 px-10 md:px-1'>
                    {navLink.map((nav, index) => {
                        return (
                            <Link className={`text-base hover:text-orange-600 transition-all duration-300 cursor-pointer p-3 group relative flex items-center ${nav.link === pathname && "text-orange-600"}`} href={nav.link} key={index}>
                                <div className='absolute right-0 pr-14 hidden md:group-hover:flex'>
                                    <div className='bg-white/10 backdrop-blur-sm text-white text-sm font-medium tracking-wide capitalize relative flex items-center py-2 px-3 rounded-[3px]'>
                                        <span>{nav.name}</span>
                                        <div className="border-solid border-l-white/10 backdrop-blur-sm border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                                    </div>
                                </div>
                                <FontAwesomeIcon icon={nav.icon} />
                            </Link>
                        )
                    })}
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
