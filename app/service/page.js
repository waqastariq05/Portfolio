import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/Header'))

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCubes,
    faDesktop,
    faFileContract
} from "@fortawesome/free-solid-svg-icons";

const page = () => {
    const service = [
        {
            icon: faCubes,
            title: "DApps Development",
            text: "I develop Decentralized applications for customers of all sizes, which is run on blockchain technology.",
        },
        {
            icon: faDesktop,
            title: "Web Development",
            text: "I design and develop services for customers of all sizes, specializing in creating stylish, modern websites.",
        },
        {
            icon: faFileContract,
            title: "Smart Contracts Dev",
            text: "I develop Smart Contracts for customers of all sizes, which stored on a Ethereum Blockchain.",
        }
    ]

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col gap-10 md:h-screen h-fit mx-auto sm:pb-20 pb-0 sm:my-0 mt-2 mb-10">
                <Header title="my services" text="What i do" />
                <div className="flex flex-wrap md:px-10 px-0">
                    {service.map((ser, i) => {
                        return (
                            <div className="xl:w-1/3 md:w-1/2 md:p-4 sm:mb-0 mb-7" key={i}>
                                <div className="hover:shadow-md border-2 hover:shadow-black/40 border-black border-opacity-50 rounded-lg p-6 transition-all duration-300 cursor-pointer group">
                                    <div className="w-16 h-16 inline-flex items-center justify-center rounded-full text-purple-700 mb-7 text-4xl group-hover:bg-purple-700 group-hover:text-white group-hover:text-2xl transition-all duration-300">
                                        <FontAwesomeIcon icon={ser.icon} />
                                    </div>
                                    <h2 className="sm:text-xl text-lg text-black font-bold mb-3">{ser.title}</h2>
                                    <p className="sm:text-base text-sm text-black/70 font-semibold">{ser.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default page
