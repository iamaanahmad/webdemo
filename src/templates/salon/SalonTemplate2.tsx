import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Salon2.module.css';

const SalonTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <p>Book your appointment today: (555) 123-4567 | Open Mon-Sat 9am-8pm</p>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#team">Artists</a>
          <a href="#pricing">Pricing</a>
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
              <p>Experience luxury styling and spa treatments in the heart of the city. Where artistry meets self-care.</p>
              <button className={styles.heroBtn}>View Our Menu</button>
            </div>
          </div>
        </section>

        {/* Services Grid */}
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
                <p>Tailored cuts designed for your face shape and lifestyle by master stylists.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <img src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=500&q=80" alt="Coloring" className={styles.serviceImg} />
              <div className={styles.serviceText}>
                <h3>Master Coloring</h3>
                <p>From balayage to vivid colors, our experts bring your vision to life with premium products.</p>
              </div>
            </div>
            <div className={styles.serviceItem}>
              <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=500&q=80" alt="Spa" className={styles.serviceImg} />
              <div className={styles.serviceText}>
                <h3>Rejuvenating Spa</h3>
                <p>Relax with our signature facials, body wraps, and deep tissue massages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About / Philosophy */}
        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80')" }}></div>
            <div className={styles.aboutContent}>
              <span className={styles.subtitle}>Our Philosophy</span>
              <h2>Beauty Is an Art Form.</h2>
              <p>At {businessName}, we believe that every person deserves to feel extraordinary. Our team of artists combines technical mastery with creative vision to deliver transformative experiences.</p>
              <p>We use only cruelty-free, premium products sourced from the world&apos;s finest brands, ensuring your hair and skin receive the care they deserve.</p>
              <div className={styles.aboutStats}>
                <div>
                  <strong>12+</strong>
                  <span>Years Experience</span>
                </div>
                <div>
                  <strong>8k+</strong>
                  <span>Happy Clients</span>
                </div>
                <div>
                  <strong>15</strong>
                  <span>Expert Artists</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Meet Our Artists</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=500&q=80')" }}></div>
              <h3>Jessica Taylor</h3>
              <p>Master Colorist</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&q=80')" }}></div>
              <h3>Alex Rivera</h3>
              <p>Senior Stylist</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&q=80')" }}></div>
              <h3>David Kim</h3>
              <p>Spa Therapist</p>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className={styles.pricingSection}>
          <div className={styles.sectionHeader}>
            <h2>Service Menu</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.pricingGrid}>
            <div className={styles.pricingCategory}>
              <h3>Hair Services</h3>
              <div className={styles.pricingItem}><span>Women&apos;s Haircut & Style</span><span>$65+</span></div>
              <div className={styles.pricingItem}><span>Men&apos;s Haircut</span><span>$45+</span></div>
              <div className={styles.pricingItem}><span>Full Color</span><span>$120+</span></div>
              <div className={styles.pricingItem}><span>Balayage / Highlights</span><span>$180+</span></div>
              <div className={styles.pricingItem}><span>Keratin Treatment</span><span>$250+</span></div>
            </div>
            <div className={styles.pricingCategory}>
              <h3>Spa & Wellness</h3>
              <div className={styles.pricingItem}><span>Signature Facial</span><span>$95</span></div>
              <div className={styles.pricingItem}><span>Deep Tissue Massage</span><span>$110</span></div>
              <div className={styles.pricingItem}><span>Spa Manicure</span><span>$40</span></div>
              <div className={styles.pricingItem}><span>Spa Pedicure</span><span>$55</span></div>
              <div className={styles.pricingItem}><span>Body Wrap</span><span>$130</span></div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Client Love</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>&ldquo;Absolutely in love with my new hair! The stylists really listened to what I wanted and executed it perfectly. The complimentary champagne was a wonderful touch.&rdquo;</p>
              <strong>— Samantha P.</strong>
            </div>
            <div className={styles.testimonialCard}>
              <p>&ldquo;The most relaxing spa day I&apos;ve ever had. From the moment I walked in, I felt pampered. The atmosphere is incredible.&rdquo;</p>
              <strong>— Lauren M.</strong>
            </div>
          </div>
        </section>

        {/* Quote Banner */}
        <section className={styles.quoteBanner}>
          <h3>&ldquo;The best investment you can make is in yourself.&rdquo;</h3>
          <p>— {businessName} Philosophy</p>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Book Your Visit</h2>
              <p>Treat yourself to a day of luxury. Walk-ins welcome, appointments preferred.</p>
              <div className={styles.contactDetails}>
                <p>📍 123 Luxury Lane, Style District</p>
                <p>📞 (555) 123-4567</p>
                <p>🕐 Mon-Sat: 9am - 8pm</p>
                <p>✉️ hello@{businessName.replace(/\s+/g, '').toLowerCase()}.com</p>
              </div>
            </div>
            <div className={styles.contactForm}>
              <input type="text" placeholder="Your Name" className={styles.input} />
              <input type="tel" placeholder="Phone Number" className={styles.input} />
              <select className={styles.input} defaultValue="">
                <option value="" disabled>Select Service</option>
                <option>Haircut & Style</option>
                <option>Coloring</option>
                <option>Spa Treatment</option>
                <option>Bridal Package</option>
              </select>
              <input type="date" className={styles.input} />
              <button className={styles.outlineBtn} style={{ width: '100%', padding: '1rem', textAlign: 'center' }}>Request Appointment</button>
            </div>
          </div>
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
