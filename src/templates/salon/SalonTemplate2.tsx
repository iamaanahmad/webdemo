import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark, RatingBadge } from '@/components/DemoBits';
import DemoGallery from '@/components/DemoGallery';
import { fallbackHeroImage } from '../demo-data';
import styles from './Salon2.module.css';

/**
 * Dark Elegance salon variant. A concept preview, not an operating business
 * website. Only supplied facts render — no invented team, prices, or reviews.
 */
const SalonTemplate2: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const name = demo?.businessName || businessName;
  const photo = demo?.heroImage || fallbackHeroImage('salon');
  const subhead = demo?.tagline || demo?.about;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        Website concept by CIT India. Not the official business website. No appointments are accepted here. Images are illustrative.
      </div>
      <header className={styles.header}>
        <div className={styles.logo}>{name}</div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          {demo?.bookingUrl && (
            <a
              href={demo.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.outlineBtn}
            >
              Book Now
            </a>
          )}
        </nav>
      </header>
      <main>
        <section className={styles.hero} style={{ backgroundImage: `url(${photo})` }}>
          <div className={styles.heroOverlay}>
            <div className={styles.heroContent}>
              {demo?.city && <span className={styles.subtitle}>{demo.city}</span>}
              <h1>{name}</h1>
              {subhead && <p>{subhead}</p>}
              <RatingBadge demo={demo} />
              <div className={styles.heroBtnRow}>
                {demo?.bookingUrl && (
                  <a href={demo.bookingUrl} target="_blank" rel="noopener noreferrer" className={styles.heroBtn}>
                    Book Now
                  </a>
                )}
                {tel && (
                  <a href={tel} className={styles.heroBtn}>
                    Call {demo?.phone}
                  </a>
                )}
                <a href="#services" className={styles.heroBtn}>
                  Explore Services
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Services</h2>
            <div className={styles.divider} />
          </div>
          {demo?.services?.length ? (
            <div className={styles.servicesGrid}>
              {demo.services.map((service, i) => (
                <div key={i} className={styles.serviceItem}>
                  <div className={styles.serviceMark} aria-hidden="true">
                    <ServiceMark industry="salon" size={30} />
                  </div>
                  <div className={styles.serviceText}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: 'center' }}>
              A personalized service menu can be added here after the business confirms its details.
            </p>
          )}
        </section>
        {demo?.about && (
          <section className={styles.aboutSection}>
            <div className={styles.aboutGrid}>
              <div className={styles.aboutImage} style={{ backgroundImage: `url(${photo})` }} />
              <div className={styles.aboutContent}>
                <h2>About {name}</h2>
                <p>{demo.about}</p>
                {demo?.hours && <p>{demo.hours}</p>}
              </div>
            </div>
          </section>
        )}
        <DemoGallery demo={demo} title="Gallery" />
        <section id="contact" className={styles.contactSection}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Contact {name}</h2>
              <p>Reach the studio directly — this preview takes no bookings itself.</p>
              <div className={styles.contactDetails}>
                {demo?.address && <p>{demo.address}</p>}
                {demo?.phone && tel && (
                  <p>
                    <a href={tel}>{demo.phone}</a>
                  </p>
                )}
                {demo?.email && (
                  <p>
                    <a href={`mailto:${demo.email}`}>{demo.email}</a>
                  </p>
                )}
                {demo?.hours && <p>{demo.hours}</p>}
              </div>
            </div>
            <div className={styles.contactForm}>
              <h3>Your website, your style</h3>
              <p>
                This concept shows a possible layout. A finished website can include a confirmed
                service menu, the studio&apos;s own gallery, and its existing booking route.
              </p>
              <p>No booking request is submitted from this preview.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <h2>{name}</h2>
          <p>Concept preview. Not an official business website.</p>
          <p className={styles.credit}>
            Website concept by <a href="https://cit.org.in">CIT India</a>
          </p>
        </div>
      </footer>
    </div>
  );
};
export default SalonTemplate2;
