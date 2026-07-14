'use client';
import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

function SignupForm() {
  const searchParams = useSearchParams();
  const initialRole = searchParams.get('role') || 'STUDENT';
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: initialRole });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (res.ok) {
        localStorage.setItem('user', JSON.stringify(data.user));
        if (data.user.role === 'HR') {
          window.location.href = '/hr';
        } else {
          window.location.href = '/dashboard';
        }
      } else {
        setError(data.error || 'Something went wrong');
      }
    } catch (err) {
      setError('Network error occurred.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ background: '#fff', padding: '40px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', width: '100%', maxWidth: '400px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', textAlign: 'center' }}>Create an Account</h1>
      <div style={{ textAlign: 'center', color: '#666', marginBottom: '24px' }}>Join ACHL today</div>
      
      {error && <div style={{ background: '#fee2e2', color: '#dc2626', padding: '12px', borderRadius: '6px', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Full Name</label>
          <input 
            type="text" 
            required
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Email Address</label>
          <input 
            type="email" 
            required
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Password</label>
          <input 
            type="password" 
            required
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <div>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>I am a...</label>
          <select 
            style={{ width: '100%', padding: '12px', border: '1px solid #ccc', borderRadius: '6px' }}
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          >
            <option value="STUDENT">Student</option>
            <option value="COMPANY">Company</option>
            <option value="HR">HR / Recruiter</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          disabled={loading}
          style={{ width: '100%', background: 'var(--primary)', color: '#fff', padding: '14px', borderRadius: '6px', fontWeight: 'bold', border: 'none', cursor: 'pointer', marginTop: '8px' }}
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </button>
      </form>
      
      <div style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#666' }}>
        Already have an account? <Link href="/login" style={{ color: 'var(--primary)', fontWeight: 'bold', textDecoration: 'none' }}>Log in</Link>
      </div>
    </div>
  );
}

export default function Signup() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f4f5' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <SignupForm />
      </Suspense>
    </div>
  );
}
