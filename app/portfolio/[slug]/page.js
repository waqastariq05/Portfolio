import dynamic from 'next/dynamic'
const ProjectDetail = dynamic(() => import('../../../components/ProjectDetail'))
import { createClient } from "next-sanity";

// Fetching Project Details
async function getProjectDetail(slug) {
    const client = createClient({
        projectId: "11f6lgwk",
        dataset: "production",
        apiVersion: "2022-03-25",
        useCdn: false
    });
    const query = `*[_type == "project" && slug.current == '${slug}'][0]{
        name,
        desc,
        category,
        images[]{
            asset->{
                url
            }
        },
        codeLink,
        tags
    }`
    const res = await client.fetch(query, slug)
    return { res }
}

export default async function page({ params }) {
    const projectDetail = await getProjectDetail(params.slug);

    return (
        <div className="container mx-auto md:px-20 sm:px-10 px-5">
            <div div className="lg:w-4/5 mx-auto flex flex-wrap gap-y-10 items-center md:h-screen h-fit md:pb-24 pb-20 sm:pt-0 pt-5">
                <ProjectDetail projectDetail={projectDetail.res} />
            </div >
        </div >
    )
}
