import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import ChatbotWidget from "./components/ChatbotWidget";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Projects />
        <About />
        <TechStack />
        <Process />
        <CTA />
        <Pricing />
        <FAQ />
      </main>

      <Footer />
      <ChatbotWidget />
    </div>
  );
}

export default App;