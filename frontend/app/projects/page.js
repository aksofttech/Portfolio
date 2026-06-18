'use client'

export default function Projects() {
  const projects = [
    {
        title: "School-ERP",
        repo: "Ajeet0012/School_erp",
        desc: "A comprehensive Enterprise Resource Planning solution for modern schools, automating everything from attendance to academics.",
        language: "TypeScript",
        stars: 4
    },
    {
        title: "AI Integrations",
        repo: "yugsoft-tech/Ai",
        desc: "Advanced Artificial Intelligence integrations and generative AI pipelines for enterprise clients.",
        language: "Python",
        stars: 3
    },
    {
        title: "E-Commerce Catalog",
        repo: "Ajeet0012/catalog",
        desc: "High-performance product catalog system designed for fast load times and millions of SKUs.",
        language: "JavaScript",
        stars: 5
    },
    {
        title: "Enterprise ERP",
        repo: "Ajeet0012/ERP",
        desc: "Scalable Enterprise Resource Planning platform for manufacturing and logistics companies.",
        language: "TypeScript",
        stars: 4
    },
    {
        title: "Snake-bite",
        repo: "Ajeet0012/Snake-bite",
        desc: "Interactive web-based Snake game built to demonstrate real-time rendering and state management.",
        language: "JavaScript",
        stars: 2
    },
    {
        title: "Attendance Tracker",
        repo: "attendence2",
        desc: "Biometric and log-based attendance system with real-time reporting and analytics.",
        language: "TypeScript",
        stars: 3
    },
    {
        title: "WhatsApp-Bill-Automation",
        repo: "WhatsApp-Bill-Automation",
        desc: "Automated invoicing and billing platform seamlessly integrated directly with the WhatsApp Business API.",
        language: "TypeScript",
        stars: 5
    },
    {
        title: "OfficeXManagement",
        repo: "OfficeXMangement",
        desc: "Streamlined office management suite built for tracking attendance, managing inventory, and handling employee data.",
        language: "TypeScript",
        stars: 1
    },
    {
        title: "CakeAway",
        repo: "CakeAway",
        desc: "Dedicated bakery and food delivery platform providing a seamless and beautiful ordering experience.",
        language: "TypeScript",
        stars: 2
    },
    {
        title: "Assess-Inventory",
        repo: "assess-inventory",
        desc: "Intelligent inventory assessment and supply chain tracking tool for retail businesses.",
        language: "TypeScript",
        stars: 1
    },
    {
        title: "Developer Portfolio",
        repo: "Portfolio",
        desc: "My personal developer portfolio showcasing skills, projects, and career timeline in an interactive UI.",
        language: "Next.js",
        stars: 4
    }
  ];

  return (
    <div className="page-container" style={{ minHeight: '100vh', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge-text" style={{ background: 'rgba(255,255,255,0.1)', padding: '8px 16px', borderRadius: '20px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Our Portfolio</span>
            <h1 className="section-title" style={{ marginTop: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Featured Projects</h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                Explore some of our proudest creations, from enterprise resource planning systems to advanced AI automations. We have delivered over 200+ successful projects.
            </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
            {projects.map((proj, idx) => (
                <div key={idx} style={{ background: 'var(--card-bg)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '2rem', transition: 'transform 0.3s ease, borderColor 0.3s ease', cursor: 'pointer' }}
                     onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.borderColor = 'var(--text-secondary)'; }}
                     onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', color: '#fff', margin: 0 }}>{proj.title}</h3>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255,255,255,0.05)', padding: '4px 10px', borderRadius: '12px', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            {proj.stars}
                        </div>
                    </div>
                    
                    <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.6', marginBottom: '2rem', minHeight: '80px' }}>
                        {proj.desc}
                    </p>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: proj.language === 'TypeScript' ? '#3178c6' : (proj.language === 'Python' ? '#3572A5' : '#f1e05a') }}></div>
                        {proj.language}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
}
