import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main style={{ backgroundColor: 'var(--background)' }}>
        
        {/* HERO SECTION */}
        <section style={{ padding: '60px 20px 80px 20px', textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '24px' }}>
            ABOUT ACHL
          </span>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.2, marginBottom: '24px' }}>
            Building Thinkers.<br/>
            Creating Leaders.<br/>
            Preparing Minds for the AI Era.
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.6 }}>
            ACHL (Agyaat Corporate & Holistic Learning) exists to bridge the gap between academic education and real-world decision making. 
            We believe knowledge alone is no longer enough. The future belongs to people who can think critically, solve problems creatively and make sound decisions.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/certification" className="btn-primary" style={{ padding: '14px 28px', fontSize: '1.1rem' }}>Explore Program</Link>
            <Link href="/contact" className="btn-secondary" style={{ padding: '14px 28px', fontSize: '1.1rem', border: '2px solid var(--primary)', color: 'var(--primary)' }}>Contact Us</Link>
          </div>
        </section>

        {/* WHO WE ARE */}
        <section style={{ backgroundColor: 'var(--surface)', padding: '40px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--background)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>WHO WE ARE</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: 1.3 }}>Upgrading Human Minds to Remain Relevant in the AI Era</h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                ACHL is an EdTech platform focused on Critical Thinking, Problem Solving and Decision Making. We prepare students and young professionals for careers where analytical ability, structured thinking and sound judgement matter more than memorisation.
              </p>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Our Purpose</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>To create thinkers who can analyse, question, innovate and lead in an AI-driven world.</p>
              </div>
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>What Makes ACHL Different</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>We don't teach students what to think. We teach them how to think using practical business frameworks, case studies and real-world simulations.</p>
              </div>
              <div style={{ padding: '32px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Our Outcome</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Students graduate with stronger reasoning, better communication, improved decision-making and greater confidence for corporate careers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* OUR STORY */}
        <section style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>OUR STORY</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: 1.3 }}>Why ACHL Was Created</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
              Every successful company invests heavily in technology. But the biggest competitive advantage has never been technology. It has always been the quality of human thinking.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 500px' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '24px' }}>The Problem</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>Universities produce graduates with knowledge, yet many struggle when faced with real business problems, uncertainty and decision-making.</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>Recruiters today expect much more than academic scores. They want professionals who can analyse information, solve problems, communicate effectively and make confident decisions.</p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>This gap between education and industry inspired the creation of ACHL.</p>
            </div>
            
            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', borderLeft: '4px solid var(--primary)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Education</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Focuses on knowledge.</p>
              </div>
              <div style={{ padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', borderLeft: '4px solid var(--primary)', border: '1px solid var(--border-light)' }}>
                <h4 style={{ margin: '0 0 8px 0' }}>Industry</h4>
                <p style={{ margin: 0, color: 'var(--text-muted)' }}>Demands judgement and decision making.</p>
              </div>
              <div style={{ padding: '24px', backgroundColor: 'var(--primary)', color: 'var(--on-primary)', borderRadius: '12px' }}>
                <h4 style={{ margin: '0 0 8px 0', color: 'var(--on-primary)' }}>ACHL</h4>
                <p style={{ margin: 0, color: 'rgba(255,255,255,0.9)' }}>Bridges the gap through practical thinking.</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI ERA (Redesigned with Global Colors) */}
        <section style={{ backgroundColor: 'var(--surface-container)', color: 'var(--on-surface)', padding: '100px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '60px' }}>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px', letterSpacing: '1px' }}>THE AI ERA</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '16px', lineHeight: 1.3 }}>AI Is Transforming Work. Human Thinking Is Becoming More Valuable.</h2>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px' }}>
              <div style={{ padding: '40px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--border-light)', transition: 'transform 0.3s' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '24px', display: 'block' }}>smart_toy</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>AI Can Generate</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Reports, presentations, code and content can now be generated within seconds.</p>
              </div>
              
              <div style={{ padding: '40px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--border-light)', transition: 'transform 0.3s' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '24px', display: 'block' }}>psychology</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Humans Must Evaluate</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Businesses still require people who can verify facts, challenge assumptions, manage risk and make decisions.</p>
              </div>
              
              <div style={{ padding: '40px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', textAlign: 'center', border: '1px solid var(--border-light)', transition: 'transform 0.3s' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '48px', color: 'var(--primary)', marginBottom: '24px', display: 'block' }}>rocket_launch</span>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>ACHL Builds Thinkers</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Our programs help learners become professionals who use AI intelligently instead of depending on it blindly.</p>
              </div>
            </div>
          </div>
        </section>

        {/* JOURNEY SECTION (Redesigned) */}
        <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>OUR JOURNEY</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>From An Idea To A Mission</h2>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '2px', background: 'var(--border-light)', transform: 'translateX(-50%)', zIndex: -1 }}></div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>The Idea</h3>
                <p style={{ color: 'var(--text-muted)' }}>Recognised the growing gap between classroom education and industry expectations.</p>
              </div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0, boxShadow: '0 4px 12px rgba(152, 0, 11, 0.3)' }}>2025</div>
              <div style={{ flex: 1 }}></div>
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}>
              <div style={{ flex: 1 }}></div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--surface-container-highest)', color: 'var(--on-surface)', border: '2px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0 }}>2026</div>
              <div style={{ flex: 1, textAlign: 'left' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>ACHL Founded</h3>
                <p style={{ color: 'var(--text-muted)' }}>Started with a mission to build critical thinkers and future-ready professionals.</p>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '40px' }}>
              <div style={{ flex: 1, textAlign: 'right' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>Growing Ecosystem</h3>
                <p style={{ color: 'var(--text-muted)' }}>Connecting colleges, students and employers through practical education and hiring.</p>
              </div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', fontSize: '1.2rem', flexShrink: 0, boxShadow: '0 4px 12px rgba(152, 0, 11, 0.3)' }}>Today</div>
              <div style={{ flex: 1 }}></div>
            </div>
          </div>
        </section>

        {/* FOUNDER MESSAGE */}
        <section style={{ backgroundColor: 'var(--surface-container)', padding: '100px 20px' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '40px', alignItems: 'center' }}>
            <div style={{ flex: '1 1 300px', height: '400px', backgroundColor: 'var(--surface-container-highest)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              <span>Founder Image</span>
            </div>
            <div style={{ flex: '1 1 500px' }}>
              <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>FOUNDER'S MESSAGE</span>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '24px', lineHeight: 1.3 }}>The Future Belongs To Thinkers.</h2>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                When I looked around, I realised students were graduating with degrees but struggling to solve practical business problems. At the same time, Artificial Intelligence was changing the nature of work faster than education could adapt.
              </p>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px' }}>
                ACHL was created with a simple mission — to help people become irreplaceable by developing the one capability machines cannot replicate: independent thinking.
              </p>
              <blockquote style={{ borderLeft: '4px solid var(--primary)', paddingLeft: '20px', fontStyle: 'italic', fontSize: '1.2rem', color: 'var(--on-surface-variant)', marginBottom: '24px', backgroundColor: 'var(--surface-container-lowest)', padding: '16px', borderRadius: '4px' }}>
                "Knowledge may open doors, but the ability to think determines how far you go."
              </blockquote>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 600 }}>— Founder, ACHL</h4>
            </div>
          </div>
        </section>

        {/* OUR IMPACT (Redesigned with Grid) */}
        <section style={{ backgroundColor: 'var(--surface)', padding: '100px 20px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '24px', letterSpacing: '1px' }}>OUR IMPACT</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '60px' }}>Building A Strong Learning Ecosystem</h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
              <div style={{ padding: '40px 20px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>4000+</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Students Impacted</div>
              </div>
              <div style={{ padding: '40px 20px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>25+</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>College Collaborations</div>
              </div>
              <div style={{ padding: '40px 20px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>50+</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Industry Sessions</div>
              </div>
              <div style={{ padding: '40px 20px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>100+</div>
                <div style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Hours Of Practical Learning</div>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNING PHILOSOPHY */}
        <section style={{ padding: '100px 20px', backgroundColor: 'var(--surface-container)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-lowest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>OUR LEARNING PHILOSOPHY</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '60px' }}>We Don't Teach Information. We Build Thinking Systems.</h2>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
              <div style={{ flex: '1 1 180px', maxWidth: '220px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>01</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Observe</h3>
                <p style={{ color: 'var(--on-surface-variant)', opacity: 1, fontSize: '0.95rem' }}>Understand the situation before reacting.</p>
              </div>
              <div style={{ flex: '1 1 180px', maxWidth: '220px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>02</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Question</h3>
                <p style={{ color: 'var(--on-surface-variant)', opacity: 1, fontSize: '0.95rem' }}>Challenge assumptions and identify biases.</p>
              </div>
              <div style={{ flex: '1 1 180px', maxWidth: '220px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>03</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Analyse</h3>
                <p style={{ color: 'var(--on-surface-variant)', opacity: 1, fontSize: '0.95rem' }}>Evaluate evidence using structured thinking.</p>
              </div>
              <div style={{ flex: '1 1 180px', maxWidth: '220px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>04</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Decide</h3>
                <p style={{ color: 'var(--on-surface-variant)', opacity: 1, fontSize: '0.95rem' }}>Make informed decisions with confidence.</p>
              </div>
              <div style={{ flex: '1 1 180px', maxWidth: '220px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '12px' }}>05</div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px' }}>Improve</h3>
                <p style={{ color: 'var(--on-surface-variant)', opacity: 1, fontSize: '0.95rem' }}>Reflect, learn and continuously evolve.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY ACHL */}
        <section style={{ padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span style={{ display: 'inline-block', padding: '6px 12px', backgroundColor: 'var(--surface-container-highest)', color: 'var(--primary)', borderRadius: '20px', fontSize: '14px', fontWeight: 700, marginBottom: '16px' }}>WHY ACHL?</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>More Than A Certification. A Transformation In Thinking.</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>school</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Learn From Industry Experts</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>cases</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Practical Business Case Studies</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>psychology</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>AI-Era Skills</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>account_tree</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Structured Decision Making</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>handshake</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Placement Support</h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '24px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--primary)' }}>workspace_premium</span>
              <h3 style={{ fontSize: '1.2rem', margin: 0 }}>Industry Recognized Certification</h3>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}