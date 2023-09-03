import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/Header'))
const Product = dynamic(() => import('../../components/Product'))

const page = () => {
    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col gap-10 h-fit md:pb-10 pb-20 md:pt-20 pt-3">
                <Header title="my portfolio" text="Visit My Portfolio & Keep Your Feedback" />
                <Product />
            </div >
        </div >
    )
}

export default page
