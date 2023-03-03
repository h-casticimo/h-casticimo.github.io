import React from 'react'
import Header from './elements/header/Header'
import Nav from './elements/nav/Nav'
import About from './elements/about/About'
import Experiences from './elements/experiences/Experiences'
import Projects from './elements/projects/Projects'
import Contact from './elements/contact/Contact'
import Footer from './elements/footer/Footer'


const App = () => {
    return (
        <div className="App-main">
            <Header />
            <Nav />
            <About />
            <Experiences />
            <Projects />
            {/* <Contact /> */}
            <Footer />
        </div>
    )
}


export default App