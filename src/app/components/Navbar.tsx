'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">
          BlueShop
        </Link>

        {/* Mobile menu toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-6 font-medium text-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shop">Shop</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <li><Link href="/cart" className="flex items-center"><ShoppingCart className="mr-1" /> Cart</Link></li>
        </ul>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-blue-600 px-4 py-2 space-y-2">
          <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link href="/shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
          <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
          <li><Link href="/cart" onClick={() => setIsOpen(false)}>Cart</Link></li>
        </ul>
      )}
    </nav>
  );
}
