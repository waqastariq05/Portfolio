import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from '@/components/Navbar';
import TopNav from '@/components/TopNav';

// import Font Awesome CSS
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Footer from '@/components/Footer';
config.autoAddCss = false;

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Waqas Tariq - Blockchain & Full Stack Developer',
  description: 'Explore a world of creativity and innovation through my portfolio. Dive into a showcase of captivating designs and projects that reflect my unique vision and passion.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <TopNav /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html >
  )
}


// APi Token 6a60c8d388cb27405a626327c5a9618ca300255174dcff402570fa6590e92b9e08244269c9453b32775d88b7bdefc778b4f659d6e872a9f4c785e55faba0d70a245b17c39b65336e77a80386b0e9d8d3db2b469ebbafeecc27bdcb071c5d89e807d930f93c7f88ce0b9072edc7cf850389fa2fc1dc035da3892b32852d9bf126