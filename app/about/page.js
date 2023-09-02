import Header from "@/components/Header"
import About from "@/components/About";
import Transition from "@/components/Transition";

const page = async () => {
    const aboutData = [
        {
            title: "education",
            info: [
                {
                    startDate: "2018",
                    endDate: "2021",
                    grade: "A Grade",
                    institute: "Aligarh Institute",
                    degree: "Diploma",
                    major: "Information Technology"
                },
                {
                    startDate: "2021",
                    endDate: "present",
                    grade: "3.67",
                    institute: "Indus University",
                    degree: "Bachelor",
                    major: "Computer Science"
                }
            ]
        },
        {
            title: "certification",
            info: [
                {
                    date: "Sep 2021",
                    grade: "A Grade",
                    institute: "Aligarh Institute",
                    type: "Diploma",
                    name: "Information Technology",
                    cerLink: ""
                }
            ]
        },
        {
            title: "skills",
            info: [
                {
                    name: "HTML 5"
                }
            ]
        }
    ]

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <Transition />
            <div className="flex justify-center flex-col gap-3 md:h-screen h-fit md:pb-10 pb-20 sm:pt-0 pt-5">
                <Header title="About Us" text="Know about me" />
                <About aboutData={aboutData} />
            </div>
        </div>
    )
}

export default page
