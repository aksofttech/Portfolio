'use client'
import LogoLoop from '@/components/LogoLoop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiPython, SiDocker, SiVercel, SiFigma } from 'react-icons/si';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiNodedotjs />, title: "Node.js" },
  { node: <SiPython />, title: "Python" },
  { node: <SiDocker />, title: "Docker" },
  { node: <SiVercel />, title: "Vercel" },
  { node: <SiFigma />, title: "Figma" }
];

export default function Technologies() {
  return (
    <div style={{ minHeight: '100vh', paddingBottom: '8rem' }}>
        {/* Page Header */}
        <div style={{ textAlign: 'center', paddingTop: '6rem', paddingBottom: '3rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
            <h1 className="section-title" style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Our Technologies</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                We build scalable, robust systems using the world's most innovative technologies. Here is how we leverage them to create your solutions.
            </p>
        </div>

        <div style={{ paddingBottom: '4rem' }}>
            <LogoLoop
                logos={techLogos}
                speed={60}
                direction="left"
                logoHeight={64}
                gap={80}
                hoverSpeed={0}
                scaleOnHover
                fadeOut
                fadeOutColor="var(--bg-primary)"
                ariaLabel="Technology partners"
            />
        </div>

        <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                
                {/* Frontend */}
                <div className="how-card about-card" style={{ textAlign: 'left', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '62px', height: '62px' }}>
                            <DotLottieReact src="/Frontend.lottie" loop autoplay />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>Frontend Development</h2>
                    </div>
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
                <div className="how-card about-card" style={{ textAlign: 'left', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '62px', height: '62px', transform: 'scale(2.9)', transformOrigin: 'center' }}>
                            <DotLottieReact src="/Backend & APIs.lottie" loop autoplay />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>Backend & APIs</h2>
                    </div>
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
                <div className="how-card about-card" style={{ textAlign: 'left', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '62px', height: '62px', transform: 'scale(2.0)', transformOrigin: 'center' }}>
                            <DotLottieReact src="/Mobile App.lottie" loop autoplay />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>Mobile Apps</h2>
                    </div>
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
                <div className="how-card about-card" style={{ textAlign: 'left', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '62px', height: '62px', transform: 'scale(1.8)', transformOrigin: 'center' }}>
                            <DotLottieReact src="/cloud and Database.lottie" loop autoplay />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>Cloud & Databases</h2>
                    </div>
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
                <div className="how-card about-card" style={{ textAlign: 'left', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '62px', height: '62px', transform: 'scale(2.0)', transformOrigin: 'center' }}>
                            <DotLottieReact src="/DevOps & Infra.lottie" loop autoplay />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>DevOps & Infra</h2>
                    </div>
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
                <div className="how-card about-card" style={{ textAlign: 'left', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '62px', height: '62px', transform: 'scale(2.0)', transformOrigin: 'center' }}>
                            <DotLottieReact src="/AI & Machine Learning.lottie" loop autoplay />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>AI & Machine Learning</h2>
                    </div>
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
                <div className="how-card about-card" style={{ textAlign: 'left', height: '100%' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                        <div style={{ width: '62px', height: '62px', transform: 'scale(2.0)', transformOrigin: 'center' }}>
                            <DotLottieReact src="/Testing & UIUX.lottie" loop autoplay />
                        </div>
                        <h2 style={{ fontSize: '2rem', color: '#fff', margin: 0 }}>Testing & UI/UX</h2>
                    </div>
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
