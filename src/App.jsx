import { useState } from 'react'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} bg-white dark:bg-black relative`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  )
}

export default App