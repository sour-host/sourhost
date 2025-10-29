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
      <header className="w-full z-50 bg-transparent transition-all duration-300 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="/sourhost.png" 
                className="h-8 ml-2"
                alt="SourHost Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="/" className="text-white font-bold text-sm hover:text-[#00b72f] transform scale-x-[1.15] transition-colors">
                HOME
              </a>

              <a href="/#plans" className="text-white font-bold text-sm hover:text-[#00b72f] transform scale-x-[1.15] transition-colors">
                Minecraft
              </a>

              <a href="/shield" className="text-white font-bold text-sm hover:text-[#00b72f] transform scale-x-[1.15] transition-colors">
                SOURSHIELD
              </a>
              
              <a href="https://discord.gg/sourhost" className="text-white font-bold text-sm hover:text-[#00b72f] transform scale-x-[1.15] transition-colors">
                CONTACT US
              </a>
            </nav>

            {/* User Section */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="https://portal.sour.host">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                Dashboard
              </button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden bg-black/60 text-[#00b72f] p-2 rounded">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;
