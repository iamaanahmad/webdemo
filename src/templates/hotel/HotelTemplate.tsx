import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Hotel.module.css';

const HotelTemplate: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#accommodations">Accommodations</a>
          <a href="#amenities">Amenities</a>
          <a href="#dining">Dining</a>
          <a href="#book" className={styles.btnOutline}>Book Now</a>
        </nav>
      </header>

      <main>
        {/* Luxury Resort Hero */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.stars}>★★★★★</span>
              <h1>Escape to Paradise.</h1>
              <p>Experience unparalleled luxury and breathtaking views at our exclusive resort.</p>
              <button className="btn-primary" style={{ background: 'var(--accent-color)', color: 'var(--primary-color)' }}>Check Availability</button>
            </div>
          </div>
        </section>

        {/* Accommodations */}
        <section id="accommodations" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Luxurious Stays</h2>
            <div className={styles.divider}></div>
            <p>Elegantly appointed suites designed for your ultimate comfort.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop')" }}></div>
              <div className={styles.cardContent}>
                <h3>Ocean View Suite</h3>
                <p>Spacious 800 sq ft suite with a private balcony overlooking the ocean.</p>
                <a href="#" className={styles.link}>Explore Suite &rarr;</a>
              </div>
            </div>
            <div className={styles.card}>
              <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop')" }}></div>
              <div className={styles.cardContent}>
                <h3>Presidential Villa</h3>
                <p>Ultimate privacy with a private infinity pool and dedicated butler service.</p>
                <a href="#" className={styles.link}>Explore Villa &rarr;</a>
              </div>
            </div>
          </div>
        </section>

        {/* Amenities Banner */}
        <section id="amenities" className={styles.amenitiesSection}>
          <div className={styles.amenitiesOverlay}>
            <h2>World-Class Amenities</h2>
            <div className={styles.amenitiesGrid}>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>💆‍♀️</span>
                <h4>Award-Winning Spa</h4>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>🏊‍♂️</span>
                <h4>Infinity Pools</h4>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>🎾</span>
                <h4>Tennis Courts</h4>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon}>⛳</span>
                <h4>Golf Course</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section id="book" className={styles.bookingSection}>
          <div className={styles.bookingContainer}>
            <h2>Plan Your Stay</h2>
            <div className={styles.bookingForm}>
              <div className={styles.formGroup}>
                <label>Check In</label>
                <input type="date" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Check Out</label>
                <input type="date" className={styles.input} />
              </div>
              <div className={styles.formGroup}>
                <label>Guests</label>
                <select className={styles.input} defaultValue="2">
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                </select>
              </div>
              <div className={styles.formGroup} style={{ justifyContent: 'flex-end', display: 'flex', flexDirection: 'column' }}>
                <button className="btn-primary" style={{ background: 'var(--text-primary)', color: 'white', padding: '1rem' }}>Search</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <h2>{businessName}</h2>
            <p>1 Resort Drive, Paradise Island</p>
            <p>reservations@{businessName.replace(/\s+/g, '').toLowerCase()}.com</p>
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Resort</h4>
              <a href="#">About Us</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            <div>
              <h4>Legal</h4>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
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

export default HotelTemplate;
