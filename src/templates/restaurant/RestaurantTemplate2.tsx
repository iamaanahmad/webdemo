import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Restaurant2.module.css';

const RestaurantTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#menu">Our Menu</a>
          <a href="#about">Our Story</a>
          <a href="#location">Find Us</a>
          <a href="#order" className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Order Online</a>
        </nav>
      </header>

      <main>
        {/* Casual/Cafe Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Fresh. Local. Delicious.</h1>
            <p>Your neighborhood spot for artisanal coffee, fresh pastries, and wholesome meals made from scratch daily.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>View Menu</button>
            </div>
          </div>
          <div className={styles.heroImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=800&auto=format&fit=crop')" }}></div>
        </section>

        {/* Features Grid */}
        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>☕</span>
              <h3>Artisanal Coffee</h3>
              <p>Ethically sourced beans roasted to perfection.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🥐</span>
              <h3>Fresh Pastries</h3>
              <p>Baked in-house every morning.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon}>🥗</span>
              <h3>Healthy Eats</h3>
              <p>Nourishing bowls, salads, and sandwiches.</p>
            </div>
          </div>
        </section>

        {/* Highlights/Menu preview */}
        <section id="menu" className={styles.menuPreviewSection}>
          <div className={styles.sectionHeader}>
            <h2>Customer Favorites</h2>
            <p>A taste of what we have to offer.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=500&auto=format&fit=crop')" }}></div>
              <div className={styles.cardContent}>
                <h3>Avocado Toast</h3>
                <p>Sourdough, smashed avocado, radish, microgreens, poached egg.</p>
                <span className={styles.price}>$12</span>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=500&auto=format&fit=crop')" }}></div>
              <div className={styles.cardContent}>
                <h3>Acai Bowl</h3>
                <p>Blended acai, house granola, fresh berries, coconut flakes.</p>
                <span className={styles.price}>$10</span>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500&auto=format&fit=crop')" }}></div>
              <div className={styles.cardContent}>
                <h3>House Latte</h3>
                <p>Espresso, steamed milk, house-made vanilla bean syrup.</p>
                <span className={styles.price}>$5</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className="btn-primary" style={{ background: 'var(--text-primary)', color: 'white' }}>See Full Menu</button>
          </div>
        </section>

        {/* Call to Action */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Skip the Line</h2>
            <p>Order ahead online and pick up at the counter.</p>
            <button className="btn-primary" style={{ background: 'var(--primary-color)', color: 'white' }}>Start Order</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h2>{businessName}</h2>
            <p>Your daily dose of happiness.</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Visit Us</h4>
              <p>456 Cafe Lane</p>
              <p>Sunnyvale, CA</p>
            </div>
            <div>
              <h4>Hours</h4>
              <p>Mon - Fri: 7am - 4pm</p>
              <p>Sat - Sun: 8am - 5pm</p>
            </div>
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

export default RestaurantTemplate2;
