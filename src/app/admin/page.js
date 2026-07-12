'use client';
import React, { useState, useEffect } from 'react';

export default function AdminPanel() {
  const [users, setUsers] = useState([]);
  const [demos, setDemos] = useState([]);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('STUDENTS'); // STUDENTS, COMPANIES, DEMOS, COURSES, SETTINGS
  const [adminEmail, setAdminEmail] = useState('');

  // Password change state
  const [passwords, setPasswords] = useState({ current: '', new: '' });
  const [pwdStatus, setPwdStatus] = useState({ type: '', message: '' });
  
  // Course creation state
  const [newCourse, setNewCourse] = useState({ title: '', description: '' });
  
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
      const [userRes, demoRes, courseRes] = await Promise.all([
        fetch('/api/admin/users'),
        fetch('/api/admin/demos'),
        fetch('/api/admin/courses')
      ]);
      const userData = await userRes.json();
      const demoData = await demoRes.json();
      const courseData = await courseRes.json();
      
      setUsers(userData.users || []);
      setDemos(demoData.demos || []);
      setCourses(courseData || []);
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

  const handleCreateCourse = async (e) => {
    e.preventDefault();
    try {
      await fetch('/api/admin/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCourse)
      });
      setNewCourse({ title: '', description: '' });
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
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px', borderBottom: '2px solid #e4e4e7', paddingBottom: '12px' }}>
          {['STUDENTS', 'COMPANIES', 'DEMOS', 'COURSES', 'SETTINGS'].map(tab => (
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
              {tab === 'COURSES' && `Courses & Sessions`}
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
                    <React.Fragment key={u.id}>
                      <tr 
                        style={{ borderBottom: '1px solid #e4e4e7', cursor: activeTab === 'STUDENTS' ? 'pointer' : 'default', background: expandedStudentId === u.id ? '#f8fafc' : 'white' }}
                        onClick={() => {
                          if (activeTab === 'STUDENTS') {
                            setExpandedStudentId(expandedStudentId === u.id ? null : u.id);
                          }
                        }}
                      >
                        <td style={{ padding: '12px' }}>
                          {activeTab === 'STUDENTS' && (
                            <span style={{ display: 'inline-block', width: '20px', fontSize: '12px' }}>
                              {expandedStudentId === u.id ? '▼' : '▶'}
                            </span>
                          )}
                          {u.id}
                        </td>
                        <td style={{ padding: '12px', fontWeight: '500' }}>{u.name || '-'}</td>
                        <td style={{ padding: '12px' }}>{u.email}</td>
                        <td style={{ padding: '12px' }}>
                          <button 
                            onClick={(e) => { e.stopPropagation(); handleDeleteUser(u.id); }}
                            style={{ background: '#ef4444', color: 'white', padding: '6px 12px', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '13px' }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      {activeTab === 'STUDENTS' && expandedStudentId === u.id && (
                        <tr>
                          <td colSpan="4" style={{ padding: 0 }}>
                            <div style={{ background: '#f8fafc', padding: '16px 24px', borderBottom: '1px solid #e4e4e7' }}>
                              <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#475569' }}>Enrollment & Progress for {u.name}</h4>
                              {!u.enrollments || u.enrollments.length === 0 ? (
                                <p style={{ fontSize: '14px', color: '#64748b', margin: 0 }}>No active course enrollments.</p>
                              ) : (
                                u.enrollments.map(enrollment => {
                                  const course = enrollment.course;
                                  return (
                                    <div key={enrollment.id} style={{ marginBottom: '16px', background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #cbd5e1' }}>
                                      <strong style={{ display: 'block', marginBottom: '8px' }}>{course.title}</strong>
                                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                        {course.sessions.map(session => {
                                          const isCompleted = u.studentProgress && u.studentProgress.some(p => p.sessionId === session.id && p.completed);
                                          return (
                                            <div key={session.id} style={{ 
                                              fontSize: '12px', 
                                              padding: '4px 8px', 
                                              borderRadius: '4px',
                                              background: isCompleted ? '#dcfce7' : '#f1f5f9',
                                              color: isCompleted ? '#166534' : '#475569',
                                              border: isCompleted ? '1px solid #bbf7d0' : '1px solid #e2e8f0'
                                            }}>
                                              {session.title}: {isCompleted ? '✅' : 'Pending'}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  );
                                })
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
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

          {activeTab === 'COURSES' && (
            <div>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <div style={{ flex: '1', minWidth: '300px', padding: '24px', border: '1px solid #e4e4e7', borderRadius: '8px' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Create New Course</h3>
                  <form onSubmit={handleCreateCourse}>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Course Title</label>
                      <input 
                        type="text" 
                        required 
                        value={newCourse.title}
                        onChange={e => setNewCourse({...newCourse, title: e.target.value})}
                        style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d4d4d8' }}
                      />
                    </div>
                    <button type="submit" style={{ background: '#18181b', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
                      Create Course (Auto-generates 8 Sessions)
                    </button>
                  </form>
                </div>
                
                <div style={{ flex: '1', minWidth: '300px', padding: '24px', border: '1px solid #e4e4e7', borderRadius: '8px' }}>
                  <h3 style={{ marginTop: 0, marginBottom: '16px' }}>Enroll Student</h3>
                  <form onSubmit={handleEnrollStudent}>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Select Student</label>
                      <select required value={enrollForm.userId} onChange={e => setEnrollForm({...enrollForm, userId: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d4d4d8' }}>
                        <option value="">-- Choose Student --</option>
                        {students.map(s => <option key={s.id} value={s.id}>{s.name} ({s.email})</option>)}
                      </select>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Select Course</label>
                      <select required value={enrollForm.courseId} onChange={e => setEnrollForm({...enrollForm, courseId: e.target.value})} style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d4d4d8' }}>
                        <option value="">-- Choose Course --</option>
                        {courses.map(c => <option key={c.id} value={c.id}>{c.title}</option>)}
                      </select>
                    </div>
                    <button id="btn-enroll" type="submit" style={{ background: '#2563eb', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: '500' }}>
                      Enroll Student
                    </button>
                  </form>
                </div>
              </div>

              <h2 style={{ marginTop: '40px', marginBottom: '16px' }}>Existing Courses & Sessions</h2>
              {courses.map(course => (
                <div key={course.id} style={{ marginBottom: '24px', padding: '20px', background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '8px' }}>
                  <h3 style={{ margin: '0 0 16px 0' }}>{course.title} (ID: {course.id})</h3>
                  
                  <div style={{ display: 'grid', gap: '12px' }}>
                    {course.sessions?.map(session => (
                      <div key={session.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '12px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                        <div style={{ fontWeight: '500', width: '120px' }}>{session.title}</div>
                        <input 
                          id={`session-input-${session.id}`}
                          type="url" 
                          placeholder="Google Meet Link" 
                          defaultValue={session.meetLink || ''}
                          style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                        />
                        <button 
                          onClick={() => {
                            const val = document.getElementById(`session-input-${session.id}`).value;
                            handleUpdateSession(course.id, session.id, val);
                            
                            // Visual feedback without alert
                            const btn = document.getElementById(`btn-save-${session.id}`);
                            if(btn) {
                              const originalText = btn.innerText;
                              btn.innerText = 'Saved!';
                              setTimeout(() => { btn.innerText = originalText; }, 2000);
                            }
                          }}
                          id={`btn-save-${session.id}`}
                          style={{ background: '#16a34a', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '13px' }}
                        >
                          Save & Share
                        </button>
                        <button
                          id={`btn-delete-${session.id}`}
                          onClick={() => handleDeleteSession(course.id, session.id)}
                          style={{ background: '#ef4444', color: 'white', border: 'none', padding: '8px 12px', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '13px' }}
                        >
                          Delete
                        </button>
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
                    <input
                      id={`new-session-${course.id}`}
                      type="text"
                      placeholder={`Session ${course.sessions ? course.sessions.length + 1 : 1} Title`}
                      style={{ flex: 1, padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' }}
                    />
                    <button
                      id={`btn-create-${course.id}`}
                      onClick={() => {
                        const input = document.getElementById(`new-session-${course.id}`);
                        if (input.value) {
                          handleCreateSession(course.id, input.value);
                          input.value = '';
                        } else {
                          alert('Please enter a session title');
                        }
                      }}
                      style={{ background: '#2563eb', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer', fontWeight: '500', fontSize: '13px' }}
                    >
                      + Add Session
                    </button>
                  </div>

                  <h4 style={{ marginTop: '24px', marginBottom: '12px', color: '#334155' }}>Enrolled Students</h4>
                  {course.enrollments && course.enrollments.length > 0 ? (
                    <div style={{ display: 'grid', gap: '8px' }}>
                      {course.enrollments.map(enrollment => {
                        const student = enrollment.user;
                        return (
                          <div key={student.id} style={{ background: 'white', borderRadius: '6px', border: '1px solid #cbd5e1', overflow: 'hidden' }}>
                            <div 
                              style={{ padding: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', background: expandedStudentId === student.id ? '#f1f5f9' : 'white' }}
                              onClick={() => setExpandedStudentId(expandedStudentId === student.id ? null : student.id)}
                            >
                              <div style={{ fontWeight: '500', color: '#0f172a' }}>
                                <span style={{ display: 'inline-block', width: '24px', fontSize: '12px', color: '#64748b' }}>
                                  {expandedStudentId === student.id ? '▼' : '▶'}
                                </span>
                                {student.name} <span style={{ color: '#64748b', fontWeight: 'normal' }}>({student.email})</span>
                              </div>
                            </div>
                            {expandedStudentId === student.id && (
                              <div style={{ padding: '16px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {course.sessions.map(session => {
                                  const isCompleted = student.studentProgress && student.studentProgress.some(p => p.sessionId === session.id && p.completed);
                                  return (
                                    <div key={session.id} style={{ 
                                      fontSize: '12px', padding: '6px 10px', borderRadius: '4px',
                                      background: isCompleted ? '#dcfce7' : '#f1f5f9',
                                      color: isCompleted ? '#166534' : '#475569',
                                      border: isCompleted ? '1px solid #bbf7d0' : '1px solid #e2e8f0'
                                    }}>
                                      {session.title}: {isCompleted ? '✅ Completed' : 'Pending'}
                                    </div>
                                  );
                                })}
                              </div>
                            )}
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
