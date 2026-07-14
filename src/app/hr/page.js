'use client';
import { useEffect, useState } from 'react';

export default function HRDashboard() {
  const [user, setUser] = useState(null);
  const [requirements, setRequirements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newReq, setNewReq] = useState({ title: '', description: '' });
  const [isCreating, setIsCreating] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      if (parsed.role !== 'HR' && parsed.role !== 'COMPANY') {
        window.location.href = '/dashboard';
        return;
      }
      setUser(parsed);
      fetchRequirements(parsed.id);
    } else {
      window.location.href = '/login';
    }
  }, []);

  const fetchRequirements = async (hrId) => {
    try {
      const res = await fetch(`/api/hr/requirements?hrId=${hrId}`);
      if (res.ok) {
        const data = await res.json();
        setRequirements(data);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const handleCreateReq = async (e) => {
    e.preventDefault();
    setIsCreating(true);
    try {
      const res = await fetch('/api/hr/requirements', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...newReq, hrId: user.id })
      });
      if (res.ok) {
        const data = await res.json();
        setRequirements([...requirements, data]);
        setNewReq({ title: '', description: '' });
      } else {
        alert('Failed to create requirement');
      }
    } catch (e) {
      console.error(e);
      alert('Error creating requirement');
    } finally {
      setIsCreating(false);
    }
  };

  if (!user || loading) return <div style={{ padding: '40px' }}>Loading HR Dashboard...</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'sans-serif' }}>
      <header style={{ background: '#fff', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)' }}>ACHL HR Portal</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontWeight: '500', color: '#334155' }}>{user.name}</span>
          <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#f1f5f9', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', color: '#475569' }}>Logout</button>
        </div>
      </header>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '8px', color: '#0f172a' }}>Welcome, {user.name}!</h1>
          <p style={{ color: '#64748b' }}>Manage your hiring requirements and view candidate profiles.</p>
        </div>

        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          
          {/* Create Requirement Form */}
          <div style={{ flex: '1', minWidth: '300px', background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
            <h2 style={{ fontSize: '20px', margin: '0 0 16px 0', color: '#0f172a' }}>Raise Hiring Requirement</h2>
            <form onSubmit={handleCreateReq}>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#334155' }}>Job Title</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Business Analyst"
                  style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }}
                  value={newReq.title}
                  onChange={(e) => setNewReq({...newReq, title: e.target.value})}
                />
              </div>
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#334155' }}>Job Description / Requirements</label>
                <textarea 
                  required
                  rows="4"
                  placeholder="Describe the role, responsibilities, and required skills..."
                  style={{ width: '100%', padding: '10px', border: '1px solid #cbd5e1', borderRadius: '6px' }}
                  value={newReq.description}
                  onChange={(e) => setNewReq({...newReq, description: e.target.value})}
                />
              </div>
              <button 
                type="submit" 
                disabled={isCreating}
                style={{ width: '100%', background: '#2563eb', color: '#fff', padding: '12px', borderRadius: '6px', fontWeight: '500', border: 'none', cursor: 'pointer' }}
              >
                {isCreating ? 'Submitting...' : 'Submit Requirement'}
              </button>
            </form>
          </div>

          {/* List of Requirements & Referrals */}
          <div style={{ flex: '2', minWidth: '400px' }}>
            <h2 style={{ fontSize: '20px', margin: '0 0 16px 0', color: '#0f172a' }}>Your Requirements</h2>
            
            {requirements.length === 0 ? (
              <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center', color: '#64748b' }}>
                You haven't raised any hiring requirements yet.
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {requirements.map((req) => (
                  <div key={req.id} style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <h3 style={{ margin: 0, fontSize: '18px', color: '#0f172a' }}>{req.title}</h3>
                      <span style={{ fontSize: '12px', fontWeight: '600', padding: '4px 8px', borderRadius: '4px', background: req.status === 'OPEN' ? '#dcfce7' : '#f1f5f9', color: req.status === 'OPEN' ? '#166534' : '#475569' }}>
                        {req.status}
                      </span>
                    </div>
                    <p style={{ color: '#475569', fontSize: '14px', marginBottom: '16px', whiteSpace: 'pre-wrap' }}>{req.description}</p>
                    
                    <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                      <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#334155' }}>Referred Candidates</h4>
                      
                      {!req.referrals || req.referrals.length === 0 ? (
                        <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>No candidates referred by admin yet.</p>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                          {req.referrals.map(ref => (
                            <div key={ref.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#f8fafc', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                              <div>
                                <div style={{ fontWeight: '500', color: '#0f172a', fontSize: '14px' }}>{ref.student.name}</div>
                                <div style={{ color: '#64748b', fontSize: '12px' }}>{ref.student.email}</div>
                              </div>
                              <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: '500' }}>Referred</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}