'use client'
import Image from 'next/image';
import profilePic from '../public/Dp.jpg'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

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

    useEffect(() => {
        const text = document.querySelector('.heroAnim p');
        text.innerHTML = text.innerText.split('').map((char, i) =>
            `<span style="transform: rotate(${i * 6.6}deg)">${char}</span>`
        ).join("")
    })

    return (
        <>
            <div className='md:w-1/2 sm:w-1/2 sm:px-0 px-5 w-full relative'>
                <div className='overflow-hidden w-full rounded-full outline outline-4 outline-black border-8 border-transparent border-opacity-30 mx-auto sm:mb-5 mb-10'>
                    <Image src={profilePic} alt='Dp' className='w-full rounded-full' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                </div>
            </div>
            <div className='w-full md:text-left text-center'>
                <div className='animate-bounce text-sm font-semibold capitalize text-white bg-black tracking-wide rounded-md sm:py-2 py-3 px-5 w-28 text-center md:mx-0 mx-auto relative md:mb-5 mb-4'>
                    <span>Hi there!</span>
                    <div className="border-solid border-t-black border-t-8 border-x-transparent border-x-[9px] border-b-0 absolute -bottom-2 left-12"></div>
                </div>
                <h2 className='text-black lg:text-6xl md:text-5xl text-4xl font-bold mb-5 capitalize'>i’m Waqas Tariq</h2>
                <h3 className='text-purple-700 lg:text-3xl md:text-2xl text-xl font-bold lg:mb-7 mb-5'>
                    <span className="text-purple-700" ref={el}></span>
                </h3>
                <p className='text-black/80 lg:text-base text-sm font-semibold md:mb-10 mb-8 lg:w-[90%]'>Over 6 months of practical experience with a good knowledge in blockchain development.</p>
                <a href="/WaqasResume.pdf" target='_blank' className='md:text-base text-sm text-white tracking-wider font-semibold bg-black border-2 border-black lg:py-[10px] md:py-4 py-[10px] md:px-7 px-5 focus:outline-none hover:bg-transparent hover:text-black transition-all duration-300 rounded-md cursor-pointer'>Resume</a>
            </div>
            <div className='lg:block hidden absolute right-28 bottom-20'>
                <div className='heroAnim'>
                    <p className='text-sm text-purple-700 font-semibold'>WEB DEVELOPER - DAPP DEVELOPER -</p>
                </div>
                <div className='bg-black w-[65px] h-[65px] flex justify-center items-center rounded-full text-xs font-medium'>Hire Me</div>
            </div>
        </>
    )
}

export default Banner
