import dynamic from 'next/dynamic'
const About = dynamic(() => import('../../components/About'))
import { createClient } from 'next-sanity';

// Fetching Skills
async function getSkills() {
    const client = createClient({
        projectId: "11f6lgwk",
        dataset: "production",
        apiVersion: "2022-03-25",
        useCdn: false
    });
    const query = `*[_type == "skills"] | order(_createdAt asc){
        heading,
        "image": image.asset->url,
        category}`
    const res = await client.fetch(query)
    return { res }
}

// Fetching Education
async function getEducation() {
    const client = createClient({
        projectId: "11f6lgwk",
        dataset: "production",
        apiVersion: "2022-03-25",
        useCdn: false
    });
    const query = `*[_type == "education"] | order(_createdAt desc){instName, degree, major, grade, startDate, endDate}`
    const res = await client.fetch(query)
    return { res }
}

// Fetching Certification
async function getCertificate() {
    const client = createClient({
        projectId: "11f6lgwk",
        dataset: "production",
        apiVersion: "2022-03-25",
        useCdn: false
    });
    const query = `*[_type == "certificate"] | order(_createdAt desc){name, instName, type, cerLink, date}`
    const res = await client.fetch(query)
    return { res }
}

export default async function page() {
    const education = await getEducation()
    const certificate = await getCertificate()
    const skills = await getSkills()

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col gap-3 md:pb-10 pb-20 md:pt-10 pt-2">
                <About education={education.res} certificate={certificate.res} skills={skills.res} />
            </div>
        </div>
    )
}

export const revalidate = 3000