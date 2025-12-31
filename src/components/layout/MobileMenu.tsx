'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { X, Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { siteMetadata } from '@/lib/content';
import { createPhoneLink } from '@/lib/utils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: { name: string; href: string }[];
}

export default function MobileMenu({ isOpen, onClose, navigation }: MobileMenuProps) {
  const { phone } = siteMetadata.contact_details;

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="text-xl font-bold text-primary">Menu</span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-primary transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-4 py-6 overflow-y-auto">
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block px-4 py-3 text-lg font-medium text-primary hover:bg-primary/5 hover:text-secondary rounded-lg transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer CTA */}
          <div className="p-4 border-t bg-gray-50">
            <a
              href={createPhoneLink(phone)}
              className="flex items-center justify-center gap-2 mb-3 text-primary font-semibold"
            >
              <Phone className="w-5 h-5" />
              <span>{phone}</span>
            </a>
            <Button
              href={createPhoneLink(phone)}
              variant="secondary"
              size="lg"
              className="w-full"
            >
              Call Now - 24/7
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
