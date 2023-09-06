'use client'
import React from 'react'
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./Header'))
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, stagger } from 'framer-motion';

const Service = (props) => {
    const { service } = props;
    return (
        <>
            <Header title="my services" text="What i do" />
            <div className="flex flex-wrap md:px-10 px-0">
                {service.map((ser, i) => {
                    return (
                        <motion.div className="xl:w-1/3 md:w-1/2 md:p-4 sm:mb-0 mb-7" key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="hover:shadow-md border-2 hover:shadow-black/40 border-black border-opacity-50 rounded-lg p-6 transition-all duration-300 cursor-pointer group">
                                <div className="w-16 h-16 inline-flex items-center justify-center rounded-full text-purple-700 mb-7 text-4xl group-hover:bg-purple-700 group-hover:text-white group-hover:text-2xl transition-all duration-300">
                                    <FontAwesomeIcon icon={ser.icon} />
                                </div>
                                <h2 className="sm:text-xl text-lg text-black font-bold mb-3">{ser.title}</h2>
                                <p className="sm:text-base text-sm text-black/70 font-semibold">{ser.text}</p>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </>
    )
}

export default Service

