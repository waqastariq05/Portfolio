"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const Header = dynamic(() => import('./Header'))
import profilePic from '../public/Dp.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion'

const About = (props) => {
    const { education, certificate, skills } = props

    return (
        <>
            <Header title="About Us" text="Know about me" />
            <div className="flex mx-auto flex-col lg:px-10 px-0 mt-5 md:mb-24 sm:mb-16 mb-14">
                {/* ======================= About Us =============================== */}
                <div className='flex md:flex-row flex-col md:justify-start justify-center lg:gap-20 sm:gap-14 gap-10 items-center'>
                    <motion.div className='relative lg:w-[60%] sm:w-full w-[95%] -left-2'
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Image src={profilePic} alt='Dp' className='w-full rounded' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                        <div className='absolute top-5 left-5 w-full h-full border-8 border-purple-700 -z-10'>
                        </div>
                    </motion.div>
                    <div className='w-full'>
                        <motion.h2 className='text-black lg:text-3xl md:text-2xl text-3xl font-bold mb-2 pt-2'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                        >Waqas Tariq</motion.h2>
                        <motion.h3 className='text-black lg:text-xl md:text-lg text-xl font-semibold mb-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >MERN Stack & Blockchain Developer.</motion.h3>
                        <motion.p className='text-black/80 lg:text-base md:text-sm sm:text-base text-sm leading-relaxed font-semibold mb-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >Hi, my name is Waqas Tariq. I am Computer Science student. I have got some certifications in web development, I am a dedicated and skilled MERN (MongoDB, Express.js, React.js, Node.js) and Blockchain developer, passionate about leveraging technology to drive innovation and create meaningful impact.</motion.p>
                        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
                            <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold mb-3'><FontAwesomeIcon icon={faLocationDot} className='mr-3 text-purple-700' /><span className='font-bold'>Location:</span> Pakistan, Karachi</div>
                            <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold mb-3'><FontAwesomeIcon icon={faUser} className='mr-3 text-purple-700' /><span className='font-bold'>Gender:</span> Male</div>
                            <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold mb-3'><FontAwesomeIcon icon={faPhone} className='mr-3 text-purple-700' /><span className='font-bold'>Phone:</span> +92 332 2018906</div>
                            <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold'><FontAwesomeIcon icon={faEnvelope} className='mr-3 text-purple-700' /><span className='font-bold'>Email:</span> waqastariq274@gmail.com</div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* ======================= Skills ==============-================= */}
            <Header title="Skills" text="Skills And Tools, That I Have Learn" />
            <div className="lg:px-10 px-0 mt-5 md:mb-16 sm:mb-12 mb-10">
                <div className="grid md:grid-cols-2 md:grid-flow-col grid-flow-row md:gap-7 gap-5">
                    <div>
                        <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-7 mb-5 mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >Development</motion.h2>
                        {skills.filter(e => { return e.category === 'web' }).map((skill, i) => {
                            return (
                                <div className='lg:mb-6 md:mb-5 mb-6 sm:mx-3 mx-0' key={i}>
                                    <motion.div className='flex justify-between' style={{ width: `${skill.percent}%` }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2 sm:pl-2">{skill.name}</h2>
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2 relative -right-5">{skill.percent}%</h2>
                                    </motion.div>
                                    <div className='h-2 w-full bg-slate-300 rounded-md relative'><motion.span className='absolute h-2 bg-purple-700 rounded-md' style={{ width: `${skill.percent}%` }}
                                        initial={{ opacity: 0, width: 0 }}
                                        whileInView={{ opacity: 1, width: `${skill.percent}%` }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    ></motion.span></div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-7 mb-5 mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >Blockchain</motion.h2>
                        {skills.filter(e => { return e.category === 'blockchain' }).map((skill, i) => {
                            return (
                                <div className="lg:mb-6 md:mb-5 mb-6 sm:mx-3 mx-0" key={i}>
                                    <motion.div className='flex justify-between' style={{ width: `${skill.percent}%` }}
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2 sm:pl-2">{skill.name}</h2>
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2 relative -right-5">{skill.percent}%</h2>
                                    </motion.div>
                                    <div className='h-2 w-full bg-slate-300 rounded-md relative'><motion.span className='absolute h-2 bg-purple-700 rounded-md' style={{ width: `${skill.percent}%` }}
                                        initial={{ opacity: 0, width: 0 }}
                                        whileInView={{ opacity: 1, width: `${skill.percent}%` }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    ></motion.span></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <Header title="Resume" text="Education & Certifications, that i have earned" />
            <div className="flex mx-auto flex-col lg:px-10 px-0 mt-5">
                <div className='grid md:grid-cols-2 md:grid-flow-col grid-flow-row md:gap-16 gap-10 md:mb-10'>
                    <div>
                        <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-8 mb-5'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >Education</motion.h2>
                        {/* ======================= Educations ================================= */}
                        <div className="flex flex-col items-center justify-center">
                            {education.map((data, i) => {
                                return (
                                    <div className='w-full' key={i}>
                                        <div className="flex relative lg:py-8 sm:py-5 py-1 items-center">
                                            <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <div className="h-full w-1 bg-black pointer-events-none"></div>
                                            </motion.div>
                                            <motion.div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-purple-700 text-white relative z-10 title-font font-medium text-sm lg:-top-5 md:-top-8 sm:-top-5 -top-10"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >{i + 1}</motion.div>
                                            <motion.div className="flex-grow sm:pl-6 pl-3 mt-6 sm:mt-0"
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                <div className="flex justify-between border-b-2 border-black border-opacity-50 pb-3 mb-4 font-semibold lg:text-base md:text-sm sm:text-base text-sm text-black/80">
                                                    <span>{new Date(data.startDate).toLocaleDateString(undefined, { year: 'numeric' }) + " - " + (data.endDate === null ? "Present" : new Date(data.endDate).toLocaleDateString(undefined, { year: 'numeric' }))}</span>
                                                    <span className="text-purple-700 font-semibold">{data.grade}</span>
                                                </div>
                                                <div className="">
                                                    <h2 className="font-semibold text-black mb-3 lg:text-lg md:text-base sm:text-lg text-base capitalize">{data.instName} - <span className='lg:text-base md:text-sm sm:text-base text-sm text-black/70 italic font-semibold'>{data.degree}</span></h2>
                                                    <p className="leading-relaxed text-black/80 capitalize lg:text-base md:text-sm sm:text-base text-sm sm:mb-0 mb-5 font-semibold">{data.major}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* ======================= Certification ================================= */}
                    <div>
                        <motion.h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-8 mb-5 mx-auto'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >Certification</motion.h2>
                        <div className="flex flex-col items-center justify-center">
                            {certificate.map((data, i) => {
                                return (
                                    <div className='w-full' key={i}>
                                        <div className="flex relative lg:py-8 sm:py-5 py-1 items-center">
                                            <motion.div className="h-full w-6 absolute inset-0 flex items-center justify-center"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >
                                                <div className="h-full w-1 bg-black pointer-events-none"></div>
                                            </motion.div>
                                            <motion.div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-purple-700 text-white relative z-10 title-font font-medium text-sm lg:-top-5 md:-top-8 sm:-top-5 -top-8"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.2 }}
                                            >{i + 1}</motion.div>
                                            <motion.div className="flex-grow sm:pl-6 pl-3 mt-6 sm:mt-0"
                                                initial={{ opacity: 0, x: -50 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: 0.3 }}
                                            >
                                                <div className="flex justify-between border-b-2 border-black border-opacity-50 pb-3 mb-4 font-semibold lg:text-base md:text-sm sm:text-base text-sm text-black/80">
                                                    <span>{new Date(data.date).toLocaleDateString(undefined, {
                                                        month: 'short',
                                                        year: 'numeric'
                                                    })}</span>
                                                    <span className="text-purple-700 font-semibold">
                                                        <a href={data.cerLink} target='_blank' className='uppercase lg:text-base md:text-sm sm:text-base text-sm'>View</a>
                                                    </span>
                                                </div>
                                                <div className="">
                                                    <h2 className="font-semibold text-black mb-3 lg:text-xl md:text-base sm:text-xl text-base capitalize">{data.instName} - <span className='lg:text-xl md:text-sm sm:text-xl text-sm text-black/70 italic font-semibold'>{data.type}</span></h2>
                                                    <p className="leading-relaxed text-black/80 capitalize lg:text-base md:text-sm sm:text-base text-sm sm:mb-0 mb-5 font-semibold">{data.name}</p>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default About
