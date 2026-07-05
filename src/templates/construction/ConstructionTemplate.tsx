import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Construction.module.css';

const ConstructionTemplate: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#team">Team</a>
          <a href="#projects">Projects</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className="btn-primary" style={{ background: 'var(--primary-color)', color: 'black' }}>Get a Quote</a>
        </nav>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Building the Future with {businessName}</h1>
            <p>Reliable, high-quality construction services for residential and commercial projects. We turn your vision into reality.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" style={{ background: 'var(--primary-color)', color: 'black' }}>View Our Work</button>
              <button className={styles.btnSecondary}>Request a Quote</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Expertise</h2>
            <p>From foundation to finish, we deliver excellence.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🏗️</div>
              <h3>Commercial Construction</h3>
              <p>Office buildings, retail spaces, and industrial facilities built to exact specifications.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🏠</div>
              <h3>Residential Build</h3>
              <p>Custom homes, multi-family units, and large-scale residential developments.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔨</div>
              <h3>Renovation & Remodeling</h3>
              <p>Breathing new life into existing structures with modern upgrades.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Why Build With Us?</h2>
            <p>Quality craftsmanship you can count on.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🛡️</div>
              <div>
                <h3>Licensed & Insured</h3>
                <p>Fully compliant with all state and local building codes for your peace of mind.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>📅</div>
              <div>
                <h3>On-Time Delivery</h3>
                <p>We stick to our schedule and communicate progress every step of the way.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>💎</div>
              <div>
                <h3>Quality Materials</h3>
                <p>We source only the best materials to ensure structural integrity and longevity.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>👷</div>
              <div>
                <h3>Expert Workforce</h3>
                <p>Our team consists of highly skilled tradesmen and project managers.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
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

        {/* Projects Section (Image Grid) */}
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

        {/* Testimonials */}
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

        {/* Contact/Quote Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfo}>
              <h2>Ready to Start Building?</h2>
              <p>Contact our team of experts today for a free consultation and project estimate.</p>
              <ul className={styles.contactList}>
                <li>📍 400 Industrial Parkway, Builder's Zone</li>
                <li>📞 +1 (555) 321-7654</li>
                <li>✉️ estimates@{businessName.replace(/\s+/g, '').toLowerCase()}.com</li>
              </ul>
            </div>
            <div className={styles.contactForm}>
              <input type="text" placeholder="Your Name or Company" className={styles.input} />
              <input type="email" placeholder="Email Address" className={styles.input} />
              <input type="tel" placeholder="Phone Number" className={styles.input} />
              <textarea placeholder="Project Details & Scope" className={styles.input} rows={4}></textarea>
              <button className="btn-primary" style={{ width: '100%', background: 'var(--primary-color)', color: 'black' }}>Submit Request</button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>&copy; {new Date().getFullYear()} {businessName} Construction Group. All rights reserved.</p>
          <p className={styles.credit}>
            Designed and Developed by <a href="https://www.cit.org.in" target="_blank" rel="noopener noreferrer">Centre for Information Technology</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ConstructionTemplate;
