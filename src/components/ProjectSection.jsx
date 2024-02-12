import React, { useEffect, useState } from 'react'
import SubTitleSection from './subTitleSection'
import Card from './Card'
import NavTabs from './NavTabs'
import ProjectViewVideo from './ProjectViewVideo'

// Project Images ==============
import p1 from '../assets/project/p1.png'
import p3 from '../assets/project/p3.png'
import p4 from '../assets/project/p4.png'
import p5 from '../assets/project/p5.png'

// Project Videos ==============
import v1 from '../assets/videos/v1.mp4'

const project = [
    {
        name: "Gym App - Landing Page",
        image: p1,
        tags: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Bootstrap"],
        category: "landing page",
        link: "https://fitzone-gym.vercel.app/",
        github: "https://github.com/waqastariq05/Gym_app_Design"
    },
    {
        name: "Food Deivery App - React JS",
        image: p3,
        tags: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Express jS", "Node jS", "Mongodb"],
        category: "mern",
        video: v1,
        github: "https://github.com/waqastariq05/Food_Delivery_App"
    },
    {
        name: "Car Rental - Landing Page",
        image: p4,
        tags: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Tailwind"],
        category: "landing page",
        link: "https://carrental-08.netlify.app/",
        github: "https://github.com/waqastariq05/Car_Rent_App"
    },
    {
        name: "Shoe Store - Next JS",
        image: p5,
        tags: ["HTML 5", "CSS 3", "JavaScript", "Next JS", "Tailwind", "Strapi"],
        category: "mern",
        video: v1,
        github: "https://github.com/waqastariq05/E_Commerce_ShoeStore"
    },
]

const ProjectSection = () => {
    const handleClick = (filter) => {
        let items = document.querySelectorAll(".project-items")
        for (let i = 0; i < items.length; i++) {
            if (filter.toLowerCase() === items[i].getAttribute("data-category")) {
                items[i].classList.remove("hide")
                items[i].classList.add("show")
            }
            else {
                items[i].classList.remove("show")
                items[i].classList.add("hide")
            }
        }
    }

    useEffect(() => {
        let items = document.querySelectorAll(".project-items")
        for (let i = 0; i < items.length; i++) {
            if ("mern" !== items[i].getAttribute("data-category")) {
                items[i].classList.add("hide")
            }
        }
    }, [])

    const [toggle, setToggle] = useState(false)
    const [video, setVideo] = useState("")

    return (
        <div className='w-full md:w-[90%] mx-auto pt-10 mb-16 sm:mb-20 px-5 md:px-0' id='project' >
            <SubTitleSection title="Project" text="Visit my project & keep your feedback" />
            <NavTabs handleClick={handleClick} />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 px-0 sm:px-5 md:px-10'>
                {project.slice(0).reverse().map((data, index) => {
                    return (
                        <div key={index} className='project-items' data-category={data.category}>
                            <Card data={data} setToggle={setToggle} setVideo={setVideo} />
                        </div>
                    )
                })}
            </div>
            {toggle && <ProjectViewVideo video={video} setToggle={setToggle} />}
        </div>
    )
}

export default ProjectSection
