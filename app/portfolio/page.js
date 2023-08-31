import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = async () => {
    const project = [
        {
            slug: "gym_app",
            image: ["/2.png"],
            name: "Gym App"
        }
    ]

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col gap-10 md:h-screen h-fit md:pb-10 pb-20 sm:pt-0 pt-5">
                <Header title="my portfolio" text="Visit My Portfolio & Keep Your Feedback" />
                <div className="flex flex-wrap -m-4">
                    {project.map((pro, i) => {
                        return (
                            <div className="p-4 md:w-1/3" key={i}>
                                <Link href={`/portfolio/${pro.slug}`}>
                                    <div className="h-full rounded-md shadow-lg shadow-black border-4 border-purple-500 border-opacity-30 overflow-hidden relative cursor-pointer group">
                                        <div className='w-auto lg:h-72 md:h-52 sm:h-96 h-72 overflow-hidden'>
                                            <Image width={500} height={500} src={`${pro.image[0]}`} alt={pro.image[0]} className=' group-hover:scale-110 transition-all duration-300' />
                                        </div>
                                        <div className="absolute top-0 justify-center items-center h-full w-full bg-black/40 backdrop-blur-sm hidden group-hover:flex transition-all duration-300 delay-100">
                                            <h1 className="title-font lg:text-2xl md:text-base sm:text-2xl text-xl font-bold capitalize text-white z-20">{pro.name}</h1>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div >
            </div >
        </div >
    )
}

export default page
