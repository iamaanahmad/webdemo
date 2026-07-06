import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Hotel2.module.css';

const HotelTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#rooms">Rooms</a>
          <a href="#experiences">Experiences</a>
          <a href="#location">Neighborhood</a>
          <a href="#book" className={styles.btnOutline}>Check Dates</a>
        </nav>
      </header>

      <main>
        {/* Boutique Hotel Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Intimate. Curated. Unique.</h1>
            <p>A boutique hotel experience in the heart of the cultural district. Where local charm meets modern comfort.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary" style={{ background: 'var(--text-primary)', color: 'white' }}>Book Your Stay</button>
            </div>
          </div>
          <div className={styles.heroImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop')" }}></div>
        </section>

        {/* Features/Vibe Section */}
        <section className={styles.vibeSection}>
          <div className={styles.vibeGrid}>
            <div className={styles.vibeText}>
              <h2>Not Just a Room. <br/> A Lifestyle.</h2>
              <p>Every corner of {businessName} is designed to inspire. From locally roasted coffee in the lobby to custom-designed furniture in every suite, we've curated an environment that feels both luxurious and entirely like home.</p>
              <a href="#rooms" className={styles.link}>View Rooms &rarr;</a>
            </div>
            <div className={styles.vibeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522771731470-a300fe7475f8?q=80&w=800&auto=format&fit=crop')" }}></div>
          </div>
        </section>

        {/* Rooms Showcase */}
        <section id="rooms" className={styles.roomsSection}>
          <div className={styles.sectionHeader}>
            <h2>Signature Rooms</h2>
          </div>
          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              <div className={styles.roomImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className={styles.roomInfo}>
                <h3>The Studio</h3>
                <p>Perfect for solo travelers or couples. Features a king bed and rain shower.</p>
                <div className={styles.roomFooter}>
                  <span>From $199/night</span>
                  <a href="#">Details</a>
                </div>
              </div>
            </div>
            <div className={styles.roomCard}>
              <div className={styles.roomImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className={styles.roomInfo}>
                <h3>The Loft Suite</h3>
                <p>Spacious open-plan living with panoramic city views and a freestanding tub.</p>
                <div className={styles.roomFooter}>
                  <span>From $349/night</span>
                  <a href="#">Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhood Guide */}
        <section id="location" className={styles.locationSection}>
          <div className={styles.locationContent}>
            <h2>Live Like a Local</h2>
            <p>Step outside and you're immediately immersed in the city's best cafes, galleries, and boutiques. Ask our concierge for the hidden gems you won't find in a guidebook.</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Art Galleries</span>
              <span className={styles.tag}>Craft Cocktails</span>
              <span className={styles.tag}>Vintage Shopping</span>
              <span className={styles.tag}>Live Music</span>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h2>{businessName}</h2>
            <p>The Boutique Experience</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            <p>100 Creative Way</p>
            <p>hello@{businessName.replace(/\s+/g, '').toLowerCase()}.com</p>
            <p>(555) 789-0123</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Social</h4>
            <a href="#">Instagram</a>
            <a href="#">Spotify Playlists</a>
            <a href="#">Journal</a>
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

export default HotelTemplate2;
