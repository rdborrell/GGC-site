import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

/**
 * Footer component - Modern, elegant footer with contact info
 */
const Footer = () => {
  const contactInfo = [
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: 'info@gracegospelchurch.us',
      href: 'mailto:info@gracegospelchurch.us'
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      text: '151 Sids Way, Summersville, WV 26651',
      href: 'https://maps.google.com/?q=151+Sids+Way+Summersville+WV+26651'
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      text: '304-123-4567',
      href: 'tel:304-123-4567'
    }
  ];

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Find Us', href: '#findUs' }
  ];

  return (
    <footer className="bg-gradient-to-b from-cream to-primary-50 border-t border-primary-100/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Mission Statement */}
          <div>
            <h3 className="text-2xl font-serif font-bold text-text-primary mb-4">
              Know Christ. Love Christ. Share Christ.
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Grace Gospel Church exists to know Christ, love Christ, and share Christ with all those in the greater Nicholas County Area.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-text-primary mb-4">
              Get in Touch
            </h4>
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-text-secondary hover:text-primary-600 transition-colors group"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  <span className="text-primary-500 group-hover:text-primary-600 transition-colors">
                    {item.icon}
                  </span>
                  <span className="text-sm">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-200/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-text-light text-sm">
            © {new Date().getFullYear()} Grace Gospel Church. All rights reserved.
          </p>
          
          <nav className="flex space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-text-secondary hover:text-primary-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
