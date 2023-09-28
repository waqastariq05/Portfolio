import dynamic from 'next/dynamic'
const Product = dynamic(() => import('../../components/Product'))
import { createClient } from "next-sanity";

// Fetching Projects
async function getProject() {
    const client = createClient({
        projectId: "11f6lgwk",
        dataset: "production",
        apiVersion: "2022-03-25",
        useCdn: false
    });
    const query = `*[_type == "project"] | order(_createdAt desc){
        name,
        "slug": slug.current,
        category,
        images[]{
            asset->{
                url
            }
        }
    }`
    const res = await client.fetch(query)
    return { res }
}

// Fetching Projects Categories
async function getCategories() {
    const client = createClient({
        projectId: "11f6lgwk",
        dataset: "production",
        apiVersion: "2022-03-25",
        useCdn: false
    });
    const query = `*[_type == "projectCate"] | order(_createdAt desc){_id, name}`
    const res = await client.fetch(query)
    return { res }
}

export default async function page() {
    const project = await getProject()
    const category = await getCategories()

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div className="flex justify-center flex-col md:gap-10 gap-5 mx-auto sm:pb-20 pb-0 sm:mt-8 sm:my-0 mt-3 mb-14">
                <Product project={project.res} category={category.res} />
            </div >
        </div >
    )
}

export const revalidate = 3000
