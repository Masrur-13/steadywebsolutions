import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./index.css";
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative bg-[#030303] min-h-screen overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
