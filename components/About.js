"use client"
import React, { useState } from 'react'
import dynamic from 'next/dynamic';
const NavTab = dynamic(() => import('./NavTab'))

const About = (props) => {
    const { aboutData } = props
    const [index, setIndex] = useState(0);

    return (
        <div className="flex flex-wrap flex-col lg:px-10 px-0">
            <div className="flex mx-auto flex-wrap justify-center gap-y-2 mb-10 lg:mt-0 mt-5 cursor-pointer">
                {aboutData.map((item, itemIndex) => {
                    return (
                        <div key={itemIndex}>
                            <NavTab item={item} itemIndex={itemIndex} index={index} setIndex={setIndex} key={itemIndex} />
                        </div>
                    )
                })}
            </div>
            <h2 className={`text-white font-semibold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-10 mb-5 mx-auto ${index === (aboutData.length - 1) ? "hidden" : "block"}`}>{aboutData[index].title}:</h2>
            {/* ======================= Education & Certification ================================= */}
            {index !== (aboutData.length - 1) ? (
                <div className="flex flex-col items-center justify-center">
                    {aboutData[index].info.slice(0).reverse().map((data, i) => {
                        return (
                            <div className='w-full' key={i}>
                                <div className="flex relative md:py-8 sm:py-5 py-1 items-center">
                                    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                                        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm sm:-top-5 -top-7">{i + 1}</div>
                                    <div className="flex-grow sm:pl-6 pl-3 mt-6 sm:mt-0">
                                        <div className="flex justify-between border-b-2 border-white pb-3 mb-4 font-normal lg:text-base md:text-sm sm:text-base text-sm text-white/70">
                                            <span>{data.date ? (data.date) : (data.startDate + " - " + data.endDate)}</span>
                                            <span className="text-orange-600 font-medium">{data.cerLink ? (
                                                <a href={data.cerLink} target='_blank' className='uppercase lg:text-base md:text-sm sm:text-base text-sm'>View</a>
                                            ) : data.grade}</span>
                                        </div>
                                        <div className="">
                                            <h2 className="font-medium text-white mb-2 lg:text-xl md:text-lg sm:text-xl text-base capitalize">{data.institute} - <span className='text-white/80 italic'>{data.degree ? (data.degree) : data.type}</span></h2>
                                            <p className="leading-relaxed text-white/70 capitalize lg:text-base md:text-sm sm:text-base text-sm sm:mb-0 mb-5">{data.major ? (data.major) : (data.name)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                // ======================= Skills =====================================
                <div className="grid grid-flow-row md:gap-3 gap-0">
                    <div className=''>
                        <h2 className='text-white font-semibold sm:mt-6 mt-3 text-2xl capitalize mb-2 mx-auto'>Frontend Skills:</h2>
                        <span className='absolute md:w-14 w-10 h-1 bg-orange-600'></span>
                        <div className='grid md:grid-cols-2 grid-flow-row lg:gap-x-10 md:gap-5 gap-2 sm:pt-8 pt-5'>
                            {aboutData[index].info.filter(e => { return e.cate === 'front' }).map((skill, i) => {
                                return (
                                    <div className='mb-3 sm:mx-3 mx-0' key={i}>
                                        <div className='flex justify-between' style={{ width: skill.percent }}>
                                            <h2 className="sm:text-base text-sm font-medium mb-3">{skill.name}</h2>
                                            <h2 className="sm:text-base text-sm font-medium mb-3 relative -right-5">{skill.percent}</h2>
                                        </div>
                                        <div className='h-2 w-full bg-slate-300 rounded-sm relative'><span className='absolute h-2 bg-orange-700' style={{ width: skill.percent }}></span></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white font-semibold mt-6 text-2xl capitalize mb-2 mx-auto'>Backend Skills:</h2>
                        <span className='absolute md:w-14 w-10 h-1 bg-orange-600'></span>
                        <div className='grid md:grid-cols-2 grid-flow-row lg:gap-x-10 md:gap-5 gap-2 sm:pt-8 pt-5'>
                            {aboutData[index].info.filter(e => { return e.cate === 'back' }).map((skill, i) => {
                                return (
                                    <div className='mb-3 sm:mx-3 mx-0' key={i}>
                                        <div className='flex justify-between' style={{ width: skill.percent }}>
                                            <h2 className="sm:text-base text-sm font-medium mb-3">{skill.name}</h2>
                                            <h2 className="sm:text-base text-sm font-medium mb-3 relative -right-5">{skill.percent}</h2>
                                        </div>
                                        <div className='h-2 w-full bg-slate-300 rounded-sm relative'><span className='absolute h-2 bg-orange-700' style={{ width: skill.percent }}></span></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-white font-semibold mt-6 text-2xl capitalize mb-2 mx-auto'>Blockchain Skills:</h2>
                        <span className='absolute md:w-14 w-10 h-1 bg-orange-600'></span>
                        <div className='grid md:grid-cols-2 grid-flow-row lg:gap-x-10 md:gap-5 gap-2 sm:pt-8 pt-5'>
                            {aboutData[index].info.filter(e => { return e.cate === 'blockchain' }).map((skill, i) => {
                                return (
                                    <div className="mb-3 sm:mx-3 mx-0" key={i}>
                                        <div className='flex justify-between' style={{ width: skill.percent }}>
                                            <h2 className="sm:text-base text-sm font-medium mb-3">{skill.name}</h2>
                                            <h2 className="sm:text-base text-sm font-medium mb-3 relative -right-5">{skill.percent}</h2>
                                        </div>
                                        <div className='h-2 w-full bg-slate-300 rounded-sm relative'><span className='absolute h-2 bg-orange-700' style={{ width: skill.percent }}></span></div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default About
