import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark, pick } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import styles from './Services.module.css';

/**
 * Services / local-business template.
 *
 * Data-driven: when a personalized demo JSON is provided, the page renders the
 * business's real name, about, services, contact details and rating. All copy
 * stays neutral so the same template works for auto detailing, pet grooming,
 * repairs, cleaning, home services and any other local service business —
 * never trade-locked.
 *
 * Honesty rule: placeholder sections (reviews/testimonials, marketing claims)
 * only render on generic demos. When a real business's data is present they
 * must not render fabricated reviews or claims in its name.
 */
const ServicesTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const services = demo?.services && demo.services.length > 0 ? demo.services : null;

  return (
    <div className={styles.container}>
      {/* Top Banner */}
      <div className={styles.topBanner}>
        <span>
          Welcome to {businessName}
          {demo?.city ? ` — proudly serving ${demo.city}` : ''}!
        </span>
      </div>

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon} aria-hidden="true">
            <ServiceMark industry="services" size={24} />
          </span>
          {businessName}
        </div>
        <nav className={styles.nav}>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          {isGeneric && <a href="#testimonials">Reviews</a>}
          <a href="#contact" className={styles.navCta}>Book Now</a>
        </nav>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="services"
          layout="banner"
          display="sans"
          accent="#059669"
        />

        {/* Highlights Section */}
        <section className={styles.highlightsSection}>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightCard}>
              <h3>100%</h3>
              <p>Customer Satisfaction Focus</p>
            </div>
            {demo?.reviewCount ? (
              <div className={styles.highlightCard}>
                <h3>{`${demo.reviewCount}+`}</h3>
                <p>Happy Customers</p>
              </div>
            ) : null}
            {services ? (
              <div className={styles.highlightCard}>
                <h3>{services.length}</h3>
                <p>Services Offered</p>
              </div>
            ) : null}
            <div className={styles.highlightCard}>
              <h3>{demo?.city || 'Local'}</h3>
              <p>Proudly Serving</p>
            </div>
          </div>
        </section>

        {/* Services Section — renders the business's real services when provided */}
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Our Services</h2>
            <p>Everything {businessName} offers, all in one place.</p>
          </div>
          <div className={styles.whyGrid}>
            {services ? (
              services.map((service, i) => (
                <div key={i} className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="services" size={30} />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))
            ) : isGeneric ? (
              <>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="services" size={30} />
                  </div>
                  <h3>Free Quote</h3>
                  <p>Tell us what you need and we will give you a clear, honest price — no pressure, no jargon.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="services" size={30} />
                  </div>
                  <h3>At Your Convenience</h3>
                  <p>Mobile and on-site service that fits around your schedule, not the other way round.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="services" size={30} />
                  </div>
                  <h3>Personal Service</h3>
                  <p>Real humans who know their craft and genuinely care about doing a great job.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="services" size={30} />
                  </div>
                  <h3>Satisfaction Guaranteed</h3>
                  <p>We stand behind every service we provide — if it is not right, we make it right.</p>
                </div>
              </>
            ) : (
              <p style={{ textAlign: 'center' }}>
                Service details can be added here after the business confirms them.
              </p>
            )}
          </div>
        </section>

        {/* Gallery — renders the business's photos when provided */}
        {demo?.gallery && demo.gallery.length > 0 && (
        <section className={styles.section} style={{ background: '#f1f5f9' }}>
          <div className={styles.sectionHeader}>
            <h2>See {businessName} in Action</h2>
            <p>A glimpse of the quality we deliver.</p>
          </div>
          <div className={styles.whyGrid}>
            {demo.gallery.slice(0, 3).map((img, i) => (
              <div key={i} className={styles.whyCard} style={{ padding: 0, overflow: 'hidden' }}>
                <img src={img} alt={`${businessName} photo ${i + 1}`} style={{ width: '100%', height: '220px', objectFit: 'cover', display: 'block' }} loading="lazy" />
              </div>
            ))}
          </div>
        </section>
        )}

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>About {businessName}</h2>
            <p>{pick(demo?.about, `${businessName} is an independent local business built on quality, honesty and personal service.`)}</p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyCard}>
              <div className={styles.whyIcon} aria-hidden="true">
                <ServiceMark industry="services" size={30} />
              </div>
              <h3>Find Us</h3>
              <p>{pick(demo?.address, `Serving ${demo?.city || 'the local area'} — easy to reach, easy to love.`)}</p>
            </div>
            {demo?.phone && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  <ServiceMark industry="services" size={30} />
                </div>
                <h3>Call Us</h3>
                <p>
                  <a href={`tel:${demo.phone.replace(/[^+0-9]/g, '')}`}>{demo.phone}</a>
                </p>
              </div>
            )}
            {demo?.email && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  <ServiceMark industry="services" size={30} />
                </div>
                <h3>Email Us</h3>
                <p>
                  <a href={`mailto:${demo.email}`}>{demo.email}</a>
                </p>
              </div>
            )}
            {demo?.hours && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  <ServiceMark industry="services" size={30} />
                </div>
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
            <h2 style={{ color: 'white' }}>What Our Customers Say</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Trusted by happy customers everywhere.</p>
          </div>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Wonderful experience from start to finish. Knowledgeable, friendly and genuinely helpful — I will definitely be back.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Sarah M.</strong>
                <span>Happy Customer</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Exactly what I was looking for, and the personal touch made all the difference. Highly recommended.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>James K.</strong>
                <span>Happy Customer</span>
              </div>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.testimonialText}>&ldquo;Great quality and honest advice. It is rare to find this level of care these days.&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>Priya R.</strong>
                <span>Happy Customer</span>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* How It Works */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>How It Works</h2>
            <p>Getting started with {businessName} is easy.</p>
          </div>
          <div className={styles.stepsGrid}>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>1</div>
              <h3>Get in Touch</h3>
              <p>Call, message or book online — tell us what you need.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>Get a Clear Quote</h3>
              <p>We will confirm the service and price up front — no surprises.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>We Do the Work</h3>
              <p>Careful, professional service — done right the first time.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Enjoy the Result</h3>
              <p>Sit back and enjoy — and come back any time.</p>
            </div>
          </div>
        </section>

        {/* Call to Action — real links only; no dead buttons */}
        <section id="contact" className={styles.ctaSection}>
          <h2>Book with {businessName}</h2>
          <p>Ready to get started? Reach out today{demo?.phone ? ` on ${demo.phone}` : ''}.</p>
          <div className={styles.ctaButtons}>
            {demo?.bookingUrl && (
              <a
                href={demo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnCtaWhite}
                style={{ textDecoration: 'none' }}
              >
                Book Now
              </a>
            )}
            {demo?.phone && (
              <a
                href={`tel:${demo.phone.replace(/[^+0-9]/g, '')}`}
                className={styles.btnCtaOutline}
                style={{ textDecoration: 'none' }}
              >
                Call {demo.phone}
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
              <span className={styles.logoIcon} aria-hidden="true">
                <ServiceMark industry="services" size={24} />
              </span>
              {businessName}
            </div>
            <p>📍 {pick(demo?.address, `Serving ${demo?.city || 'the local area'}`)}</p>
            {demo?.phone && (
              <p>
                📞 <a href={`tel:${demo.phone.replace(/[^+0-9]/g, '')}`}>{demo.phone}</a>
              </p>
            )}
            {demo?.email && (
              <p>
                ✉️ <a href={`mailto:${demo.email}`}>{demo.email}</a>
              </p>
            )}
            {demo?.hours && <p>🕒 {demo.hours}</p>}
          </div>
          <div className={styles.footerLinksGroup}>
            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
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

export default ServicesTemplate;
