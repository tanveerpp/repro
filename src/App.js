import React from 'react'
import { Link, Route, Router, Routes } from 'react-router-dom'
import About from './components/About'
import Contact from './components/Contact'
import Home from './components/Home'
import Pagenotfound from './components/Pagenotfound'
const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/*' element={<Pagenotfound/>}/>
      </Routes>
      <a href='/'>Home</a>
      <a href='/about'>About</a>
      <a href='/contact'>Contact</a>
      <a href='/service'>Services</a>
      <br/>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
    </>
  )
}

export default App