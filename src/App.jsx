import { useState } from 'react'
import NavBar from './components/NavBar';
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Background from './components/Background';
import Footer from './components/Footer';
import Certifications from './components/Certifications';
import WorkExperience from './components/WorkExperience';

function App() {

  return (
    <div>
      <Background />
      <NavBar />
      <Home />
      <About />
      <WorkExperience />
      <Portfolio />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
      <SocialLinks />
    </div> 
  );
}

export default App
