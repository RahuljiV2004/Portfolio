'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import TechStack from '@/components/Tech';
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
       
<TechStack />

      <Projects />
      <Skills />
      <Contact />
    </main>
  );
} 