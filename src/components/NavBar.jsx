import { useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { FaInstagram } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

/**
 * NavBar component - Modern, elegant navigation with glass effect
 */
const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  const renderNavLink = (nav) => {
    if (nav.external) {
      return (
        <a href={nav.url} target="_blank" rel="noopener noreferrer">
          {nav.title === 'Sermons' ? <FaInstagram /> : nav.title}
        </a>
      );
    }
    
    if (nav.url.startsWith('/')) {
      return <RouterLink to={nav.url}>{nav.title}</RouterLink>;
    }
    
    // For anchor links (About, Social), navigate to home with hash
    return <RouterLink to={`/#${nav.id}`}>{nav.title}</RouterLink>;
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-warmWhite/95 backdrop-blur-md shadow-soft border-b border-gold-200/30">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <RouterLink to="/" className="transition-transform hover:scale-105">
          <img 
            src={logo} 
            alt="Grace Gospel Church" 
            className="h-12 w-auto"
          />
        </RouterLink>

        {/* Desktop Navigation */}
        <ul className="list-none sm:flex hidden items-center space-x-8">
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <div className="group relative font-poppins font-medium text-base text-text-primary cursor-pointer transition-colors hover:text-primary-600">
                {renderNavLink(nav)}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
              </div>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="sm:hidden flex items-center">
          <button
            onClick={() => setToggle((prev) => !prev)}
            className="p-2 rounded-lg hover:bg-primary-50 transition-colors"
            aria-label="Toggle menu"
          >
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-6 h-6 object-contain"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="sm:hidden absolute top-full right-0 left-0 bg-warmWhite shadow-soft-lg border-t border-gold-200/30 animate-slideDown">
            <ul className="flex flex-col p-6 space-y-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => setToggle(false)}
                  className="font-poppins font-medium text-base text-text-primary hover:text-primary-600 transition-colors cursor-pointer py-2 border-b border-gray-100 last:border-0"
                >
                  {renderNavLink(nav)}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
