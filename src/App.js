import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import PreLoader from './components/PreLoader';

function App() {
  return (
    <div>
      {/* <PreLoader /> */}
      <NavBar />
      <Home />
      <Portfolio />
      <Experience />
      <About />
      <Contact />
      <SocialLinks />
    </div>
  );
}

export default App;
