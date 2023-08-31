"use client"
import React, { useState } from 'react'
import NavTab from './NavTab';

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
            <h2 className="text-white font-bold lg:text-3xl md:text-2xl sm:text-3xl text-2xl capitalize sm:mb-10 mb-6 mx-auto">{aboutData[index].title}:</h2>
            {index !== (aboutData.length - 1) ? (
                <div className="flex flex-wrap items-center justify-center sm:mx-auto lg:gap-10 md:gap-5 gap-0">
                    {aboutData[index].info.map((data, i) => {
                        return (
                            <div className='xl:w-96 lg:w-80 md:w-72 w-full' key={i}>
                                <div className="flex relative md:py-5 sm:py-5 py-1 items-center">
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
                                            <h2 className="font-medium text-white mb-2 lg:text-xl md:text-lg sm:text-xl text-base capitalize">{data.institute} - {data.degree ? (data.degree) : data.type}</h2>
                                            <p className="leading-relaxed text-white/70 capitalize lg:text-base md:text-sm sm:text-base text-sm sm:mb-0 mb-5">{data.major ? (data.major) : (data.name)}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            ) : (
                <div className="flex flex-wrap items-center justify-center mx-auto md:gap-3 md:gap-y-4 gap-2 gap-y-3">
                    {aboutData[index].info.map((skill, i) => {
                        return (
                            <div className="border-2 border-orange-600 md:py-2 py-1 md:px-5 px-2 rounded-md hover:bg-orange-600 transition-all duration-300 cursor-pointer" key={i}>
                                <h2 className="sm:text-base text-sm font-medium">{skill.name}</h2>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default About
