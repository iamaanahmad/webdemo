import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Salon2.module.css';

const SalonTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      {/* Minimal Top Bar */}
      <div className={styles.topBar}>
        <p>Book your appointment today: (555) 123-4567 | Open Mon-Sat 9am-8pm</p>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact" className={styles.outlineBtn}>Book Now</a>
        </nav>
      </header>

      <main>
        {/* Full Screen Image Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.subtitle}>Premium Salon Services</span>
              <h1>Discover Your True Beauty.</h1>
              <p>Experience luxury styling and spa treatments in the heart of the city.</p>
              <button className="btn-primary" style={{ background: 'white', color: 'black' }}>View Our Menu</button>
            </div>
          </div>
        </section>

        {/* Elegant Services Grid */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>What We Offer</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceItem}>
              <img src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&q=80" alt="Hair Styling" className={styles.serviceImg} />
              <div className={styles.serviceText}>
                <h3>Precision Haircuts</h3>
                <p>Tailored cuts designed for your face shape and lifestyle.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=500&q=80" alt="Coloring" className={styles.serviceImg} />
              <div className={styles.serviceText}>
                <h3>Master Coloring</h3>
                <p>From balayage to vivid colors, our experts bring your vision to life.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80" alt="Spa" className={styles.serviceImg} />
              <div className={styles.serviceText}>
                <h3>Rejuvenating Spa</h3>
                <p>Relax with our signature facials and deep tissue massages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quote Banner */}
        <section className={styles.quoteBanner}>
          <h3>"The best investment you can make is in yourself."</h3>
          <p>- {businessName} Philosophy</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>{businessName}</h2>
          <p>123 Luxury Lane, Style District</p>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
          <p className={styles.credit}>
            Designed and Developed by <a href="https://www.cit.org.in" target="_blank" rel="noopener noreferrer">Centre for Information Technology</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SalonTemplate2;
