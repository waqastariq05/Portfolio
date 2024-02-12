import React from 'react'

const SubTitleSection = ({ title, text }) => {
    return (
        <div className='pb-10'>
            <div className='flex items-center justify-start mb-4'>
                <span className='w-1 h-1 bg-textOrange rounded-full'></span>
                <span className='w-1 h-1 bg-textOrange rounded-full mx-1'></span>
                <span className='w-10 sm:w-12 h-1 bg-textOrange rounded-md'></span>
                <h2 className='ml-3 text-3xl sm:text-3xl md:text-4xl text-white font-bold uppercase tracking-wider'>{title}</h2>
            </div>
            <h4 className='text-sm sm:text-base text-white/90 font-normal tracking-wide'>{text}</h4>
        </div>
    )
}

export default SubTitleSection
