import About from "./components/about/about"
import Cover from "./components/cover/cover"
import Menu from "./components/menu/menu"
import Resume from "./components/resume/resume"
import Skills from "./components/skills/skills"


function App() {

  return (
    <>
      <div className='app'>
        <Menu />
        <Cover />
        <About />
        <Resume />
        <Skills />
      </div>
    </>
  )
}

export default App
