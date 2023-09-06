'use client'
import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('./Header'))

import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

const Contact = () => {
    const form = useRef();

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm(`${process.env.NEXT_PUBLIC_SERVICE_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, form.current, `${process.env.NEXT_PUBLIC_API_KEY}`)
            .then((result) => {
                alert("Your Message is Sended.")
                e.target.reset();
            }, (error) => {
                alert("Enter Correct Credentials.")
                e.target.reset();
            });
    };

    return (
        <>
            <Header title="Contact Us" text="Get In Touch" />
            <div className="lg:w-1/2 md:w-2/3 w-full mx-auto sm:mt-0 mt-4">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex flex-wrap -m-2">
                        <motion.div className="p-2 md:w-1/2 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="relative">
                                <input type="text" name="name" className="w-full bg-white/10 backdrop-blur-sm rounded border-2 border-gray-300 focus:border-purple-700 focus:bg-transparent text-base outline-none text-black placeholder:text-black/70 placeholder:font-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='John' />
                            </div>
                        </motion.div>
                        <motion.div className="p-2 md:w-1/2 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="relative">
                                <input type="email" name="email" className="w-full bg-white/10 backdrop-blur-sm rounded border-2 border-gray-300 focus:border-purple-700 focus:bg-transparent text-base outline-none text-black placeholder:text-black/70 placeholder:font-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='john@gmail.com' />
                            </div>
                        </motion.div>
                        <motion.div className="p-2 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            <div className="relative">
                                <input type="text" name="subject" className="w-full bg-white/10 backdrop-blur-sm rounded border-2 border-gray-300 focus:border-purple-700 focus:bg-transparent text-base outline-none text-black placeholder:text-black/70 placeholder:font-semibold py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder='Email Subject' />
                            </div>
                        </motion.div>
                        <motion.div className="p-2 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <div className="relative">
                                <textarea name="message" className="w-full bg-white/10 rounded border-2 border-gray-300 focus:border-purple-700 focus:bg-transparent  h-32 text-base outline-none text-black placeholder:text-black/70 placeholder:font-semibold py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Email Message' />
                            </div>
                        </motion.div>
                        <motion.div className="p-2 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <button className='flex mx-auto md:text-base text-sm text-white tracking-wider font-semibold bg-black border-2 border-black lg:py-[10px] md:py-4 py-[10px] md:px-7 px-5 focus:outline-none hover:bg-transparent hover:text-black transition-all duration-300 rounded-md cursor-pointer'>SEND</button>
                        </motion.div>
                        <motion.div className="flex flex-wrap gap-y-2 items-center sm:justify-between justify-evenly mx-auto p-2 w-full pt-5 mt-5 border-t-2 border-gray-300"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            <p className="text-base font-semibold text-purple-600"><FontAwesomeIcon icon={faEnvelope} className='mr-1 text-lg relative -bottom-[2px]' /> waqastariq274@gmail.com</p>
                            <p className="text-base text-black/70 font-semibold"><FontAwesomeIcon icon={faPhone} className='mr-1' /> +92 332-2018906</p>
                        </motion.div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contact
