"use client"
import React from 'react'
import profilePic from '../public/Dp.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faLocationDot,
    faPhone,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import Header from './Header';

const About = (props) => {
    const { aboutData } = props

    return (
        <>
            <Header title="About Us" text="Know about me" />
            <div className="flex mx-auto flex-col lg:px-10 px-0 mt-5 md:mb-24 sm:mb-16 mb-14">
                {/* ======================= About Us =============================== */}
                <div className='flex md:flex-row flex-col md:justify-start justify-center lg:gap-20 sm:gap-14 gap-10 items-center'>
                    <div className='relative lg:w-[60%] sm:w-full w-[95%] -left-2'>
                        <Image src={profilePic} alt='Dp' className='w-full rounded' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                        <div className='absolute top-5 left-5 w-full h-full border-8 border-purple-700 -z-10'>
                        </div>
                    </div>
                    <div className='w-full'>
                        <h2 className='text-black lg:text-3xl md:text-2xl text-3xl font-bold mb-2 pt-2'>Waqas Tariq</h2>
                        <h3 className='text-black lg:text-xl md:text-lg text-xl font-semibold mb-5'>MERN Stack & Blockchain Developer.</h3>
                        <p className='text-black/80 lg:text-base md:text-sm sm:text-base text-sm leading-relaxed font-semibold mb-5'>Hi, my name is Waqas Tariq. I am Computer Science student. I have got some certifications in web development, I am a dedicated and skilled MERN (MongoDB, Express.js, React.js, Node.js) and Blockchain developer, passionate about leveraging technology to drive innovation and create meaningful impact.</p>
                        <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold mb-3'><FontAwesomeIcon icon={faLocationDot} className='mr-3 text-purple-700' /><span className='font-bold'>Location:</span> Pakistan, Karachi</div>
                        <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold mb-3'><FontAwesomeIcon icon={faUser} className='mr-3 text-purple-700' /><span className='font-bold'>Gender:</span> Male</div>
                        <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold mb-3'><FontAwesomeIcon icon={faPhone} className='mr-3 text-purple-700' /><span className='font-bold'>Phone:</span> +92 332 2018906</div>
                        <div className='lg:text-base md:text-sm sm:text-base text-sm text-black font-semibold'><FontAwesomeIcon icon={faEnvelope} className='mr-3 text-purple-700' /><span className='font-bold'>Email:</span> waqastariq274@gmail.com</div>
                    </div>
                </div>
            </div>

            {/* ======================= Skills ==============-================= */}
            <Header title="Skills" text="Skills And Tools, That I Have Learn" />
            <div className="lg:px-10 px-0 mt-5 md:mb-16 sm:mb-12 mb-10">
                <div className="grid md:grid-cols-2 md:grid-flow-col grid-flow-row md:gap-7 gap-5">
                    <div>
                        <h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-7 mb-5 mx-auto'>Development</h2>
                        {aboutData[2].info.filter(e => { return e.cate === 'web' }).map((skill, i) => {
                            return (
                                <div className='lg:mb-6 md:mb-5 mb-6 sm:mx-3 mx-0' key={i}>
                                    <div className='flex justify-between' style={{ width: skill.percent }}>
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2">{skill.name}</h2>
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2 relative -right-5">{skill.percent}</h2>
                                    </div>
                                    <div className='h-2 w-full bg-slate-300 rounded-md relative'><span className='absolute h-2 bg-purple-700 rounded-md' style={{ width: skill.percent }}></span></div>
                                </div>
                            )
                        })}
                    </div>
                    <div>
                        <h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-7 mb-5 mx-auto'>Blockchain</h2>
                        {aboutData[2].info.filter(e => { return e.cate === 'blockchain' }).map((skill, i) => {
                            return (
                                <div className="lg:mb-6 md:mb-5 mb-6 sm:mx-3 mx-0" key={i}>
                                    <div className='flex justify-between' style={{ width: skill.percent }}>
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2">{skill.name}</h2>
                                        <h2 className="lg:text-base md:text-sm text-base text-black font-semibold mb-2 relative -right-5">{skill.percent}</h2>
                                    </div>
                                    <div className='h-2 w-full bg-slate-300 rounded-md relative'><span className='absolute h-2 bg-purple-700 rounded-md' style={{ width: skill.percent }}></span></div>
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
                        <h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-8 mb-5'>{aboutData[0].title}</h2>
                        {/* ======================= Educations ================================= */}
                        <div className="flex flex-col items-center justify-center">
                            {aboutData[0].info.slice(0).reverse().map((data, i) => {
                                return (
                                    <div className='w-full' key={i}>
                                        <div className="flex relative lg:py-8 sm:py-5 py-1 items-center">
                                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-black pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-purple-700 text-white relative z-10 title-font font-medium text-sm lg:-top-5 md:-top-8 sm:-top-5 -top-10">{i + 1}</div>
                                            <div className="flex-grow sm:pl-6 pl-3 mt-6 sm:mt-0">
                                                <div className="flex justify-between border-b-2 border-black border-opacity-50 pb-3 mb-4 font-semibold lg:text-base md:text-sm sm:text-base text-sm text-black/80">
                                                    <span>{data.startDate + " - " + data.endDate}</span>
                                                    <span className="text-purple-700 font-semibold">{data.grade}</span>
                                                </div>
                                                <div className="">
                                                    <h2 className="font-semibold text-black mb-3 lg:text-lg md:text-base sm:text-lg text-base capitalize">{data.institute} - <span className='lg:text-base md:text-sm sm:text-base text-sm text-black/70 italic font-semibold'>{data.degree}</span></h2>
                                                    <p className="leading-relaxed text-black/80 capitalize lg:text-base md:text-sm sm:text-base text-sm sm:mb-0 mb-5 font-semibold">{data.major}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/* ======================= Certification ================================= */}
                    <div>
                        <h2 className='text-black font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-8 mb-5 mx-auto'>{aboutData[1].title}</h2>
                        <div className="flex flex-col items-center justify-center">
                            {aboutData[1].info.slice(0).reverse().map((data, i) => {
                                return (
                                    <div className='w-full' key={i}>
                                        <div className="flex relative lg:py-8 sm:py-5 py-1 items-center">
                                            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                                <div className="h-full w-1 bg-black pointer-events-none"></div>
                                            </div>
                                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-purple-700 text-white relative z-10 title-font font-medium text-sm lg:-top-5 md:-top-8 sm:-top-5 -top-8">{i + 1}</div>
                                            <div className="flex-grow sm:pl-6 pl-3 mt-6 sm:mt-0">
                                                <div className="flex justify-between border-b-2 border-black border-opacity-50 pb-3 mb-4 font-semibold lg:text-base md:text-sm sm:text-base text-sm text-black/80">
                                                    <span>{data.date}</span>
                                                    <span className="text-purple-700 font-semibold">
                                                        <a href={data.cerLink} target='_blank' className='uppercase lg:text-base md:text-sm sm:text-base text-sm'>View</a>
                                                    </span>
                                                </div>
                                                <div className="">
                                                    <h2 className="font-semibold text-black mb-3 lg:text-xl md:text-base sm:text-xl text-base capitalize">{data.institute} - <span className='lg:text-xl md:text-sm sm:text-xl text-sm text-black/70 italic font-semibold'>{data.type}</span></h2>
                                                    <p className="leading-relaxed text-black/80 capitalize lg:text-base md:text-sm sm:text-base text-sm sm:mb-0 mb-5 font-semibold">{data.name}</p>
                                                </div>
                                            </div>
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
