'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`} id="main-header">
        <div className="header-inner">
          <Link href="/" className="logo">ACHL</Link>
          <nav className="desktop-nav">
            <Link href="/about">About</Link>
            <Link href="/certification">Certification Program</Link>
            <Link href="/for-hr">For HR</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <div className="header-cta-wrapper">
            <Link href="/login" className="btn-text" style={{ marginRight: '12px', fontWeight: 600, textDecoration: 'none' }}>
              Login
            </Link>
            <Link href="/signup" className="btn-primary">Sign Up</Link>
          </div>
          <button 
            className="mobile-menu-toggle" 
            id="menu-toggle" 
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`} id="mobile-menu" style={{ display: menuOpen ? 'flex' : 'none' }}>
        <Link href="/about" onClick={() => setMenuOpen(false)}>About</Link>
        <Link href="/certification" onClick={() => setMenuOpen(false)}>Certification Program</Link>
        <Link href="/for-hr" onClick={() => setMenuOpen(false)}>For HR</Link>
        <Link href="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link href="/signup" className="mobile-cta" onClick={() => setMenuOpen(false)}>Sign Up</Link>
      </div>
    </>
  );
}
