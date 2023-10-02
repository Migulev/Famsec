import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import RecentBlog from '@/components/RecentBlog';
import Services from '@/components/Services';
import Solution from '@/components/Solution';
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';

// nav smooth scroll & overflow-y-scroll to the sections
// framer motion
// faker

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <Solution />
      <Testimonial />
      <RecentBlog />
      <Footer />
    </>
  );
}
