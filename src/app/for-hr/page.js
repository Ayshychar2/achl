import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ForHRPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: 'var(--background)' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '60px 20px 80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '24px' }}>
            ACHL HIRING NETWORK
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '24px' }}>
            Hire Critical Thinkers, Not Just Graduates.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6 }}>
            Partner with us to access top talent pre-trained in strategic problem solving, cognitive bias recognition, and first-principles thinking.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/signup?role=HR" className="btn-primary" style={{ padding: '14px 28px', fontSize: '1.1rem' }}>Raise Hiring Requirement</Link>
            <Link href="/login" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1.1rem', border: '2px solid var(--primary)', color: 'var(--primary)' }}>HR Login</Link>
          </div>
        </section>

        {/* DETAILS SECTION */}
        <section style={{ backgroundColor: 'var(--surface)', padding: '60px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '16px' }}>psychology</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Pre-Vetted Thinkers</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Our students go through rigorous critical thinking and decision-making scenarios before they even reach you.</p>
              </div>
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '16px' }}>bolt</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Reduced Time to Hire</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Post a requirement, and our system will match you directly with the best-fit students from our ecosystem.</p>
              </div>
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '16px' }}>handshake</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Direct Admin Support</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Our team manually reviews and refers the top candidates directly to your dashboard.</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
