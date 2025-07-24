import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Skill from './Components/Skills/Skill';

function App() {
  return (
    <div >
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
