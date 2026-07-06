import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Restaurant.module.css';

const RestaurantTemplate: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#menu">Menu</a>
          <a href="#experience">Experience</a>
          <a href="#reservations" className={styles.btnOutline}>Reserve a Table</a>
        </nav>
      </header>

      <main>
        {/* Fine Dining Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.subtitle}>An Exquisite Culinary Journey</span>
              <h1>Elevating the Art of Dining.</h1>
              <div className={styles.heroButtons}>
                <button className="btn-primary" style={{ background: 'var(--accent-color)', color: 'var(--text-primary)' }}>Book Reservation</button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h2>A Symphony of Flavors</h2>
            <div className={styles.divider}></div>
            <p>At {businessName}, we source the finest seasonal ingredients to craft innovative dishes that honor culinary traditions while pushing boundaries. Experience unparalleled service in our elegantly appointed dining room.</p>
          </div>
          <div className={styles.introImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop')" }}></div>
        </section>

        {/* Featured Menu */}
        <section id="menu" className={styles.menuSection}>
          <div className={styles.sectionHeader}>
            <h2>Tasting Menu</h2>
            <div className={styles.divider}></div>
          </div>
          
          <div className={styles.menuGrid}>
            <div className={styles.menuColumn}>
              <h3>First Course</h3>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Wagyu Tartare</h4>
                  <span>$32</span>
                </div>
                <p>Quail egg, black truffle, toasted brioche</p>
              </div>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Seared Scallops</h4>
                  <span>$28</span>
                </div>
                <p>Cauliflower purée, brown butter, capers</p>
              </div>
            </div>
            
            <div className={styles.menuColumn}>
              <h3>Main Course</h3>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Duck Breast</h4>
                  <span>$48</span>
                </div>
                <p>Cherry gastrique, parsnip, wild mushrooms</p>
              </div>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Chilean Sea Bass</h4>
                  <span>$52</span>
                </div>
                <p>Saffron risotto, asparagus, beurre blanc</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <button className={styles.btnOutline}>View Full Menu</button>
          </div>
        </section>

        {/* Reservations Info */}
        <section id="reservations" className={styles.reservationSection}>
          <div className={styles.resContainer}>
            <h2>Make a Reservation</h2>
            <p>Join us for an unforgettable evening. Reservations are highly recommended.</p>
            <div className={styles.resForm}>
              <select className={styles.input} defaultValue="2">
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
              <input type="date" className={styles.input} />
              <input type="time" className={styles.input} />
              <button className="btn-primary" style={{ background: 'var(--accent-color)', color: 'var(--text-primary)' }}>Find Table</button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <h2>{businessName}</h2>
            <p>123 Culinary Way, Gourmet District</p>
            <p>(555) 019-8765</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Hours</h4>
            <p>Mon - Thu: 5pm - 10pm</p>
            <p>Fri - Sat: 5pm - 11pm</p>
            <p>Sunday: Closed</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Follow Us</h4>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
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

export default RestaurantTemplate;
