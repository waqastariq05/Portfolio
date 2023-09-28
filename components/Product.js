'use client'
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('./Header'))
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

const Product = (props) => {
    const { project, category } = props

    const [index, setIndex] = useState(0);

    return (
        <>
            <Header title="my portfolio" text="Visit My Portfolio & Keep Your Feedback" />
            <motion.div className="flex mx-auto flex-wrap justify-center gap-y-2 md:mb-10 mb-5 lg:mt-0 mt-5 cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                <span className={`text-black sm:px-6 px-4 py-3 w-auto justify-center sm:justify-start border-b-2 title-base font-semibold inline-flex items-center leading-none  tracking-wider rounded-t capitalize hover:text-purple-700 ${index === 0 && 'bg-gray-100 border-purple-700 text-purple-700'} transition-all duration-200`} onClick={() => setIndex(0)}>All</span>
                {category.map((item) => {
                    return (
                        <div key={item._id} className='navTab'>
                            <span className={`text-black sm:px-6 px-4 py-3 w-auto justify-center sm:justify-start border-b-2 title-base font-semibold inline-flex items-center leading-none  tracking-wider rounded-t capitalize hover:text-purple-700 ${index === item._id && 'bg-gray-100 border-purple-700 text-purple-700'} transition-all duration-200`} onClick={() => setIndex(item._id)}>{item.name}</span>
                        </div>
                    )
                })}
            </motion.div>
            <div className="flex flex-wrap -m-4">
                {index === 0 ? (
                    project.map((pro, i) => (
                        <motion.div className="p-4 md:w-1/3" key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                        >
                            <Link href={`/portfolio/${pro.slug}`}>
                                <div className="h-full rounded-sm shadow-md shadow-black/50 border-4 border-purple-500 border-opacity-30 overflow-hidden relative cursor-pointer group">
                                    <div className='w-auto lg:h-64 md:h-52 sm:h-96 h-72 overflow-hidden rounded-sm'>
                                        <Image src={pro.images[0].asset.url} alt={pro.name} width={500} height={500} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                                    </div>
                                    <div className="absolute top-0 justify-center items-center h-full w-full bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h1 className={`${roboto.className} title-font lg:text-2xl md:text-base sm:text-2xl text-xl font-bold capitalize tracking-wide text-white z-20 ml-8 my-5 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>{pro.name}</h1>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white text-purple-700 text-lg p-3 rounded-full absolute right-5 bottom-5 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))
                ) : project.filter(e => { return e.category._ref === index }).map((pro, i) => {
                    return (
                        <div className="p-4 md:w-1/3" key={i}>
                            <Link href={`/portfolio/${pro.slug}`}>
                                <div className="h-full rounded-sm shadow-md shadow-black/50 border-4 border-purple-500 border-opacity-30 overflow-hidden relative cursor-pointer group">
                                    <div className='w-auto lg:h-64 md:h-52 sm:h-96 h-72 overflow-hidden rounded-sm'>
                                        <Image src={pro.images[0].asset.url} alt={pro.name} width={500} height={500} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                                    </div>
                                    <div className="absolute top-0 justify-center items-center h-full w-full bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h1 className={`${roboto.className} title-font lg:text-2xl md:text-base sm:text-2xl text-xl font-bold capitalize tracking-wide text-white z-20 ml-8 my-5 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>{pro.name}</h1>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white text-purple-700 text-lg p-3 rounded-full absolute right-5 bottom-5 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default Product
