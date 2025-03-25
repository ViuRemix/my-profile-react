import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import styles from './components/InputDesign.module.css';

function App() {
  return (
    <div className={styles.pageContainer}>
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;