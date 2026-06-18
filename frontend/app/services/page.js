'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function Services() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '2rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <span className="badge-text" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>What We Do</span>
            <h1 className="section-title" style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Comprehensive Software Solutions</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                From concept to deployment, we provide end-to-end software development services tailored to your business requirements.
            </p>
        </div>

        <section id="services" style={{ marginTop: '2rem', padding: '8rem 0' }}>
            <div className="how-container" style={{ maxWidth: '1400px' }}>
                <div className="how-cards" style={{ gap: '4rem' }}>
                    
                    {/* Service 1 */}
                    <div className="how-card">
                        <div className="how-3d" id="how-3d-1" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <DotLottieReact
                                src="/Gp2hNNx18Y.lottie"
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <h3 className="how-title">Custom Software Development</h3>
                        <p className="how-desc">Build software that's uniquely yours. We create bespoke applications designed to solve your specific business challenges and drive operational efficiency.</p>
                        <ul className="how-list">
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Discovery & Design</li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Agile Development</li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Seamless Rollout</li>
                        </ul>
                    </div>
                    
                    {/* Service 2 */}
                    <div className="how-card">
                        <div className="how-3d" id="how-3d-2" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <DotLottieReact
                                src="/Cloud Solutions.lottie"
                                loop
                                autoplay
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <h3 className="how-title">Cloud Solutions</h3>
                        <p className="how-desc">Modernize your infrastructure with secure, scalable cloud solutions that reduce costs and improve performance. We handle migrations, multi-cloud strategy, and Kubernetes.</p>
                        <ul className="how-list">
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Cloud Migration</li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> Serverless Architecture</li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> 24/7 Monitoring</li>
                        </ul>
                    </div>
                    
                    {/* Service 3 */}
                    <div className="how-card">
                        <div className="how-3d" id="how-3d-3" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <DotLottieReact
                                src="/Mobile App Showcase.lottie"
                                loop
                                autoplay
                                style={{ width: '120%', height: '120%' }}
                            />
                        </div>
                        <h3 className="how-title">Mobile App Development</h3>
                        <p className="how-desc">Reach your customers wherever they are with high-performance, user-friendly mobile applications for iOS and Android. Cross-platform or native, we build it right.</p>
                        <ul className="how-list">
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> iOS & Android Native</li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> React Native & Flutter</li>
                            <li><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2"><polyline points="20 6 9 17 4 12"></polyline></svg> App Store Optimization</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>

        {/* Additional Services */}
        <section style={{ maxWidth: '1200px', margin: '2rem auto', padding: '0 1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div className="how-card" style={{ textAlign: 'left', padding: '3rem', height: '100%' }}>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>🎨 UI/UX Design Services</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Create digital experiences that delight users and drive conversions with our user-centered design approach. From wireframes to visual design, we ensure your app looks and feels perfect.
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Wireframing & Prototyping (Figma, Adobe XD)</li>
                        <li>Interaction Design & Style Guides</li>
                        <li>Usability Testing & Accessibility (WCAG)</li>
                    </ul>
                </div>
                
                <div className="how-card" style={{ textAlign: 'left', padding: '3rem', height: '100%' }}>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>🛡️ QA & Testing Services</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Ensure your software is bug-free, secure, and performs flawlessly with our comprehensive testing services. We utilize both automated and manual techniques to guarantee reliability.
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Automated Testing (Selenium, Cypress)</li>
                        <li>Performance & Security Testing</li>
                        <li>Regression & Cross-Browser Testing</li>
                    </ul>
                </div>

                <div className="how-card" style={{ textAlign: 'left', padding: '3rem', height: '100%' }}>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>🤖 Generative AI & RAG</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Transform your business with cutting-edge AI integrations. We build intelligent RAG systems, chatbots, and autonomous agents that streamline your operations and unlock new insights from your data.
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Custom RAG (Retrieval-Augmented Gen) pipelines</li>
                        <li>AI Chatbots & Virtual Assistants</li>
                        <li>LLM Fine-tuning & Prompt Engineering</li>
                    </ul>
                </div>

                <div className="how-card" style={{ textAlign: 'left', padding: '3rem', height: '100%' }}>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>🎓 Educational ERP Solutions</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        End-to-end Enterprise Resource Planning solutions tailored specifically for educational institutions to manage students, faculty, grading, and fees seamlessly.
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Student & Faculty Management Portals</li>
                        <li>Automated Fee Collection & Payroll</li>
                        <li>AI-Powered Lesson Planning Modules</li>
                    </ul>
                </div>

                <div className="how-card" style={{ textAlign: 'left', padding: '3rem', height: '100%' }}>
                    <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem' }}>☁️ SaaS Product Development</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Turn your software idea into a fully-functional, highly scalable Software-as-a-Service platform. We handle everything from multi-tenant architecture to billing integration.
                    </p>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Multi-tenant SaaS Architecture</li>
                        <li>Subscription & Billing (Stripe/Razorpay)</li>
                        <li>Admin Dashboards & Analytics</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
}
