"use client"
import React from 'react'

const NavTab = (props) => {
    const { index, setIndex, itemIndex, item } = props
    return (
        <>
            <a className={`sm:px-6 px-4 py-3 w-auto justify-center sm:justify-start border-b-2 title-base font-medium inline-flex items-center leading-none  tracking-wider rounded-t capitalize hover:text-orange-600 ${index === itemIndex && 'bg-gray-100 border-orange-500 text-orange-600'} transition-all duration-200`} key={itemIndex} onClick={() => setIndex(itemIndex)}>{item.title}</a>
        </>
    )
}

export default NavTab
