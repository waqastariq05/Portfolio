import dynamic from 'next/dynamic'
const Contact = dynamic(() => import('../../components/Contact'))

const page = () => {
    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col md:gap-10 gap-5 md:h-screen h-fit mx-auto sm:pb-20 pb-0 sm:my-0 mt-2 mb-14">
                <Contact />
            </div >
        </div >
    )
}

export default page
