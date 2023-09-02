import Header from '@/components/Header'
import Product from '@/components/Product'
import Transition from '@/components/Transition'
import React from 'react'

const page = () => {
    return (
        <div className="mx-auto md:px-20 sm:px-10 px-5">
            <Transition />
            <div className="flex justify-center flex-col gap-10 h-fit md:pb-10 pb-20 md:pt-20 pt-3">
                <Header title="my portfolio" text="Visit My Portfolio & Keep Your Feedback" />
                <Product />
            </div >
        </div >
    )
}

export default page
