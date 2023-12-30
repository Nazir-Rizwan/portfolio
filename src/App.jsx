import { useState } from 'react'
import './App.css'
import Navrbar from "./components/Navbar"
import Home from './components/Home'
import SocialLinks from './components/Sociallink'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Skill from './components/Skill'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navrbar/>
      <Home/>
     <SocialLinks/>
     <About/>
      <Projects/>
      <Skill/>
      <Contact/>
     
    </>
  )
}

export default App
