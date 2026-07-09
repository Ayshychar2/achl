'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      window.location.href = '/login';
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  if (!user) return <div style={{ padding: '40px' }}>Loading...</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#f4f4f5', fontFamily: 'sans-serif' }}>
      <header style={{ background: '#fff', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)' }}>ACHL Dashboard</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontWeight: '600' }}>{user.name} ({user.role})</span>
          <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#e4e4e7', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
        </div>
      </header>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '8px' }}>Welcome back, {user.name}!</h1>
        <p style={{ color: '#666', marginBottom: '32px' }}>Here is your {user.role.toLowerCase()} overview.</p>

        {user.role === 'STUDENT' && (
          <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Your Learning Journey</h2>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              Welcome to the ACHL platform. You have successfully registered. 
              As new courses and materials are assigned to you by your instructors, they will appear here.
            </p>
            <div style={{ marginTop: '24px', padding: '16px', background: '#f0f9ff', border: '1px solid #bae6fd', borderRadius: '6px', color: '#0369a1' }}>
              <strong>Notice:</strong> Your enrollment is fresh, so there are no completed courses yet. Start exploring our curriculum!
            </div>
          </div>
        )}

        {user.role === 'COMPANY' && (
          <div style={{ background: '#fff', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <h2 style={{ fontSize: '20px', marginBottom: '16px' }}>Company Portal</h2>
            <p style={{ color: '#444', lineHeight: '1.6' }}>
              Welcome to the ACHL corporate partner portal. Here you can track your employees' progress and manage enterprise subscriptions.
            </p>
            <div style={{ marginTop: '24px', padding: '16px', background: '#f0fdf4', border: '1px solid #bbf7d0', borderRadius: '6px', color: '#15803d' }}>
              <strong>Notice:</strong> No active employee cohorts found. Contact support to set up your first training cohort.
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
