import Home from "./component/Home"
import Navbar from "./component/Navbar"

function App() {

  return (
    <div className="p-5 flex flex-col gap-20 ">
      <Navbar/>
      <main className="">
        <Home/>
      </main>
    </div>
  )
}

export default App
