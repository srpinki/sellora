"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-black">
            Sellora
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/shop" className="text-sm hover:text-black text-gray-600">
              Shop
            </Link>
            <Link href="/categories" className="text-sm hover:text-black text-gray-600">
              Categories
            </Link>
            <Link href="/seller" className="text-sm hover:text-black text-gray-600">
              Sell on Sellora
            </Link>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/auth/login"
              className="text-sm text-gray-600 hover:text-black"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md bg-black px-4 py-2 text-sm text-white hover:bg-gray-800"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col px-4 py-4 gap-4">
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
            <Link href="/categories" onClick={() => setIsOpen(false)}>
              Categories
            </Link>
            <Link href="/seller" onClick={() => setIsOpen(false)}>
              Sell on Sellora
            </Link>
            <hr />
            <Link href="/auth/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
            <Link
              href="/auth/register"
              className="rounded-md bg-black px-4 py-2 text-white text-center"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
