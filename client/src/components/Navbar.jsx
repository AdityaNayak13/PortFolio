import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';

export default function Navbar({ isDark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand Logo */}
        <a href="#" className="navbar-brand">
          <div className="brand-symbol">AN</div>
          <div className="brand-text">
            <span className="brand-name">Aditya Nayak</span>
            <span className="brand-role">Full-Stack & ML</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Theme Toggle + Contact CTA */}
        <div className="navbar-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle dark/light theme"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDark ? <Sun size={18} className="theme-icon sun-icon" /> : <Moon size={18} className="theme-icon moon-icon" />}
          </button>

          <a href="#contact" className="btn-primary nav-cta">
            <span>Hire Me</span>
            <ArrowUpRight size={16} />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <nav className="mobile-nav-links">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
