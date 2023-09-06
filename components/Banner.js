'use client'
import Image from 'next/image';
import profilePic from '../public/Dp.jpg'
import para from '../public/para.png'
import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { delay, motion } from 'framer-motion';

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

    // ========== Animation ================
    const quote = {
        initial: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.5,
            }
        }
    }

    const image = {
        initial: {
            opacity: 0,
            y: 10,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5,
            }
        }
    }

    const heading = {
        initial: {
            opacity: 0,
            y: 20,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
            }
        }
    }

    const text = {
        initial: {
            opacity: 0,
            y: 20,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.7,
                duration: 0.5,
            }
        }
    }

    const button = {
        initial: {
            opacity: 0,
            y: 20,
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.9,
                duration: 0.5,
            }
        }
    }

    const box = {
        initial: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: 0.5,
            }
        }
    }


    return (
        <>
            <div className='md:w-1/2 sm:w-1/2 sm:px-0 px-5 w-full relative'>
                <motion.div className='overflow-hidden w-full rounded-full outline outline-4 outline-black border-8 border-transparent border-opacity-30 mx-auto sm:mb-5 mb-10'
                    variants={image}
                    initial="initial"
                    whileInView="whileInView"
                >
                    <Image src={profilePic} alt='Dp' className='w-full rounded-full' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                </motion.div>
            </div>
            <div className='w-full md:text-left text-center'>
                <motion.div className='whileInView-bounce text-sm font-semibold capitalize text-white bg-black tracking-wide rounded-md sm:py-2 py-3 px-5 w-28 text-center md:mx-0 mx-auto relative md:mb-5 mb-4'
                    variants={quote} initial="initial" whileInView="whileInView">
                    <span>Hi there!</span>
                    <div className="border-solid border-t-black border-t-8 border-x-transparent border-x-[9px] border-b-0 absolute -bottom-2 left-12"></div>
                </motion.div>
                <motion.h2 className='text-black lg:text-6xl md:text-5xl text-4xl font-bold mb-5 capitalize'
                    variants={heading}
                    initial="initial"
                    whileInView="whileInView">i’m Waqas Tariq</motion.h2>
                <motion.h3 className='text-purple-700 lg:text-3xl md:text-2xl text-xl font-bold lg:mb-7 mb-5'
                    variants={heading}
                    initial="initial"
                    whileInView="whileInView">
                    <span className="text-purple-700" ref={el}></span>
                </motion.h3>
                <motion.p className='text-black/80 lg:text-base text-sm font-semibold md:mb-10 mb-8 lg:w-[90%]'
                    variants={text} initial="initial" whileInView="whileInView"
                >Over 6 months of practical experience with a good knowledge in blockchain development.</motion.p>
                <motion.a href="/WaqasResume.pdf" target='_blank' className='md:text-base text-sm text-white tracking-wider font-semibold bg-black border-2 border-black lg:py-[10px] md:py-4 py-[10px] md:px-7 px-5 focus:outline-none hover:bg-transparent hover:text-black transition-all duration-300 rounded-md cursor-pointer'
                    variants={button}
                    initial="initial"
                    whileInView="whileInView"
                >Resume</motion.a>
            </div >
            <motion.div className='lg:flex hidden absolute right-14 bottom-2' variants={box} initial="initial" whileInView="whileInView">
                <div className='relative flex justify-end'>
                    <div className='absolute top-14 right-14 bg-black w-[65px] h-[65px] flex justify-center items-center rounded-full text-xs font-medium z-10'>Hire Me</div>
                    <div className='w-[40%]'>
                        <Image src={para} alt='Dp' className='w-full rounded-full paraImage -z-10' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Banner
