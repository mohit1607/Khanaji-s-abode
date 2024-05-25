import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Explore from './components/Explore'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'
import Home from './Pages/Home'
import Music from './Pages/Music'
import Temple from './Pages/Temple'


function App() {

  return (
    <>
    <Nav/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/music' element={<Music/>} />
      <Route path='/temple' element={<Temple/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
