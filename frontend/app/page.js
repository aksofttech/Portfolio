'use client'

export default function Home() {
  return (
    <>
    {/* Hero Section */}
    <section className="hero" id="home">
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-badge">
                    <span className="badge-text">Next-Gen Software & AI Solutions</span>
                </div>
                <h1 className="hero-title">Transform Your Business with Custom Software Solutions</h1>
                <p className="hero-subtitle">We build scalable, high-performance software that drives growth and innovation for forward-thinking companies.</p>
                <div className="hero-cta">
                    <a href="/contact" className="btn-primary">Get a Free Consultation</a>
                </div>
            </div>
            <div className="hero-3d" id="hero-3d-container">
                {/* Three.js canvas will be inserted here */}
            </div>
        </div>
    </section>

    {/* Technologies Marquee (Moved from Technologies Page) */}
    <section className="social-proof" id="technologies" style={{ padding: '4rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="social-proof-container">
            <p className="social-proof-text" style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--text-secondary)' }}>Powered by the world's most innovative technologies</p>
            <div className="logo-marquee">
                <div className="logo-track">
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>React.js</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Next.js</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Node.js</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PostgreSQL</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MongoDB</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Generative AI</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>REST APIs</div>
                    {/* Duplicate for infinite scroll */}
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>React.js</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Next.js</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Node.js</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>PostgreSQL</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>MongoDB</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Generative AI</div>
                    <div className="logo-item" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>REST APIs</div>
                </div>
            </div>
        </div>
    </section>

    {/* Value Proposition */}
    <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge-text" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Value Proposition</span>
            <h2 style={{ fontSize: '3.5rem', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Why Choose AK SOFT-TECH?</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                We don't just write code – we engineer solutions that solve real business problems. Our team combines technical expertise with strategic thinking to deliver software that actually works for your business.
            </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>⚡ Rapid Development</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Launch your product 40% faster with our agile methodology.</p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>📈 Scalable Architecture</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Built to grow with your business, from startup to enterprise.</p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>👨‍💻 Expert Team</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>50+ certified developers with expertise across 20+ technologies.</p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>🔍 Transparent Process</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Real-time updates, clear communication, no hidden costs.</p>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>🛡️ 24/7 Support</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Dedicated support team to ensure your continuous success.</p>
            </div>
        </div>
    </section>

    {/* Our Process Section */}
    <section style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <span className="badge-text" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>How We Work</span>
                <h2 style={{ fontSize: '3.5rem', marginTop: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Our Proven Process</h2>
                <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>We follow a streamlined agile methodology to ensure transparent communication and rapid delivery from day one.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', position: 'relative' }}>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>01</div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Discovery & Planning</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We analyze your requirements, business goals, and existing architecture to create a comprehensive roadmap.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>02</div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Design & Prototyping</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our UI/UX team creates interactive wireframes and high-fidelity prototypes to visualize the end product.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>03</div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Agile Development</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We build your software in 2-week sprints, ensuring you see continuous progress and can provide regular feedback.</p>
                </div>
                <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>04</div>
                    <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Testing & Launch</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Rigorous QA testing ensures a bug-free experience before we deploy the application to your production servers.</p>
                </div>
            </div>
        </div>
    </section>

    {/* Industries We Serve */}
    <section style={{ padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Industries We Empower</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>We have delivered specialized software solutions across various massive verticals.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'var(--card-bg)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎓</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Education & EdTech</h3>
                <p style={{ color: 'var(--text-secondary)' }}>LMS, ERP systems, and AI Lesson Planners.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'var(--card-bg)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Healthcare</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Telemedicine, patient portals, and HIPAA compliance.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'var(--card-bg)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>FinTech</h3>
                <p style={{ color: 'var(--text-secondary)' }}>Payment gateways, secure wallets, and analytics.</p>
            </div>
            <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'var(--card-bg)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Retail & E-Commerce</h3>
                <p style={{ color: 'var(--text-secondary)' }}>High-volume catalogs, POS integrations, and CRM.</p>
            </div>
        </div>
    </section>
    <section style={{ padding: '6rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>What Our Clients Say</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
                    <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>
                        "AK SOFT-TECH transformed our outdated legacy system into a modern, cloud-based platform. The transition was seamless, and our productivity increased by 60% within the first quarter."
                    </p>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>Sarah Mitchell</h4>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>CTO at FinanceFlow Inc.</span>
                    </div>
                </div>
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
                    <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>
                        "The mobile app they built for us has received 4.8 stars on the App Store. Our user engagement has tripled since launch. Highly recommend their team!"
                    </p>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>Marcus Chen</h4>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>Founder at HealthTrack</span>
                    </div>
                </div>
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem' }}>
                    <div style={{ display: 'flex', gap: '5px', marginBottom: '1rem' }}>⭐⭐⭐⭐⭐</div>
                    <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.6' }}>
                        "Working with AK SOFT-TECH felt like having an extension of our own team. They understood our vision and delivered beyond our expectations."
                    </p>
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '0.25rem' }}>Emily Rodriguez</h4>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>VP of Eng at DataSync Solutions</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    {/* Bottom CTA */}
    <section className="bottom-cta" style={{ marginTop: '0', borderTop: '1px solid var(--border-color)' }}>
        <div className="cta-container">
            <h2 className="cta-title">Ready to Build Something Amazing?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2rem' }}>Let's discuss your project and see how we can help you achieve your goals.</p>
            <div className="cta-buttons">
                <a href="/contact" className="btn-primary">Schedule Your Free Consultation</a>
            </div>
        </div>
    </section>
    </>
  );
}
