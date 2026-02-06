'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'nav_home', label: 'Αρχική', href: '/homepage' },
    { id: 'nav_about', label: 'Σχετικά', href: '/about' },
    { id: 'nav_services', label: 'Υπηρεσίες', href: '/services' },
    { id: 'nav_contact', label: 'Επικοινωνία', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/homepage" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon name="HeartIcon" size={24} className="text-white" variant="solid" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl font-semibold text-foreground">
                Μαρία Μανωλά
              </span>
              <span className="text-xs text-muted-foreground">Ψυχολόγος</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks?.map((link) => (
              <Link
                key={link?.id}
                href={link?.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {link?.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <Link
              href="/contact"
              className="px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 shadow-soft hover:shadow-lg"
            >
              Κλείστε Ραντεβού
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'XMarkIcon' : 'Bars3Icon'} size={28} />
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fadeIn">
            <div className="flex flex-col gap-4">
              {navLinks?.map((link) => (
                <Link
                  key={link?.id}
                  href={link?.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link?.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium text-center hover:bg-primary/90 transition-all duration-300"
              >
                Κλείστε Ραντεβού
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}