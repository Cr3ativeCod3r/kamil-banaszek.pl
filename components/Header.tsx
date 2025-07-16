
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact&Socials' },
  ];
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#hero" className="text-3xl font-bold text-white transition-colors hover:text-sky-400">
              <span className="text-sky-400">K</span>amil <span className="text-sky-400">B</span>anaszek
            </a>
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="text-slate-300 hover:text-sky-400 transition-colors duration-300">
                  {link.label}
                </a>
              ))}
            </nav>
            <a href="#contact" className="hidden md:inline-block bg-sky-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-sky-600 transition-all duration-300">
              Get in Touch
            </a>
            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Open menu" className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-slate-900/95 backdrop-blur-md transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out md:hidden`}>
        <div className="container mx-auto h-full flex flex-col items-center justify-center">
          <button onClick={toggleMenu} aria-label="Close menu" className="absolute top-5 right-5 text-white focus:outline-none">
             <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={toggleMenu} className="text-3xl font-semibold text-slate-200 hover:text-sky-400 transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </nav>
           <a href="#contact" onClick={toggleMenu} className="mt-12 bg-sky-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-sky-600 transition-all duration-300">
            Get in Touch
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
