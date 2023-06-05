import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/about";
import Skills from "./components/skills";
import Work from "./components/work";
import Contact from "./components/Contact";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;