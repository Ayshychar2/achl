import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main style={{ padding: '100px 20px', maxWidth: '800px', margin: '0 auto', backgroundColor: 'var(--background)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>Last updated: October 2023</p>
        
        <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px 0' }}>1. Information We Collect</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          We collect information that you provide directly to us when you create an account, enroll in a course, contact us for support, or otherwise interact with ACHL.
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px 0' }}>2. How We Use Your Information</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you regarding your courses and our platform.
        </p>

        <h2 style={{ fontSize: '1.5rem', margin: '32px 0 16px 0' }}>3. Information Sharing</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '16px', lineHeight: 1.6 }}>
          We do not share your personal information with third parties except when explicitly authorized by you (e.g., when referring you to a hiring partner).
        </p>
      </main>
      <Footer />
    </>
  );
}
