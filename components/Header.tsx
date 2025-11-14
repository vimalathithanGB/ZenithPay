import React, { useState, useEffect } from 'react';
import { LogoIcon } from '../constants/icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-lg border-b border-slate-700' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LogoIcon className="w-8 h-8 text-indigo-400" />
          <span className="text-2xl font-bold text-white">MotoHub</span>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-slate-300 hover:text-white transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">
            Testimonials
          </a>
        </nav>
        <button className="hidden md:block bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg shadow-indigo-500/30 transition-all duration-300 transform hover:scale-105">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;