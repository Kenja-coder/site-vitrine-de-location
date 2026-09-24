import Home from "./component/Home"
import Navbar from "./component/Navbar"
import Skill from "./component/Skill"

function App() {

  return (
    <div className="flex flex-col gap-10 ">
      <Navbar/>
      <Home/>
      <Skill/>
    </div>
  )
}

export default App
