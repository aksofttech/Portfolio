'use client'
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState(null); // 'success', 'error', or null

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
    setLoading(false);
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <div className="contact-page" style={{ minHeight: '100vh', paddingBottom: '4rem' }}>
        <div style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '3rem', paddingLeft: '1rem', paddingRight: '1rem' }}>

            <h1 className="section-title" style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Free Consultation</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                Ready to transform your business? Tell us about your project, and our experts will get back to you with a custom strategy.
            </p>
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            {/* Contact Form */}
            <div style={{ flex: '1 1 100%', minWidth: '280px', background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '2rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#fff' }}>Send a Message</h3>
                {status === 'success' && (
                    <div style={{ padding: '1rem', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', color: '#10b981', borderRadius: '8px', marginBottom: '2rem' }}>
                        Message sent successfully! We'll be in touch shortly.
                    </div>
                )}
                {status === 'error' && (
                    <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', color: '#ef4444', borderRadius: '8px', marginBottom: '2rem' }}>
                        Failed to send message. Please try again.
                    </div>
                )}
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Full Name</label>
                        <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: '#fff', fontSize: '1rem' }} placeholder="your name" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Work Email</label>
                        <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: '#fff', fontSize: '1rem' }} placeholder="your email" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Company / Organization</label>
                        <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: '#fff', fontSize: '1rem' }} placeholder="Your Company Ltd." />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Project Details</label>
                        <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color)', background: 'var(--bg-secondary)', color: '#fff', fontSize: '1rem', minHeight: '150px', resize: 'vertical' }} placeholder="Tell us about your requirements..."></textarea>
                    </div>
                    <button type="submit" disabled={loading} style={{ padding: '1rem 2rem', background: 'var(--accent-blue)', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '1.1rem', fontWeight: 'bold', cursor: loading ? 'not-allowed' : 'pointer', transition: 'background 0.3s', opacity: loading ? 0.7 : 1 }}>
                        {loading ? 'Sending...' : 'Request Consultation'}
                    </button>
                </form>
            </div>

            {/* Direct Contact Info */}
            <div style={{ flex: '1 1 300px', minWidth: '280px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>Direct Contact</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '1.5rem' }}>📧</div>
                            <div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Email Us</div>
                                <a href="mailto:aksofttech53@gmail.com" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>aksofttech53@gmail.com</a>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ fontSize: '1.5rem' }}>📞</div>
                            <div>
                                <div style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Call Us</div>
                                <a href="tel:+918302728026" style={{ color: '#fff', textDecoration: 'none', fontSize: '1.1rem' }}>+91 8302728026</a>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1.5rem' }}>Connect With Us</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <a href="https://github.com/aksofttech" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                            <span>💻</span> GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/ak-soft-tech-7888b0416" target="_blank" rel="noopener noreferrer" style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', transition: 'background 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.background='rgba(255,255,255,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background='rgba(255,255,255,0.05)'}>
                            <span>💼</span> LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
