import React, { useState } from 'react';
import { Phone, Mail, Menu, X, ChevronRight, ChevronDown } from 'lucide-react';

interface HeaderProps {
  onNavigate?: (page: 'home' | 'products') => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate?.('home');
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#222] text-white py-2 px-4 text-xs md:text-sm font-sans">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <a href="tel:614-699-0603" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Phone size={14} />
              <span>614-699-0603</span>
            </a>
            <a href="mailto:info@nactax.net" className="flex items-center gap-2 hover:text-gray-300 transition-colors">
              <Mail size={14} />
              <span>info@nactax.net</span>
            </a>
          </div>
          <div className="hidden md:block">
            Contact Us For More Information
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white shadow-sm py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Recreation */}
          <div className="flex flex-col leading-none cursor-pointer" onClick={handleHomeClick}>
            <h1 className="text-3xl font-extrabold tracking-tighter text-nactax-red border-b-2 border-nactax-red inline-block">
              NACTAX
            </h1>
            <span className="text-[0.5rem] font-bold text-gray-600 tracking-wider uppercase">
              Tax, Accounting & Business Support Services
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 font-semibold text-gray-700 text-sm uppercase items-center">
            <a href="#" onClick={handleHomeClick} className="hover:text-nactax-red">Home</a>
            <a href="#about" onClick={handleHomeClick} className="hover:text-nactax-red">About</a>
            <div className="relative group">
              <button className="hover:text-nactax-red flex items-center gap-1 py-4">
                Services <ChevronDown size={14} />
              </button>
              {/* Dropdown */}
              <div className="absolute top-full left-0 w-56 bg-white shadow-lg rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border-t-2 border-nactax-red">
                <a href="#" onClick={handleHomeClick} className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs">Business</a>
                <a href="#" onClick={handleHomeClick} className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 text-xs">Personal Finance</a>
                <a href="#" onClick={handleHomeClick} className="block px-4 py-3 hover:bg-gray-50 text-xs">Other Services</a>
              </div>
            </div>
            <a href="#profile" className="hover:text-nactax-red">Profile</a>
            <a href="#payment" className="hover:text-nactax-red">Make A Payment</a>
            <a href="#contact" onClick={handleHomeClick} className="hover:text-nactax-red">Contact Us</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="bg-white w-[80%] max-w-[300px] h-full shadow-xl p-4 flex flex-col gap-4 text-sm font-medium text-gray-700 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4">
               <h1 className="text-2xl font-extrabold tracking-tighter text-nactax-red">NACTAX</h1>
            </div>
            
            <a href="#" className="py-2 border-b border-gray-100" onClick={handleHomeClick}>Home</a>
            <a href="#about" className="py-2 border-b border-gray-100" onClick={handleHomeClick}>About</a>
            
            <div>
              <button 
                className="w-full flex justify-between items-center py-2 border-b border-gray-100 text-nactax-red"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                Services
                <ChevronRight size={16} className={`transform transition-transform ${isServicesOpen ? 'rotate-90' : ''}`} />
              </button>
              {isServicesOpen && (
                <div className="pl-4 flex flex-col text-gray-600">
                  <a href="#" onClick={handleHomeClick} className="py-2 border-b border-gray-50">Business</a>
                  <a href="#" onClick={handleHomeClick} className="py-2 border-b border-gray-50">Personal Finance</a>
                  <a href="#" onClick={handleHomeClick} className="py-2 border-b border-gray-50">Other Services</a>
                </div>
              )}
            </div>

            <a href="#profile" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Profile</a>
            <a href="#payment" className="py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Make A Payment</a>
            <a href="#contact" className="py-2 border-b border-gray-100" onClick={handleHomeClick}>Contact Us</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;