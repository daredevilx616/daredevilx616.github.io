import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { Helmet } from "react-helmet"
import AOS from "aos"

import "bootstrap/dist/css/bootstrap.min.css"
import "aos/dist/aos.css"
import "./css/App.css"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Education from "./pages/Education"
import Experience from "./pages/Experience"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
// import Achievements from "./pages/Achievements"

function MainContent() {
  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <meta
          name="description"
          content="Muhammad Abdullah Nasir - Fullstack Developer."
        />
        <meta name="author" content="Muhammad Abdullah Nasir" />
        <title>Muhammad Abdullah Nasir - Portfolio</title>
      </Helmet>
      <div id="wrapper">
        <Navbar />
        <Home />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        {/* <Achievements /> */}
        <Contact />
      </div>
    </>
  )
}

function App() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
    </Routes>
  )
}

export default App