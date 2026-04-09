import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Industries from './components/Industries';
import Portfolio from './components/Portfolio';
import HowWeWork from './components/HowWeWork';
import WhyChooseUs from './components/WhyChooseUs';
import FutureReady from './components/FutureReady';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        <Portfolio />
        <HowWeWork />
        <WhyChooseUs />
        <FutureReady />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
