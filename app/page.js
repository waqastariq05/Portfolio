import Transition from '@/components/Transition'
import dynamic from 'next/dynamic'
const Banner = dynamic(() => import('../components/Banner'))

export default async function Home() {
  return (
    <div>
      <Transition />
      <div className="container mx-auto md:px-20 sm:px-10 px-5">
        <div className="flex md:flex-row flex-col justify-center items-center md:gap-12 gap-5 md:h-screen h-fit mx-auto md:pb-0 pb-20 sm:pt-5 pt-3">
          <Banner />
        </div>
      </div>
    </div>
  )
}
