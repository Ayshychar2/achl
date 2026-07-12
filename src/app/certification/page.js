import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CertificationPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: 'var(--background)' }}>
        {/* HERO */}
        <section style={{ padding: '60px 20px 80px 20px', backgroundColor: 'var(--surface-container)', color: 'var(--on-surface)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
            <div style={{ flex: '1 1 600px' }}>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '24px', letterSpacing: '1px' }}>
                ACHL CERTIFICATION PROGRAM
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '24px' }}>
                Certified Professional in Critical Thinking & Decision Making
              </h1>
              <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6, maxWidth: '600px' }}>
                A practical 30-day certification designed for students, graduates and young professionals who want to become better thinkers, stronger problem solvers and confident decision makers in the AI era.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '40px' }}>
                <Link href="/signup" className="btn-primary" style={{ padding: '16px 32px', fontSize: '1.1rem' }}>Enroll Now</Link>
                <a href="#curriculum" className="btn-secondary" style={{ padding: '16px 32px', fontSize: '1.1rem', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--on-surface)', border: '2px solid var(--border-light)' }}>View Curriculum</a>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>30</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Days</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>100%</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Practical</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>Live</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Case Studies</span>
                </div>
                <div>
                  <h3 style={{ fontSize: '2rem', margin: 0, color: 'var(--primary)' }}>Included</h3>
                  <span style={{ color: 'var(--text-muted)' }}>Certificate</span>
                </div>
              </div>
            </div>

            {/* Program Includes Card */}
            <div style={{ flex: '1 1 300px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', padding: '32px', border: '1px solid var(--border-light)' }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '24px', borderBottom: '1px solid var(--border-light)', paddingBottom: '16px' }}>Program Includes</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['30-Day Live Training', 'Business Case Studies', 'Critical Thinking Frameworks', 'Problem Solving Workshops', 'Decision-Making Simulations', 'AI for Professionals', 'Industry Certificate', 'Placement Support'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '1.1rem' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* WHY THIS PROGRAM? */}
        <section style={{ padding: '100px 20px 40px 20px', backgroundColor: 'var(--surface)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>WHY THIS PROGRAM?</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Learn The Skills That AI Cannot Replace</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 60px auto', lineHeight: 1.6 }}>
              Knowledge is becoming freely available. The real advantage lies in the ability to analyse, evaluate and make sound decisions. This program focuses on developing those skills.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div style={{ padding: '40px 32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--surface-container-highest)', position: 'absolute', top: '10px', right: '10px', opacity: 0.5, zIndex: 0, lineHeight: 1 }}>01</div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Think Critically</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Learn how to question assumptions, identify biases and evaluate information before making decisions.</p>
                </div>
              </div>
              <div style={{ padding: '40px 32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--surface-container-highest)', position: 'absolute', top: '10px', right: '10px', opacity: 0.5, zIndex: 0, lineHeight: 1 }}>02</div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Solve Complex Problems</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Apply structured frameworks to solve business, management and real-world challenges confidently.</p>
                </div>
              </div>
              <div style={{ padding: '40px 32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ fontSize: '5rem', fontWeight: 900, color: 'var(--surface-container-highest)', position: 'absolute', top: '10px', right: '10px', opacity: 0.5, zIndex: 0, lineHeight: 1 }}>03</div>
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'left' }}>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Make Better Decisions</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Build logical reasoning and strategic thinking to make better personal and professional decisions.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM HIGHLIGHTS */}
        <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>PROGRAM HIGHLIGHTS</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Designed For Practical Learning</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>business_center</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Real Business Cases</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Learn by solving practical business scenarios instead of memorising theory.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>account_tree</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Thinking Frameworks</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Master structured approaches used by consultants, managers and entrepreneurs.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>psychology</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>AI-Era Skills</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Learn how to work with AI while strengthening uniquely human thinking abilities.</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--primary)', marginBottom: '16px' }}>trending_up</span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Career Focused</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Improve your interview performance, workplace readiness and leadership potential.</p>
            </div>
          </div>
        </section>

        {/* CURRICULUM */}
        <section id="curriculum" style={{ backgroundColor: 'var(--surface-container)', color: 'var(--on-surface)', padding: '40px 20px 100px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px', letterSpacing: '1px' }}>30-DAY CURRICULUM</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>A Structured Learning Journey</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                Every week focuses on developing a different dimension of thinking, ensuring learners build practical skills instead of simply acquiring knowledge.
              </p>
            </div>

            <div className="curriculum-grid">
              {/* Week 1 */}
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'var(--surface-container)', color: 'var(--primary)', borderRadius: '4px', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>WEEK 01</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Foundations of Critical Thinking</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Understanding Critical Thinking', 'First Principles Thinking', 'Cognitive Biases', 'Logical Reasoning', 'Decision Traps', 'Thinking Frameworks'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--on-surface-variant)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--primary)' }}>chevron_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Week 2 */}
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'var(--surface-container)', color: 'var(--primary)', borderRadius: '4px', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>WEEK 02</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Problem Solving Frameworks</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Root Cause Analysis', 'Issue Tree', 'SWOT Analysis', 'MECE Framework', 'Business Case Solving', 'Practical Exercises'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--on-surface-variant)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--primary)' }}>chevron_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Week 3 */}
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'var(--surface-container)', color: 'var(--primary)', borderRadius: '4px', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>WEEK 03</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Strategic Decision Making</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Decision Trees', 'Risk Analysis', 'Scenario Planning', 'Probability Thinking', 'Business Judgement', 'Executive Decisions'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--on-surface-variant)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--primary)' }}>chevron_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Week 4 */}
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', backgroundColor: 'var(--surface-container)', color: 'var(--primary)', borderRadius: '4px', fontSize: '12px', fontWeight: 700, marginBottom: '16px' }}>WEEK 04</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '24px' }}>Corporate Readiness</h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Case Competition', 'Business Presentation', 'Interview Thinking', 'AI in Workplace', 'Final Assessment', 'Certification'].map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--on-surface-variant)' }}>
                      <span className="material-symbols-outlined" style={{ fontSize: '20px', color: 'var(--primary)' }}>chevron_right</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}