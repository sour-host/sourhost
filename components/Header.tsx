// components/Header.tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { 
  ChevronDownIcon, 
  UserIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  StarIcon,
  MenuIcon,
  XIcon,
  HomeIcon,
  ShieldIcon,
  InfoIcon,
  PhoneIcon
} from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Plans', href: '/#plans' },
    { name: 'Support', href: 'https://portal.sour.host/tickets/create' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'SourShield', href: '/shield' },
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close mobile menu when clicking outside
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }

      // Close dropdowns when clicking outside
      if (openDropdown && dropdownRefs.current[openDropdown]) {
        if (!dropdownRefs.current[openDropdown]?.contains(event.target as Node)) {
          setOpenDropdown(null);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, isMobileMenuOpen]);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownLinkClick = () => {
    closeAllMenus();
  };

  // Fixed ref callback function
  const setDropdownRef = (name: string) => (el: HTMLDivElement | null) => {
    dropdownRefs.current[name] = el;
  };

  return (
    <header className="bg-transparent relative top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="relative z-60 flex-shrink-0">
            <Link href="/" className="flex items-center" onClick={closeAllMenus}>
                <img src="/sourhost.png" className="w-50 mb-2" alt="SOURHOST Logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative" ref={setDropdownRef(link.name)}>
                <Link
                  href={link.href}
                  className="flex items-center text-white transition-colors duration-200 font-semibold"
                >
                  {link.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden md:flex relative z-60 items-center space-x-4">
            <a href="https://billing.sour.host/login">
              <button className="cursor-pointer text-white transition-colors duration-200 font-semibold px-4 py-2 rounded-lg">
                Login
              </button>
            </a>
            <a href="https://billing.sour.host/register.php">
              <button className="cursor-pointer bg-gradient-to-r from-[#00b72f] to-[#00b72f] hover:from-[#00b72f]/70 to-[#00b72f]/70 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-200 transform shadow-md hover:shadow-lg">
                Order Now
              </button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative z-60">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white transition-colors duration-200 p-2 rounded-lg"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          ref={mobileMenuRef}
          className={`md:hidden relative z-60 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen 
              ? 'max-h-96 opacity-100' 
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                    href={link.href}
                    className="flex items-center text-gray-700 hover:text-[#00b72f] transition-colors duration-200 font-semibold py-3 px-2 rounded-lg hover:bg-gray-50"
                    onClick={closeAllMenus}
                >
                    {link.name}
                </Link>
              </div>
            ))}
            
            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <a href="https://portal.sour.host/auth/login">
                <button 
                  className="w-full text-white hover:text-[#00b72f] transition-colors duration-200 font-semibold py-3 px-4 rounded-lg border border-gray-200 hover:border-green-200 text-center"
                  onClick={closeAllMenus}
                >
                  Login
                </button>
              </a>
              <a href="/#plans">
                <button 
                  className="w-full bg-gradient-to-r from-[#00b72f] to-[#00b72f] hover:from-[#00b72f]/70 to-[#00b72f]/70 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-md text-center"
                  onClick={closeAllMenus}
                >
                  Order Now
                </button>
              </a>
            </div>
          </nav>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={closeAllMenus}
        />
      )}
    </header>
  );
};

export default Header;
