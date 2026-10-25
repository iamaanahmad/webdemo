import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import styles from './Construction2.module.css';

const ConstructionTemplate2: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.contactBar}>
            {demo?.phone && tel && (
              <span>
                📞 <a href={tel}>{demo.phone}</a>
              </span>
            )}
            {demo?.email && (
              <span>
                ✉️ <a href={`mailto:${demo.email}`}>{demo.email}</a>
              </span>
            )}
            {isGeneric && (
              <>
                <span>📞 (555) 987-6543</span>
                <span>✉️ info@example.com</span>
              </>
            )}
          </div>
          <div className={styles.socialBar}>
            <span>in</span>
            <span>fb</span>
            <span>ig</span>
          </div>
        </div>
        <div className={styles.navBar}>
          <div className={styles.logo}>{businessName}</div>
          <nav className={styles.nav}>
            <a href="#services">Services</a>
            {isGeneric && <a href="#projects">Projects</a>}
            <a href="#process">Process</a>
            {isGeneric && <a href="#testimonials">Reviews</a>}
            <a href="#contact" className={styles.navCta}>Get Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="construction"
          layout="split"
          display="condensed"
          accent="#dc2626"
        />

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>What We Do</span>
            <h2>Core Services</h2>
          </div>
          <div className={styles.servicesGrid}>
            {demo?.services && demo.services.length > 0 ? (
              demo.services.map((service, i) => (
                <div key={i} className={styles.serviceBox}>
                  <div className={styles.serviceIconBox} aria-hidden="true">
                    <ServiceMark industry="construction" size={36} />
                  </div>
                  <div className={styles.serviceContent}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" className={styles.serviceLink}>Learn More →</a>
                  </div>
                </div>
              ))
            ) : isGeneric ? (
              [
                { name: 'Commercial Build-Outs', description: 'Retail spaces, office buildings, and industrial facilities built to exact specifications and timelines.' },
                { name: 'Residential Construction', description: 'Custom homes, villas, and large-scale residential developments with premium finishes.' },
                { name: 'Heavy Civil & Infrastructure', description: 'Roads, bridges, earthmoving, and large-scale infrastructure projects.' },
              ].map((service, i) => (
                <div key={i} className={styles.serviceBox}>
                  <div className={styles.serviceImage} style={{ backgroundImage: `url('https://images.unsplash.com/${['photo-1503387762-592deb58ef4e', 'photo-1600596542815-ffad4c1539a9', 'photo-1589939705384-5185137a7f0f'][i % 3]}?w=600&q=80&auto=format&fit=crop')` }}></div>
                  <div className={styles.serviceContent}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <a href="#contact" className={styles.serviceLink}>Learn More →</a>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center' }}>
                A personalized service menu can be added here after the business confirms its details.
              </p>
            )}
          </div>
        </section>

        <DemoGallery demo={demo} title="Gallery" />

        {/* Projects Gallery — generic demos only; never invent projects,
            values, or clients for a real business */}
        {isGeneric && (
        <section id="projects" className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag} style={{ background: 'white', color: 'var(--primary-color)' }}>Portfolio</span>
            <h2 style={{ color: 'white' }}>Featured Projects</h2>
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80')" }}></div>
              <div className={styles.projectInfo}>
                <h3>Skyline Commercial Tower</h3>
                <p>Commercial • 45 Floors • $120M</p>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80')" }}></div>
              <div className={styles.projectInfo}>
                <h3>Oakwood Luxury Estates</h3>
                <p>Residential • 50 Villas • $85M</p>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80')" }}></div>
              <div className={styles.projectInfo}>
                <h3>City Center Mall Renovation</h3>
                <p>Commercial Remodel • $35M</p>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Process */}
        <section id="process" className={styles.processSection}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>How We Work</span>
            <h2>Our Process</h2>
          </div>
          <div className={styles.processGrid}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <h3>Consultation</h3>
              <p>Free site visit and project scope discussion with our engineering team.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <h3>Planning & Design</h3>
              <p>Detailed blueprints, 3D renders, material selection, and cost estimation.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <h3>Construction</h3>
              <p>Expert execution with regular progress updates and quality checkpoints.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <h3>Handover</h3>
              <p>Final inspection, documentation, and warranty-backed project delivery.</p>
            </div>
          </div>
        </section>

        {/* Testimonials — generic demos only; never fabricate reviews for a real business */}
        {isGeneric && (
        <section id="testimonials" className={styles.section} style={{ background: '#f4f4f5' }}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>Client Feedback</span>
            <h2>What They Say</h2>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>&ldquo;They completed our office renovation ahead of schedule and under budget. The communication from the project manager was excellent throughout.&rdquo;</p>
              <strong>— James Peterson, TechCorp</strong>
            </div>
            <div className={styles.testimonialCard}>
              <p>&ldquo;Building a custom home is stressful, but {businessName} made it an incredible experience. The attention to detail is unmatched.&rdquo;</p>
              <strong>— Mary & John Collins</strong>
            </div>
            <div className={styles.testimonialCard}>
              <p>&ldquo;We hire them for all our commercial retail build-outs. They understand our brand standards and always deliver a flawless product.&rdquo;</p>
              <strong>— Sarah Lewis, Retail Group Inc.</strong>
            </div>
          </div>
        </section>
        )}

        {/* CTA + Contact — honest panel; no dead form, no invented details */}
        <section id="contact" className={styles.ctaSection}>
          <h2>Ready to Break Ground?</h2>
          <p>Contact {businessName} today for a free consultation and project estimation.</p>
          <div className={styles.ctaForm}>
            {demo?.bookingUrl && (
              <a
                href={demo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
                style={{ textDecoration: 'none', textAlign: 'center' }}
              >
                Request a Quote
              </a>
            )}
            {demo?.phone && tel && (
              <a href={tel} className={styles.ctaBtn} style={{ textDecoration: 'none', textAlign: 'center' }}>
                Call {demo.phone}
              </a>
            )}
            {demo?.email && (
              <a href={`mailto:${demo.email}`} className={styles.ctaBtn} style={{ textDecoration: 'none', textAlign: 'center' }}>
                Email Us
              </a>
            )}
            {!demo?.bookingUrl && !demo?.phone && !demo?.email && (
              <p style={{ color: 'white' }}>
                This concept shows a possible layout. No request is submitted from this preview.
              </p>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo} style={{ color: 'white' }}>{businessName}</div>
          {demo?.address && <p className={styles.footerAddress}>📍 {demo.address}</p>}
          {demo?.phone && <p className={styles.footerAddress}>📞 {demo.phone}</p>}
          {isGeneric && <p className={styles.footerAddress}>📍 456 Industrial Blvd, Builders Park</p>}
          <div className={styles.footerLinks}>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <p className={styles.credit}>
            Designed and Developed by <a href="https://www.cit.org.in" target="_blank" rel="noopener noreferrer">Centre for Information Technology</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConstructionTemplate2;
