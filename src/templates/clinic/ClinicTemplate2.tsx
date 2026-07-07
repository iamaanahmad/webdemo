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
          <a href="#doctors">Doctors</a>
          <a href="#testimonials">Reviews</a>
          <a href="#contact" className={styles.navCta}>Patient Portal</a>
        </nav>
      </header>

      <main>
        {/* Modern Split Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>Trusted by 10,000+ Patients</span>
            <h1>Modern Healthcare, Delivered With Compassion.</h1>
            <p>Welcome to {businessName}. We blend advanced medical technology with a personalized approach to ensure you receive the best care possible.</p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Schedule Visit</button>
              <button className={styles.btnSecondary}>Our Specialists</button>
            </div>
          </div>
          <div className={styles.heroImage}></div>
        </section>

        {/* Stats Strip */}
        <section className={styles.statsStrip}>
          <div className={styles.statItem}>
            <h3>15+</h3>
            <p>Years of Service</p>
          </div>
          <div className={styles.statItem}>
            <h3>25+</h3>
            <p>Specialist Doctors</p>
          </div>
          <div className={styles.statItem}>
            <h3>10k+</h3>
            <p>Happy Patients</p>
          </div>
          <div className={styles.statItem}>
            <h3>24/7</h3>
            <p>Emergency Care</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80')" }}></div>
            <div className={styles.aboutContent}>
              <h2>About {businessName}</h2>
              <p>Founded with a mission to make quality healthcare accessible, {businessName} has grown into a multi-specialty clinic trusted by thousands of families.</p>
              <p>Our state-of-the-art facility combines cutting-edge diagnostics with compassionate care, ensuring every patient receives personalized attention from consultation to recovery.</p>
              <div className={styles.aboutFeatures}>
                <div className={styles.aboutFeature}>
                  <span>✓</span> NABH Accredited
                </div>
                <div className={styles.aboutFeature}>
                  <span>✓</span> Cashless Insurance
                </div>
                <div className={styles.aboutFeature}>
                  <span>✓</span> Digital Health Records
                </div>
                <div className={styles.aboutFeature}>
                  <span>✓</span> Same-Day Reports
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Our Departments</h2>
            <p>Specialized care tailored to your specific needs.</p>
          </div>
          <div className={styles.servicesGrid}>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>⚕️</div>
              <h3>Internal Medicine</h3>
              <p>Comprehensive adult care focusing on the prevention, diagnosis, and treatment of complex diseases.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>❤️</div>
              <h3>Cardiology</h3>
              <p>Advanced cardiovascular screening, ECG, Echo, and treatment by top-rated heart specialists.</p>
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
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>👶</div>
              <h3>Pediatrics</h3>
              <p>Gentle, compassionate care for infants, children, and adolescents by child specialists.</p>
            </div>
            <div className={styles.serviceCard}>
              <div className={styles.serviceIcon}>🔬</div>
              <h3>Diagnostics & Lab</h3>
              <p>In-house pathology, radiology, and advanced imaging for accurate and fast results.</p>
            </div>
          </div>
        </section>

        {/* Doctors Section */}
        <section id="doctors" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Specialists</h2>
            <p>Experienced doctors committed to your well-being.</p>
          </div>
          <div className={styles.doctorsGrid}>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500&q=80')" }}></div>
              <div className={styles.doctorInfo}>
                <h3>Dr. Sarah Jenkins</h3>
                <p className={styles.doctorRole}>Chief Medical Officer</p>
                <p className={styles.doctorExp}>MBBS, MD • 18 yrs exp</p>
              </div>
            </div>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500&q=80')" }}></div>
              <div className={styles.doctorInfo}>
                <h3>Dr. Michael Chen</h3>
                <p className={styles.doctorRole}>Lead Cardiologist</p>
                <p className={styles.doctorExp}>MBBS, DM Cardio • 15 yrs exp</p>
              </div>
            </div>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594824436998-dd1eb05e836b?w=500&q=80')" }}></div>
              <div className={styles.doctorInfo}>
                <h3>Dr. Emily Roberts</h3>
                <p className={styles.doctorRole}>Senior Pediatrician</p>
                <p className={styles.doctorExp}>MBBS, DCH • 12 yrs exp</p>
              </div>
            </div>
            <div className={styles.doctorCard}>
              <div className={styles.doctorImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&q=80')" }}></div>
              <div className={styles.doctorInfo}>
                <h3>Dr. Raj Patel</h3>
                <p className={styles.doctorRole}>Orthopedic Surgeon</p>
                <p className={styles.doctorExp}>MBBS, MS Ortho • 20 yrs exp</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.sectionHeader}>
            <h2>Patient Reviews</h2>
            <p>What our patients say about their experience.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p>&ldquo;The doctors here are incredibly thorough. They took time to explain everything and made me feel comfortable throughout my treatment.&rdquo;</p>
              <strong>— Anita Sharma</strong>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p>&ldquo;Clean facility, minimal wait time, and very professional staff. The online appointment system is super convenient.&rdquo;</p>
              <strong>— Rahul Verma</strong>
            </div>
            <div className={styles.testimonialCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p>&ldquo;My child was terrified of doctors, but the pediatrician here was so gentle and patient. We&apos;ve found our family clinic!&rdquo;</p>
              <strong>— Meera Kapoor</strong>
            </div>
          </div>
        </section>

        {/* Contact / Appointment */}
        <section id="contact" className={styles.section}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Book an Appointment</h2>
              <p>Take the first step towards better health. Walk-ins welcome, appointments preferred.</p>
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <span>📍</span>
                  <p>123 Health Avenue, Medical District</p>
                </div>
                <div className={styles.contactItem}>
                  <span>📞</span>
                  <p>+91 98765 43210</p>
                </div>
                <div className={styles.contactItem}>
                  <span>🕐</span>
                  <p>Mon-Sat: 8am - 9pm | Sun: 9am - 2pm</p>
                </div>
                <div className={styles.contactItem}>
                  <span>✉️</span>
                  <p>care@{businessName.replace(/\s+/g, '').toLowerCase()}.com</p>
                </div>
              </div>
            </div>
            <div className={styles.contactForm}>
              <input type="text" placeholder="Full Name" className={styles.input} />
              <input type="tel" placeholder="Phone Number" className={styles.input} />
              <select className={styles.input} defaultValue="">
                <option value="" disabled>Select Department</option>
                <option>Internal Medicine</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Orthopedics</option>
                <option>Pediatrics</option>
              </select>
              <input type="date" className={styles.input} />
              <button className={styles.btnPrimary} style={{ width: '100%' }}>Confirm Booking</button>
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

export default ClinicTemplate2;
