import dynamic from 'next/dynamic'
const Header = dynamic(() => import('../../components/Header'))
const About = dynamic(() => import('../../components/About'))
import data from '../../data.json'


const page = async () => {
    const aboutData = [
        {
            title: "education",
            info: [
                {
                    startDate: "2003",
                    endDate: "2017",
                    grade: "B Grade",
                    institute: "Information Learning & Development",
                    degree: "Matriculation",
                    major: "Computer Science"
                },
                {
                    startDate: "2018",
                    endDate: "2021",
                    grade: "A Grade",
                    institute: "Aligarh Institute of technology",
                    degree: "Diploma",
                    major: "Information Technology"
                },
                {
                    startDate: "2021",
                    endDate: "present",
                    grade: "3.67 CGPA",
                    institute: "Indus University",
                    degree: "Bachelor",
                    major: "bachelor of science in computer science"
                }
            ]
        },
        {
            title: "certification",
            info: [
                {
                    date: "Sep 2021",
                    institute: "freeCodeCamp",
                    type: "Online",
                    name: "responsive web design",
                    cerLink: "https://www.freecodecamp.org/certification/fcc41179584-da97-4f97-8526-3ffd478f8c99/responsive-web-design"
                },
                {
                    date: "May 2023",
                    institute: "coursera",
                    type: "Online",
                    name: "Developing Back-End Apps with Node.js & Express",
                    cerLink: "https://www.coursera.org/account/accomplishments/certificate/ZRYMV88XL5F3"
                }
            ]
        },
        {
            title: "skills",
            info: data
        }
    ]

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col gap-3 h-fit md:pb-10 pb-20 md:pt-20 pt-3">
                <Header title="About Us" text="Know about me" />
                <About aboutData={aboutData} />
            </div>
        </div>
    )
}

export default page
