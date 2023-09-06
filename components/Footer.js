import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHeart
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="border-t-2 border-black">
            <div className="container py-4 mx-auto flex items-center justify-between sm:flex-row flex-col md:px-20 sm:px-10 px-5 gap-2">
                <p className="text-base text-black font-semibold capitalize">2023 © All Rights Reserved.
                </p>
                <span className="text-base text-black font-semibold capitalize">
                    build with <FontAwesomeIcon icon={faHeart} className='text-red-700' /> by waqas
                </span>
            </div>
        </footer>
    )
}

export default Footer
