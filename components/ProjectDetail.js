"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight
} from "@fortawesome/free-solid-svg-icons";

const ProjectDetail = (props) => {
    const { projectDetail } = props;
    const [imageIndex, setImageIndex] = useState(0);

    return (
        <div className="md:w-1/2 w-full relative group">
            <button className={`absolute top-[50%] -translate-y-[50%] text-white text-xl z-20 bg-black/90 left-1 p-2 rounded-r-sm opacity-50 group-hover:opacity-100 transition-all duration-300 cursor-pointer ${projectDetail[0].image.length === 1 ? "hidden" : "block"}`} onClick={() => { imageIndex === 0 ? setImageIndex(projectDetail[0].image.length - 1) : setImageIndex(imageIndex - 1) }} area-aria-label='left'>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <div className="w-full lg:h-[60vh] md:h-64 sm:h-[90vh] h-72 overflow-hidden rounded-md shadow-md cursor-pointer relative inline-block border-4 border-purple-500 border-opacity-30">
                <Image width={500} height={500} src={projectDetail[0].image[imageIndex]} className="w-full h-auto absolute top-0 right-0 left-[50%] translate-x-[-50%] rounded-sm max-w-none hover:top-[100%] hover:bottom-0 hover:translate-y-[-100%] hover:ranslate-x-[-50%] transition-all duration-1000 ease-linear" alt={projectDetail[0].image} />
            </div>
            <button className={`absolute top-[50%] -translate-y-[50%] text-white text-xl z-20 bg-black/90 right-1 p-2 rounded-l-sm opacity-50 group-hover:opacity-100 transition-all duration-300 cursor-pointer ${projectDetail[0].image.length === 1 ? "hidden" : "block"}`}
                onClick={() => { imageIndex < projectDetail[0].image.length - 1 ? setImageIndex(imageIndex + 1) : setImageIndex(0) }} area-aria-label='right'>
                <FontAwesomeIcon icon={faChevronRight} />
            </button>
        </div>
    )
}

export default ProjectDetail
