import About from "./components/About";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skills from "./components/Skills";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Projects />
     <Skills/>
      <Experience />
      <Certificates />


      <SocialLinks />
    </div>
  );
}

export default App;
