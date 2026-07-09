'use client';
import { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [demos, setDemos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('STUDENTS'); // STUDENTS, COMPANIES, DEMOS, SETTINGS
  const [adminEmail, setAdminEmail] = useState('');

  // Password change state
  const [passwords, setPasswords] = useState({ current: '', new: '' });
  const [pwdStatus, setPwdStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser || JSON.parse(storedUser).role !== 'ADMIN') {
      window.location.href = '/login';
      return;
    }
    setAdminEmail(JSON.parse(storedUser).email);
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [userRes, demoRes] = await Promise.all([
        fetch('/api/admin/users'),
        fetch('/api/admin/demos')
      ]);
      const userData = await userRes.json();
      const demoData = await demoRes.json();
      
      setUsers(userData.users || []);
      setDemos(demoData.demos || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async (id) => {
    if (!confirm('Are you sure you want to delete this user?')) return;
    try {
      await fetch(`/api/admin/users?id=${id}`, { method: 'DELETE' });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  const handleDeleteDemo = async (id) => {
    if (!confirm('Are you sure you want to delete this demo request?')) return;
    try {
      await fetch(`/api/admin/demos?id=${id}`, { method: 'DELETE' });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setPwdStatus({ type: 'loading', message: 'Updating password...' });
    try {
      const res = await fetch('/api/admin/change-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: adminEmail, 
          currentPassword: passwords.current, 
          newPassword: passwords.new 
        })
      });
      const data = await res.json();
      
      if (res.ok) {
        setPwdStatus({ type: 'success', message: 'Password updated successfully!' });
        setPasswords({ current: '', new: '' });
      } else {
        setPwdStatus({ type: 'error', message: data.error || 'Failed to update password' });
      }
    } catch (error) {
      setPwdStatus({ type: 'error', message: 'An error occurred' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  if (loading) return <div style={{ padding: '40px' }}>Loading Admin Panel...</div>;

  const students = users.filter(u => u.role === 'STUDENT');
  const companies = users.filter(u => u.role === 'COMPANY');

  return (
    <div style={{ minHeight: '100vh', background: '#f4f4f5', fontFamily: 'sans-serif' }}>
      <header style={{ background: '#fff', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)' }}>ACHL Admin Panel</div>
        <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#e4e4e7', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: '600' }}>Logout</button>
      </header>

      <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '2px solid #e4e4e7', paddingBottom: '12px' }}>
          {['STUDENTS', 'COMPANIES', 'DEMOS', 'SETTINGS'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                padding: '8px 16px',
                background: activeTab === tab ? '#18181b' : 'transparent',
                color: activeTab === tab ? 'white' : '#71717a',
                border: 'none',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: activeTab === tab ? 'bold' : 'normal'
              }}
            >
              {tab === 'STUDENTS' && `Students (${students.length})`}
              {tab === 'COMPANIES' && `Companies (${companies.length})`}
              {tab === 'DEMOS' && `Demo Requests (${demos.length})`}
              {tab === 'SETTINGS' && 'Settings'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '24px' }}>
          
          {(activeTab === 'STUDENTS' || activeTab === 'COMPANIES') && (
            <>
              <h2 style={{ marginTop: 0, marginBottom: '16px' }}>
                {activeTab === 'STUDENTS' ? 'Registered Students' : 'Registered Companies'}
              </h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f4f4f5', borderBottom: '2px solid #e4e4e7' }}>
                    <th style={{ padding: '12px' }}>ID</th>
                    <th style={{ padding: '12px' }}>Name</th>
                    <th style={{ padding: '12px' }}>Email</th>
                    <th style={{ padding: '12px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {(activeTab === 'STUDENTS' ? students : companies).map(u => (
                    <tr key={u.id} style={{ borderBottom: '1px solid #e4e4e7' }}>
                      <td style={{ padding: '12px' }}>{u.id}</td>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{u.name || '-'}</td>
                      <td style={{ padding: '12px' }}>{u.email}</td>
                      <td style={{ padding: '12px' }}>
                        <button 
                          onClick={() => handleDeleteUser(u.id)}
                          style={{ background: '#ef4444', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {(activeTab === 'STUDENTS' ? students : companies).length === 0 && (
                    <tr><td colSpan="4" style={{ padding: '24px', textAlign: 'center', color: '#71717a' }}>No {activeTab.toLowerCase()} found.</td></tr>
                  )}
                </tbody>
              </table>
            </>
          )}

          {activeTab === 'DEMOS' && (
            <>
              <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Demo Requests</h2>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ background: '#f4f4f5', borderBottom: '2px solid #e4e4e7' }}>
                    <th style={{ padding: '12px' }}>ID</th>
                    <th style={{ padding: '12px' }}>Date</th>
                    <th style={{ padding: '12px' }}>Name</th>
                    <th style={{ padding: '12px' }}>Email</th>
                    <th style={{ padding: '12px' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {demos.map(d => (
                    <tr key={d.id} style={{ borderBottom: '1px solid #e4e4e7' }}>
                      <td style={{ padding: '12px' }}>{d.id}</td>
                      <td style={{ padding: '12px', color: '#71717a' }}>{new Date(d.createdAt).toLocaleString()}</td>
                      <td style={{ padding: '12px', fontWeight: '500' }}>{d.name}</td>
                      <td style={{ padding: '12px' }}>{d.email}</td>
                      <td style={{ padding: '12px' }}>
                        <button 
                          onClick={() => handleDeleteDemo(d.id)}
                          style={{ background: '#ef4444', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                  {demos.length === 0 && (
                    <tr><td colSpan="5" style={{ padding: '24px', textAlign: 'center', color: '#71717a' }}>No demo requests yet.</td></tr>
                  )}
                </tbody>
              </table>
            </>
          )}

          {activeTab === 'SETTINGS' && (
            <div style={{ maxWidth: '500px' }}>
              <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Security Settings</h2>
              <div style={{ padding: '24px', border: '1px solid #e4e4e7', borderRadius: '8px' }}>
                <h3 style={{ marginTop: 0, fontSize: '16px', marginBottom: '16px' }}>Change Admin Password</h3>
                <form onSubmit={handlePasswordChange}>
                  <div style={{ marginBottom: '16px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Current Password</label>
                    <input 
                      type="password" 
                      required 
                      value={passwords.current}
                      onChange={e => setPasswords({...passwords, current: e.target.value})}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d4d4d8' }}
                    />
                  </div>
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>New Password</label>
                    <input 
                      type="password" 
                      required 
                      value={passwords.new}
                      onChange={e => setPasswords({...passwords, new: e.target.value})}
                      style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d4d4d8' }}
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={pwdStatus.type === 'loading'}
                    style={{ background: '#18181b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}
                  >
                    {pwdStatus.type === 'loading' ? 'Updating...' : 'Update Password'}
                  </button>
                  
                  {pwdStatus.message && (
                    <div style={{ 
                      marginTop: '16px', 
                      padding: '12px', 
                      borderRadius: '6px', 
                      background: pwdStatus.type === 'success' ? '#dcfce7' : '#fee2e2',
                      color: pwdStatus.type === 'success' ? '#166534' : '#991b1b',
                      fontSize: '14px'
                    }}>
                      {pwdStatus.message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
