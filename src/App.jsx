import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import FooterSection from './components/FooterSection/FooterSection'

function App() {

  return (
    <>
      <Navbar />
      <HeroSection />
      <FooterSection />
    </>
  )
}

export default App
