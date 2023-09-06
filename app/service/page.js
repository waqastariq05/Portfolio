import dynamic from 'next/dynamic'
const Service = dynamic(() => import('../../components/Service'))

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
                <Service service={service} />
            </div>
        </div >
    )
}

export default page
