'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import MobileMenu from './MobileMenu';
import { siteMetadata } from '@/lib/content';
import { createPhoneLink } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about/' },
  { name: 'Services', href: '/services/' },
  { name: 'Gallery', href: '/gallery/' },
  { name: 'Reviews', href: '/reviews/' },
  { name: 'Contact', href: '/contact/' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { phone } = siteMetadata.contact_details;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 md:w-12 md:h-12">
              <img
                src="/images/logo.svg"
                alt="RoadSafe Logo"
                className="w-full h-full"
              />
            </div>
            <div className="hidden sm:block">
              <span className="text-lg md:text-xl font-bold text-primary">RoadSafe</span>
              <span className="block text-xs text-gray-500 -mt-1">Mobile Tire & Auto</span>
            </div>
          </Link>

          {/* Mobile Call Button - Center */}
          <a
            href={createPhoneLink(phone)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 bg-secondary text-white rounded-full 
                       shadow-lg shadow-secondary/30 hover:bg-secondary-600 active:scale-95 transition-all"
          >
            <Phone className="w-5 h-5" />
            <span className="text-sm font-bold">Call Now</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-primary font-medium hover:text-secondary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="flex items-center gap-4">
            <a
              href={createPhoneLink(phone)}
              className="hidden md:flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </a>
            <Button
              href={createPhoneLink(phone)}
              variant="secondary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Call Now
            </Button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-primary hover:text-secondary"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigation={navigation}
      />
    </header>
  );
}
