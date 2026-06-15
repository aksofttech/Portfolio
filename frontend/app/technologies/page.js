'use client'

export default function Technologies() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '4rem' }}>
            <span className="badge-text" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Tech Stack</span>
            <h1 style={{ fontSize: '4rem', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>What We Build With</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                We build scalable, robust systems using the world's most innovative technologies. Here is how we leverage them to create your solutions.
            </p>
        </div>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
                
                {/* Frontend */}
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎨</div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>Frontend Development</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        We create digital experiences that delight users and drive conversions with our user-centered design approach.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>React.js</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Next.js</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>TypeScript</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Vue.js</span>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>What we build:</h4>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>High-performance SPA & SSR web apps</li>
                        <li>Interactive dashboards (D3.js, ECharts)</li>
                        <li>Progressive Web Apps (PWA)</li>
                        <li>Custom ERP & CRM interfaces</li>
                    </ul>
                </div>

                {/* Backend */}
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>⚙️</div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>Backend & APIs</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        The engine of your application. We build scalable backend architectures capable of handling millions of real-time events.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Node.js</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Python</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Go</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>.NET</span>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>What we build:</h4>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Microservices architectures</li>
                        <li>Secure RESTful & GraphQL APIs</li>
                        <li>Real-time event processing via WebSockets</li>
                        <li>Generative AI & LLM integration pipelines</li>
                    </ul>
                </div>

                {/* Mobile */}
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📱</div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>Mobile Apps</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Reach your customers wherever they are with high-performance, user-friendly mobile applications for iOS and Android.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>React Native</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Flutter</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Swift (iOS)</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Kotlin (Android)</span>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>What we build:</h4>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Cross-platform commercial apps</li>
                        <li>Native applications with hardware access (Camera, GPS, Bluetooth)</li>
                        <li>App Store & Google Play deployment</li>
                        <li>Mobile backend integrations (Firebase)</li>
                    </ul>
                </div>

                {/* Cloud & Data */}
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>☁️</div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>Cloud & Databases</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Modernize your infrastructure with secure, scalable cloud solutions that reduce costs and improve performance.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>AWS</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Azure</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>PostgreSQL</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>MongoDB</span>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>What we build:</h4>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Cloud Migration & Architecture design</li>
                        <li>Serverless computing (AWS Lambda, Azure Functions)</li>
                        <li>Container orchestration via Kubernetes</li>
                        <li>High-availability database clusters</li>
                    </ul>
                </div>

                {/* DevOps */}
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>DevOps & Infra</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        We automate deployments and ensure your systems are reliable, scalable, and secure.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Docker</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Kubernetes</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>CI/CD</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Terraform</span>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>What we build:</h4>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Automated CI/CD pipelines (GitHub Actions)</li>
                        <li>Infrastructure as Code (IaC)</li>
                        <li>Zero-downtime deployments</li>
                    </ul>
                </div>

                {/* AI / ML */}
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🧠</div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>AI & Machine Learning</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Empower your business with predictive analytics and intelligent automation.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>OpenAI API</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>LangChain</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>TensorFlow</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>PyTorch</span>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>What we build:</h4>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>Retrieval-Augmented Generation (RAG)</li>
                        <li>Computer Vision & NLP models</li>
                        <li>Predictive Analytics Engines</li>
                    </ul>
                </div>

                {/* Testing & UI */}
                <div style={{ background: 'var(--bg-primary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '3rem' }}>
                    <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🛠️</div>
                    <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '1.5rem' }}>Testing & UI/UX</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        We ensure flawless delivery and beautiful, user-centered interfaces.
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Figma</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Cypress</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Selenium</span>
                        <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.05)', padding: '5px 12px', borderRadius: '12px', marginRight: '8px', marginBottom: '8px', color: '#fff' }}>Jest</span>
                    </div>
                    <h4 style={{ color: '#fff', marginBottom: '0.5rem' }}>What we build:</h4>
                    <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingLeft: '1.2rem' }}>
                        <li>End-to-End Automated Testing</li>
                        <li>High-Fidelity UI Prototypes</li>
                        <li>Unit & Integration Testing suites</li>
                    </ul>
                </div>

            </div>
        </section>
    </div>
  );
}
