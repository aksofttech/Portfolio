'use client'

export default function About() {
  return (
    <div style={{ minHeight: '100vh', padding: '6rem 2rem', maxWidth: '1200px', margin: '0 auto', color: 'var(--text-primary)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge-text" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Company</span>
            <h1 style={{ fontSize: '4.5rem', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Building the Future of Software</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                We're a team of passionate developers, designers, and strategists dedicated to creating software that makes a difference.
            </p>
        </div>
        
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '5rem 4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>From Garage to Global</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Founded by engineers who believed that great software shouldn't be complicated or expensive, AK SOFT-TECH has grown into a premier software development and AI automation company. We've maintained our startup spirit – agility, innovation, and personal attention to every client – while building the capabilities to handle enterprise-level projects.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Our journey has taught us one thing: the best software is built when developers truly understand the business problems they're solving. That's why we invest time in understanding your industry, your challenges, and your goals before writing a single line of code.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>Our Mission</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>To empower businesses with innovative software solutions that drive growth, efficiency, and competitive advantage. We believe every company deserves access to world-class technology.</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>Our Vision</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>To become the most trusted software development partner for businesses worldwide, known for delivering exceptional quality, transparent processes, and measurable results.</p>
                </div>
            </div>
        </div>

        {/* The TechNova Difference */}
        <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', textAlign: 'center', color: '#fff', marginBottom: '3rem' }}>The AK SOFT-TECH Difference</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Industry-Specific Expertise</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>From healthcare to fintech, e-commerce to manufacturing, we have domain experts who speak your language.</p>
                </div>
                <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Full-Stack Capabilities</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>From initial concept to ongoing maintenance, we handle everything in-house. No handoffs – just seamless delivery.</p>
                </div>
                <div style={{ background: 'var(--bg-primary)', padding: '2rem', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                    <h3 style={{ color: '#fff', marginBottom: '1rem' }}>Results-Driven Approach</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We measure our success by yours. Every project includes clear KPIs, regular reports, and optimization.</p>
                </div>
            </div>
        </div>

        {/* Our Culture */}
        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '5rem 4rem', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '3rem', textAlign: 'center', color: '#fff', marginBottom: '3rem' }}>Our Work Culture</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'center' }}>
                <div style={{ flex: '1 1 400px' }}>
                    <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>Innovation meets Execution</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        At AK SOFT-TECH, we don't just write code—we engineer solutions. We foster an environment where developers are encouraged to experiment with new frameworks and AI tools, ensuring that our clients always receive the most cutting-edge solutions.
                    </p>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        We believe in a flat hierarchy, transparent communication, and continuous learning. Our weekly tech-talks and hackathons keep our 50+ engineers at the top of their game.
                    </p>
                </div>
                <div style={{ flex: '1 1 300px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌍</div>
                        <h4 style={{ color: '#fff' }}>Remote First</h4>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📚</div>
                        <h4 style={{ color: '#fff' }}>Continuous Learning</h4>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
                        <h4 style={{ color: '#fff' }}>Team Ownership</h4>
                    </div>
                    <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2rem', borderRadius: '16px', textAlign: 'center' }}>
                        <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎉</div>
                        <h4 style={{ color: '#fff' }}>Work-Life Balance</h4>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '5rem 4rem' }}>
            <h2 style={{ fontSize: '3rem', textAlign: 'center', color: '#fff', marginBottom: '4rem' }}>By the Numbers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>50+</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>Team Members</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>10+</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>AI Solutions Deployed</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>200+</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>Projects Delivered</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>98%</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>Client Satisfaction</p>
                </div>
            </div>
        </div>
    </div>
  );
}
