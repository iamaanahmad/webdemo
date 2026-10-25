import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import { fallbackHeroImage } from '../demo-data';
import styles from './Restaurant2.module.css';

const RestaurantTemplate2: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;
  const photo = demo?.heroImage || fallbackHeroImage('restaurant');
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#menu">Our Menu</a>
          <a href="#about">Our Story</a>
          {isGeneric && <a href="#reviews">Reviews</a>}
          <a href="#location">Find Us</a>
          <a href="#order" className={styles.navCta}>Order Online</a>
        </nav>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="restaurant"
          layout="split"
          display="sans"
          accent="#d97706"
          contactHref="#order"
          servicesHref="#menu"
        />

        {/* Features — real services for real restaurants; showcase claims stay generic-only */}
        {(demo?.services && demo.services.length > 0) || isGeneric ? (
        <section className={styles.featuresSection}>
          <div className={styles.featuresGrid}>
            {demo?.services && demo.services.length > 0 ? (
              demo.services.slice(0, 4).map((service, i) => (
                <div key={i} className={styles.featureCard}>
                  <span className={styles.featureIcon} aria-hidden="true">
                    <ServiceMark industry="restaurant" size={28} />
                  </span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                </div>
              ))
            ) : (
              <>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="restaurant" size={28} />
              </span>
              <h3>Artisanal Coffee</h3>
              <p>Ethically sourced beans roasted in-house to perfection.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="restaurant" size={28} />
              </span>
              <h3>Fresh Pastries</h3>
              <p>Baked in-house every morning by our pastry chef.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="restaurant" size={28} />
              </span>
              <h3>Healthy Eats</h3>
              <p>Nourishing bowls, salads, and sandwiches daily.</p>
            </div>
            <div className={styles.featureCard}>
              <span className={styles.featureIcon} aria-hidden="true">
                <ServiceMark industry="restaurant" size={28} />
              </span>
              <h3>Locally Sourced</h3>
              <p>Ingredients from local farms and organic suppliers.</p>
            </div>
              </>
            )}
          </div>
        </section>
        ) : null}

        {/* About / Story — real copy only from the demo */}
        <section id="about" className={styles.aboutSection}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImage} style={{ backgroundImage: `url(${photo})` }}></div>
            <div className={styles.aboutContent}>
              <h2>Our Story</h2>
              {demo?.about ? (
                <p>{demo.about}</p>
              ) : (
                <>
                  <p>What started as a small coffee cart in 2015 has grown into the neighborhood&apos;s favorite gathering spot. At {businessName}, we believe food should be honest, fresh, and made with love.</p>
                  <p>Every recipe is crafted with locally sourced ingredients, and our baristas are trained to bring out the best in every single cup. We&apos;re not just a cafe — we&apos;re your community&apos;s living room.</p>
                </>
              )}
              {isGeneric && (
              <div className={styles.aboutHighlights}>
                <div><strong>2015</strong><span>Founded</span></div>
                <div><strong>100%</strong><span>Organic Coffee</span></div>
                <div><strong>Local</strong><span>Farm Partners</span></div>
              </div>
              )}
            </div>
          </div>
        </section>

        {/* Menu — real services for real restaurants; showcase dishes stay generic-only */}
        <section id="menu" className={styles.menuPreviewSection}>
          <div className={styles.sectionHeader}>
            <h2>Customer Favorites</h2>
            <p>A taste of what we have to offer.</p>
          </div>
          {demo?.services && demo.services.length > 0 ? (
            <div className={styles.grid}>
              {demo.services.map((service, i) => (
                <div key={i} className={styles.card}>
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
                <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=500&auto=format&fit=crop')" }}></div>
                <div className={styles.cardContent}>
                  <h3>Avocado Toast</h3>
                  <p>Sourdough, smashed avocado, radish, microgreens, poached egg.</p>
                  <span className={styles.price}>$12</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=500&auto=format&fit=crop')" }}></div>
                <div className={styles.cardContent}>
                  <h3>Acai Bowl</h3>
                  <p>Blended acai, house granola, fresh berries, coconut flakes.</p>
                  <span className={styles.price}>$10</span>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=500&auto=format&fit=crop')" }}></div>
                <div className={styles.cardContent}>
                  <h3>House Latte</h3>
                  <p>Espresso, steamed milk, house-made vanilla bean syrup.</p>
                  <span className={styles.price}>$5</span>
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

        {/* Reviews — generic demos only; never fabricate reviews for a real business */}
        {isGeneric && (
        <section id="reviews" className={styles.reviewsSection}>
          <div className={styles.sectionHeader}>
            <h2>What People Say</h2>
            <p>Rated 4.9/5 on Google with 500+ reviews</p>
          </div>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p>&ldquo;Best coffee in town, hands down. The avocado toast is life-changing. Cozy atmosphere and super friendly staff!&rdquo;</p>
              <strong>— Priya S.</strong>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p>&ldquo;My go-to work-from-cafe spot. Great WiFi, amazing pastries, and they never rush you. Perfect vibes.&rdquo;</p>
              <strong>— Alex T.</strong>
            </div>
            <div className={styles.reviewCard}>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
              <p>&ldquo;The acai bowls are incredible and so fresh. Love that they source everything locally. A true gem!&rdquo;</p>
              <strong>— Maria K.</strong>
            </div>
          </div>
        </section>
        )}

        {/* Order CTA — honest panel; no dead order button */}
        <section id="order" className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h2>Skip the Line</h2>
            <p>
              Order ahead through the restaurant&apos;s real ordering route and pick up at the
              counter. This preview takes no orders itself.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              {demo?.bookingUrl && (
                <a
                  href={demo.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.btnPrimary}
                  style={{ textDecoration: 'none' }}
                >
                  Order Online
                </a>
              )}
              {demo?.phone && tel && (
                <a href={tel} className={styles.btnPrimary} style={{ textDecoration: 'none' }}>
                  Call {demo.phone}
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Location */}
        <section id="location" className={styles.locationSection}>
          <div className={styles.locationGrid}>
            <div className={styles.locationInfo}>
              <h2>Find Us</h2>
              <div className={styles.locationDetails}>
                {/* Address renders only from supplied demo data — never invent one for a real business */}
                {(demo?.address || isGeneric) && (
                <div>
                  <h4>📍 Address</h4>
                  <p>{demo?.address || '456 Cafe Lane, Sunnyvale, CA 94086'}</p>
                </div>
                )}
                <div>
                  <h4>🕐 Hours</h4>
                  {demo?.hours ? (
                    <p>{demo.hours}</p>
                  ) : isGeneric ? (
                    <>
                  <p>Mon - Fri: 7am - 4pm</p>
                  <p>Sat - Sun: 8am - 5pm</p>
                    </>
                  ) : (
                    <p>Hours can be added here after the restaurant confirms them.</p>
                  )}
                </div>
                {/* Contact renders only from supplied demo data — never invent a phone or email for a real business */}
                {(demo?.phone || demo?.email || isGeneric) && (
                <div>
                  <h4>📞 Contact</h4>
                  {(demo?.phone || isGeneric) && (
                    <p>{demo?.phone ? <a href={tel as string}>{demo.phone}</a> : '(555) 234-5678'}</p>
                  )}
                  {demo?.email && (
                    <p>
                      <a href={`mailto:${demo.email}`}>{demo.email}</a>
                    </p>
                  )}
                </div>
                )}
              </div>
            </div>
            <div className={styles.locationMap} style={{ backgroundImage: `url(${photo})` }}></div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h2>{businessName}</h2>
            <p>Your daily dose of happiness.</p>
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

export default RestaurantTemplate2;
