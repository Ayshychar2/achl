'use client';
import React, { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [demos, setDemos] = useState([]);
  const [courses, setCourses] = useState([]);
  const [requirements, setRequirements] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('STUDENTS'); // STUDENTS, COMPANIES, DEMOS, COURSES, HIRING, CONTACTS, SETTINGS
  const [adminEmail, setAdminEmail] = useState('');

  // Password change state
  const [passwords, setPasswords] = useState({ current: '', new: '', confirm: '' });
  const [passMsg, setPassMsg] = useState({ type: '', text: '' });
  
  // New course state
  const [newCourse, setNewCourse] = useState({ title: '', description: '', numSessions: 8 });
  
  // Enrollment state
  const [enrollForm, setEnrollForm] = useState({ userId: '', courseId: '' });
  
  // Student expansion
  const [expandedStudentId, setExpandedStudentId] = useState(null);

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
      const [userRes, demoRes, courseRes, reqRes, contactRes] = await Promise.all([
        fetch('/api/admin/users'),
        fetch('/api/admin/demos'),
        fetch('/api/admin/courses'),
        fetch('/api/admin/requirements'),
        fetch('/api/admin/contact')
      ]);
      const userData = await userRes.json();
      const demoData = await demoRes.json();
      const courseData = await courseRes.json();
      const reqData = await reqRes.json();
      const contactData = await contactRes.json();
      
      setUsers(userData.users || []);
      setDemos(demoData.demos || []);
      setCourses(courseData || []);
      setRequirements(reqData || []);
      setContacts(contactData.messages || []);
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

  const handleDeleteContact = async (id) => {
    if (!confirm('Are you sure you want to delete this contact message?')) return;
    try {
      await fetch(`/api/admin/contact?id=${id}`, { method: 'DELETE' });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCourse)
      });
      setNewCourse({ title: '', description: '', numSessions: 8 });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  const handleUpdateSession = async (courseId, sessionId, meetLink) => {
    try {
      await fetch(`/api/admin/courses/${courseId}/sessions`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId, meetLink })
      });
      fetchData();
    } catch (e) {
      console.error(e);
    }
  };

  const handleCreateSession = async (courseId, title) => {
    const btn = document.getElementById(`btn-create-${courseId}`);
    if (btn) btn.innerText = 'Adding...';
    try {
      const res = await fetch(`/api/admin/courses/${courseId}/sessions/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title })
      });
      const data = await res.json();
      if (res.ok) {
        setCourses(prev => prev.map(c => {
          if (c.id === courseId) {
            return { ...c, sessions: [...(c.sessions || []), data] };
          }
          return c;
        }));
      } else {
        alert(data.error || 'Failed to create session');
      }
    } catch (e) {
      console.error(e);
      alert('Error creating session');
    } finally {
      if (btn) btn.innerText = '+ Add Session';
    }
  };

  const handleDeleteSession = async (courseId, sessionId) => {
    // Optimistic UI or visual feedback can be added if necessary, 
    // but button click will handle it directly without a popup.
    const btn = document.getElementById(`btn-delete-${sessionId}`);
    if (btn) btn.innerText = 'Deleting...';
    try {
      const res = await fetch(`/api/admin/courses/${courseId}/sessions/delete?sessionId=${sessionId}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        fetchData();
      } else {
        const data = await res.json();
        // silent error or custom alert
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleEnrollStudent = async (e) => {
    e.preventDefault();
    const btn = document.getElementById('btn-enroll');
    if (btn) btn.innerText = 'Enrolling...';
    try {
      const res = await fetch('/api/admin/enrollments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(enrollForm)
      });
      const data = await res.json();
      if(res.ok) {
        const student = users.find(u => u.id === parseInt(enrollForm.userId));
        const newEnrollment = {
          ...data,
          user: student
        };
        setCourses(prev => prev.map(c => {
          if (c.id === parseInt(enrollForm.courseId)) {
            return {
              ...c,
              enrollments: [...(c.enrollments || []), newEnrollment]
            };
          }
          return c;
        }));
        setEnrollForm({ userId: '', courseId: '' });
      } else {
        alert(data.error);
      }
    } catch (e) {
      console.error(e);
    } finally {
      if (btn) btn.innerText = 'Enroll Student';
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
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '2px solid #e4e4e7', paddingBottom: '12px', overflowX: 'auto' }}>
          {['STUDENTS', 'COMPANIES', 'DEMOS', 'COURSES', 'HIRING', 'CONTACTS', 'SETTINGS'].map(tab => (
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
                fontWeight: activeTab === tab ? 'bold' : 'normal',
                whiteSpace: 'nowrap'
              }}
            >
              {tab === 'STUDENTS' && `Students (${students.length})`}
              {tab === 'COMPANIES' && `Companies (${companies.length})`}
              {tab === 'DEMOS' && `Demo Requests (${demos.length})`}
              {tab === 'COURSES' && `Courses & Sessions`}
              {tab === 'HIRING' && `Hiring Requirements`}
              {tab === 'CONTACTS' && `Contact Form (${contacts.length})`}
              {tab === 'SETTINGS' && 'Settings'}
            </button>
          ))}
        </div>

        {/* Content */}
        <div style={{ background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', padding: '24px' }}>
          
          {(activeTab === 'STUDENTS' || activeTab === 'COMPANIES') && (
            <>
              <h2 style={{ marginTop: 0, marginBottom: '16px', color: '#1e293b' }}>
                {activeTab === 'STUDENTS' ? 'Enrolled Students' : 'Registered Companies'}
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', background: '#f8fafc', padding: '16px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                {(activeTab === 'STUDENTS' ? students : companies).map(u => (
                  <div key={u.id} style={{ background: 'white', borderRadius: '6px', border: '1px solid #cbd5e1', overflow: 'hidden' }}>
                    <div 
                      style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: expandedStudentId === u.id ? '#f1f5f9' : 'white' }}
                      onClick={() => setExpandedStudentId(expandedStudentId === u.id ? null : u.id)}
                    >
                      <div style={{ fontWeight: '500', color: '#334155', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '20px', fontSize: '12px', color: '#64748b', transition: 'transform 0.2s', transform: expandedStudentId === u.id ? 'rotate(90deg)' : 'rotate(0deg)' }}>
                          ▶
                        </span>
                        <span>{u.name || 'Unnamed'} <span style={{ color: '#64748b', fontWeight: 'normal' }}>({u.email})</span></span>
                      </div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); handleDeleteUser(u.id); }}
                        style={{ background: 'transparent', color: '#ef4444', border: '1px solid #fecaca', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px' }}
                      >
                        Delete
                      </button>
                    </div>
                    
                    {expandedStudentId === u.id && (
                      <div style={{ padding: '20px 48px', borderTop: '1px solid #e2e8f0', background: '#fff' }}>
                        <h4 style={{ margin: '0 0 16px 0', fontSize: '15px', color: '#0f172a' }}>Enrollments</h4>
                        
                        {!u.enrollments || u.enrollments.length === 0 ? (
                          <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>No active course enrollments.</p>
                        ) : (
                          u.enrollments.map(enrollment => {
                            const course = enrollment.course;
                            return (
                              <div key={enrollment.id} style={{ marginBottom: '24px' }}>
                                <strong style={{ display: 'block', marginBottom: '12px', color: '#1e293b' }}>{course.title}</strong>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px' }}>
                                  {course.sessions.map(session => {
                                    const progress = u.studentProgress && u.studentProgress.find(p => p.sessionId === session.id);
                                    const isCompleted = progress?.completed;
                                    const currentLink = progress?.meetLink || '';
                                    return (
                                      <div key={session.id} style={{ 
                                        display: 'flex', flexDirection: 'column', gap: '8px',
                                        padding: '12px', borderRadius: '6px',
                                        background: isCompleted ? '#f0fdf4' : '#f8fafc',
                                        border: isCompleted ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
                                        boxSizing: 'border-box'
                                      }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                          <span style={{ fontSize: '13px', fontWeight: '500', color: isCompleted ? '#166534' : '#334155' }}>{session.title}</span>
                                          {isCompleted && <span style={{ color: '#166534', fontSize: '12px' }}>✅ Completed</span>}
                                        </div>
                                        <div style={{ display: 'flex', gap: '8px', width: '100%' }}>
                                          <input 
                                            id={`student-link-${u.id}-${session.id}`}
                                            type="url" 
                                            placeholder="Google Meet Link" 
                                            defaultValue={currentLink}
                                            style={{ flex: 1, minWidth: 0, padding: '6px', borderRadius: '4px', border: '1px solid #cbd5e1', fontSize: '12px', outline: 'none' }}
                                          />
                                          <button 
                                            onClick={async (e) => {
                                              const input = document.getElementById(`student-link-${u.id}-${session.id}`);
                                              const link = input.value;
                                              const btn = e.target;
                                              const originalText = btn.innerText;
                                              btn.innerText = '...';
                                              try {
                                                await fetch('/api/admin/student-progress', {
                                                  method: 'PUT',
                                                  headers: { 'Content-Type': 'application/json' },
                                                  body: JSON.stringify({ userId: u.id, sessionId: session.id, meetLink: link })
                                                });
                                                btn.innerText = 'Sent';
                                                setTimeout(() => { btn.innerText = originalText; }, 2000);
                                                fetchData();
                                              } catch (err) {
                                                console.error(err);
                                                btn.innerText = 'Error';
                                              }
                                            }}
                                            style={{ background: '#2563eb', color: 'white', border: 'none', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: '500', whiteSpace: 'nowrap' }}
                                          >
                                            Send
                                          </button>
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
                  </div>
                ))}
                
                {(activeTab === 'STUDENTS' ? students : companies).length === 0 && (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#71717a' }}>No {activeTab.toLowerCase()} found.</div>
                )}
              </div>
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

          {activeTab === 'COURSES' && (
            <div>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px', padding: '24px', border: '1px solid #e4e4e7', borderRadius: '8px' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Create New Course</h3>
                  <form onSubmit={handleCreateCourse}>
                    <div style={{ marginBottom: '16px', display: 'flex', gap: '16px' }}>
                      <div style={{ flex: 1 }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Course Title</label>
                        <input 
                          type="text" 
                          required 
                          value={newCourse.title}
                          onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d4d4d8' }}
                        />
                      </div>
                      <div style={{ width: '120px' }}>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Sessions</label>
                        <input 
                          type="number" 
                          required 
                          min="1"
                          value={newCourse.numSessions}
                          onChange={e => setNewCourse({...newCourse, numSessions: parseInt(e.target.value) || 1})}
                          style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d4d4d8' }}
                        />
                      </div>
                    </div>
                    <button type="submit" style={{ background: '#18181b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
                      Create Course
                    </button>
                  </form>
                </div>
              </div>

              <h2 style={{ marginTop: '40px', marginBottom: '16px' }}>Existing Courses</h2>
              {courses.map(course => (
                <div key={course.id} style={{ marginBottom: '24px', padding: '20px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 8px 0' }}>{course.title}</h3>
                  <p style={{ margin: '0 0 16px 0', color: '#64748b' }}>Total Sessions: {course.sessions?.length || 0}</p>

                  <h4 style={{ marginTop: '16px', marginBottom: '12px', color: '#334155' }}>Enrolled Students</h4>
                  {course.enrollments && course.enrollments.length > 0 ? (
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {course.enrollments.map(enrollment => {
                        const student = enrollment.user;
                        return (
                          <div key={student.id} style={{ padding: '12px', background: 'white', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                            <div style={{ fontWeight: '500', color: '#0f172a' }}>
                              {student.name} <span style={{ color: '#64748b', fontWeight: 'normal' }}>({student.email})</span>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <p style={{ fontSize: '14px', color: '#64748b' }}>No students enrolled yet.</p>
                  )}

                </div>
              ))}
              {courses.length === 0 && <p style={{ color: '#64748b' }}>No courses created yet.</p>}
            </div>
          )}

          {activeTab === 'HIRING' && (
            <div>
              <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Hiring Requirements from HR</h2>
              
              {requirements.length === 0 ? (
                <div style={{ padding: '24px', textAlign: 'center', color: '#64748b', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                  No hiring requirements posted yet.
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  {requirements.map(req => (
                    <div key={req.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div>
                          <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', color: '#0f172a' }}>{req.title}</h3>
                          <div style={{ fontSize: '14px', color: '#64748b' }}>
                            Posted by: {req.hr.name} ({req.hr.email}) on {new Date(req.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <span style={{ fontSize: '12px', fontWeight: '600', padding: '4px 8px', borderRadius: '4px', background: req.status === 'OPEN' ? '#dcfce7' : '#f1f5f9', color: req.status === 'OPEN' ? '#166534' : '#475569' }}>
                          {req.status}
                        </span>
                      </div>
                      <p style={{ color: '#475569', fontSize: '15px', marginBottom: '24px', whiteSpace: 'pre-wrap', background: 'white', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                        {req.description}
                      </p>
                      
                      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                          <h4 style={{ margin: '0 0 12px 0' }}>Refer a Student</h4>
                          <form onSubmit={async (e) => {
                            e.preventDefault();
                            const studentId = e.target.studentId.value;
                            if(!studentId) return;
                            const btn = e.target.submitBtn;
                            const originalText = btn.innerText;
                            btn.innerText = 'Referring...';
                            try {
                              const res = await fetch('/api/admin/referrals', {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({ hiringRequirementId: req.id, studentId })
                              });
                              if(res.ok) {
                                fetchData();
                              } else {
                                const data = await res.json();
                                alert(data.error);
                              }
                            } catch(err) {
                              console.error(err);
                            } finally {
                              btn.innerText = originalText;
                            }
                          }}>
                            <div style={{ display: 'flex', gap: '8px' }}>
                              <select name="studentId" required style={{ flex: '1', padding: '10px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                                <option value="">-- Select Student --</option>
                                {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.email})</option>)}
                              </select>
                              <button name="submitBtn" type="submit" style={{ background: '#2563eb', color: 'white', border: 'none', padding: '10px 16px', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
                                Refer Student
                              </button>
                            </div>
                          </form>
                        </div>
                        
                        <div style={{ flex: '1', minWidth: '300px' }}>
                          <h4 style={{ margin: '0 0 12px 0' }}>Already Referred</h4>
                          {!req.referrals || req.referrals.length === 0 ? (
                            <div style={{ fontSize: '14px', color: '#64748b' }}>No students referred yet.</div>
                          ) : (
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                              {req.referrals.map(ref => (
                                <div key={ref.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'white', padding: '8px 12px', borderRadius: '4px', border: '1px solid #e2e8f0' }}>
                                  <div>
                                    <div style={{ fontSize: '14px', fontWeight: '500' }}>{ref.student.name}</div>
                                    <div style={{ fontSize: '12px', color: '#64748b' }}>{ref.student.email}</div>
                                  </div>
                                  <span style={{ fontSize: '12px', color: '#16a34a', fontWeight: '500' }}>Referred</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'CONTACTS' && (
            <>
              <h2 style={{ marginTop: 0, marginBottom: '16px' }}>Contact Form Submissions</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {contacts.map(c => (
                  <div key={c.id} style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                      <div>
                        <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#0f172a' }}>{c.subject}</div>
                        <div style={{ fontSize: '14px', color: '#64748b', marginTop: '4px' }}>
                          From: {c.firstName} {c.lastName} ({c.email}) • {new Date(c.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDeleteContact(c.id)}
                        style={{ background: '#ef4444', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}
                      >
                        Delete
                      </button>
                    </div>
                    <div style={{ background: 'white', padding: '16px', borderRadius: '6px', border: '1px solid #e2e8f0', color: '#334155', whiteSpace: 'pre-wrap' }}>
                      {c.message}
                    </div>
                  </div>
                ))}
                {contacts.length === 0 && (
                  <div style={{ padding: '24px', textAlign: 'center', color: '#71717a', border: '1px solid #e4e4e7', borderRadius: '8px' }}>
                    No contact messages yet.
                  </div>
                )}
              </div>
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
