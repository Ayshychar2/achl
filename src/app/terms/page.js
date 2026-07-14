import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <main style={{ padding: '100px 20px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--background)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Terms of Service</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>Last updated: October 2023</p>
        
        <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px 0' }}>1. Acceptance of Terms</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          By accessing and using ACHL's platform and courses, you agree to be bound by these Terms of Service.
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px 0' }}>2. Use of Platform</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          You agree to use our platform only for lawful educational purposes and in accordance with these terms. You are responsible for maintaining the confidentiality of your account credentials.
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px 0' }}>3. Course Content</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          All course materials provided by ACHL are intellectual property and may not be redistributed or reproduced without prior written permission.
        </p>
      </main>
      <Footer />
    </>
  );
}
