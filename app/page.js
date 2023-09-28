import { createClient } from 'next-sanity';
import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('../components/Banner'))

// Fetching Profile
async function getProfile() {
  const client = createClient({
    projectId: "11f6lgwk",
    dataset: "production",
    apiVersion: "2022-03-25",
    useCdn: true
  });
  const query = `*[_type == "profile"]{
      name,
      desc,
      "resume": resume.asset->url,
      "image": image.asset->url          
  }`
  const res = await client.fetch(query)
  return { res }
}

export default async function Home() {
  const profile = await getProfile();

  return (
    <div>
      <div className="container mx-auto md:px-20 sm:px-10 px-5">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-12 gap-5 md:h-screen h-fit mx-auto sm:pb-24 pb-0 sm:my-0 mt-5 mb-10">
          <Banner profile={profile.res} />
        </div>
      </div>
    </div>
  )
}
