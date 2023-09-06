"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

const ProjectDetail = (props) => {
    const { projectDetail } = props;
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <>
            <motion.div className="md:w-1/2 w-full relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <button className={`absolute top-[50%] -translate-y-[50%] text-white text-xl z-20 bg-black/90 left-1 p-2 rounded-r-sm opacity-50 group-hover:opacity-100 transition-all duration-300 cursor-pointer ${projectDetail[0].image.length === 1 ? "hidden" : "block"}`} onClick={() => { imageIndex === 0 ? setImageIndex(projectDetail[0].image.length - 1) : setImageIndex(imageIndex - 1) }} area-aria-label='left'>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <div className="w-full lg:h-[60vh] md:h-64 sm:h-[90vh] h-72 overflow-hidden rounded-md shadow-md cursor-pointer relative inline-block border-4 border-purple-500 border-opacity-30">
                    <Image src={projectDetail[0].image[imageIndex]} className="w-full h-auto absolute top-0 right-0 left-[50%] translate-x-[-50%] rounded-sm max-w-none hover:top-[100%] hover:bottom-0 hover:translate-y-[-100%] hover:ranslate-x-[-50%] transition-all duration-1000 ease-linear" alt={projectDetail[0].image} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                </div>
                <button className={`absolute top-[50%] -translate-y-[50%] text-white text-xl z-20 bg-black/90 right-1 p-2 rounded-l-sm opacity-50 group-hover:opacity-100 transition-all duration-300 cursor-pointer ${projectDetail[0].image.length === 1 ? "hidden" : "block"}`}
                    onClick={() => { imageIndex < projectDetail[0].image.length - 1 ? setImageIndex(imageIndex + 1) : setImageIndex(0) }} area-aria-label='right'>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </motion.div>
            {projectDetail.map((project, i) => {
                return (
                    <div className="w-full md:w-1/2 lg:pl-10 md:pl-5 md:mt-0" key={i}>
                        <motion.h1 className={`${roboto.className} text-black lg:text-3xl md:text-2xl sm:text-3xl text-2xl title-font tracking-wide mb-4 capitalize`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >{project.name}</motion.h1>
                        <motion.p className="leading-relaxed text-sm font-semibold text-black/70"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >{project.desc}</motion.p>
                        <motion.div className="mt-6 pb-5 border-b-2 border-gray-300 mb-5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}>
                            <span className="title-font font-semibold lg:text-lg md:text-base sm:text-lg text-base text-black/80">Technologies:</span>
                            <div className="flex flex-wrap items-center justify-start gap-3 mt-3">
                                {project.tags.map((tag, i) => {
                                    return (
                                        <span className="text-black text-sm font-semibold border-2 border-solid border-purple-700 rounded-md py-2 px-3 hover:bg-purple-700 hover:text-white transition-all duration-300 cursor-pointer" key={i}>{tag}</span>
                                    )
                                })}
                            </div>
                        </motion.div>
                        <motion.div className="flex items-center justify-between"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <span className="title-font font-semibold lg:text-lg md:text-base sm:text-lg text-base text-black/80">Github:</span>
                            <a href={`https://github.com/waqastariq05/${project.codeLink}`} className="md:text-base text-sm text-white tracking-wider font-semibold bg-black border-2 border-black py-2 md:px-5 px-6 focus:outline-none hover:bg-transparent hover:text-black transition-all duration-300 rounded-md cursor-pointer flex ml-auto animate-pulse hover:animate-none" target="_blank" >Code</a>
                        </motion.div>
                    </div>
                )
            })}
        </>
    )
}

export default ProjectDetail
