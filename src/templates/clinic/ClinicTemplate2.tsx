import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Clinic2.module.css';

const ClinicTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>✚</span>
          {businessName}
        </div>
        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact" className="btn-primary" style={{ background: 'var(--primary-color)' }}>Patient Portal</a>
        </nav>
      </header>

      <main>
        {/* Modern Split Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Modern Healthcare, Delivered With Compassion.</h1>
            <p>Welcome to {businessName}. We blend advanced medical technology with a personalized approach to ensure you receive the best care possible.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" style={{ background: 'var(--primary-color)' }}>Schedule Visit</button>
              <button className={styles.btnSecondary}>Our Specialists</button>
            </div>
          </div>
          <div className={styles.heroImage}></div>
        </section>

        {/* Minimalist Services Section */}
        <section id="services" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Our Departments</h2>
            <p>Specialized care tailored to your specific needs.</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚕️</div>
              <h3>Internal Medicine</h3>
              <p>Comprehensive adult care focusing on the prevention, diagnosis, and treatment of severe diseases.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>❤️</div>
              <h3>Cardiology</h3>
              <p>Advanced cardiovascular screening and treatment by our top-rated heart specialists.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🧠</div>
              <h3>Neurology</h3>
              <p>Cutting-edge diagnostics and therapies for neurological conditions and disorders.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🦴</div>
              <h3>Orthopedics</h3>
              <p>Expert care for bones, joints, ligaments, tendons, and muscles to keep you moving.</p>
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className={styles.section}>
          <div className={styles.contactBanner}>
            <h2>Ready to prioritize your health?</h2>
            <p>Our team is currently accepting new patients. Book your consultation today.</p>
            <button className="btn-primary" style={{ background: 'white', color: 'var(--text-primary)' }}>Book Appointment Online</button>
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

export default ClinicTemplate2;
