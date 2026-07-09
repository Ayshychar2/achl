'use client';
import { useState } from 'react';

export default function BookDemoForm() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '24px', background: '#dcfce7', color: '#166534', borderRadius: '8px', textAlign: 'center' }}>
        <h4 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>Thank you!</h4>
        <p style={{ margin: 0 }}>Your demo request has been received. We will contact you shortly.</p>
        <button 
          onClick={() => setStatus('')}
          style={{ marginTop: '16px', padding: '8px 16px', background: 'transparent', border: '1px solid #166534', color: '#166534', borderRadius: '4px', cursor: 'pointer' }}
        >
          Book another demo
        </button>
      </div>
    );
  }

  return (
    <form id="cta-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name-input">Name</label>
        <input 
          type="text" 
          id="name-input" 
          placeholder="Your full name" 
          required 
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email-input">Email</label>
        <input 
          type="email" 
          id="email-input" 
          placeholder="work@email.com" 
          required 
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <button type="submit" className="btn-submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Submitting...' : 'Book Demo RIGHT NOW'}
        <span className="material-symbols-outlined">arrow_forward</span>
      </button>
      {status === 'error' && (
        <p style={{ color: 'red', marginTop: '12px', fontSize: '14px' }}>Something went wrong. Please try again.</p>
      )}
    </form>
  );
}
