'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import CountUp from '../../components/CountUp/CountUp';

const MagicBento = dynamic(() => import('../../components/MagicBento/MagicBento'), { ssr: false });

const workCultureCards = [
  {
    color: 'rgba(20, 20, 20, 0.7)',
    label: 'Location',
    title: '🌍 Remote First',
    description: 'Work from anywhere. We value results over office hours.'
  },
  {
    color: 'rgba(20, 20, 20, 0.7)',
    label: 'Growth',
    title: '📚 Continuous Learning',
    description: 'Weekly tech-talks, workshops, and learning budgets.'
  },
  {
    color: 'rgba(20, 20, 20, 0.7)',
    label: 'Responsibility',
    title: '🤝 Team Ownership',
    description: 'We take pride in our work and own our successes and failures.'
  },
  {
    color: 'rgba(20, 20, 20, 0.7)',
    label: 'Well-being',
    title: '🎉 Work-Life Balance',
    description: 'Flexible hours, generous PTO, and a focus on mental health.'
  },
  {
    color: 'rgba(20, 20, 20, 0.7)',
    label: 'Inclusion',
    title: '🌈 Diverse Perspectives',
    description: 'We believe the best products are built by diverse teams.'
  },
  {
    color: 'rgba(20, 20, 20, 0.7)',
    label: 'Transparency',
    title: '💬 Open Communication',
    description: 'Flat hierarchy where every voice and idea is heard.'
  }
];

export default function About() {
  const [stats, setStats] = useState({
    team_members: '...',
    ai_solutions: '...',
    projects_delivered: '...',
    client_satisfaction: '...'
  });

  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_API_URL || '';
    
    // First, provide default stats immediately in case the API is completely absent
    const fallbackStats = {
      team_members: '50+',
      ai_solutions: '120+',
      projects_delivered: '300+',
      client_satisfaction: '99%'
    };

    fetch(`${API_URL}/api/stats`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          return res.json();
        } else {
          throw new Error("Oops, we haven't got JSON!");
        }
      })
      .then(data => {
        if (data && data.success) {
          setStats(data.data);
        } else {
          setStats(fallbackStats);
        }
      })
      .catch(err => {
        console.warn('Falling back to default stats. Fetch error:', err.message);
        setStats(fallbackStats);
      });
  }, []);

  return (
    <div className="page-container" style={{ minHeight: '100vh', maxWidth: '1200px', margin: '0 auto', color: 'var(--text-primary)' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>

            <h1 style={{ fontSize: '4.5rem', marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Building the Future of Software</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
                We're a team of passionate developers, designers, and strategists dedicated to creating software that makes a difference.
            </p>
        </div>
        
        <div className="about-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', marginBottom: '4rem' }}>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', color: '#fff' }}>From Garage to Global</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Founded by engineers who believed that great software shouldn't be complicated or expensive, AK SOFT-TECH has grown into a premier software development and AI automation company. We've maintained our startup spirit – agility, innovation, and personal attention to every client – while building the capabilities to handle enterprise-level projects.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
                Our journey has taught us one thing: the best software is built when developers truly understand the business problems they're solving. That's why we invest time in understanding your industry, your challenges, and your goals before writing a single line of code.
            </p>
            <div className="about-grid" style={{ display: 'grid', gap: '3rem', marginTop: '4rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
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
            <h2 className="section-title" style={{ textAlign: 'center', color: '#fff', marginBottom: '3rem' }}>The AK SOFT-TECH Difference</h2>
            <div className="features-grid">
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
        <div className="about-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px', marginBottom: '4rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h2 className="section-title" style={{ color: '#fff', marginBottom: '1.5rem' }}>Our Work Culture</h2>
                <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>Innovation meets Execution</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                    At AK SOFT-TECH, we don't just write code—we engineer solutions. We foster an environment where developers are encouraged to experiment with new frameworks and AI tools, ensuring that our clients always receive the most cutting-edge solutions.
                </p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem', maxWidth: '800px', margin: '0 auto' }}>
                    We believe in a flat hierarchy, transparent communication, and continuous learning. Our weekly tech-talks and hackathons keep our 50+ engineers at the top of their game.
                </p>
            </div>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <MagicBento 
                    cards={workCultureCards} 
                    glowColor="59, 130, 246" 
                    spotlightRadius={400}
                />
            </div>
        </div>

        <div className="about-card" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '24px' }}>
            <h2 className="section-title" style={{ textAlign: 'center', color: '#fff', marginBottom: '4rem' }}>By the Numbers</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {stats.team_members !== '...' ? <><CountUp from={0} to={parseInt(stats.team_members)} duration={2} />{stats.team_members.replace(/[0-9]/g, '')}</> : '...'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>Team Members</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {stats.ai_solutions !== '...' ? <><CountUp from={0} to={parseInt(stats.ai_solutions)} duration={2.5} />{stats.ai_solutions.replace(/[0-9]/g, '')}</> : '...'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>AI Solutions Deployed</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {stats.projects_delivered !== '...' ? <><CountUp from={0} to={parseInt(stats.projects_delivered)} duration={3} />{stats.projects_delivered.replace(/[0-9]/g, '')}</> : '...'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>Projects Delivered</p>
                </div>
                <div>
                    <h3 style={{ fontSize: '4rem', color: '#fff', marginBottom: '0.5rem', background: 'linear-gradient(135deg, var(--accent-blue), var(--accent-purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {stats.client_satisfaction !== '...' ? <><CountUp from={0} to={parseInt(stats.client_satisfaction)} duration={2} />{stats.client_satisfaction.replace(/[0-9]/g, '')}</> : '...'}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', fontWeight: '500' }}>Client Satisfaction</p>
                </div>
            </div>
        </div>
    </div>
  );
}
