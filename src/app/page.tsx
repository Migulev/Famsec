import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import RecentBlog from '@/components/RecentBlog';
import Services from '@/components/Services';
import Solution from '@/components/Solution';
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';

// metadata
// nav smooth scroll & overflow-y-scroll
// buttons
// framer motion
// useCallback

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Solution />
      <Testimonial />
      <h3>hi</h3>
      {/* <RecentBlog /> */}
    </>
  );
}
