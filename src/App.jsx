import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Facilities from "./components/Facilities";
import Contact from "./components/Contact";
import WhatsAppButton from "./components/WhatsappButton";
import Gallery from "./components/Gallery";
import AdmissionForm from "./components/AdmissionForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      <Hero />
      <About />
      <Facilities />
      <Contact />
      <WhatsappButton />
      <Gallery />
       <AdmissionForm  />
      <Footer />
     
    </div>
  );
}

export default App;