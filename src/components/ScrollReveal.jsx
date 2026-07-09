'use client';
import { useEffect } from 'react';

export default function ScrollReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      const elementVisible = 100;

      reveals.forEach((reveal) => {
        const elementTop = reveal.getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
          reveal.classList.add('visible');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on mount to show elements already in view
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  return null; // This component doesn't render anything itself
}
