import dynamic from 'next/dynamic'
const ProjectDetail = dynamic(() => import('../../../components/ProjectDetail'))

import gymApp from '../../../public/Project/GymApp/1.png'
import amazonApp from '../../../public/Project/Dappazon/1.png'
import foodApp1 from '../../../public/Project/FoodApp/1.png'
import foodApp2 from '../../../public/Project/FoodApp/2.png'
import foodApp3 from '../../../public/Project/FoodApp/3.png'
import foodApp4 from '../../../public/Project/FoodApp/4.png'
import foodApp5 from '../../../public/Project/FoodApp/5.png'

const project = [
    {
        slug: "fitness_app",
        image: [gymApp],
        name: "Fitness App",
        tags: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Bootstrap"],
        desc: "Designing a gym app using React.js involves creating a user-friendly and intuitive interface that allows users to track their fitness routines, set goals, monitor progress, and access workout plans.",
        codeLink: "Gym_app_Design"
    },
    // {
    //     slug: "fileSystem_app",
    //     image: ["/Project/FileSystem/1.png"],
    //     name: "File System App",
    //     tags: ["JavaScript", "Bootstrap", "React JS", "Solidity", "Hardhat", "Ether JS", "IPFS"],
    //     desc: "This Decentralize App is build by blockchain technology, where user can upload file just like an google drive, and also give access to other user. This app use React.JS as Front-end and hardhat or ether.js use for backend to interact with smart contract which is written in solidity.",
    //     codeLink: "Dapp_File_System"
    // },
    {
        slug: "amazonClone_app",
        image: [amazonApp],
        name: "Amazon Clone App",
        tags: ["JavaScript", "Bootstrap", "React JS", "Solidity", "Hardhat", "Ether JS", "IPFS"],
        desc: "This Decentralize App is build by blockchain technology. This app is a clone of Amazon website, where user can buy items. This app use React.JS as Front-end and hardhat or ether.js use for backend to interact with smart contract which is written in solidity.",
        codeLink: "Dapp_Amazon_Clone"
    },
    {
        slug: "food_app",
        image: [foodApp1, foodApp2, foodApp3, foodApp4, foodApp5],
        name: "Food Delivery App",
        tags: ["HTML 5", "CSS 3", "JavaScript", "React JS", "Express Js", "Node JS", "Mongodb"],
        desc: "A Food Delivery app built using the MERN (MongoDB, Express.js, React, Node.js) stack offers a comprehensive solution for both customers and restaurant owners, enabling seamless online food ordering and delivery.",
        codeLink: "Food_Delivery_App"
    },
]

function getProjectDetails(slug) {
    return project.filter(e => { return e.slug === slug })
}

export default function page({ params }) {
    const projectDetail = getProjectDetails(params.slug);

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div div className="lg:w-4/5 mx-auto flex flex-wrap gap-y-10 items-center md:h-screen h-fit md:pb-24 pb-20 sm:pt-0 pt-5">
                <ProjectDetail projectDetail={projectDetail} />
            </div >
        </div >
    )
}
