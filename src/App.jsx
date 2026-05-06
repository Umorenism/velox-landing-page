import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Mission from './components/Mission';
import Features from './components/Features';
import Markets from './components/Markets';
import VideoSection from './components/VideoSection';
import Blockchain from './components/Blockchain';
import HowItWorks from './components/HowItWorks';
import Rebate from './components/Rebate';
import WhyUs from './components/WhyUs';
import RiskDisclosure from './components/RiskDisclosure';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setTheme(storedTheme ?? (prefersDark ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <Stats />
      <Mission />
      <Features />
      <Markets />
      <VideoSection />
      <Blockchain />
      <HowItWorks />
      <Rebate />
      <WhyUs />
      <RiskDisclosure />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;