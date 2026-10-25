import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import styles from './Construction.module.css';

const ConstructionTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  // Placeholder sections (team, projects, reviews, marketing claims) are only
  // honest on generic demos. When a real business's data is present they must
  // not render fabricated staff, projects, reviews or claims in its name.
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          {isGeneric && <a href="#why-us">Why Us</a>}
          {isGeneric && <a href="#team">Team</a>}
          {isGeneric && <a href="#projects">Projects</a>}
          {isGeneric && <a href="#testimonials">Reviews</a>}
          <a href="#contact" className="btn-primary" style={{ background: 'var(--primary-color)', color: 'black' }}>Get a Quote</a>
        </nav>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="construction"
          layout="banner"
          display="sans"
          accent="#d97706"
        />

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>Everything {businessName} offers, all in one place.</p>
          </div>
          <div className={styles.grid}>
            {demo?.services && demo.services.length > 0 ? (
              demo.services.map((service, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    <ServiceMark industry="construction" size={30} />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))
            ) : isGeneric ? (
              <>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="construction" size={30} />
              </div>
              <h3>Commercial Construction</h3>
              <p>Office buildings, retail spaces, and industrial facilities built to exact specifications.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="construction" size={30} />
              </div>
              <h3>Residential Build</h3>
              <p>Custom homes, multi-family units, and large-scale residential developments.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="construction" size={30} />
              </div>
              <h3>Renovation & Remodeling</h3>
              <p>Breathing new life into existing structures with modern upgrades.</p>
            </div>
              </>
            ) : (
              <p style={{ textAlign: 'center' }}>
                A personalized service menu can be added here after the business confirms its details.
              </p>
            )}
          </div>
        </section>

        <DemoGallery demo={demo} title="Gallery" />

        {/* Why Choose Us Section — generic marketing claims only; never
            attribute unverified claims to a real business. */}
        {isGeneric && (
        <section id="why-us" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Why Build With Us?</h2>
            <p>Quality craftsmanship you can count on.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="construction" size={30} />
              </div>
              <div>
                <h3>Licensed & Insured</h3>
                <p>Fully compliant with all state and local building codes for your peace of mind.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="construction" size={30} />
              </div>
              <div>
                <h3>On-Time Delivery</h3>
                <p>We stick to our schedule and communicate progress every step of the way.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="construction" size={30} />
              </div>
              <div>
                <h3>Quality Materials</h3>
                <p>We source only the best materials to ensure structural integrity and longevity.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="construction" size={30} />
              </div>
              <div>
                <h3>Expert Workforce</h3>
                <p>Our team consists of highly skilled tradesmen and project managers.</p>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Team Section — only on generic demos; never invent staff for a real business */}
        {isGeneric && (
        <section id="team" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Leadership</h2>
            <p>The professionals directing your projects.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?q=80&w=500&auto=format&fit=crop')" }}></div>
              <h3>Robert Henderson</h3>
              <p className={styles.teamRole}>Founder & CEO</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=500&auto=format&fit=crop')" }}></div>
              <h3>Mark Davis</h3>
              <p className={styles.teamRole}>Chief Site Engineer</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=500&auto=format&fit=crop')" }}></div>
              <h3>Lisa Wong</h3>
              <p className={styles.teamRole}>Head of Architecture</p>
            </div>
          </div>
        </section>
        )}

        {/* Projects Section — only on generic demos; never invent projects for a real business */}
        {isGeneric && (
        <section id="projects" className={`${styles.section} ${styles.bgDark}`}>
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'white' }}>Featured Projects</h2>
            <p style={{ color: '#a8a29e' }}>A showcase of our proudest achievements.</p>
          </div>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80')" }}></div>
              <div className={styles.projectInfo}>
                <h3>Skyline Commercial Tower</h3>
                <p>Downtown Financial District</p>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80')" }}></div>
              <div className={styles.projectInfo}>
                <h3>Oakwood Luxury Estates</h3>
                <p>Residential Development</p>
              </div>
            </div>
            <div className={styles.projectCard}>
              <div className={styles.projectImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?w=800&q=80')" }}></div>
              <div className={styles.projectInfo}>
                <h3>City Center Mall Renovation</h3>
                <p>Commercial Remodel</p>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Testimonials — only on generic demos; never invent reviews for a real business */}
        {isGeneric && (
        <section id="testimonials" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Client Testimonials</h2>
            <p>Hear from the people we've built for.</p>
          </div>
          <div className={styles.grid}>
             <div className={styles.testimonialCard}>
              <p className={styles.quote}>"They completed our office renovation ahead of schedule and under budget. The communication from the project manager was excellent throughout the entire process."</p>
              <h4 className={styles.author}>- James Peterson, TechCorp</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"Building a custom home is stressful, but {businessName} made it an incredible experience. The attention to detail and craftsmanship is unmatched."</p>
              <h4 className={styles.author}>- Mary & John Collins</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"We hire them for all our commercial retail build-outs. They understand our brand standards and always deliver a flawless final product."</p>
              <h4 className={styles.author}>- Sarah Lewis, Retail Group Inc.</h4>
            </div>
          </div>
        </section>
        )}

        {/* Contact/Quote Section — every line renders only from supplied
            data. No fabricated address or phone. */}
        <section id="contact" className={styles.section}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch with {businessName}</h2>
              <p>Have a question or ready to get started? Reach out today.</p>
              <ul className={styles.contactList}>
                {demo?.address && <li>📍 {demo.address}</li>}
                {demo?.phone && tel && (
                  <li>
                    📞 <a href={tel}>{demo.phone}</a>
                  </li>
                )}
                {demo?.email && (
                  <li>
                    ✉️ <a href={`mailto:${demo.email}`}>{demo.email}</a>
                  </li>
                )}
                {demo?.hours && <li>🕒 {demo.hours}</li>}
                {isGeneric && (
                  <>
                    <li>📍 400 Industrial Parkway, Builder&apos;s Zone</li>
                    <li>📞 +1 (555) 321-7654</li>
                  </>
                )}
              </ul>
            </div>
            <div className={styles.contactForm}>
              <h3>Your website, your style</h3>
              <p>
                This concept shows a possible layout. A finished website can include a confirmed
                service menu, the business&apos;s own project photos, and its existing quote route.
              </p>
              <p>No quote request is submitted from this preview.</p>
              {demo?.bookingUrl && (
                <a
                  href={demo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textAlign: 'center', textDecoration: 'none', background: 'var(--primary-color)', color: 'black' }}
                >
                  Request a Quote
                </a>
              )}
              {demo?.phone && tel && (
                <a href={tel} className="btn-primary" style={{ textAlign: 'center', textDecoration: 'none', background: 'var(--primary-color)', color: 'black' }}>
                  Call {demo.phone}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p className={styles.credit}>
            Designed and Developed by <a href="https://www.cit.org.in" target="_blank" rel="noopener noreferrer">Centre for Information Technology</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConstructionTemplate;
