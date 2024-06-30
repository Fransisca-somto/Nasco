import React from 'react'
import About from './Components/about/About'
import Contact from './Components/contact/Contact'
import Experience from './Components/experience/Experience'
import Header from './Components/header/Header'
import Nav from './Components/nav/Nav'
import Portfolio from './Components/portfolio/Portfolio'
import Services from './Components/servicess/Services'
import Testimonials from './Components/testimonials/Testimonials'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App