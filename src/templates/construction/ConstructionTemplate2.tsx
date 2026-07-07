import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Construction2.module.css';

const ConstructionTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.contactBar}>
            <span>📞 (555) 987-6543</span>
            <span>✉️ info@{businessName.replace(/\s+/g, '').toLowerCase()}.com</span>
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
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#testimonials">Reviews</a>
            <a href="#contact" className={styles.navCta}>Get Quote</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Solid Foundations. <br/> Exceptional Builds.</h1>
            <p>From commercial high-rises to residential developments, {businessName} delivers unmatched quality, precision, and on-time project delivery.</p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Start Your Project</button>
              <button className={styles.btnOutline}>View Portfolio</button>
            </div>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statBox}>
              <h3>15+</h3>
              <p>Years Experience</p>
            </div>
            <div className={styles.statBox}>
              <h3>200+</h3>
              <p>Projects Completed</p>
            </div>
            <div className={styles.statBox}>
              <h3>100%</h3>
              <p>Safety Record</p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.tag}>What We Do</span>
            <h2>Core Services</h2>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceBox}>
              <div className={styles.serviceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80')" }}></div>
              <div className={styles.serviceContent}>
                <h3>Commercial Build-Outs</h3>
                <p>Retail spaces, office buildings, and industrial facilities built to exact specifications and timelines.</p>
                <a href="#contact" className={styles.serviceLink}>Learn More →</a>
              </div>
            </div>
            <div className={styles.serviceBox}>
              <div className={styles.serviceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80')" }}></div>
              <div className={styles.serviceContent}>
                <h3>Residential Construction</h3>
                <p>Custom homes, villas, and large-scale residential developments with premium finishes.</p>
                <a href="#contact" className={styles.serviceLink}>Learn More →</a>
              </div>
            </div>
            <div className={styles.serviceBox}>
              <div className={styles.serviceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80')" }}></div>
              <div className={styles.serviceContent}>
                <h3>Heavy Civil & Infrastructure</h3>
                <p>Roads, bridges, earthmoving, and large-scale infrastructure projects.</p>
                <a href="#contact" className={styles.serviceLink}>Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Gallery */}
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

        {/* Testimonials */}
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

        {/* CTA + Contact */}
        <section id="contact" className={styles.ctaSection}>
          <h2>Ready to Break Ground?</h2>
          <p>Contact {businessName} today for a free consultation and project estimation.</p>
          <div className={styles.ctaForm}>
            <input type="text" placeholder="Your Name / Company" className={styles.ctaInput} />
            <input type="tel" placeholder="Phone Number" className={styles.ctaInput} />
            <input type="email" placeholder="Email Address" className={styles.ctaInput} />
            <button className={styles.ctaBtn}>Submit Request</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo} style={{ color: 'white' }}>{businessName}</div>
          <p className={styles.footerAddress}>456 Industrial Blvd, Builders Park</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Careers</a>
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
