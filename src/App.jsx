import Contact from "./layout/Contact"
import Navbar from "./components/Navbar"
import About from "./layout/About"
import Blog from "./layout/Blog"
import Home from "./layout/Home"
import Footer from "./components/Footer"


function App() {

  return (
    <>
    <main className="w-full h-screen overflow-x-hidden scroll-smooth" >
<Navbar/>
<Home/>
<About/>
<Blog/>
<Contact/>
<Footer/>
</main>
    </>
  )
}

export default App
