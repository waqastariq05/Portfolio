import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'
import SkillSection from './components/SkillSection'

function App() {
  const [alert, setAlert] = useState(false)
  const [alertData, setAlertData] = useState({ type: "", msg: "" })

  return (
    <>
      <Navbar />
      {alert && <Alert alertData={alertData} setAlert={setAlert} setAlertData={setAlertData} />}
      <HeroSection />
      <SkillSection />
      <ProjectSection />
      <ContactSection setAlert={setAlert} setAlertData={setAlertData} />
      <Footer />
    </>
  )
}

export default App
