import React from 'react';
import { TemplateProps } from '../registry';
import { RatingBadge, pick } from '@/components/DemoBits';
import styles from './Gym.module.css';

/**
 * Gym / fitness-studio template.
 *
 * Data-driven: when a personalized demo JSON is provided, the page renders
 * the gym's real name, about, training programs, contact details and rating,
 * with boxing/fitness copy throughout — never school, clinic or generic
 * local-services copy.
 *
 * Honesty rule: placeholder sections (reviews/testimonials, marketing
 * claims) only render on generic demos. When a real business's data is
 * present they must not render fabricated reviews or claims in its name,
 * and no email address is ever invented for the footer.
 */
const GymTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const services = demo?.services && demo.services.length > 0 ? demo.services : null;

  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <span>
          🥊 {businessName}
          {demo?.city ? ` — train hard in ${demo.city}` : ' — train hard, fight smart'}!
        </span>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🥊</span>
          {businessName}
        </div>
        <nav className={styles.nav}>
          <a href="#services">Training</a>
          <a href="#about">About</a>
          {demo?.gallery && demo.gallery.length > 0 && <a href="#gallery">Gallery</a>}
          {isGeneric && <a href="#testimonials">Reviews</a>}
          <a href="#contact" className={styles.navCta}>Book a Session</a>
        </nav>
      </header>

      <main>
        {/* Hero Section — uses the gym's hero image when provided */}
        <section
          className={styles.hero}
          style={demo?.heroImage ? { backgroundImage: `url('${demo.heroImage}')` } : undefined}
        >
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.heroTag}>Boxing • Muay Thai • Fitness</span>
              <h1>{businessName}.</h1>
              <p>{pick(demo?.about, `Welcome to ${businessName} — real coaching, real conditioning, and a gym that takes the craft seriously.`)}</p>
              <RatingBadge demo={demo} />
              <div className={styles.heroButtons}>
                <button className={styles.btnPrimary}>Explore Training</button>
                <button className={styles.btnSecondary}>{demo?.phone ? `Call ${demo.phone}` : 'Get in Touch →'}</button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights — neutral, claim-free */}
        <section className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <h3>🥊</h3>
              <p>Real Boxing Skills</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>💪</h3>
              <p>Strength &amp; Conditioning</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>{services ? services.length : '👥'}</h3>
              <p>{services ? 'Training Programs' : 'All Levels Welcome'}</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>{demo?.city || 'Local'}</h3>
              <p>Proudly Serving</p>
            </div>
          </div>
        </section>

        {/* Training Section — renders the gym's real programs when provided */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Train With Us</h2>
            <p>Every way to train at {businessName}, all in one place.</p>
          </div>
          <div className={styles.whyGrid}>
            {services ? (
              services.map((service, i) => (
                <div key={i} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{service.icon || '🥊'}</div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))
            ) : (
              <>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🥊</div>
                  <h3>Boxing Classes</h3>
                  <p>Group boxing sessions for all levels — footwork, combos, bag and pad work.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🥋</div>
                  <h3>Muay Thai &amp; Kickboxing</h3>
                  <p>Striking training that builds technique, timing and fight fitness.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>💪</div>
                  <h3>Personal Training</h3>
                  <p>One-on-one coaching focused on your goals, from fitness to fight preparation.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🏋️</div>
                  <h3>Strength &amp; Conditioning</h3>
                  <p>Build power, stamina and agility with conditioning work that supports your training.</p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Gallery — renders the gym's photos when provided */}
        {demo?.gallery && demo.gallery.length > 0 && (
        <section id="gallery" className={styles.section} style={{ background: '#111827' }}>
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'white' }}>Inside the Gym</h2>
            <p style={{ color: 'rgba(255,255,255,0.75)' }}>Where the work gets done.</p>
          </div>
          <div className={styles.whyGrid}>
            {demo.gallery.slice(0, 3).map((img, i) => (
              <div key={i} className={styles.whyCard} style={{ padding: 0, overflow: 'hidden' }}>
                <img src={img} alt={`${businessName} training photo ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
        )}

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>About {businessName}</h2>
            <p>{pick(demo?.about, `${businessName} is a training gym built on discipline, technique and community.`)}</p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📍</div>
              <h3>Find the Gym</h3>
              <p>{pick(demo?.address, `Serving ${demo?.city || 'the local area'} — easy to reach, hard to leave.`)}</p>
            </div>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📞</div>
              <h3>Call Us</h3>
              <p>{pick(demo?.phone, 'Give us a ring — we are happy to help with any question.')}</p>
            </div>
            {demo?.email ? (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>✉️</div>
                <h3>Email Us</h3>
                <p>{demo.email}</p>
              </div>
            ) : (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>🥊</div>
                <h3>New Here?</h3>
                <p>Beginners are welcome — come in, wrap up, and learn the fundamentals step by step.</p>
              </div>
            )}
            {demo?.hours && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>🕒</div>
                <h3>Training Hours</h3>
                <p>{demo.hours}</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials — generic demos only; never fabricate reviews for a real gym */}
        {isGeneric && (
        <section id="testimonials" className={styles.testimonialSection}>
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'white' }}>What Our Members Say</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Trusted by members who train hard.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Tough workouts, great coaching, and I was made to feel welcome from day one.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Sarah M.</strong>
                <span>Member</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Exactly the push I needed. My fitness and my technique have both levelled up.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>James K.</strong>
                <span>Member</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Serious training without the ego. Rare to find a gym like this.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Priya R.</strong>
                <span>Member</span>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Getting Started */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Your First Session</h2>
            <p>Getting started at {businessName} is easy.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Say Hello</h3>
              <p>Call or message us and tell us what you want to work on.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Come Try a Session</h3>
              <p>Wrap up, warm up, and learn the fundamentals with the coaches.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Find Your Rhythm</h3>
              <p>Mix classes and coaching into a routine that fits your week.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Watch Yourself Level Up</h3>
              <p>Sharper technique, stronger conditioning, real confidence.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className={styles.ctaSection}>
          <h2>Ready to Train at {businessName}?</h2>
          <p>Your first step is one call away{demo?.phone ? ` — reach us on ${demo.phone}` : ''}.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.btnCtaWhite}>Book a Session</button>
            <button className={styles.btnCtaOutline}>{demo?.phone ? `Call ${demo.phone}` : 'Call Now'}</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
              <span className={styles.logoIcon}>🥊</span>
              {businessName}
            </div>
            <p>📍 {pick(demo?.address, `Serving ${demo?.city || 'the local area'}`)}</p>
            <p>📞 {pick(demo?.phone, 'Call us — we are happy to help')}</p>
            {demo?.email && <p>✉️ {demo.email}</p>}
            {demo?.hours && <p>🕒 {demo.hours}</p>}
          </div>
          <div className={styles.footerLinksGroup}>
            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <a href="#services">Training</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
            </div>
            <div className={styles.footerLinks}>
              <h4>Connect</h4>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
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

export default GymTemplate;
