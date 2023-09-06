import { motion } from 'framer-motion'
import React from 'react'

const Header = (props) => {
    const heading = {
        initial: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.3,
            }
        }
    }

    const text = {
        initial: {
            opacity: 0,
        },
        whileInView: {
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.3,
            }
        }
    }

    return (
        <div>
            <motion.h2 className='text-black md:text-4xl text-3xl font-bold uppercase mb-2'
                variants={heading} initial="initial" whileInView="whileInView">{props.title}</motion.h2>
            <motion.span className='absolute md:w-16  w-14 h-1 bg-purple-700 rounded-sm' variants={heading} initial="initial" whileInView="whileInView"></motion.span>
            <motion.p className='text-black text-base font-medium capitalize pt-3' variants={text} initial="initial" whileInView="whileInView">{props.text}</motion.p>
        </div>
    )
}

export default Header
