import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Clinic.module.css';

const ClinicTemplate: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#why-us">Why Us</a>
          <a href="#doctors">Our Doctors</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className="btn-primary">Book Appointment</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Premium Healthcare at {businessName}</h1>
            <p>Your health is our priority. Experience world-class medical care with compassion, excellence, and the latest technology.</p>
            <div className={styles.heroButtons}>
              <button className="btn-primary">Book Your Visit</button>
              <button className={styles.btnSecondary}>Learn More</button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Medical Services</h2>
            <p>Comprehensive care for you and your family.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🩺</div>
              <h3>General Practice</h3>
              <p>Routine checkups, preventive care, and treatment for common illnesses.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🧠</div>
              <h3>Neurology</h3>
              <p>Expert diagnosis and treatment of nervous system disorders.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>👶</div>
              <h3>Pediatrics</h3>
              <p>Compassionate care for infants, children, and adolescents.</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="why-us" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose {businessName}?</h2>
            <p>We combine medical excellence with a patient-first approach.</p>
          </div>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>⏱️</div>
              <div>
                <h3>No Wait Times</h3>
                <p>We respect your schedule with prompt, on-time appointments.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🔬</div>
              <div>
                <h3>Modern Technology</h3>
                <p>State-of-the-art medical equipment for accurate diagnostics.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🤝</div>
              <div>
                <h3>Compassionate Care</h3>
                <p>Our staff treats every patient like family.</p>
              </div>
            </div>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>🏆</div>
              <div>
                <h3>Award-Winning Doctors</h3>
                <p>Top-rated medical professionals with decades of experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Meet Our Specialists</h2>
            <p>Dedicated professionals committed to your well-being.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.doctorCard}>
              <div className={styles.doctorAvatar} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80')" }}></div>
              <h3>Dr. Sarah Jenkins</h3>
              <p className={styles.doctorSpecialty}>Chief Medical Officer</p>
            </div>
            <div className={styles.doctorCard}>
              <div className={styles.doctorAvatar} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80')" }}></div>
              <h3>Dr. Michael Chen</h3>
              <p className={styles.doctorSpecialty}>Lead Neurologist</p>
            </div>
            <div className={styles.doctorCard}>
              <div className={styles.doctorAvatar} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594824436998-dd1eb05e836b?w=500&q=80')" }}></div>
              <h3>Dr. Emily Roberts</h3>
              <p className={styles.doctorSpecialty}>Pediatrician</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Patient Stories</h2>
            <p>Hear what our patients have to say about their experience.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.quote}>"The level of care I received was absolutely outstanding. The doctors took their time to answer all my questions and made me feel completely at ease."</p>
              <h4 className={styles.author}>- Amanda Richards</h4>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.quote}>"I've finally found a clinic that I trust. The facility is spotless, the staff is welcoming, and the medical expertise is top-notch. Highly recommended!"</p>
              <h4 className={styles.author}>- David Thompson</h4>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p className={styles.quote}>"They really mean it when they say no wait times. I walked in, and was immediately taken to the examination room. Fantastic service."</p>
              <h4 className={styles.author}>- Elena Rodriguez</h4>
            </div>
          </div>
        </section>

        {/* Contact/Appointment Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfo}>
              <h2>Book an Appointment</h2>
              <p>Take the first step towards better health. Schedule your visit today.</p>
              <ul className={styles.contactList}>
                <li>📍 123 Health Avenue, Medical District</li>
                <li>📞 +1 (555) 123-4567</li>
                <li>✉️ contact@{businessName.replace(/\s+/g, '').toLowerCase()}.com</li>
              </ul>
            </div>
            <div className={styles.contactForm}>
              <input type="text" placeholder="Full Name" className={styles.input} />
              <input type="email" placeholder="Email Address" className={styles.input} />
              <select className={styles.input}>
                <option>Select Department</option>
                <option>General Practice</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
              </select>
              <button className="btn-primary" style={{ width: '100%' }}>Confirm Booking</button>
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

export default ClinicTemplate;
