import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './paginas/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    
      <Navbar />
      <div className="min-h-[80vh]">
      <Home />
      </div>
      <Footer />
    </>
    

  )
}

export default App
