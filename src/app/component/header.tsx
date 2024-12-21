import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className="text-center py-8 bg-gradient-to-r from-gray-800 to-gray-600 text-white">
      <ul className="flex gap-10 text-center items-center justify-center text-lg">
        <Link 
          href="/" 
          className="text-white text-base font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline">
          Home
        </Link>
        <Link 
          href="/about" 
          className="text-white text-base font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline">
          About
        </Link>
        <Link 
          href="/contact" 
          className="text-white text-base font-bold transition-transform duration-300 ease-in-out hover:scale-110 hover:underline">
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Header;
