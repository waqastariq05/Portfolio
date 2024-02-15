import { useState, useRef, useEffect } from 'react'
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

  const [activeSection, setActiveSection] = useState(null);
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.scrollY;
    let newActiveSection = null;

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('.section');
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar activeSection={activeSection} />
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
