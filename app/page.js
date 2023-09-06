import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('../components/Banner'))

export default async function Home() {
  return (
    <div>
      <div className="container mx-auto md:px-20 sm:px-10 px-5">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-12 gap-5 md:h-screen h-fit mx-auto sm:pb-24 pb-0 sm:my-0 mt-5 mb-10">
          <Banner />
        </div>
      </div>
    </div>
  )
}
