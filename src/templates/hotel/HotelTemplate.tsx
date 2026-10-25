import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import styles from './Hotel.module.css';

const HotelTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#accommodations">Accommodations</a>
          <a href="#amenities">Amenities</a>
          <a href="#book" className={styles.btnOutline}>Book Now</a>
        </nav>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="hotel"
          layout="full"
          display="serif"
          accent="#d4af37"
          contactHref="#book"
          servicesHref="#accommodations"
        />

        {/* Accommodations — real services as stays; showcase rooms stay generic-only */}
        <section id="accommodations" className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Luxurious Stays</h2>
            <div className={styles.divider}></div>
            <p>Elegantly appointed suites designed for your ultimate comfort.</p>
          </div>
          {demo?.services && demo.services.length > 0 ? (
            <div className={styles.grid}>
              {demo.services.map((service, i) => (
                <div key={i} className={styles.card}>
                  <div className={styles.cardMark} aria-hidden="true">
                    <ServiceMark industry="hotel" size={30} />
                  </div>
                  <div className={styles.cardContent}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : isGeneric ? (
            <div className={styles.grid}>
              <div className={styles.card}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=800&auto=format&fit=crop')" }}></div>
                <div className={styles.cardContent}>
                  <h3>Ocean View Suite</h3>
                  <p>Spacious 800 sq ft suite with a private balcony overlooking the ocean.</p>
                  <a href="#book" className={styles.link}>Book Now &rarr;</a>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop')" }}></div>
                <div className={styles.cardContent}>
                  <h3>Presidential Villa</h3>
                  <p>Ultimate privacy with a private infinity pool and dedicated butler service.</p>
                  <a href="#book" className={styles.link}>Book Now &rarr;</a>
                </div>
              </div>
            </div>
          ) : (
            <p style={{ textAlign: 'center' }}>
              Room and stay details can be added here after the property confirms them.
            </p>
          )}
        </section>

        <DemoGallery demo={demo} title="Gallery" />

        {/* Amenities Banner */}
        <section id="amenities" className={styles.amenitiesSection}>
          <div className={styles.amenitiesOverlay}>
            <h2>World-Class Amenities</h2>
            <div className={styles.amenitiesGrid}>
              {demo?.services && demo.services.length > 0 ? (
                demo.services.map((service, i) => (
                  <div key={i} className={styles.amenityItem}>
                    <span className={styles.amenityIcon} aria-hidden="true">
                      <ServiceMark industry="hotel" size={28} />
                    </span>
                    <h4>{service.name}</h4>
                  </div>
                ))
              ) : isGeneric ? (
                <>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon} aria-hidden="true">
                  <ServiceMark industry="hotel" size={28} />
                </span>
                <h4>Award-Winning Spa</h4>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon} aria-hidden="true">
                  <ServiceMark industry="hotel" size={28} />
                </span>
                <h4>Infinity Pools</h4>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon} aria-hidden="true">
                  <ServiceMark industry="hotel" size={28} />
                </span>
                <h4>Tennis Courts</h4>
              </div>
              <div className={styles.amenityItem}>
                <span className={styles.amenityIcon} aria-hidden="true">
                  <ServiceMark industry="hotel" size={28} />
                </span>
                <h4>Golf Course</h4>
              </div>
                </>
              ) : (
                <p style={{ textAlign: 'center' }}>
                  Amenity details can be added here after the property confirms them.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Booking — honest panel; no dead search form, no invented availability */}
        <section id="book" className={styles.bookingSection}>
          <div className={styles.bookingContainer}>
            <h2>Plan Your Stay</h2>
            <p>
              This concept shows a possible layout. A finished website can include live availability
              and the property&apos;s existing booking route. No booking request is submitted from
              this preview.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {demo?.bookingUrl && (
                <a
                  href={demo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ background: 'var(--text-primary)', color: 'white', padding: '1rem 1.75rem', textDecoration: 'none' }}
                >
                  Book Online
                </a>
              )}
              {demo?.phone && tel && (
                <a href={tel} className="btn-primary" style={{ background: 'var(--text-primary)', color: 'white', padding: '1rem 1.75rem', textDecoration: 'none' }}>
                  Call {demo.phone}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerBrand}>
            <h2>{businessName}</h2>
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
            {isGeneric && (
              <>
                <p>📍 1 Resort Drive, Paradise Island</p>
              </>
            )}
          </div>
          <div className={styles.footerLinks}>
            <div>
              <h4>Resort</h4>
              <a href="#accommodations">Accommodations</a>
              <a href="#amenities">Amenities</a>
              <a href="#book">Book Now</a>
            </div>
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

export default HotelTemplate;
