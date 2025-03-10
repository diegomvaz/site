import About from "./components/about/about"
import Cover from "./components/cover/cover"
import Menu from "./components/Menu/menu"
import Resume from "./components/resume/resume"


function App() {

  return (
    <>
      <div className='app'>
        <Menu />
        <Cover />
        <About />
        <Resume />
      </div>
    </>
  )
}

export default App
