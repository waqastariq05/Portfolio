import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h2 className='text-black md:text-4xl text-3xl font-bold uppercase mb-2'>{props.title}</h2>
            <span className='absolute md:w-16  w-14 h-1 bg-purple-700 rounded-sm'></span>
            <p className='text-black text-base font-medium capitalize pt-3'>{props.text}</p>
        </div>
    )
}

export default Header
