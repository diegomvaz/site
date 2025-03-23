import About from "./components/about/about"
import Cover from "./components/cover/cover"
import Menu from "./components/menu/menu"
import Projects from "./components/projects/projects"
import Resume from "./components/resume/resume"
import Skills from "./components/skills/skills"
import Testimonials from "./components/testimonials/testimonials"


function App() {

  return (
    <>
      <div className='app'>
        <Menu />
        <Cover />
        <About />
        <Resume />
        <Skills />
        <Projects />
        <Testimonials />
      </div>
    </>
  )
}

export default App
