'use client'
import Image from 'next/image';
import profilePic from '../public/Dp.jpg'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDownload
} from "@fortawesome/free-solid-svg-icons";

const Banner = () => {
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ["MERN Stack Developer.", "Blockchain Developer."],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true,
            showCursor: true
        });

        // Destropying
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <>
            <div className='md:w-1/2 sm:w-1/2 sm:px-0 px-5 w-full relative'>
                <div className='overflow-hidden w-full rounded-full outline outline-4 outline-white/70  border-8 border-transparent border-opacity-30 mx-auto mb-5'>
                    <Image src={profilePic} alt='Dp' className='w-full rounded-full' priority />
                </div>
            </div>
            <div className='w-full md:text-left text-center'>
                <div className='animate-bounce md:text-sm text-xs font-medium capitalize text-orange-600 bg-black rounded-md py-2 px-5 md:w-28 w-24 text-center md:mx-0 mx-auto relative md:mb-5 mb-4'>
                    <span>Hi there!</span>
                    <div className="border-solid border-t-black border-t-8 border-x-transparent md:border-x-[9px] border-x-[7px] border-b-0 absolute -bottom-2 md:left-12 left-10"></div>
                </div>
                <h2 className='text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-3 capitalize'>i’m Waqas Tariq</h2>
                <h3 className='text-orange-600 lg:text-2xl md:text-xl text-lg font-bold lg:mb-6 mb-4'>
                    <span className="text-orange-600" ref={el}></span>
                </h3>
                <p className='text-white/70 lg:text-base text-sm font-normal md:mb-7 mb-6 lg:w-[80%]'>Over 6 months of practical experience with a good knowledge in blockchain development.</p>
                <a href="/WaqasResume.pdf" target='_blank' className='lg:text-lg md:text-base text-sm text-white/80 tracking-wide font-semibold bg-orange-600 border-0 lg:py-[10px] md:py-2 py-[10px] md:px-5 px-4 focus:outline-none hover:bg-orange-700 rounded-md cursor-pointer'>Resume <FontAwesomeIcon icon={faDownload} /></a>
            </div>
        </>
    )
}

export default Banner
