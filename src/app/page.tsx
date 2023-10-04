import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navigation from '@/components/Navigation';
import RecentBlog from '@/components/RecentBlog';
import Services from '@/components/Services';
import Solution from '@/components/Solution';
import Stats from '@/components/Stats';
import Testimonial from '@/components/Testimonial';
import { Page } from '@/types/page';

export default function Home() {
  return (
    <>
      <div id={Page.Home} />
      <Navigation />
      <Hero />
      <Stats id={Page.Stats} />
      <Services id={Page.Services} />
      <Solution id={Page.Solutions} />
      <Testimonial id={Page.Testimonials} />
      <RecentBlog id={Page.Blog} />
      <Footer />
    </>
  );
}
