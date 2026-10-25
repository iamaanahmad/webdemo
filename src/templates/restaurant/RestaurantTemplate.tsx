import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import { fallbackHeroImage } from '../demo-data';
import styles from './Restaurant.module.css';

const RestaurantTemplate: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;
  const photo = demo?.heroImage || fallbackHeroImage('restaurant');
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#menu">Menu</a>
          <a href="#reservations" className={styles.btnOutline}>Reserve a Table</a>
        </nav>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="restaurant"
          layout="full"
          display="serif"
          accent="#d4af37"
          contactHref="#reservations"
          servicesHref="#menu"
        />

        {/* Introduction Section */}
        <section className={styles.introSection}>
          <div className={styles.introContent}>
            <h2>A Symphony of Flavors</h2>
            <div className={styles.divider}></div>
            {demo?.about ? (
              <p>{demo.about}</p>
            ) : (
              <p>At {businessName}, we source the finest seasonal ingredients to craft innovative dishes that honor culinary traditions while pushing boundaries. Experience unparalleled service in our elegantly appointed dining room.</p>
            )}
          </div>
          <div className={styles.introImage} style={{ backgroundImage: `url(${photo})` }}></div>
        </section>

        {/* Featured Menu — renders the business's real menu/services when provided */}
        <section id="menu" className={styles.menuSection}>
          <div className={styles.sectionHeader}>
            <h2>{demo?.services && demo.services.length > 0 ? 'Our Menu' : 'Tasting Menu'}</h2>
            <div className={styles.divider}></div>
          </div>

          {demo?.services && demo.services.length > 0 ? (
            <div className={styles.menuGrid}>
              <div className={styles.menuColumn}>
                <h3>What We Serve</h3>
                {demo.services.map((service, i) => (
                  <div key={i} className={styles.menuItem}>
                    <div className={styles.menuItemHeader}>
                      <h4>
                        <span style={{ display: 'inline-flex', verticalAlign: 'middle', marginRight: '0.5rem', color: 'var(--accent-color)' }}>
                          <ServiceMark industry="restaurant" size={20} />
                        </span>
                        {service.name}
                      </h4>
                    </div>
                    <p>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : isGeneric ? (
          <div className={styles.menuGrid}>
            <div className={styles.menuColumn}>
              <h3>First Course</h3>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Wagyu Tartare</h4>
                  <span>$32</span>
                </div>
                <p>Quail egg, black truffle, toasted brioche</p>
              </div>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Seared Scallops</h4>
                  <span>$28</span>
                </div>
                <p>Cauliflower purée, brown butter, capers</p>
              </div>
            </div>

            <div className={styles.menuColumn}>
              <h3>Main Course</h3>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Duck Breast</h4>
                  <span>$48</span>
                </div>
                <p>Cherry gastrique, parsnip, wild mushrooms</p>
              </div>
              <div className={styles.menuItem}>
                <div className={styles.menuItemHeader}>
                  <h4>Chilean Sea Bass</h4>
                  <span>$52</span>
                </div>
                <p>Saffron risotto, asparagus, beurre blanc</p>
              </div>
            </div>
          </div>
          ) : (
            <p style={{ textAlign: 'center' }}>
              Menu details can be added here after the restaurant confirms them.
            </p>
          )}
        </section>

        <DemoGallery demo={demo} title="Gallery" />

        {/* Reservations — honest panel; no dead table-finder form */}
        <section id="reservations" className={styles.reservationSection}>
          <div className={styles.resContainer}>
            <h2>Make a Reservation</h2>
            <p>
              Join us for an unforgettable evening. Reservations are highly recommended. This
              preview takes no bookings itself — use the restaurant&apos;s real booking route below.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {demo?.bookingUrl && (
                <a
                  href={demo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ background: 'var(--accent-color)', color: 'var(--text-primary)', textDecoration: 'none', padding: '0.9rem 1.75rem' }}
                >
                  Book Online
                </a>
              )}
              {demo?.phone && tel && (
                <a href={tel} className="btn-primary" style={{ background: 'var(--accent-color)', color: 'var(--text-primary)', textDecoration: 'none', padding: '0.9rem 1.75rem' }}>
                  Call {demo.phone}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <div className={styles.footerCol}>
            <h2>{businessName}</h2>
            {/* Contact lines render only from supplied demo data — never invent an address or phone for a real business */}
            {(demo?.address || isGeneric) && <p>📍 {demo?.address || '123 Culinary Way, Gourmet District'}</p>}
            {(demo?.phone || isGeneric) && (
              <p>
                📞 {demo?.phone ? <a href={tel as string}>{demo.phone}</a> : '(555) 019-8765'}
              </p>
            )}
            {demo?.email && (
              <p>
                ✉️ <a href={`mailto:${demo.email}`}>{demo.email}</a>
              </p>
            )}
          </div>
          <div className={styles.footerCol}>
            <h4>Hours</h4>
            {demo?.hours ? (
              <p>{demo.hours}</p>
            ) : isGeneric ? (
              <>
            <p>Mon - Thu: 5pm - 10pm</p>
            <p>Fri - Sat: 5pm - 11pm</p>
            <p>Sunday: Closed</p>
              </>
            ) : (
              <p>Hours can be added here after the restaurant confirms them.</p>
            )}
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

export default RestaurantTemplate;
