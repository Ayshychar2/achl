import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function HRPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: 'var(--background)' }}>
        
        {/* HERO */}
        <section style={{ padding: '60px 20px 80px 20px', backgroundColor: 'var(--surface-container)', color: 'var(--on-surface)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 600px' }}>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '24px', letterSpacing: '1px' }}>
                ACHL HIRING NETWORK
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                Hire Pre-Screened Talent, Not Just Resumes.
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px' }}>
                ACHL helps companies hire students who have been trained in Critical Thinking, Problem Solving and Decision Making. Instead of visiting multiple campuses, simply share your hiring requirements and we'll shortlist candidates who match your role, budget and expectations.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <a href="#hire-form" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>Raise Hiring Requirement</a>
                <a href="#benefits" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--on-surface)', border: '2px solid var(--border-light)' }}>Why ACHL?</a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>₹499</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Per Successful Hire*</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>0</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Platform Fee</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>Pre</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Screened Candidates</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>One</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Hiring Partner</span>
                </div>
              </div>
            </div>

            {/* What You Get Card */}
            <div style={{ flex: '1 1 300px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', padding: '32px', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>What You Get</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Trained Professionals', 'Pre-Screened Candidates', 'Shortlisting Based On Role', 'Shortlisting Based On Budget', 'Access To Multiple Campuses', 'No Platform Charges', 'Pay Only After Hiring', 'Dedicated Hiring Support'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHY HIRE THROUGH ACHL */}
        <section id="benefits" style={{ padding: '80px 20px 40px 20px', backgroundColor: 'var(--surface)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>WHY HIRE THROUGH ACHL?</span>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', marginBottom: '24px' }}>Save Time. Reduce Hiring Costs. Access Better Talent.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 60px auto', lineHeight: 1.6 }}>
              We simplify campus hiring by connecting employers with trained and evaluated candidates from our partner institutions.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div style={{ padding: '40px 32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--surface-container-highest)', position: 'absolute', top: '10px', right: '10px', opacity: 0.5, zIndex: 0, lineHeight: 1 }}>01</div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Trained Candidates</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Every candidate is trained in critical thinking, structured problem solving and professional communication.</p>
                </div>
              </div>
              <div style={{ padding: '40px 32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--surface-container-highest)', position: 'absolute', top: '10px', right: '10px', opacity: 0.5, zIndex: 0, lineHeight: 1 }}>02</div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Pre-Screened Profiles</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Candidates are shortlisted according to your job role, required skills and salary budget.</p>
                </div>
              </div>
              <div style={{ padding: '40px 32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--surface-container-highest)', position: 'absolute', top: '10px', right: '10px', opacity: 0.5, zIndex: 0, lineHeight: 1 }}>03</div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>One Network. Multiple Colleges.</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Instead of coordinating with multiple campuses, access talent from our partner institutions through a single hiring platform.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHO CAN HIRE */}
        <section style={{ padding: '40px 20px 100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>WHO CAN HIRE?</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>We Support Hiring Across Different Organizations</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>corporate_fare</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Startups</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Build your team with capable young professionals.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>storefront</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>MSMEs</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Hire cost-effective talent ready to contribute.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>business</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Corporates</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Recruit pre-screened candidates for entry-level roles.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>rocket_launch</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Founders</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Focus on building your business while ACHL finds the right talent.</p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}