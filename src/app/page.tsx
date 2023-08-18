import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import Services from '@/components/Services';
import Solution from '@/components/Solution';
import Stats from '@/components/Stats';

// metadata
// nav smooth scroll & overflow-y-scroll
// buttons

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Solution />
    </>
  );
}
