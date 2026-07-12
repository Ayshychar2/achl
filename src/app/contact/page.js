import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: 'var(--background)' }}>
        
        {/* HERO */}
        <section style={{ padding: '60px 20px 80px 20px', backgroundColor: 'var(--surface-container)', color: 'var(--on-surface)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 600px' }}>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '24px', letterSpacing: '1px' }}>
                CONTACT ACHL
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                Let's Build Future-Ready Professionals Together.
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px' }}>
                Whether you're a student looking to enroll, an employer seeking talented professionals, or a college interested in partnering with ACHL, we'd love to hear from you.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <a href="#contact-form" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>Send Message</a>
                <a href="/certification" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--on-surface)', border: '2px solid var(--border-light)' }}>Explore Programs</a>
              </div>
            </div>

            {/* We Can Help You With Card */}
            <div style={{ flex: '1 1 300px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', padding: '32px', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>We Can Help You With</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Student Enrollment', 'Employer Hiring', 'College Partnerships', 'Workshops & Training', 'Corporate Programs', 'Campus Engagement', 'Speaking Opportunities', 'General Queries'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>



        {/* CONTACT FORM */}
        <section id="contact-form" style={{ padding: '100px 20px', maxWidth: '800px', margin: '0 auto' }}>
          <div style={{ backgroundColor: 'var(--surface-container-lowest)', padding: '60px 40px', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Send A Message</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                Fill out the form below and we'll get back to you shortly.
              </p>
            </div>
            
            <form style={{ display: 'grid', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--on-surface)' }}>First Name</label>
                  <input type="text" placeholder="John" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface)', color: 'var(--on-surface)', outline: 'none' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--on-surface)' }}>Last Name</label>
                  <input type="text" placeholder="Doe" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface)', color: 'var(--on-surface)', outline: 'none' }} />
                </div>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--on-surface)' }}>Email Address</label>
                <input type="email" placeholder="john@example.com" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface)', color: 'var(--on-surface)', outline: 'none' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--on-surface)' }}>Subject / Purpose</label>
                <select style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface)', color: 'var(--on-surface)', outline: 'none' }}>
                  <option>Student Enrollment</option>
                  <option>Employer Hiring</option>
                  <option>College Partnership</option>
                  <option>Other Queries</option>
                </select>
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600, color: 'var(--on-surface)' }}>Message</label>
                <textarea rows="5" placeholder="How can we help you?" style={{ width: '100%', padding: '14px', borderRadius: '8px', border: '1px solid var(--border-light)', backgroundColor: 'var(--surface)', color: 'var(--on-surface)', outline: 'none', resize: 'vertical' }}></textarea>
              </div>
              
              <button type="button" className="btn-primary" style={{ padding: '16px', fontSize: '1.1rem', marginTop: '16px', cursor: 'pointer' }}>
                Submit Message
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}