'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const parsed = JSON.parse(storedUser);
      setUser(parsed);
      fetchProgress(parsed.id);
    } else {
      window.location.href = '/login';
    }
  }, []);

  const fetchProgress = async (userId) => {
    try {
      const res = await fetch(`/api/student/progress?userId=${userId}`);
      if (res.ok) {
        const data = await res.json();
        setEnrollments(data);
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

  const handleJoinSession = async (sessionId) => {
    try {
      const res = await fetch('/api/student/join-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId: user.id, sessionId })
      });
      const data = await res.json();
      
      if (res.ok && data.meetLink) {
        // Open meet link in new tab
        window.open(data.meetLink, '_blank');
        // Refresh progress to show it's completed
        fetchProgress(user.id);
      } else {
        alert(data.error || 'Unable to join session');
      }
    } catch (e) {
      console.error(e);
      alert('Error joining session');
    }
  };

  if (!user || loading) return <div style={{ padding: '40px' }}>Loading Dashboard...</div>;

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', fontFamily: 'sans-serif' }}>
      <header style={{ background: '#fff', padding: '16px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #e2e8f0' }}>
        <div style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--primary)' }}>ACHL Dashboard</div>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <span style={{ fontWeight: '500', color: '#334155' }}>{user.name}</span>
          <button onClick={handleLogout} style={{ padding: '8px 16px', background: '#f1f5f9', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', color: '#475569' }}>Logout</button>
        </div>
      </header>

      <main style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '32px', marginBottom: '8px', color: '#0f172a' }}>Welcome back, {user.name}!</h1>
          <p style={{ color: '#64748b' }}>Here is your {user.role.toLowerCase()} overview.</p>
        </div>

        {user.role === 'STUDENT' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Account Settings / Profile Summary */}
            <div style={{ background: '#fff', padding: '24px', borderRadius: '12px', border: '1px solid #e2e8f0', display: 'flex', gap: '24px', alignItems: 'center' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#e0e7ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '32px', color: '#4338ca', fontWeight: 'bold' }}>
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '20px' }}>Account Details</h2>
                <div style={{ color: '#475569', fontSize: '15px' }}>
                  <strong>Name:</strong> {user.name} <br/>
                  <strong>Email:</strong> {user.email}
                </div>
              </div>
            </div>

            {/* Courses & Progress */}
            {enrollments.length === 0 ? (
              <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0', textAlign: 'center' }}>
                <h3 style={{ margin: '0 0 16px 0', color: '#334155' }}>No active courses</h3>
                <p style={{ color: '#64748b' }}>You are not enrolled in any courses yet. When an Admin enrolls you, your course will appear here.</p>
              </div>
            ) : (
              enrollments.map((enrollment) => {
                const course = enrollment.course;
                const totalSessions = course.sessions.length;
                const completedSessions = course.sessions.filter(s => s.progresses.length > 0 && s.progresses[0].completed).length;
                const progressPercent = totalSessions > 0 ? Math.round((completedSessions / totalSessions) * 100) : 0;

                return (
                  <div key={enrollment.id} style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                      <div>
                        <h2 style={{ fontSize: '24px', margin: '0 0 8px 0', color: '#0f172a' }}>{course.title}</h2>
                        <p style={{ color: '#64748b', margin: 0 }}>{course.description || '30-Day Certification Program'}</p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '14px', color: '#64748b', marginBottom: '4px', fontWeight: '500' }}>COURSE PROGRESS</div>
                        <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#4338ca' }}>{progressPercent}%</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: '12px', background: '#e2e8f0', borderRadius: '6px', overflow: 'hidden', marginBottom: '16px' }}>
                      <div style={{ width: `${progressPercent}%`, height: '100%', background: '#4338ca', transition: 'width 0.5s ease-in-out' }}></div>
                    </div>
                    <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '32px' }}>
                      {completedSessions} of {totalSessions} sessions completed
                    </p>

                    <h3 style={{ fontSize: '18px', margin: '0 0 16px 0', color: '#1e293b' }}>Sessions</h3>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {course.sessions.map((session) => {
                        const isCompleted = session.progresses.length > 0 && session.progresses[0].completed;
                        
                        return (
                          <div key={session.id} style={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            alignItems: 'center', 
                            padding: '16px 20px', 
                            background: isCompleted ? '#f0fdf4' : '#f8fafc',
                            border: `1px solid ${isCompleted ? '#bbf7d0' : '#e2e8f0'}`,
                            borderRadius: '8px'
                          }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                              {isCompleted ? (
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#22c55e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✓</div>
                              ) : (
                                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#e2e8f0', color: '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>{session.order}</div>
                              )}
                              <span style={{ fontWeight: '500', color: isCompleted ? '#166534' : '#334155' }}>{session.title}</span>
                            </div>
                            
                            <div>
                              {isCompleted ? (
                                <span style={{ color: '#15803d', fontWeight: '500', fontSize: '14px' }}>Completed</span>
                              ) : session.meetLink ? (
                                <button 
                                  onClick={() => handleJoinSession(session.id)}
                                  style={{ background: '#4338ca', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500', fontSize: '14px' }}
                                >
                                  Join Session
                                </button>
                              ) : (
                                <span style={{ color: '#94a3b8', fontSize: '14px' }}>Upcoming...</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                  </div>
                );
              })
            )}
          </div>
        )}

      </main>
    </div>
  );
}
