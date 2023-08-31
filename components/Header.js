import React from 'react'

const Header = (props) => {
    return (
        <div>
            <h2 className='text-white md:text-4xl text-3xl font-bold uppercase mb-2'>{props.title}</h2>
            <span className='absolute md:w-16  w-14 h-1 bg-orange-600'></span>
            <p className='text-white md:text-lg text-base font-medium capitalize pt-3'>{props.text}</p>
        </div>
    )
}

export default Header
