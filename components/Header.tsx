/* eslint-disable react/no-unescaped-entities */

import Link from 'next/link';
import Navbar from './NavBar';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-blue-500 font-bold text-2xl">EnjoyTravelSG</Link>
        </div>
        
        {/* Navigation Links */}
        <Navbar />
        
      </div>
    </header>
  );
};

export default Header;
