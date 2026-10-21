import React from 'react';
import { TemplateProps } from '../registry';
import { RatingBadge, pick } from '@/components/DemoBits';
import styles from './Coworking.module.css';

/**
 * Co-working / shared-workspace template.
 *
 * Data-driven: when a personalized demo JSON is provided, the page renders
 * the space's real name, about, spaces and services, contact details and
 * rating, with calm workspace copy throughout — never school, gym or
 * generic local-services copy.
 *
 * Honesty rule: placeholder sections (reviews/testimonials, marketing
 * claims) only render on generic demos. When a real business's data is
 * present they must not render fabricated reviews or claims in its name,
 * and no email address is ever invented for the footer.
 */
const CoworkingTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const services = demo?.services && demo.services.length > 0 ? demo.services : null;

  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <span>
          🌿 Welcome to {businessName}
          {demo?.city ? ` — work and recharge in ${demo.city}` : ' — work, meet, meditate'}!
        </span>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon}>🪴</span>
          {businessName}
        </div>
        <nav className={styles.nav}>
          <a href="#services">Spaces</a>
          <a href="#about">About</a>
          {demo?.gallery && demo.gallery.length > 0 && <a href="#gallery">Gallery</a>}
          {isGeneric && <a href="#testimonials">Reviews</a>}
          <a href="#contact" className={styles.navCta}>Book a Tour</a>
        </nav>
      </header>

      <main>
        {/* Hero Section — uses the space's hero image when provided */}
        <section
          className={styles.hero}
          style={demo?.heroImage ? { backgroundImage: `url('${demo.heroImage}')` } : undefined}
        >
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              <span className={styles.heroTag}>Work • Meet • Meditate</span>
              <h1>{businessName}.</h1>
              <p>{pick(demo?.about, `Welcome to ${businessName} — a calm, focused workspace where you can do your best work and still leave with a clear head.`)}</p>
              <RatingBadge demo={demo} />
              <div className={styles.heroButtons}>
                <button className={styles.btnPrimary}>Explore the Space</button>
                <button className={styles.btnSecondary}>{demo?.phone ? `Call ${demo.phone}` : 'Get in Touch →'}</button>
              </div>
            </div>
          </div>
        </section>

        {/* Highlights — neutral, claim-free */}
        <section className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <h3>💻</h3>
              <p>Focused Workspaces</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>🧘</h3>
              <p>Space to Recharge</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>{services ? services.length : '🤝'}</h3>
              <p>{services ? 'Spaces & Services' : 'Community Driven'}</p>
            </div>
            <div className={styles.highlightCard}>
              <h3>{demo?.city || 'Local'}</h3>
              <p>Proudly Based</p>
            </div>
          </div>
        </section>

        {/* Spaces Section — renders the space's real offerings when provided */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Spaces &amp; Services</h2>
            <p>Everything {businessName} offers, all in one place.</p>
          </div>
          <div className={styles.whyGrid}>
            {services ? (
              services.map((service, i) => (
                <div key={i} className={styles.whyCard}>
                  <div className={styles.whyIcon}>{service.icon || '🌿'}</div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))
            ) : (
              <>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>💻</div>
                  <h3>Co-working Space</h3>
                  <p>Desk space and memberships in a focused, community-driven workspace.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>🧘</div>
                  <h3>Meditation Room</h3>
                  <p>A quiet, private room to reset and recharge during your workday.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>💬</div>
                  <h3>Meeting Rooms</h3>
                  <p>Space for team sessions, workshops and one-on-one conversations.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>📈</div>
                  <h3>Business Coaching</h3>
                  <p>Guidance and community for founders and professionals building something.</p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Gallery — renders the space's photos when provided */}
        {demo?.gallery && demo.gallery.length > 0 && (
        <section id="gallery" className={styles.section} style={{ background: '#f0fdfa' }}>
          <div className={styles.sectionHeader}>
            <h2>Inside the Space</h2>
            <p>Calm corners, bright desks, room to think.</p>
          </div>
          <div className={styles.whyGrid}>
            {demo.gallery.slice(0, 3).map((img, i) => (
              <div key={i} className={styles.whyCard} style={{ padding: 0, overflow: 'hidden' }}>
                <img src={img} alt={`${businessName} workspace photo ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
        )}

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>About {businessName}</h2>
            <p>{pick(demo?.about, `${businessName} is a shared workspace built for focus, calm and community.`)}</p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon}>📍</div>
              <h3>Visit Us</h3>
              <p>{pick(demo?.address, `Based in ${demo?.city || 'the local area'} — easy to reach, easy to settle into.`)}</p>
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
                <div className={styles.whyIcon}>🌿</div>
                <h3>Work, Then Breathe</h3>
                <p>Focus on your professional goals, then rest your mind — both matter here.</p>
              </div>
            )}
            {demo?.hours && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon}>🕒</div>
                <h3>Opening Hours</h3>
                <p>{demo.hours}</p>
              </div>
            )}
          </div>
        </section>

        {/* Testimonials — generic demos only; never fabricate reviews for a real business */}
        {isGeneric && (
        <section id="testimonials" className={styles.testimonialSection}>
          <div className={styles.sectionHeader}>
            <h2 style={{ color: 'white' }}>What Our Members Say</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Loved by founders, freelancers and remote teams.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;The calmest workspace I have ever worked in. I get more done and leave less drained.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Sarah M.</strong>
                <span>Member</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Exactly what I was looking for — real community, zero distractions, great energy.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>James K.</strong>
                <span>Member</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;A workspace that actually cares about your headspace. Highly recommended.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Priya R.</strong>
                <span>Member</span>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* A Day Here */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>A Day at {businessName}</h2>
            <p>Getting started is easy.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Book a Tour</h3>
              <p>Call or message us and come see the space for yourself.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Pick Your Spot</h3>
              <p>Choose the desk or room that fits how you like to work.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>Work in Focus</h3>
              <p>Settle in, connect, and get your best work done.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Reset &amp; Recharge</h3>
              <p>Step into the quiet space, breathe, and head home clear-headed.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className={styles.ctaSection}>
          <h2>Come Work Calm at {businessName}</h2>
          <p>Book a tour today{demo?.phone ? ` — reach us on ${demo.phone}` : ''}.</p>
          <div className={styles.ctaButtons}>
            <button className={styles.btnCtaWhite}>Book a Tour</button>
            <button className={styles.btnCtaOutline}>{demo?.phone ? `Call ${demo.phone}` : 'Call Now'}</button>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
              <span className={styles.logoIcon}>🪴</span>
              {businessName}
            </div>
            <p>📍 {pick(demo?.address, `Based in ${demo?.city || 'the local area'}`)}</p>
            <p>📞 {pick(demo?.phone, 'Call us — we are happy to help')}</p>
            {demo?.email && <p>✉️ {demo.email}</p>}
            {demo?.hours && <p>🕒 {demo.hours}</p>}
          </div>
          <div className={styles.footerLinksGroup}>
            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <a href="#services">Spaces</a>
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

export default CoworkingTemplate;
