import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '4rem 2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'var(--font-inter)' }}>
      
      {/* Hero Section */}
      <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 800, color: 'var(--primary-color)', letterSpacing: '-0.025em' }}>
          Centre for Information Technology India
        </h1>
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'var(--text-secondary)', maxWidth: '700px', marginInline: 'auto', lineHeight: 1.6 }}>
          Leading IT company offering expert web development, mobile apps, cybersecurity, cloud services, and digital marketing. Trusted by businesses worldwide.
        </p>
        <a 
          href="https://cit.org.in" 
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          style={{ textDecoration: 'none', display: 'inline-block' }}
        >
          Explore Our IT Services
        </a>
      </section>

      {/* Services Overview */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        <div style={{ padding: '2rem', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>💻 Web & App Development</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Custom software, scalable web applications, and intuitive mobile apps tailored to your business needs.</p>
        </div>
        <div style={{ padding: '2rem', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>🔒 Cybersecurity</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Enterprise-grade security solutions to protect your digital assets and ensure complete data privacy.</p>
        </div>
        <div style={{ padding: '2rem', background: 'white', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', border: '1px solid #e2e8f0' }}>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>☁️ Cloud Services</h3>
          <p style={{ color: 'var(--text-secondary)' }}>Seamless cloud migration, DevOps consulting, and scalable infrastructure management.</p>
        </div>
      </section>

      <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '4rem 0' }} />

      {/* Demo Directory Section */}
      <section>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Industry Demo Templates</h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            We build specialized, high-conversion websites for every industry. Explore our interactive demos below.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
          <Link href="/clinic/AlShifaClinic" style={{ padding: '1.5rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease', textDecoration: 'none', display: 'block', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🩺</span> Clinic Demo
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Clean, trustworthy teal and blue aesthetic designed for healthcare professionals.</p>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)' }}>View AlShifaClinic →</span>
          </Link>
          
          <Link href="/salon/GlowUpStudio" style={{ padding: '1.5rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease', textDecoration: 'none', display: 'block', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>✨</span> Salon Demo
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Chic, elegant pink and burgundy theme perfect for beauty studios and spas.</p>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)' }}>View GlowUpStudio →</span>
          </Link>
          
          <Link href="/construction/ApexBuilders" style={{ padding: '1.5rem', background: 'white', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', transition: 'all 0.3s ease', textDecoration: 'none', display: 'block', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ fontSize: '1.5rem' }}>🏗️</span> Construction Demo
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1rem' }}>Bold, sturdy amber and dark gray theme tailored for contractors and builders.</p>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--primary-color)' }}>View ApexBuilders →</span>
          </Link>
        </div>
      </section>

    </main>
  );
}
