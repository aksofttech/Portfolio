'use client'

import dynamic from 'next/dynamic';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Orb = dynamic(() => import('../components/Orb/Orb'), { ssr: false });
const Strands = dynamic(() => import('../components/Strands/Strands'), { ssr: false });
const Threads = dynamic(() => import('../components/Threads/Threads'), { ssr: false });
const Ballpit = dynamic(() => import('../components/Ballpit/Ballpit'), { ssr: false });
const TextType = dynamic(() => import('../components/TextType/TextType'), { ssr: false });

const MagicBento = dynamic(() => import('../components/MagicBento/MagicBento'), { ssr: false });

const valuePropositionCards = [
  {
    color: 'rgba(10, 10, 10, 0.7)',
    label: 'Speed',
    title: '⚡ Rapid Development',
    description: 'Launch your product 40% faster with our agile methodology.'
  },
  {
    color: 'rgba(10, 10, 10, 0.7)',
    label: 'Scalability',
    title: '📈 Scalable Architecture',
    description: 'Built to grow with your business, from startup to enterprise.'
  },
  {
    color: 'rgba(10, 10, 10, 0.7)',
    label: 'Expertise',
    title: '👨‍💻 Expert Team',
    description: '50+ certified developers with expertise across 20+ technologies.'
  },
  {
    color: 'rgba(10, 10, 10, 0.7)',
    label: 'Transparency',
    title: '🔍 Transparent Process',
    description: 'Real-time updates, clear communication, no hidden costs.'
  },
  {
    color: 'rgba(10, 10, 10, 0.7)',
    label: 'Support',
    title: '🛡️ 24/7 Support',
    description: 'Dedicated support team to ensure your continuous success.'
  },
  {
    color: 'rgba(10, 10, 10, 0.7)',
    label: 'Innovation',
    title: '💡 Innovative Solutions',
    description: 'Cutting-edge tech tailored perfectly to solve your unique business challenges.'
  }
];

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero" id="home" style={{ position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
                    <Orb hoverIntensity={5} rotateOnHover={true} hue={0} forceHoverState={true} backgroundColor="#000000" />
                </div>
                <div className="hero-container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="hero-content">
                        <div style={{ display: 'block', width: '100%' }}>
                            <div className="hero-badge">
                                <span className="badge-text">Next-Gen Software & AI Solutions</span>
                            </div>
                        </div>
                        <TextType 
                            text={[
                                "Transform Ideas Into\nPowerful Digital\nExperiences.",
                                "Innovative Technology.\nCustom Solutions.\nUnlimited Growth.",
                                "Build Smarter Software.\nScale Faster.\nLead Your Industry."
                            ]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="_"
                            deletingSpeed={50}
                            className="hero-title" 
                        />
                        <p className="hero-subtitle">We build scalable, high-performance software that drives growth and innovation for forward-thinking companies.</p>
                        <div className="hero-cta">
                            <a href="/contact" className="btn-primary">Get a Free Consultation</a>
                        </div>
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
            <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <Strands 
                        colors={['#8B5CF6', '#3B82F6', '#06B6D4', '#fc42ff']} 
                        speed={0.5}
                        amplitude={1.5}
                        glow={2.5}
                    />
                </div>
                <div style={{ position: 'relative', zIndex: 1, padding: '0 2rem', maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

                        <h2 className="section-title" style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Why Choose AK SOFT-TECH?</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                            We don't just write code – we engineer solutions that solve real business problems. Our team combines technical expertise with strategic thinking to deliver software that actually works for your business.
                        </p>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                        <MagicBento 
                            cards={valuePropositionCards}
                            glowColor="139, 92, 246"
                            spotlightRadius={400}
                        />
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 2rem', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <Threads 
                        amplitude={1}
                        distance={0}
                        enableMouseInteraction={true}
                        color={[0.5, 0.5, 0.5]}
                    />
                </div>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

                        <h2 className="section-title" style={{ marginTop: '1.5rem', marginBottom: '1rem', color: '#fff' }}>Our Proven Process</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>We follow a streamlined agile methodology to ensure transparent communication and rapid delivery from day one.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', position: 'relative' }}>
                        <div style={{ background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>01</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Discovery & Planning</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We analyze your requirements, business goals, and existing architecture to create a comprehensive roadmap.</p>
                        </div>
                        <div style={{ background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>02</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Design & Prototyping</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Our UI/UX team creates interactive wireframes and high-fidelity prototypes to visualize the end product.</p>
                        </div>
                        <div style={{ background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>03</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Agile Development</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>We build your software in 2-week sprints, ensuring you see continuous progress and can provide regular feedback.</p>
                        </div>
                        <div style={{ background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2.5rem', position: 'relative', zIndex: 1 }}>
                            <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255,255,255,0.05)', position: 'absolute', top: '10px', right: '20px' }}>04</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '1rem' }}>Testing & Launch</h3>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>Rigorous QA testing ensures a bug-free experience before we deploy the application to your production servers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section style={{ position: 'relative', overflow: 'hidden', padding: '6rem 2rem' }}>
                <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h2 className="section-title" style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Industries We Empower</h2>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>We have delivered specialized software solutions across various massive verticals.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ height: '80px', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                <DotLottieReact src="/Education & EdTech.lottie" loop autoplay />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Education & EdTech</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>LMS, ERP systems, and AI Lesson Planners.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏥</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Healthcare</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Telemedicine, patient portals, and HIPAA compliance.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>💰</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>FinTech</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>Payment gateways, secure wallets, and analytics.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: '16px', textAlign: 'center', background: 'rgba(10, 10, 10, 0.7)', backdropFilter: 'blur(10px)' }}>
                            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🛒</div>
                            <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem' }}>Retail & E-Commerce</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>High-volume catalogs, POS integrations, and CRM.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Bottom CTA */}
            <section className="bottom-cta" style={{ position: 'relative', overflow: 'hidden', marginTop: '0', borderTop: '1px solid var(--border-color)', minHeight: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <Ballpit
                        count={100}
                        gravity={0.01}
                        friction={0.9975}
                        wallBounce={0.95}
                        followCursor={false}
                        colors={[0xffffff, 0x8b5cf6, 0x1e1b4b, 0x000000, 0xd4d4d8]}
                    />
                </div>
                <div className="cta-container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '4rem 2rem' }}>
                    <h2 className="section-title cta-title" style={{ marginBottom: '1.5rem', color: '#fff' }}>Ready to Build Something Amazing?</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem auto' }}>Let's discuss your project and see how we can help you achieve your goals.</p>
                    <div className="cta-buttons" style={{ display: 'flex', justifyContent: 'center' }}>
                        <a href="/contact" className="btn-primary" style={{ background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)', padding: '1rem 2rem', borderRadius: '30px', color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Schedule Your Free Consultation</a>
                    </div>
                </div>
            </section>
        </>
    );
}
