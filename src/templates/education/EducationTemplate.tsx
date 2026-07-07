import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Education.module.css';

const EducationTemplate: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <span>🎉 Admissions Open for 2026-2027 Academic Year! Apply Now.</span>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🎓</span>
          {businessName}
        </div>
        <nav className={styles.nav}>
          <a href="#about">About Us</a>
          <a href="#academics">Academics</a>
          <a href="#campus">Campus</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact" className={styles.navCta}>Apply Now</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.heroTag}>Excellence in Education Since 2005</span>
              <h1>Empowering the Next Generation of Leaders.</h1>
              <p>Welcome to {businessName}, where academic excellence meets holistic development in a nurturing environment designed to unlock every student&apos;s potential.</p>
              <div className={styles.heroButtons}>
                <button className={styles.btnPrimary}>Explore Programs</button>
                <button className={styles.btnSecondary}>Virtual Tour →</button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <h3>100%</h3>
              <p>College Acceptance Rate</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>15:1</h3>
              <p>Student-to-Teacher Ratio</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>50+</h3>
              <p>Extracurricular Activities</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>25+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Why Choose {businessName}?</h2>
            <p>We go beyond textbooks to create well-rounded individuals ready for the future.</p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📚</div>
              <h3>Comprehensive Curriculum</h3>
              <p>CBSE/ICSE aligned curriculum with emphasis on conceptual understanding, critical thinking, and real-world application.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🧑‍🏫</div>
              <h3>Expert Faculty</h3>
              <p>Highly qualified and passionate educators with an average of 12+ years of teaching experience.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>💻</div>
              <h3>Smart Classrooms</h3>
              <p>Technology-integrated learning with interactive whiteboards, digital labs, and 1:1 device programs.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🏆</div>
              <h3>Holistic Development</h3>
              <p>Equal emphasis on sports, arts, leadership, and community service alongside academics.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🌍</div>
              <h3>Global Exposure</h3>
              <p>International exchange programs, MUN conferences, and collaborations with schools worldwide.</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>🛡️</div>
              <h3>Safe Environment</h3>
              <p>CCTV monitored campus, trained security staff, and strict anti-bullying policies for student safety.</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="academics" className={styles.section} style={{ background: '#f1f5f9' }}>
          <div className={styles.sectionHeader}>
            <h2>Our Educational Programs</h2>
            <p>Comprehensive curriculum tailored for every stage of development.</p>
          </div>
          <div className={styles.programsGrid}>
            <div className={styles.programCard}>
              <div className={styles.programImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588072432836-e10032774350?w=600&q=80')" }}></div>
              <div className={styles.programContent}>
                <span className={styles.programTag}>Ages 3-10</span>
                <h3>Primary Education</h3>
                <p>Building a strong foundation in literacy, numeracy, and social skills through interactive, play-based learning methodologies.</p>
                <ul className={styles.programFeatures}>
                  <li>Activity-based learning</li>
                  <li>Phonics & language development</li>
                  <li>Creative arts integration</li>
                </ul>
              </div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&q=80')" }}></div>
              <div className={styles.programContent}>
                <span className={styles.programTag}>Ages 11-14</span>
                <h3>Middle School</h3>
                <p>Fostering critical thinking, independence, and exploration across diverse academic subjects with project-based learning.</p>
                <ul className={styles.programFeatures}>
                  <li>STEM-focused curriculum</li>
                  <li>Research & presentation skills</li>
                  <li>Leadership programs</li>
                </ul>
              </div>
            </div>
            <div className={styles.programCard}>
              <div className={styles.programImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80')" }}></div>
              <div className={styles.programContent}>
                <span className={styles.programTag}>Ages 15-18</span>
                <h3>High School</h3>
                <p>Advanced placement courses, board exam preparation, and specialized career pathways for future success.</p>
                <ul className={styles.programFeatures}>
                  <li>Board exam coaching</li>
                  <li>Career counseling</li>
                  <li>Competitive exam prep</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Campus Life */}
        <section id="campus" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Campus Life</h2>
            <p>A vibrant campus designed to inspire learning, creativity, and growth.</p>
          </div>
          <div className={styles.campusGrid}>
            <div className={styles.campusItem}>
              <div className={styles.campusImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80')" }}></div>
              <h4>Modern Library</h4>
            </div>
            <div className={styles.campusItem}>
              <div className={styles.campusImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=600&q=80')" }}></div>
              <h4>Science Labs</h4>
            </div>
            <div className={styles.campusItem}>
              <div className={styles.campusImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80')" }}></div>
              <h4>Sports Complex</h4>
            </div>
            <div className={styles.campusItem}>
              <div className={styles.campusImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&q=80')" }}></div>
              <h4>Computer Lab</h4>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className={styles.testimonialSection}>
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'white' }}>What Parents Say</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Trusted by hundreds of families across the city.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;{businessName} has transformed my child&apos;s confidence and academic performance. The teachers genuinely care about each student&apos;s growth.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Priya Sharma</strong>
                <span>Parent of Class 8 Student</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;The holistic approach to education here is remarkable. My daughter excels not just in studies but also in sports and arts.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Rajesh Kumar</strong>
                <span>Parent of Class 5 Student</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Best decision we made for our children. The infrastructure, faculty, and values taught here are unmatched in the city.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Fatima Khan</strong>
                <span>Parent of Class 10 Student</span>
              </div>
            </div>
          </div>
        </section>

        {/* Admission Process */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Admission Process</h2>
            <p>Simple, transparent, and hassle-free admission in 4 easy steps.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Enquiry</h3>
              <p>Fill the online enquiry form or visit our campus for a walkthrough.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Assessment</h3>
              <p>Age-appropriate interaction/assessment to understand the child&apos;s level.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Documentation</h3>
              <p>Submit required documents and complete the registration formalities.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Welcome!</h3>
              <p>Receive your admission confirmation and join the {businessName} family.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className={styles.ctaSection}>
          <h2>Join the {businessName} Family</h2>
          <p>Schedule a campus visit or start your application today. Limited seats available for 2026-27.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.btnCtaWhite}>Start Application</button>
            <button className={styles.btnCtaOutline}>Schedule Campus Visit</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
              <span className={styles.logoIcon}>🎓</span>
              {businessName}
            </div>
            <p>123 Education Blvd, Knowledge City</p>
            <p>+91 98765 43210</p>
            <p>info@{businessName.replace(/\s+/g, '').toLowerCase()}.edu</p>
          </div>
          <div className={styles.footerLinksGroup}>
            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <a href="#">Parent Portal</a>
              <a href="#">Student Portal</a>
              <a href="#">Fee Structure</a>
              <a href="#">Calendar</a>
            </div>
            <div className={styles.footerLinks}>
              <h4>Connect</h4>
              <a href="#">Careers</a>
              <a href="#">News & Events</a>
              <a href="#">Alumni</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className={styles.creditArea}>
          <p className={styles.credit}>
            Designed and Developed by <a href="https://www.cit.org.in" target="_blank" rel="noopener noreferrer">Centre for Information Technology</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default EducationTemplate;
