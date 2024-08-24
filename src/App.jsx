import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Text} from '@chakra-ui/react'
import { NavLink } from "react-router-dom";
import { Link} from 'react-scroll';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Links from './Components/Links'
import Introduction from './Components/Introduction'
import Skills from './Components/Skills'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Hero/>
    <Introduction/>
    <Skills/>
    </>
  )
}

export default App
