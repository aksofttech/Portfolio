'use client'
import Link from 'next/link';
import { Code } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="navbar">
        <div className="nav-container">
            <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
                <div style={{ display: 'inline-flex', marginRight: '8px', alignItems: 'center' }}>
                    <img src="/logo.png" alt="AK Logo" style={{ height: '36px', objectFit: 'contain' }} />
                </div>
                <span className="logo-text">AK SOFT-TECH</span>
            </Link>
            <div className="nav-links">
                <Link href="/" className="nav-link">Home</Link>
                <Link href="/feature" className="nav-link">Feature</Link>
                <Link href="/services" className="nav-link">Services</Link>
                <Link href="/technologies" className="nav-link">Technologies</Link>
                <Link href="/projects" className="nav-link">Projects</Link>
                <Link href="/about" className="nav-link">About</Link>
            </div>
            <div className="nav-actions">
                <Link href="/contact" className="nav-cta">Contact Us →</Link>
            </div>
        </div>
    </nav>
  );
}
