import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import SocialLinks from "./components/SocialLinks";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <SocialLinks />
      <NavBar />
      <Home />
      <Portfolio />
      <Services />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
