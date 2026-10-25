import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import styles from './Education.module.css';

/**
 * Education / general-business template.
 *
 * Data-driven: when a personalized demo JSON is provided, the page renders the
 * business's real name, about, services, contact details and rating. All copy
 * stays neutral so the same template works for bookshops, tutors, training
 * centres and any other business — never school-locked.
 */
const EducationTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const services = demo?.services && demo.services.length > 0 ? demo.services : null;
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;

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
          <span className={styles.logoIcon}>
            <ServiceMark industry="education" size={30} />
          </span>
          {businessName}
        </div>
        <nav className={styles.nav}>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          {isGeneric && <a href="#testimonials">Reviews</a>}
          <a href="#contact" className={styles.navCta}>Contact Us</a>
        </nav>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="education"
          layout="banner"
          display="sans"
          accent="#0284c7"
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
                    <ServiceMark industry="education" size={30} />
                  </div>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))
            ) : isGeneric ? (
              <>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="education" size={30} />
                  </div>
                  <h3>Free Consultation</h3>
                  <p>Tell us what you need and we will point you in the right direction — no pressure, no jargon.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="education" size={30} />
                  </div>
                  <h3>Wide Selection</h3>
                  <p>A carefully curated range of products and services to cover every need and budget.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="education" size={30} />
                  </div>
                  <h3>Personal Service</h3>
                  <p>Real humans who know their craft and genuinely enjoy helping customers.</p>
                </div>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon} aria-hidden="true">
                    <ServiceMark industry="education" size={30} />
                  </div>
                  <h3>Quality Guaranteed</h3>
                  <p>We stand behind everything we sell and every service we provide.</p>
                </div>
              </>
            ) : (
              <p style={{ textAlign: 'center' }}>
                A personalized service menu can be added here after the business confirms its details.
              </p>
            )}
          </div>
        </section>

        <DemoGallery demo={demo} title="Gallery" />

        {/* About Section — contact cards render only from supplied data */}
        <section id="about" className={styles.section} style={{ background: '#f1f5f9' }}>
          <div className={styles.sectionHeader}>
            <h2>About {businessName}</h2>
            {demo?.about ? (
              <p>{demo.about}</p>
            ) : (
              <p>{businessName} is an independent local business built on quality, honesty and personal service.</p>
            )}
          </div>
          <div className={styles.whyGrid}>
            {(demo?.address || isGeneric) && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  <ServiceMark industry="education" size={30} />
                </div>
                <h3>Visit Us</h3>
                <p>{demo?.address || `Find us in ${demo?.city || 'town'} — easy to reach, easy to love.`}</p>
              </div>
            )}
            {(demo?.phone || isGeneric) && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  <ServiceMark industry="education" size={30} />
                </div>
                <h3>Call Us</h3>
                <p>
                  {demo?.phone && tel ? (
                    <a href={tel}>{demo.phone}</a>
                  ) : (
                    'Give us a ring — we are happy to help with any question.'
                  )}
                </p>
              </div>
            )}
            {(demo?.email || isGeneric) && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  <ServiceMark industry="education" size={30} />
                </div>
                <h3>Email Us</h3>
                <p>
                  {demo?.email ? (
                    <a href={`mailto:${demo.email}`}>{demo.email}</a>
                  ) : (
                    'Drop us a message any time and we will get back to you promptly.'
                  )}
                </p>
              </div>
            )}
            {demo?.hours && (
              <div className={styles.whyCard}>
                <div className={styles.whyIcon} aria-hidden="true">
                  <ServiceMark industry="education" size={30} />
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
            <p style={{ color: 'rgba(255,255,255,0.8)' }}>Trusted by customers.</p>
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
              <p>Call, email or drop by — tell us what you are looking for.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>2</div>
              <h3>We Recommend</h3>
              <p>We will suggest the best option for your needs and budget.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>3</div>
              <h3>We Deliver</h3>
              <p>Fast, careful service — exactly as promised.</p>
            </div>
            <div className={styles.stepCard}>
              <div className={styles.stepNumber}>4</div>
              <h3>Enjoy!</h3>
              <p>Walk away happy — and come back any time.</p>
            </div>
          </div>
        </section>

        {/* Call to Action — links only to real destinations */}
        <section id="contact" className={styles.ctaSection}>
          <h2>Get in Touch with {businessName}</h2>
          <p>Have a question or ready to get started? Reach out today{demo?.phone ? ` on ${demo.phone}` : ''}.</p>
          <div className={styles.ctaButtons}>
            <a href="#services" className={styles.btnCtaWhite} style={{ textDecoration: 'none' }}>
              Explore Services
            </a>
            {demo?.phone && tel && (
              <a href={tel} className={styles.btnCtaOutline} style={{ textDecoration: 'none' }}>
                Call {demo.phone}
              </a>
            )}
            {demo?.bookingUrl && (
              <a
                href={demo.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnCtaOutline}
                style={{ textDecoration: 'none' }}
              >
                Book Online
              </a>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerInfo}>
            <div className={styles.logo} style={{ color: 'white', marginBottom: '1rem' }}>
              <span className={styles.logoIcon}>
                <ServiceMark industry="education" size={30} />
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
                <p>📍 Serving the local area</p>
                <p>📞 Call us — we are happy to help</p>
              </>
            )}
          </div>
          <div className={styles.footerLinksGroup}>
            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <a href="#about">About Us</a>
              <a href="#services">Services</a>
              {isGeneric && <a href="#testimonials">Reviews</a>}
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

export default EducationTemplate;
