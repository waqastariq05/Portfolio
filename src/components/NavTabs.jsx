import React, { useState } from 'react'

const tabs = ["MERN", "Landing Page", "UI & UX"]

const NavTabs = ({ handleClick }) => {
    const [navActive, setNavActive] = useState(0)
    return (
        <>
            <div className="px-5 mx-auto flex flex-wrap flex-col">
                <div className="flex mx-auto flex-wrap mb-12">
                    {tabs.map((tab, i) => {
                        return (
                            <a className={`${navActive === i ? ("bg-cardBGColor border-textOrange text-textOrange") : ("bg-transparent border-gray-200 text-gray-200")} sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 text-base font-medium inline-flex items-center leading-none  tracking-wide rounded-t hover:text-textOrange hover:border-textOrange transition-all duration-200 cursor-pointer`} key={i} onClick={() => handleClick(tab) & setNavActive(i)}>{tab}</a>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default NavTabs
