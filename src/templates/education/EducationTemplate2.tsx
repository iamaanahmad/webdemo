import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import { fallbackHeroImage } from '../demo-data';
import styles from './Education2.module.css';

const EducationTemplate2: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;
  const photo = demo?.heroImage || fallbackHeroImage('education');
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.logo}>
            <span className={styles.crest}>
              <ServiceMark industry="education" size={32} />
            </span>
            {businessName}
          </div>
          <nav className={styles.nav}>
            <a href="#about">Institution</a>
            <a href="#faculties">Faculties</a>
            <a href="#research">Research</a>
            {isGeneric && <a href="#placements">Placements</a>}
            <a href="#admissions">Admissions</a>
          </nav>
        </div>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="education"
          layout="split"
          display="serif"
          accent="#881337"
          contactHref="#admissions"
          servicesHref="#faculties"
        />

        {/* Statistics Banner — generic demos only; never attribute invented stats to a real institution */}
        {isGeneric && (
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
        )}

        {/* About Section — real copy only from the demo; showcase claims stay generic-only */}
        <section id="about" className={styles.section}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <h2>About {businessName}</h2>
              <div className={styles.divider}></div>
              {demo?.about ? (
                <>
                  <p>{demo.about}</p>
                  {demo?.hours && <p>{demo.hours}</p>}
                </>
              ) : (
                <>
                  <p>For over a century, {businessName} has been at the forefront of academic excellence, producing leaders who shape industries, governments, and communities worldwide.</p>
                  <p>Our commitment to interdisciplinary learning, cutting-edge research, and inclusive education makes us one of the most sought-after institutions in the country.</p>
                </>
              )}
              {isGeneric && (
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
              )}
            </div>
            <div className={styles.aboutImage} style={{ backgroundImage: `url(${photo})` }}></div>
          </div>
        </section>

        {/* Faculties Section — real services when provided; showcase
            departments only on generic demos */}
        <section id="faculties" className={styles.section} style={{ background: '#fafaf9' }}>
          <div className={styles.sectionHeader}>
            <h2>Our Faculties</h2>
            <div className={styles.divider}></div>
            <p>World-class academic departments led by renowned scholars and industry experts.</p>
          </div>
          <div className={styles.grid}>
            {demo?.services && demo.services.length > 0 ? (
              demo.services.map((service, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardIcon} aria-hidden="true">
                    <ServiceMark industry="education" size={32} />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))
            ) : isGeneric ? (
              <>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="education" size={32} />
              </div>
              <h3>Sciences & Engineering</h3>
              <p>Cutting-edge laboratories and research facilities fostering technological breakthroughs and innovation.</p>
              <span className={styles.cardMeta}>32 Programs • 120 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="education" size={32} />
              </div>
              <h3>Law & Public Policy</h3>
              <p>Developing the next generation of legal minds, policymakers, and public servants.</p>
              <span className={styles.cardMeta}>8 Programs • 45 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="education" size={32} />
              </div>
              <h3>Business & Economics</h3>
              <p>Strategic thinking and leadership training for the modern global economy and entrepreneurship.</p>
              <span className={styles.cardMeta}>15 Programs • 80 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="education" size={32} />
              </div>
              <h3>Arts & Humanities</h3>
              <p>Exploring the depths of human culture, history, philosophy, and creative expression.</p>
              <span className={styles.cardMeta}>22 Programs • 65 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="education" size={32} />
              </div>
              <h3>Medical Sciences</h3>
              <p>Training compassionate healthcare professionals with state-of-the-art clinical facilities.</p>
              <span className={styles.cardMeta}>18 Programs • 95 Faculty</span>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="education" size={32} />
              </div>
              <h3>Computer Science & AI</h3>
              <p>Pioneering research in artificial intelligence, cybersecurity, and data science.</p>
              <span className={styles.cardMeta}>12 Programs • 55 Faculty</span>
            </div>
              </>
            ) : (
              <p style={{ textAlign: 'center' }}>
                A personalized program menu can be added here after the institution confirms its details.
              </p>
            )}
          </div>
        </section>

        <DemoGallery demo={demo} title="Gallery" />

        {/* Research Section */}
        <section id="research" className={styles.researchSection}>
          <div className={styles.researchOverlay}>
            <div className={styles.sectionHeader}>
              <h2 style={{ color: 'white' }}>Research & Innovation</h2>
              <div className={styles.divider}></div>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Pushing the boundaries of knowledge across disciplines.</p>
            </div>
            {isGeneric && (
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
            )}
          </div>
        </section>

        {/* Placements — generic demos only; never attribute placement
            stats or recruiters to a real institution */}
        {isGeneric && (
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
        )}

        {/* Testimonials — generic demos only; never fabricate reviews for a real institution */}
        {isGeneric && (
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
        )}

        {/* Admissions — generic showcase block only; real institutions get
            an honest contact panel with real links, never a dead form */}
        <section id="admissions" className={styles.contactSection}>
          {isGeneric ? (
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
          ) : (
            <div className={styles.contactContent}>
              <h2>Contact {businessName}</h2>
              <p>
                This concept shows a possible layout. A finished website can include confirmed
                programs, the institution&apos;s own photos, and its existing admissions route.
              </p>
              <p>No request is submitted from this preview.</p>
              <div className={styles.formGroup}>
                {demo?.bookingUrl && (
                  <a
                    href={demo.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnPrimary}
                    style={{ textDecoration: 'none', textAlign: 'center' }}
                  >
                    Apply Online
                  </a>
                )}
                {demo?.phone && tel && (
                  <a href={tel} className={styles.btnPrimary} style={{ textDecoration: 'none', textAlign: 'center' }}>
                    Call {demo.phone}
                  </a>
                )}
                {demo?.email && (
                  <a href={`mailto:${demo.email}`} className={styles.btnPrimary} style={{ textDecoration: 'none', textAlign: 'center' }}>
                    Email Us
                  </a>
                )}
              </div>
            </div>
          )}
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
              <span className={styles.crest}>
                <ServiceMark industry="education" size={32} />
              </span>
              {businessName}
            </div>
            {demo?.address && <p>📍 {demo.address}</p>}
            {demo?.phone && tel && (
              <p>
                📞 <a href={tel}>{demo.phone}</a>
              </p>
            )}
            {demo?.email && (
              <p>
                ✉️ <a href={`mailto:${demo.email}`}>{demo.email}</a>
              </p>
            )}
            {demo?.hours && <p>🕒 {demo.hours}</p>}
            {isGeneric && (
              <>
                <p>📍 Central Campus, University Avenue, State 12345, India</p>
                <p>📞 +91 11 2345 6789</p>
              </>
            )}
          </div>
          <div className={styles.footerCol}>
            <h4>Academics</h4>
            <a href="#faculties">Undergraduate</a>
            <a href="#faculties">Postgraduate</a>
            <a href="#faculties">PhD Programs</a>
            <a href="#faculties">Online Courses</a>
          </div>
          <div className={styles.footerCol}>
            <h4>Resources</h4>
            <a href="#research">Library</a>
            <a href="#research">Alumni Association</a>
            <a href="#placements">Career Services</a>
            <a href="#faculties">Directory</a>
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
