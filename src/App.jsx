import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Stack from "./sections/Stack";
import BuildLog from "./sections/BuildLog";
import CertsAndPresence from "./sections/CertsAndPresence";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <div className="noise relative min-h-screen">
      <Nav />

      <main>
        {/* HERO */}
        <Hero />

        {/* 01 / ABOUT */}
        <About />

        {/* 02 / WORK */}
        <Work />

        {/* 03 / STACK */}
        <Stack />

        {/* 04 / JOURNEY */}
        <BuildLog />

        {/* 05 / PRESENCE */}
        <CertsAndPresence />

        {/* 06 / CONTACT */}
        <Contact />
      </main>

      <Footer />
    </div>
  );
}