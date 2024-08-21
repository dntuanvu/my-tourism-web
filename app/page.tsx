import './globals.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import TourList from '../components/TourList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      
      {/* Add more components like Featured Tours, Testimonials, etc. */}
      <TourList />

      <Footer />
    </div>
  );
}
