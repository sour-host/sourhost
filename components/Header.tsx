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
      <header className="fixed top-0 w-full z-50 bg-transparent transition-all duration-300 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://mintservers.com/brand/icon.svg" 
                className="h-9 w-9 animate-[alternating-animations_14s_0.4s_infinite_alternate]"
                alt="MintServers icon"
              />
              <img 
                src="https://mintservers.com/brand/logo-no-icon.svg" 
                className="h-8 ml-2"
                alt="MintServers Logo"
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              <a href="/" className="text-white font-bold text-sm hover:text-[#00aeef] transform scale-x-[1.15] transition-colors">
                HOME
              </a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-white font-bold text-sm hover:text-[#00aeef] transform scale-x-[1.15] transition-colors flex items-center">
                  ALL SERVICES <i className="fa-solid fa-caret-down ml-1 text-[#00aeef] text-xs relative -top-0.5"></i>
                </button>
                <div className="absolute left-0 top-full mt-2 w-64 bg-[rgba(16,11,34,0.9)] backdrop-blur-lg rounded-3xl opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 pointer-events-none group-hover:pointer-events-auto">
                  {/* Dropdown content */}
                  <div className="p-4">
                    <h6 className="text-white font-semibold text-xs uppercase tracking-wider mb-2">Game Hosting</h6>
                    <a href="/" className="flex items-center text-[#bebebe] hover:text-white py-2 transition-colors">
                      <img src="https://mintservers.com/assets/games/icons/mcjava.png" className="w-4 h-4 mr-2" alt="" />
                      Minecraft Hosting
                    </a>
                  </div>
                </div>
              </div>

              <a href="/knowledgebase" className="text-white font-bold text-sm hover:text-[#00aeef] transform scale-x-[1.15] transition-colors">
                KNOWLEDGEBASE
              </a>
              
              <a href="/support" className="text-white font-bold text-sm hover:text-[#00aeef] transform scale-x-[1.15] transition-colors">
                CONTACT US
              </a>
            </nav>

            {/* User Section */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-bold transition-colors">
                <i className="fa-solid fa-sliders mr-2"></i>
                Dashboard
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden bg-black/60 text-[#00aeef] p-2 rounded">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
  );
};

export default Header;
