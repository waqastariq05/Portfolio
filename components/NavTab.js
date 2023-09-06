"use client"
import React from 'react'

const NavTab = (props) => {
    const { index, setIndex, itemIndex, item } = props

    return (
        <>
            <span className={`text-black sm:px-6 px-4 py-3 w-auto justify-center sm:justify-start border-b-2 title-base font-semibold inline-flex items-center leading-none  tracking-wider rounded-t capitalize hover:text-purple-700 ${index === itemIndex && 'bg-gray-100 border-purple-700 text-purple-700'} transition-all duration-200`} key={itemIndex} onClick={() => setIndex(itemIndex)}>{item.title}</span>
        </>
    )
}

export default NavTab
