import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="text-red-600 font-bold text-2xl">EnjoyTravel</Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex space-x-6">
          <Link href="/" className="text-gray-700 hover:text-red-600 font-medium">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-red-600 font-medium">About Us</Link>
          <Link href="/tours" className="text-gray-700 hover:text-red-600 font-medium">Tours</Link>
          <Link href="/contact" className="text-gray-700 hover:text-red-600 font-medium">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
