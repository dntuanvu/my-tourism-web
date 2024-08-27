import './globals.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import TourList from '../components/TourList';
import Footer from '@/components/Footer';
import IframeComponent from '@/components/IframeComponent';
import TabNavigation from '@/components/TabNavigation';

import StickyBanner from '@/components/StickyBanner';
import Navbar from '@/components/NavBar';

export default function Home() {
  return (
    <div>
      <Header />
      
      <Hero />
      
      {/* Add more components like Featured Tours, Testimonials, etc. */}
      
      <Footer />
    </div>
  );
}
