import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Salon.module.css';

const SalonTemplate: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#services">Our Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#team">Our Stylists</a>
          <a href="#pricing">Pricing</a>
          <a href="#book" className="btn-primary">Book Now</a>
        </nav>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Enhance Your Natural Beauty at {businessName}</h1>
            <p>Luxury salon services designed to make you look and feel your absolute best in a relaxing atmosphere.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary">Discover Services</button>
              <button className={styles.btnSecondary}>View Gallery</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Signature Services</h2>
            <p>Elevate your style with our premium offerings.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>✂️</div>
              <h3>Hair Styling</h3>
              <p>Precision cuts, vibrant coloring, and expert styling tailored to your unique look.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💅</div>
              <h3>Nail Care</h3>
              <p>Luxurious manicures and pedicures with a wide selection of premium polishes.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💆‍♀️</div>
              <h3>Spa & Massage</h3>
              <p>Relaxing massages and rejuvenating facials to melt away your stress.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>The {businessName} Experience</h2>
            <p>We redefine beauty and relaxation.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>✨</div>
              <div>
                <h3>Premium Products</h3>
                <p>We use only the highest quality, professional-grade organic products.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🥂</div>
              <div>
                <h3>Complimentary Drinks</h3>
                <p>Enjoy a glass of champagne, wine, or artisan tea during your visit.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🛋️</div>
              <div>
                <h3>Luxury Environment</h3>
                <p>A beautifully designed space created specifically for your relaxation.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🌟</div>
              <div>
                <h3>Expert Consultation</h3>
                <p>Personalized advice tailored perfectly to your unique features and style.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Meet Our Stylists</h2>
            <p>The creative minds behind the magic.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=500&q=80')" }}></div>
              <h3>Jessica Taylor</h3>
              <p className={styles.teamRole}>Master Colorist</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&q=80')" }}></div>
              <h3>Alex Rivera</h3>
              <p className={styles.teamRole}>Senior Stylist</p>
            </div>
            <div className={styles.teamCard}>
              <div className={styles.teamImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&q=80')" }}></div>
              <h3>David Kim</h3>
              <p className={styles.teamRole}>Nail Technician</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Pricing Menu</h2>
            <p>Transparent pricing for our exceptional services.</p>
          </div>
          <div className={styles.pricingWrapper}>
            <div className={styles.pricingCategory}>
              <h3>Hair Services</h3>
              <ul className={styles.pricingList}>
                <li><span>Women's Haircut</span> <span>$65+</span></li>
                <li><span>Men's Haircut</span> <span>$45+</span></li>
                <li><span>Full Color</span> <span>$120+</span></li>
                <li><span>Balayage</span> <span>$180+</span></li>
              </ul>
            </div>
            <div className={styles.pricingCategory}>
              <h3>Spa Services</h3>
              <ul className={styles.pricingList}>
                <li><span>Signature Facial</span> <span>$95</span></li>
                <li><span>Deep Tissue Massage</span> <span>$110</span></li>
                <li><span>Spa Manicure</span> <span>$40</span></li>
                <li><span>Spa Pedicure</span> <span>$55</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Client Love</h2>
            <p>Don't just take our word for it.</p>
          </div>
          <div className={styles.grid}>
             <div className={styles.testimonialCard}>
              <p className={styles.quote}>"Absolutely in love with my new hair! The stylists really listened to what I wanted and executed it perfectly. The complimentary champagne was a wonderful touch."</p>
              <h4 className={styles.author}>- Samantha P.</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"The most relaxing spa day I've ever had. From the moment I walked in, I felt pampered. The atmosphere is incredible and the staff is so talented."</p>
              <h4 className={styles.author}>- Lauren M.</h4>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>"I've been going here for my nails for over a year and they never disappoint. The designs are flawless and they last forever. Truly the best in town!"</p>
              <h4 className={styles.author}>- Chloe T.</h4>
            </div>
          </div>
        </section>

        {/* Contact/Booking Section */}
        <section id="book" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfo}>
              <h2>Book Your Experience</h2>
              <p>Treat yourself to a day of luxury. Reserve your appointment today.</p>
              <ul className={styles.contactList}>
                <li>📍 789 Beauty Blvd, Fashion District</li>
                <li>📞 +1 (555) 987-6543</li>
                <li>✉️ hello@{businessName.replace(/\s+/g, '').toLowerCase()}.com</li>
              </ul>
            </div>
            <div className={styles.contactForm}>
              <input type="text" placeholder="Full Name" className={styles.input} />
              <input type="email" placeholder="Email Address" className={styles.input} />
              <input type="date" className={styles.input} />
              <select className={styles.input}>
                <option>Select Service</option>
                <option>Hair Styling</option>
                <option>Nail Care</option>
                <option>Spa & Massage</option>
              </select>
              <button className="btn-primary" style={{ width: '100%', background: 'var(--primary-color)' }}>Request Appointment</button>
            </div>
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

export default SalonTemplate;
