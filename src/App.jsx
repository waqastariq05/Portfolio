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

  const sections = useRef([]);

  const handleScroll = () => {
    const navLink = document.querySelectorAll(".nav_link")
    const pageYOffset = window.scrollY;
    let newActiveSection = 'home';

    sections.current.forEach((section) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    navLink.forEach(link => {
      if (link.href.includes(newActiveSection)) {
        document.querySelector(".active").classList.remove("active")
        link.classList.add("active")
      }
    })
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
