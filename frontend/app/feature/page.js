'use client'

export default function Feature() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '4rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <span className="badge-text" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Engagement</span>
            <h1 className="section-title" style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Flexible Engagement Models</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                Choose the partnership model that fits your needs and budget. We provide top-tier developers and managers to accelerate your success.
            </p>
        </div>

        <section className="features" id="feature" style={{ marginTop: '0' }}>
            <div className="features-container" style={{ maxWidth: '1200px', padding: '0 2rem' }}>
                <div className="features-grid" style={{ gap: '3rem' }}>
                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <h3 className="feature-title">Dedicated Team</h3>
                        <p className="feature-description">A full team assigned exclusively to your project. Perfect for long-term projects requiring ongoing development and support.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                        </div>
                        <h3 className="feature-title">Staff Augmentation</h3>
                        <p className="feature-description">Add skilled developers to your existing team. Ideal when you need specific expertise or additional capacity immediately.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                            </svg>
                        </div>
                        <h3 className="feature-title">Project-Based</h3>
                        <p className="feature-description">Fixed-scope, fixed-price projects. Great for well-defined requirements with clear deliverables and timelines.</p>
                    </div>

                    <div className="feature-card">
                        <div className="feature-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10"></circle>
                                <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                        </div>
                        <h3 className="feature-title">Hourly / Time & Material</h3>
                        <p className="feature-description">Flexible billing based on actual hours worked. Suitable for projects with evolving requirements or uncertain scope.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* The AK SOFT-TECH Advantage */}
        <section style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', marginTop: '4rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 className="section-title" style={{ marginBottom: '1rem', color: '#fff' }}>The AK SOFT-TECH Advantage</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                        Why enterprise leaders trust us with their mission-critical applications.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                    <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚡</div>
                        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>10x Faster Performance</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            We optimize database queries, implement advanced caching strategies (Redis, Memcached), and utilize edge computing to ensure your application loads blazingly fast.
                        </p>
                    </div>
                    <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🔒</div>
                        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>Enterprise Security</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Security isn't an afterthought. We build with zero-trust architecture, ensuring HIPAA, GDPR, and SOC2 compliance out of the box for sensitive data applications.
                        </p>
                    </div>
                    <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem' }}>
                        <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📈</div>
                        <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>99.99% Uptime SLA</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                            Our highly available Kubernetes architectures and automated failover systems guarantee that your business stays online, 24/7/365, without interruption.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
