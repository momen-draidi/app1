import React from 'react'
import About from './About/About.jsx'
import Contact from './CONTACT/Contact.jsx'
import Footer from './footer/Footer.jsx'
import Header from './Header/Header.jsx'
import Navbar from './nav/Navbar.jsx'
import Portfolio from './PORTFOLIO/Portfolio.jsx'

function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Portfolio/>
      <About/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App