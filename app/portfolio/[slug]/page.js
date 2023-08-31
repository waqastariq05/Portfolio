import ProjectDetail from "@/components/ProjectDetail";

const project = [
    {
        slug: "gym_app",
        image: ["/2.png", "/Dp.jpg"],
        name: "Gym App",
        tags: ["Html", "CSS"],
        desc: "Nice",
        codeLink: ""
    },
    {
        slug: "food_app",
        image: ["/Dp.jpg"],
        name: "Food App",
        tags: ["Html", "CSS"],
        desc: "Nice",
        codeLink: ""
    }
]

function getProjectDetails(slug) {
    return project.filter(e => { return e.slug === slug })
}

export default function page({ params }) {
    const projectDetail = getProjectDetails(params.slug);
    console.log(projectDetail)

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div div className="lg:w-4/5 mx-auto flex flex-wrap gap-y-10 items-center md:h-screen h-fit xl:pb-0 md:pb-10 pb-20 sm:pt-0 pt-5">
                <ProjectDetail projectDetail={projectDetail} />
                {projectDetail.map((project, i) => {
                    return (
                        <div className="w-full md:w-1/2 lg:pl-10 md:pl-5 md:mt-0" key={i}>
                            <h1 className="text-white lg:text-3xl md:text-2xl sm:text-3xl text-2xl title-font font-medium mb-4 capitalize">{project.name}</h1>
                            <p className="leading-relaxed text-sm font-normal text-white/70">{project.desc}</p>
                            <div className="mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                                <span className="title-font font-normal lg:text-lg md:text-base sm:text-lg text-base text-white/70">Technologies:</span>
                                <div className="flex flex-wrap items-center justify-start gap-3 mt-3">
                                    {project.tags.map((tag, i) => {
                                        return (
                                            <span className="text-sm border-2 border-solid border-orange-600 rounded-md py-2 px-3 hover:bg-orange-600 transition-all duration-300 cursor-pointer" key={i}>{tag}</span>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="title-font font-normal lg:text-lg md:text-base sm:text-lg text-base text-white/70">Github:</span>
                                <a href={`https://github.com/waqastariq05/${project.codeLink}`} className="md:text-base text-sm text-white font-medium bg-orange-600 border-0 py-2 md:px-5 px-6 focus:outline-none hover:bg-orange-700 rounded-md cursor-pointer flex ml-auto animate-pulse hover:animate-none" target="_blank">Code</a>
                            </div>
                        </div>
                    )
                })
                }
            </div >
        </div >
    )
}
