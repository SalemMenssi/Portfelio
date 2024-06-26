import About from "./Components/About/About";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Navbar from "./Components/NavBar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div>
      <div className="bg-circle1"></div>
      <div className="bg-circle1"></div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Navbar />
    </div>
  );
}

export default App;
