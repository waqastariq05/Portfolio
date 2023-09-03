'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Roboto } from 'next/font/google'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
import NavTab from './NavTab'

const roboto = Roboto({
    weight: '700',
    subsets: ['latin'],
})

// Images
import gymApp from '../public/Project/GymApp/1.png'
import amazonApp from '../public/Project/Dappazon/1.png'
import foodApp from '../public/Project/FoodApp/1.png'

const Product = () => {
    const project = [
        {
            slug: "fitness_app",
            image: [gymApp],
            name: "Fitness App",
            cate: 3
        },
        {
            slug: "amazonClone_app",
            image: [amazonApp],
            name: "Amazon Clone App",
            cate: 2
        },
        {
            slug: "food_app",
            image: [foodApp],
            name: "Food Delivery App",
            cate: 1
        }
    ]

    const category = [
        {
            id: 0,
            title: "All"
        },
        {
            id: 1,
            title: "MERN Development"
        },
        {
            id: 2,
            title: "Blockchain"
        },
        {
            id: 3,
            title: "Web Design"
        },
    ]
    const [index, setIndex] = useState(0);

    const change = () => {
        const proCard = document.querySelector(".productCard")
        proCard.classList.toggle("active")
    }

    return (
        <>
            <div className="flex mx-auto flex-wrap justify-center gap-y-2 mb-10 lg:mt-0 mt-5 cursor-pointer">
                {category.map((item) => {
                    return (
                        <div key={item.id} className='navTab' onClick={change}>
                            <NavTab item={item} itemIndex={item.id} index={index} setIndex={setIndex} />
                        </div>
                    )
                })}
            </div>
            <div className="flex flex-wrap -m-4">
                {index === 0 ? (
                    project.slice(0).reverse().map((pro, i) => {
                        return (
                            <div className="p-4 md:w-1/3 productCard" key={i}>
                                <Link href={`/portfolio/${pro.slug}`}>
                                    <div className="h-full rounded-md shadow-lg shadow-black border-4 border-purple-500 border-opacity-30 overflow-hidden relative cursor-pointer group">
                                        <div className='w-auto lg:h-64 md:h-52 sm:h-96 h-72 overflow-hidden'>
                                            <Image src={pro.image[0]} alt={pro.slug} priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" loading='eager' />
                                        </div>
                                        <div className="absolute top-0 justify-center items-center h-full w-full bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <h1 className={`${roboto.className} title-font lg:text-2xl md:text-base sm:text-2xl text-xl font-bold capitalize tracking-wide text-white z-20 ml-8 my-5 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>{pro.name}</h1>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white text-orange-600 text-lg p-3 rounded-full absolute right-5 bottom-5 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })
                ) : project.filter(e => { return e.cate === index }).reverse().map((pro, i) => {
                    return (
                        <div className="p-4 md:w-1/3 productCard" key={i}>
                            <Link href={`/portfolio/${pro.slug}`}>
                                <div className="h-full rounded-md shadow-lg shadow-black border-4 border-purple-500 border-opacity-30 overflow-hidden relative cursor-pointer group">
                                    <div className='w-auto lg:h-64 md:h-52 sm:h-96 h-72 overflow-hidden'>
                                        <Image src={pro.image[0]} alt={pro.slug} />
                                    </div>
                                    <div className="absolute top-0 justify-center items-center h-full w-full bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <h1 className={`${roboto.className} title-font lg:text-2xl md:text-base sm:text-2xl text-xl font-bold capitalize tracking-wide text-white z-20 ml-8 my-5 opacity-0 -translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300`}>{pro.name}</h1>
                                        <FontAwesomeIcon icon={faMagnifyingGlass} className='bg-white text-orange-600 text-lg p-3 rounded-full absolute right-5 bottom-5 opacity-0 translate-x-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300' />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div >
        </>
    )
}

export default Product
