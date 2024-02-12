import React from 'react'

const ProjectViewVideo = ({ video, setToggle }) => {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-10 px-10 sm:px-0 mx-auto my-auto backdrop-blur-sm bg-black/70 cursor-pointer'>
            <video className='w-full sm:w-[90%] md:w-[75%]' controls>
                <source src={video} type="video/mp4" />
            </video>
            <div className='absolute top-0 bottom-0 left-0 right-0 -z-10' onClick={() => setToggle(false)} />
        </div>
    )
}

export default ProjectViewVideo
