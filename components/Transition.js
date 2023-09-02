'use client'
import React from 'react'
import { motion } from 'framer-motion'

const Transition = () => {
    return (
        <>
            <motion.div
                className='fixed top-0 right-full bottom-0 w-screen h-screen z-50 bg-purple-800'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
            />
            <motion.div
                className='fixed top-0 right-full bottom-0 w-screen h-screen z-40 bg-purple-700'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ delay: 0.2, duration: 0.7, ease: "easeInOut" }}
            />
            <motion.div
                className='fixed top-0 right-full bottom-0 w-screen h-screen z-30 bg-purple-600'
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
                transition={{ delay: 0.4, duration: 0.7, ease: "easeInOut" }}
            />
        </>
    )
}

export default Transition
