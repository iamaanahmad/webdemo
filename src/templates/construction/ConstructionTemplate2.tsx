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
            <a href="#services">Our Services</a>
            <a href="#projects">Recent Projects</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Get Quote</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Split Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Solid Foundations. <br/> Exceptional Builds.</h1>
            <p>From commercial high-rises to residential developments, {businessName} delivers unmatched quality and precision.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Start Your Project</button>
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

        {/* Industrial Services Section */}
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
                <p>Retail spaces, office buildings, and industrial facilities.</p>
                <a href="#contact" className={styles.serviceLink}>Learn More →</a>
              </div>
            </div>
            <div className={styles.serviceBox}>
              <div className={styles.serviceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80')" }}></div>
              <div className={styles.serviceContent}>
                <h3>Residential Construction</h3>
                <p>Custom homes and large scale residential developments.</p>
                <a href="#contact" className={styles.serviceLink}>Learn More →</a>
              </div>
            </div>
            <div className={styles.serviceBox}>
              <div className={styles.serviceImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&q=80')" }}></div>
              <div className={styles.serviceContent}>
                <h3>Heavy Civil</h3>
                <p>Infrastructure, roadworks, and large-scale earthmoving.</p>
                <a href="#contact" className={styles.serviceLink}>Learn More →</a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <h2>Ready to Break Ground?</h2>
          <p>Contact {businessName} today to schedule a site walkthrough and project estimation.</p>
          <button className="btn-primary" style={{ background: 'white', color: 'var(--primary-color)' }}>Contact Us Now</button>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.logo} style={{ color: 'white' }}>{businessName}</div>
          <p className={styles.footerAddress}>456 Industrial Blvd, Builders Park</p>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
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
