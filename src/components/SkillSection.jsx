import React from 'react'
import SubTitleSection from './SubTitleSection'

// Skill Images =================
import html from '../assets/skills/html.png'
import css from '../assets/skills/css.png'
import js from '../assets/skills/js.png'
import react from '../assets/skills/react.png'
import node from '../assets/skills/node.png'
import express from '../assets/skills/express.png'
import tailwind from '../assets/skills/tailwind.png'
import bootstrap from '../assets/skills/bootstrap.png'
import mongodb from '../assets/skills/mongo.png'
import postgre from '../assets/skills/postgre.png'
import redis from '../assets/skills/redis.png'
import redux from '../assets/skills/redux.png'
import next from '../assets/skills/next.png'
import github from '../assets/skills/github.png'
import figma from '../assets/skills/figma.png'
import restapi from '../assets/skills/restapi.png'

const SkillSection = () => {
    const skills = [
        { image: html, name: "Html 5" },
        { image: css, name: "CSS 3" },
        { image: js, name: "JavaScript" },
        { image: bootstrap, name: "Bootstrap" },
        { image: react, name: "React JS" },
        { image: node, name: "Node JS" },
        { image: express, name: "Express JS" },
        { image: mongodb, name: "MongoDB" },
        { image: github, name: "Github" },
        { image: restapi, name: "Rest Api" },
        { image: redux, name: "Redux" },
        { image: tailwind, name: "TailwindCSS" },
        { image: next, name: "Next JS" },
        { image: postgre, name: "PostgreSQL" },
        { image: redis, name: "Redis" },
        { image: figma, name: "Figma" },
    ]

    return (
        <div className='w-full md:w-[90%] mx-auto pt-10 mb-16 sm:mb-20 px-5 md:px-0' id='skill'>
            <SubTitleSection title="Skills" text="Let’s explore popular skills & experience" />
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-7 items-center justify-between sm:justify-start gap-5 md:gap-7 px-0 sm:px-10">
                {skills.map((skill, i) => {
                    return (
                        <div key={i} className='bg-cardBGColor shadow-md rounded-md w-full px-3 py-5 flex flex-col justify-center items-center gap-4 border border-cardBGColor hover:bg-[#0e1326] transition-all duration-300 cursor-pointer'>
                            <img src={skill.image} alt={skill.name} className='w-[60px] h-[60px] object-contain' />
                            <h2 className='text-base text-white font-medium tracking-wide'>{skill.name}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SkillSection
