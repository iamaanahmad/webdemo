import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Education.module.css';

const EducationTemplate: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <span>Admissions Open for 2026-2027 Academic Year! Apply Now.</span>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🎓</span>
          {businessName}
        </div>
        <nav className={styles.nav}>
          <a href="#about">About Us</a>
          <a href="#academics">Academics</a>
          <a href="#admissions">Admissions</a>
          <a href="#contact" className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Apply Now</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <h1>Empowering the Next Generation of Leaders.</h1>
              <p>Welcome to {businessName}, where academic excellence meets holistic development in a nurturing environment.</p>
              <div className={styles.heroButtons}>
                <button className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Explore Programs</button>
                <button className={styles.btnSecondary}>Virtual Tour</button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <h3>100%</h3>
              <p>College Acceptance Rate</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>15:1</h3>
              <p>Student-to-Teacher Ratio</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>50+</h3>
              <p>Extracurricular Activities</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="academics" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Educational Programs</h2>
            <p>Comprehensive curriculum tailored for every stage of development.</p>
          </div>
          <div className={styles.programsGrid}>
            <div className={styles.programCard}>
              <div className={styles.programImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80')" }}></div>
              <div className={styles.programContent}>
                <h3>Primary Education</h3>
                <p>Building a strong foundation in literacy, numeracy, and social skills through interactive learning.</p>
              </div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80')" }}></div>
              <div className={styles.programContent}>
                <h3>Middle School</h3>
                <p>Fostering critical thinking, independence, and exploration across diverse academic subjects.</p>
              </div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80')" }}></div>
              <div className={styles.programContent}>
                <h3>High School</h3>
                <p>Advanced placement courses, college prep, and specialized career pathways for future success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <h2>Join the {businessName} Family</h2>
          <p>Schedule a campus visit or start your application today.</p>
          <div className={styles.ctaButtons}>
            <button className="btn-primary" style={{ background: 'white', color: 'var(--primary-color)' }}>Start Application</button>
            <button className={styles.btnSecondary} style={{ borderColor: 'white', color: 'white' }}>Contact Admissions</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>{businessName}</div>
            <p>123 Education Blvd, Knowledge City</p>
            <p>info@{businessName.replace(/\s+/g, '').toLowerCase()}.edu</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Parent Portal</a>
            <a href="#">Student Portal</a>
            <a href="#">Careers</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
        <div className={styles.creditArea}>
          <p className={styles.credit}>
            Designed and Developed by <a href="https://www.cit.org.in" target="_blank" rel="noopener noreferrer">Centre for Information Technology</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EducationTemplate;
