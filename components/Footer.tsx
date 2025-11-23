// components/Footer.tsx
import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CreditCard,
  Shield,
  Truck,
  HeadphonesIcon
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    company: {
      title: 'Products',
      links: [
        { name: 'Minecraft Server Hosting', href: '/#plans' },
        { name: 'Minecraft Tools', href: '/' },
      ]
    },
    services: {
      title: 'Clients',
      links: [
        { name: 'News & Updates', href: 'https://portal.sour.host/news' },
        { name: 'Game Panel', href: 'https://panel.sour.host/' },
        { name: 'Billing Area', href: 'https://portal.sour.host/auth/login' },
        { name: 'Tickets & Support', href: 'https://portal.sour.host/tickets/create' },
      ]
    },
    support: {
      title: 'Company',
      links: [
        { name: 'Blog', href: 'https://portal.sour.host/news' },
        { name: 'Affiliates', href: '/affiliates' },
        { name: 'Legal', href: '/legal' },
      ]
    },
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: 'https://x.com/sourhost', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-white/10 text-white">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-9 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-3">
            <Link href="/" className="flex items-center mb-6">
              <img src="/aeplo.png" className="w-50" />
            </Link>
            <p className="text-gray-400 mb-2 max-w-md">
              Follow Us On:
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="rounded-lg flex items-center justify-center transition-colors duration-200 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className="col-span-2">
              <h3 className="font-semibold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} ALLEXANDERBM. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <img src="/paymethod.png" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
