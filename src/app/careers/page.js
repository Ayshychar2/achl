import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CareersPage() {
  return (
    <>
      <Header />
      <main style={{ padding: '100px 20px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--background)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Careers at ACHL</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          Join us in our mission to build a generation of critical thinkers. We are always looking for passionate educators, technologists, and operators to join our team.
        </p>
        
        <div style={{ marginTop: '40px', padding: '40px', backgroundColor: 'var(--surface-container-lowest)', borderRadius: '16px', border: '1px solid var(--border-light)', textAlign: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>No Open Roles Currently</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '24px', lineHeight: 1.6 }}>
            We don't have any open positions at the moment, but we are always open to connecting with great talent. Send us your resume at <strong>contact@achllearnings.com</strong>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
