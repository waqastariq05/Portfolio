import Header from "@/components/Header"
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
            text: "I develop Smart Contract which stored on a blockchain for customers of all sizes.",
        }
    ]

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col gap-10 md:h-screen h-fit md:pb-10 pb-20 sm:pt-0 pt-5">
                <Header title="my services" text="What i do" />
                <div className="flex flex-wrap -m-4 lg:mr-12">
                    {service.map((ser, i) => {
                        return (
                            <div className="xl:w-1/3 md:w-1/2 p-4" key={i}>
                                <div className="shadow-md border border-purple-400 border-opacity-60 rounded-sm p-6 md:hover:-translate-y-5 transition-all duration-300 cursor-pointer">
                                    <div className="w-16 h-16 inline-flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm text-orange-600 mb-7">
                                        <FontAwesomeIcon icon={ser.icon} className="text-3xl" />
                                    </div>
                                    <h2 className="sm:text-xl text-lg text-white font-bold mb-3">{ser.title}</h2>
                                    <p className="sm:text-base text-sm text-white/60 font-normal">{ser.text}</p>
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
