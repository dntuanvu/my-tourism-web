/* eslint-disable react/no-unescaped-entities */

import './globals.css';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '@/components/Footer';

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
