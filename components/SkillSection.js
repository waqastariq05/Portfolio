import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SkillSection = ({ skills }) => {
    return (
        <div className="lg:px-10 px-0 mt-5 md:mb-16 sm:mb-12 mb-10">
            <div className='mb-14'>
                <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-6 mb-5 mx-auto relative after:bg-purple-600 after:w-10 sm:after:w-12 after:h-1 after:rounded-md after:absolute after:top-[50%] after:-translate-y-[50%] after:ml-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Development</motion.h2>
                <div className='flex flex-wrap items-center gap-y-8 gap-x-5 sm:gap-6 ml-2'>
                    {skills.filter((e) => { return e.category === 'language' }).map((skill, i) => {
                        return (
                            <div key={i}>
                                <motion.div className='w-[80px] cursor-pointer'
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.3 }}
                                >
                                    <Image src={skill.image} width={500} height={500} alt='Dp' className='w-full' priority loading='eager' />
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mb-14'>
                <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-6 mb-5 mx-auto relative after:bg-purple-600 after:w-10 sm:after:w-12 after:h-1 after:rounded-md after:absolute after:top-[50%] after:-translate-y-[50%] after:ml-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >FrameWorks</motion.h2>
                <div className='flex flex-wrap items-center gap-y-8 gap-x-5 sm:gap-6 ml-2'>
                    {skills.filter((e) => { return e.category === 'framework' }).map((skill, i) => {
                        return (
                            <div key={i}>
                                <motion.div className='w-[80px] cursor-pointer'
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.3 }}
                                >
                                    <Image src={skill.image} width={500} height={500} alt='Dp' className='w-full' priority loading='eager' />
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mb-14'>
                <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-6 mb-5 mx-auto relative after:bg-purple-600 after:w-10 sm:after:w-12 after:h-1 after:rounded-md after:absolute after:top-[50%] after:-translate-y-[50%] after:ml-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Databases</motion.h2>
                <div className='flex flex-wrap items-center gap-y-8 gap-x-5 sm:gap-6 ml-2'>
                    {skills.filter((e) => { return e.category === 'database' }).map((skill, i) => {
                        return (
                            <div key={i}>
                                <motion.div className='w-[80px] cursor-pointer'
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.3 }}
                                >
                                    <Image src={skill.image} width={500} height={500} alt='Dp' className='w-full' priority loading='eager' />
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='mb-14'>
                <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-6 mb-5 mx-auto relative after:bg-purple-600 after:w-10 sm:after:w-12 after:h-1 after:rounded-md after:absolute after:top-[50%] after:-translate-y-[50%] after:ml-2'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Blockchain</motion.h2>
                <div className='flex flex-wrap items-center gap-y-8 gap-x-5 sm:gap-6 ml-2'>
                    {skills.filter((e) => { return e.category === 'blockchain' }).map((skill, i) => {
                        return (
                            <div key={i}>
                                <motion.div className='w-[80px] cursor-pointer'
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: i * 0.3 }}
                                >
                                    <Image src={skill.image} width={500} height={500} alt='Dp' className='w-full' priority loading='eager' />
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SkillSection
