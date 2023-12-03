import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const SkillSection = ({ skills }) => {
    return (
        <div className="lg:px-10 px-0 mt-5 md:mb-16 sm:mb-12 mb-10">
            <div className='mb-10'>
                <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-4 mb-5 mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Programming Languages</motion.h2>
                <div className='flex items-center gap-4 ml-2'>
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
            <div className='mb-10'>
                <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-4 mb-5 mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >FrameWorks</motion.h2>
                <div className='flex items-center gap-4 ml-2'>
                    {skills.filter((e) => { return e.category === 'framwork' }).map((skill, i) => {
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
            <div className='mb-10'>
                <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-4 mb-5 mx-auto'
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >Blockchain</motion.h2>
                <div className='flex items-center gap-4 ml-2'>
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
