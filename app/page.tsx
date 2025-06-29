import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Skills from '@/components/home/Skills';
import Portfolio from '@/components/home/Portfolio';
import Contact from '@/components/home/Contact';

export default function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
    </div>
  );
}