'use client'
import Link from 'next/link';
import { Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-content">
                <div className="footer-brand">
                    <Link href="/" className="nav-logo" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                        <div className="logo-icon-ak" style={{ display: 'inline-flex', marginRight: '8px' }}>
                            <Code size={20} color="#ffffff" />
                        </div>
                        <span className="logo-text">AK SOFT-TECH</span>
                    </Link>
                    <p className="footer-tagline" style={{ marginTop: '1rem' }}>Empowering businesses with custom software development and next-gen AI automation.</p>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h4 className="footer-heading">Services</h4>
                        <Link href="/services" className="footer-link">Software Dev</Link>
                        <Link href="/services" className="footer-link">AI & Automation</Link>
                        <Link href="/services" className="footer-link">Enterprise Solutions</Link>
                        <Link href="/services" className="footer-link">EdTech</Link>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Technologies</h4>
                        <Link href="/technologies" className="footer-link">React.js</Link>
                        <Link href="/technologies" className="footer-link">Node.js</Link>
                        <Link href="/technologies" className="footer-link">Gen AI</Link>
                        <Link href="/technologies" className="footer-link">PostgreSQL</Link>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Company</h4>
                        <Link href="/about" className="footer-link">About Us</Link>
                        <Link href="/projects" className="footer-link">Projects</Link>
                        <Link href="/feature" className="footer-link">Engagement</Link>
                    </div>
                    <div className="footer-column">
                        <h4 className="footer-heading">Contact Us</h4>
                        <a href="mailto:aksofttech53@gmail.com" className="footer-link">aksofttech53@gmail.com</a>
                        <a href="tel:+918302728026" className="footer-link">+91 8302728026</a>
                        <a href="https://github.com/aksofttech" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                        <a href="https://www.linkedin.com/in/ak-soft-tech-7888b0416" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className="footer-copyright">© 2026 AK SOFT-TECH. All rights reserved.</p>
            </div>
        </div>
    </footer>
  );
}
