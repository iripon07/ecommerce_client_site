"use client"

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-lg">Brand</Link>
        <button onClick={toggleMenu} className="block md:hidden text-white focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <nav className={`md:flex space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/" className="text-white hover:text-gray-400">Home</Link>
          <Link href="/about" className="text-white hover:text-gray-400">About</Link>
          <Link href="/services" className="text-white hover:text-gray-400">Services</Link>
          <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
