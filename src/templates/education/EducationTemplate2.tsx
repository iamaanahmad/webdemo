import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Education2.module.css';

const EducationTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <span className={styles.crest}>🏛️</span>
            {businessName}
          </div>
          <nav className={styles.nav}>
            <a href="#about">Institution</a>
            <a href="#faculties">Faculties</a>
            <a href="#research">Research</a>
            <a href="#admissions">Admissions</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Prestige Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Tradition Meets Innovation.</h1>
            <p>A prestigious academic institution dedicated to advancing knowledge and shaping future global leaders.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Apply for Fall 2026</button>
              <button className={styles.btnOutline}>Academic Catalog</button>
            </div>
          </div>
        </section>

        {/* Faculties Section */}
        <section id="faculties" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Faculties</h2>
            <div className={styles.divider}></div>
            <p>World-class academic departments led by renowned scholars and industry experts.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔬</div>
              <h3>Sciences & Engineering</h3>
              <p>Cutting-edge laboratories and research facilities fostering technological breakthroughs.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚖️</div>
              <h3>Law & Public Policy</h3>
              <p>Developing the next generation of legal minds and public servants.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💼</div>
              <h3>Business & Economics</h3>
              <p>Strategic thinking and leadership training for the modern global economy.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎨</div>
              <h3>Arts & Humanities</h3>
              <p>Exploring the depths of human culture, history, and creative expression.</p>
            </div>
          </div>
        </section>

        {/* Statistics Banner */}
        <section className={styles.statsBanner}>
          <div className={styles.statItem}>
            <h3>1895</h3>
            <p>Year Established</p>
          </div>
          <div className={styles.statItem}>
            <h3>45k+</h3>
            <p>Global Alumni Network</p>
          </div>
          <div className={styles.statItem}>
            <h3>120</h3>
            <p>Degree Programs</p>
          </div>
          <div className={styles.statItem}>
            <h3>Top 50</h3>
            <p>National Ranking</p>
          </div>
        </section>

        {/* Newsletter/Contact */}
        <section className={styles.contactSection}>
          <div className={styles.contactContent}>
            <h2>Request Information</h2>
            <p>Sign up to receive our prospectus and updates about campus events.</p>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email Address" className={styles.input} />
              <button className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Subscribe</button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>{businessName}</div>
            <p>Central Campus</p>
            <p>University Avenue, State 12345</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <a href="#">Library</a>
            <a href="#">Alumni Association</a>
            <a href="#">Directory</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <a href="#">Title IX</a>
            <a href="#">Accessibility</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p className={styles.credit}>
            Designed and Developed by <a href="https://www.cit.org.in" target="_blank" rel="noopener noreferrer">Centre for Information Technology</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EducationTemplate2;
