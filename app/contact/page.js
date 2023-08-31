import Header from '@/components/Header'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const page = () => {
    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center lg:pt-12 md:pt-0 pt-5 md:pb-10 pb-16 flex-col gap-5 md:h-screen h-fit">
                <div className='md:px-0 px-2'>
                    <Header title="Contact Us" text="Get In Touch" />
                </div>
                <div className="mx-auto">
                    <div className="w-full flex flex-wrap gap-3 gap-y-6 items-center sm:justify-between justify-evenly mt-10 text-base font-normal text-white/80">
                        <div className='md:border-r-2 sm:border-b-0 border-b-2 border-white sm:px-4 px-0 sm:py-1 pb-5 flex items-center gap-4'>
                            <FontAwesomeIcon icon={faEnvelope} className='text-xl border-2 border-orange-600 rounded-full p-4 text-orange-600 hover:text-white hover:bg-orange-600 transition-all duration-300 cursor-pointer' />
                            <a className="text-base">waqastariq274@gmail.com</a>
                        </div>
                        <div className='md:border-r-2 sm:border-b-0 border-b-2 border-white sm:px-4 px-0 sm:py-1 pb-5 flex items-center gap-4'>
                            <FontAwesomeIcon icon={faPhone} className='text-xl border-2 border-orange-600 rounded-full p-4 text-orange-600 hover:text-white hover:bg-orange-600 transition-all duration-300 cursor-pointer' />
                            <p className="text-base">+92 332-2018906</p>
                        </div>
                        <div className='flex items-center justify-center gap-4 cursor-pointer px-4 py-1'>
                            <a href='https://www.facebook.com/waqas.tariq05' target='_blank'>
                                <FontAwesomeIcon icon={faFacebookF} className='text-xl border-2 border-orange-600 rounded-full py-4 px-5 text-orange-700 hover:text-white hover:bg-orange-600 transition-all duration-300' />
                            </a>
                            <a href="https://github.com/waqastariq05" target='_blank'>
                                <FontAwesomeIcon icon={faGithub} className='text-xl border-2 border-orange-600  rounded-full p-4 text-orange-700 hover:text-white hover:bg-orange-600 transition-all duration-300' />
                            </a>
                            <a href="https://www.linkedin.com/in/waqas-tariq-705a671bb/" target='_blank'>
                                <FontAwesomeIcon icon={faLinkedin} className='text-xl border-2 border-orange-600 rounded-full py-4 px-[17px] text-orange-700 hover:text-white hover:bg-orange-600 transition-all duration-300' />
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default page
