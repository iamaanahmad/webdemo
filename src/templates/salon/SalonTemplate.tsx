import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import styles from './Salon.module.css';

/** A concept preview, not an operating business website. Only supplied facts render. */
const SalonTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const name = demo?.businessName || businessName;
  return (
    <div className={styles.container}>
      <aside style={{padding: '0.8rem 1.2rem', textAlign: 'center', background: '#252126', color: '#fff', fontSize: '0.9rem'}}>
        Website concept by CIT India. Not the official business website. No appointments are accepted here. Images are illustrative.
      </aside>
      <header className={styles.header}>
        <div className={styles.logo}>{name}</div>
        <nav className={styles.nav}>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="salon"
          layout="banner"
          display="serif"
          accent="#be185d"
        />
        <section id="services" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Services</h2>
            <p>Contact the studio for current availability and prices.</p>
          </div>
          {demo?.services?.length ? <div className={styles.grid}>
            {demo.services.map((service, i) => <div key={i} className={styles.card}>
              <div className={styles.cardIcon} aria-hidden="true">
                <ServiceMark industry="salon" size={30} />
              </div>
              <h3>{service.name}</h3><p>{service.description}</p>
            </div>)}
          </div> : <p style={{textAlign: 'center'}}>A personalized service menu can be added here after the business confirms its details.</p>}
        </section>
        <DemoGallery demo={demo} title="Gallery" />
        <section id="contact" className={`${styles.section} ${styles.bgLight}`}>
          <div className={styles.contactWrapper}>
            <div className={styles.contactInfo}>
              <h2>Contact {name}</h2>
              <ul className={styles.contactList}>
                {demo?.address && <li>{demo.address}</li>}
                {demo?.phone && <li><a href={`tel:${demo.phone.replace(/[^+0-9]/g, '')}`}>{demo.phone}</a></li>}
                {demo?.email && <li><a href={`mailto:${demo.email}`}>{demo.email}</a></li>}
                {demo?.hours && <li>{demo.hours}</li>}
              </ul>
            </div>
            <div className={styles.contactForm}>
              <h3>Your website, your style</h3>
              <p>This concept shows a possible layout. A finished website can include a confirmed service menu, the studio&apos;s own gallery, and its existing booking route.</p>
              <p>No booking request is submitted from this preview.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <p>Concept preview for {name}. Not an official business website.</p>
          <p className={styles.credit}>Website concept by <a href="https://cit.org.in">CIT India</a></p>
        </div>
      </footer>
    </div>
  );
};
export default SalonTemplate;
