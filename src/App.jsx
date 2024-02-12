import './App.css'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import SkillSection from './components/SkillSection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
