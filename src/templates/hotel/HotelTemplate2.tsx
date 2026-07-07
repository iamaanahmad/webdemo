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
          <a href="#reviews">Reviews</a>
          <a href="#location">Neighborhood</a>
          <a href="#book" className={styles.btnOutline}>Check Dates</a>
        </nav>
      </header>

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Boutique Hotel & Lifestyle</span>
            <h1>Intimate. Curated. Unique.</h1>
            <p>A boutique hotel experience in the heart of the cultural district. Where local charm meets modern comfort and every detail tells a story.</p>
            <div className={styles.heroButtons}>
              <button className={styles.btnDark}>Book Your Stay</button>
            </div>
          </div>
          <div className={styles.heroImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=800&auto=format&fit=crop')" }}></div>
        </section>

        {/* Vibe / About */}
        <section className={styles.vibeSection}>
          <div className={styles.vibeGrid}>
            <div className={styles.vibeText}>
              <h2>Not Just a Room. <br/> A Lifestyle.</h2>
              <p>Every corner of {businessName} is designed to inspire. From locally roasted coffee in the lobby to custom-designed furniture in every suite, we&apos;ve curated an environment that feels both luxurious and entirely like home.</p>
              <p>Our 28-room property is intentionally intimate — because we believe great hospitality is personal.</p>
              <a href="#rooms" className={styles.link}>View Rooms →</a>
            </div>
            <div className={styles.vibeImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522771731470-a300fe7475f8?q=80&w=800&auto=format&fit=crop')" }}></div>
          </div>
        </section>

        {/* Rooms */}
        <section id="rooms" className={styles.roomsSection}>
          <div className={styles.sectionHeader}>
            <h2>Signature Rooms</h2>
            <p>Each room is uniquely designed with local art and premium amenities.</p>
          </div>
          <div className={styles.roomsGrid}>
            <div className={styles.roomCard}>
              <div className={styles.roomImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop')" }}></div>
              <div className={styles.roomInfo}>
                <h3>The Studio</h3>
                <p>Perfect for solo travelers or couples. Features a king bed, rain shower, and curated minibar.</p>
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
                <p>Spacious open-plan living with panoramic city views, freestanding tub, and private terrace.</p>
                <div className={styles.roomFooter}>
                  <span>From $349/night</span>
                  <a href="#">Details</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experiences / Amenities */}
        <section id="experiences" className={styles.experiencesSection}>
          <div className={styles.sectionHeader}>
            <h2>Curated Experiences</h2>
            <p>More than a stay — it&apos;s a lifestyle.</p>
          </div>
          <div className={styles.experiencesGrid}>
            <div className={styles.expCard}>
              <span className={styles.expIcon}>☕</span>
              <h3>Rooftop Coffee Bar</h3>
              <p>Start your morning with single-origin pour-overs and city views.</p>
            </div>
            <div className={styles.expCard}>
              <span className={styles.expIcon}>🧘</span>
              <h3>Morning Yoga</h3>
              <p>Complimentary sunrise yoga sessions on the terrace.</p>
            </div>
            <div className={styles.expCard}>
              <span className={styles.expIcon}>🎨</span>
              <h3>Art Walks</h3>
              <p>Guided tours of the neighborhood&apos;s best galleries and studios.</p>
            </div>
            <div className={styles.expCard}>
              <span className={styles.expIcon}>🍷</span>
              <h3>Wine & Cheese</h3>
              <p>Evening social hour with curated local wines and artisan cheeses.</p>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className={styles.reviewsSection}>
          <div className={styles.sectionHeader}>
            <h2>Guest Stories</h2>
            <p>Rated 4.9/5 on TripAdvisor</p>
          </div>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <p>&ldquo;This hotel is a hidden gem. The attention to detail is extraordinary — from the hand-written welcome note to the locally curated minibar. We didn&apos;t want to leave.&rdquo;</p>
              <strong>— Sarah & James, London</strong>
            </div>
            <div className={styles.reviewCard}>
              <p>&ldquo;The rooftop coffee bar alone is worth the stay. Add in the incredible rooms and the neighborhood location, and you have perfection.&rdquo;</p>
              <strong>— Marco T., New York</strong>
            </div>
            <div className={styles.reviewCard}>
              <p>&ldquo;Finally a hotel that feels like it was designed by someone who actually travels. Every detail is thoughtful. Already booked my next stay.&rdquo;</p>
              <strong>— Aisha K., Dubai</strong>
            </div>
          </div>
        </section>

        {/* Neighborhood */}
        <section id="location" className={styles.locationSection}>
          <div className={styles.locationContent}>
            <h2>Live Like a Local</h2>
            <p>Step outside and you&apos;re immediately immersed in the city&apos;s best cafes, galleries, and boutiques. Ask our concierge for the hidden gems you won&apos;t find in a guidebook.</p>
            <div className={styles.tags}>
              <span className={styles.tag}>Art Galleries</span>
              <span className={styles.tag}>Craft Cocktails</span>
              <span className={styles.tag}>Vintage Shopping</span>
              <span className={styles.tag}>Live Music</span>
              <span className={styles.tag}>Farm-to-Table Dining</span>
            </div>
          </div>
        </section>

        {/* Booking CTA */}
        <section id="book" className={styles.bookingSection}>
          <div className={styles.bookingContent}>
            <h2>Plan Your Stay</h2>
            <p>Check availability and book directly for the best rates and complimentary upgrades.</p>
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
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                </select>
              </div>
              <button className={styles.btnDark} style={{ alignSelf: 'flex-end' }}>Check Availability</button>
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
            <p>100 Creative Way, Arts District</p>
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
