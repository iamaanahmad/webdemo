import React from 'react';
import { TemplateProps } from '../registry';
import styles from './Education2.module.css';

const EducationTemplate2: React.FC<TemplateProps> = ({ businessName }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <span className={styles.crest}>🏛️</span>
            {businessName}
          </div>
          <nav className={styles.nav}>
            <a href="#about">Institution</a>
            <a href="#faculties">Faculties</a>
            <a href="#research">Research</a>
            <a href="#placements">Placements</a>
            <a href="#admissions">Admissions</a>
          </nav>
        </div>
      </header>

      <main>
        {/* Prestige Hero */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.heroTag}>NAAC A++ Accredited Institution</span>
            <h1>Tradition Meets Innovation.</h1>
            <p>A prestigious academic institution dedicated to advancing knowledge, fostering research, and shaping future global leaders since 1895.</p>
            <div className={styles.heroButtons}>
              <button className={styles.btnPrimary}>Apply for Fall 2026</button>
              <button className={styles.btnOutline}>Academic Catalog</button>
            </div>
          </div>
        </section>

        {/* Statistics Banner */}
        <section className={styles.statsBanner}>
          <div className={styles.statItem}>
            <h3>1895</h3>
            <p>Year Established</p>
          </div>
          <div className={styles.statItem}>
            <h3>45k+</h3>
            <p>Global Alumni Network</p>
          </div>
          <div className={styles.statItem}>
            <h3>120</h3>
            <p>Degree Programs</p>
          </div>
          <div className={styles.statItem}>
            <h3>Top 50</h3>
            <p>National Ranking</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>About {businessName}</h2>
              <div className={styles.divider}></div>
              <p>For over a century, {businessName} has been at the forefront of academic excellence, producing leaders who shape industries, governments, and communities worldwide.</p>
              <p>Our commitment to interdisciplinary learning, cutting-edge research, and inclusive education makes us one of the most sought-after institutions in the country.</p>
              <div className={styles.aboutHighlights}>
                <div className={styles.aboutHighlight}>
                  <strong>500+</strong>
                  <span>Faculty Members</span>
                </div>
                <div className={styles.aboutHighlight}>
                  <strong>85+</strong>
                  <span>Research Centers</span>
                </div>
                <div className={styles.aboutHighlight}>
                  <strong>30+</strong>
                  <span>International Collaborations</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80')" }}></div>
          </div>
        </section>

        {/* Faculties Section */}
        <section id="faculties" className={styles.section} style={{ background: '#fafaf9' }}>
          <div className={styles.sectionHeader}>
            <h2>Our Faculties</h2>
            <div className={styles.divider}></div>
            <p>World-class academic departments led by renowned scholars and industry experts.</p>
          </div>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🔬</div>
              <h3>Sciences & Engineering</h3>
              <p>Cutting-edge laboratories and research facilities fostering technological breakthroughs and innovation.</p>
              <span className={styles.cardMeta}>32 Programs • 120 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚖️</div>
              <h3>Law & Public Policy</h3>
              <p>Developing the next generation of legal minds, policymakers, and public servants.</p>
              <span className={styles.cardMeta}>8 Programs • 45 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>💼</div>
              <h3>Business & Economics</h3>
              <p>Strategic thinking and leadership training for the modern global economy and entrepreneurship.</p>
              <span className={styles.cardMeta}>15 Programs • 80 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎨</div>
              <h3>Arts & Humanities</h3>
              <p>Exploring the depths of human culture, history, philosophy, and creative expression.</p>
              <span className={styles.cardMeta}>22 Programs • 65 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🏥</div>
              <h3>Medical Sciences</h3>
              <p>Training compassionate healthcare professionals with state-of-the-art clinical facilities.</p>
              <span className={styles.cardMeta}>18 Programs • 95 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🖥️</div>
              <h3>Computer Science & AI</h3>
              <p>Pioneering research in artificial intelligence, cybersecurity, and data science.</p>
              <span className={styles.cardMeta}>12 Programs • 55 Faculty</span>
            </div>
          </div>
        </section>

        {/* Research Section */}
        <section id="research" className={styles.researchSection}>
          <div className={styles.researchOverlay}>
            <div className={styles.sectionHeader}>
              <h2 style={{ color: 'white' }}>Research & Innovation</h2>
              <div className={styles.divider}></div>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Pushing the boundaries of knowledge across disciplines.</p>
            </div>
            <div className={styles.researchGrid}>
              <div className={styles.researchCard}>
                <h3>₹250 Cr+</h3>
                <p>Annual Research Funding</p>
              </div>
              <div className={styles.researchCard}>
                <h3>1,200+</h3>
                <p>Published Papers (2024)</p>
              </div>
              <div className={styles.researchCard}>
                <h3>85</h3>
                <p>Patents Filed</p>
              </div>
              <div className={styles.researchCard}>
                <h3>15</h3>
                <p>Incubated Startups</p>
              </div>
            </div>
          </div>
        </section>

        {/* Placements */}
        <section id="placements" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Placement Highlights</h2>
            <div className={styles.divider}></div>
            <p>Our graduates are recruited by the world&apos;s leading organizations.</p>
          </div>
          <div className={styles.placementGrid}>
            <div className={styles.placementStat}>
              <h3>₹28 LPA</h3>
              <p>Average Package</p>
            </div>
            <div className={styles.placementStat}>
              <h3>₹1.2 Cr</h3>
              <p>Highest Package</p>
            </div>
            <div className={styles.placementStat}>
              <h3>95%</h3>
              <p>Placement Rate</p>
            </div>
            <div className={styles.placementStat}>
              <h3>300+</h3>
              <p>Recruiting Companies</p>
            </div>
          </div>
          <div className={styles.recruiters}>
            <p className={styles.recruitersLabel}>Top Recruiters</p>
            <div className={styles.recruitersList}>
              <span>Google</span>
              <span>Microsoft</span>
              <span>Amazon</span>
              <span>Goldman Sachs</span>
              <span>McKinsey</span>
              <span>Deloitte</span>
              <span>TCS</span>
              <span>Infosys</span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className={styles.testimonialSection}>
          <div className={styles.sectionHeader}>
            <h2>Alumni Voices</h2>
            <div className={styles.divider}></div>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p>&ldquo;{businessName} gave me the foundation to think critically and lead with purpose. The faculty mentorship was invaluable.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Dr. Ananya Mehta</strong>
                <span>Batch of 2015 • Research Scientist, ISRO</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p>&ldquo;The interdisciplinary approach and global exposure prepared me for challenges I never imagined I could tackle.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Vikram Patel</strong>
                <span>Batch of 2018 • Product Manager, Google</span>
              </div>
            </div>
          </div>
        </section>

        {/* Admissions */}
        <section id="admissions" className={styles.contactSection}>
          <div className={styles.contactContent}>
            <h2>Admissions 2026-27</h2>
            <p>Applications are now open for undergraduate and postgraduate programs. Join a legacy of excellence.</p>
            <div className={styles.admissionSteps}>
              <div className={styles.admStep}>
                <strong>1</strong>
                <span>Register Online</span>
              </div>
              <div className={styles.admStep}>
                <strong>2</strong>
                <span>Entrance Exam</span>
              </div>
              <div className={styles.admStep}>
                <strong>3</strong>
                <span>Counseling</span>
              </div>
              <div className={styles.admStep}>
                <strong>4</strong>
                <span>Enrollment</span>
              </div>
            </div>
            <div className={styles.formGroup}>
              <input type="email" placeholder="Your Email Address" className={styles.input} />
              <button className={styles.btnPrimary}>Get Prospectus</button>
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
              <span className={styles.crest}>🏛️</span>
              {businessName}
            </div>
            <p>Central Campus, University Avenue</p>
            <p>State 12345, India</p>
            <p>+91 11 2345 6789</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Academics</h4>
            <a href="#">Undergraduate</a>
            <a href="#">Postgraduate</a>
            <a href="#">PhD Programs</a>
            <a href="#">Online Courses</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <a href="#">Library</a>
            <a href="#">Alumni Association</a>
            <a href="#">Career Services</a>
            <a href="#">Directory</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <a href="#">Title IX</a>
            <a href="#">Accessibility</a>
            <a href="#">Privacy Policy</a>
            <a href="#">RTI</a>
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

export default EducationTemplate2;
