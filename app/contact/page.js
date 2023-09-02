import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Transition from '@/components/Transition'



const page = () => {
    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <Transition />
            <div className="flex justify-center lg:pt-12 md:pt-0 pt-5 md:pb-10 pb-16 flex-col gap-5 md:h-screen h-fit">
                <div className='md:px-0 px-2'>
                    <Header title="Contact Us" text="Get In Touch" />
                </div>
                <Contact />
            </div >
        </div >
    )
}

export default page
