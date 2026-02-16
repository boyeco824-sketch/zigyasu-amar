
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll for internal links
    const handleScrollLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = anchor.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    
    // Intersection Observer for Reveal Animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    window.addEventListener('click', handleScrollLink);
    return () => {
      window.removeEventListener('click', handleScrollLink);
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#F4A825] selection:text-black transition-colors duration-500">
      <CustomCursor />
      <Navbar />
      <main>
        <Hero />
        <div className="py-12 opacity-50">
          <Marquee text="about . about . about . about ." reverse />
        </div>
        <About />
        <div className="py-12 opacity-50">
          <Marquee text="work . work . work . work ." />
        </div>
        <Portfolio />
        <div className="py-12 opacity-50">
          <Marquee text="certifications . certifications . certifications . certifications ." />
        </div>
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
