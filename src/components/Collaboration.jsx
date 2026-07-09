import React from 'react';

export default function Collaboration() {
  return (
    <section className="collaboration-section" style={{ padding: '60px 0', overflow: 'hidden', background: 'var(--surface-container-highest)' }}>
      <div className="section-header" style={{ textAlign: 'center', marginBottom: '40px', padding: '0 16px' }}>
        <h2 style={{ fontSize: '32px', color: 'var(--on-background)', lineHeight: '1.4', marginBottom: '16px' }}>Our Collaborative Partners</h2>
        <p style={{ color: 'var(--secondary)' }}>Trusted by industry leaders</p>
      </div>
      
      <div className="marquee-container" style={{ display: 'flex', width: '100vw', overflow: 'hidden' }}>
        <div className="marquee-content" style={{ display: 'flex', whiteSpace: 'nowrap', animation: 'marquee 20s linear infinite' }}>
          {/* Mock Logos - Since no specific logos were provided, using placeholders */}
          <div className="partner-logo">Acme Corp</div>
          <div className="partner-logo">GlobalTech</div>
          <div className="partner-logo">Innovate Inc.</div>
          <div className="partner-logo">FutureWorks</div>
          <div className="partner-logo">Nexus Systems</div>
          <div className="partner-logo">Quantum AI</div>
          
          {/* Duplicate for seamless infinite loop */}
          <div className="partner-logo">Acme Corp</div>
          <div className="partner-logo">GlobalTech</div>
          <div className="partner-logo">Innovate Inc.</div>
          <div className="partner-logo">FutureWorks</div>
          <div className="partner-logo">Nexus Systems</div>
          <div className="partner-logo">Quantum AI</div>
        </div>
      </div>
    </section>
  );
}
