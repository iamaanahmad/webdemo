import React from 'react';
import { TemplateProps } from '../registry';
import { ServiceMark } from '@/components/DemoBits';
import DemoHero from '@/components/DemoHero';
import DemoGallery from '@/components/DemoGallery';
import { fallbackHeroImage } from '../demo-data';
import styles from './Hotel2.module.css';

const HotelTemplate2: React.FC<TemplateProps> = ({ businessName, demo }) => {
  const isGeneric = !demo;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;
  const photo = demo?.heroImage || fallbackHeroImage('hotel');
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>{businessName}</div>
        <nav className={styles.nav}>
          <a href="#rooms">Rooms</a>
          {isGeneric && <a href="#experiences">Experiences</a>}
          {isGeneric && <a href="#reviews">Reviews</a>}
          <a href="#location">Neighborhood</a>
          <a href="#book" className={styles.btnOutline}>Check Dates</a>
        </nav>
      </header>

      <main>
        <DemoHero
          demo={demo}
          businessName={businessName}
          industry="hotel"
          layout="split"
          display="serif"
          accent="#5d4037"
          contactHref="#book"
          servicesHref="#rooms"
        />

        {/* Vibe / About — real copy only from the demo; showcase story stays generic-only */}
        <section className={styles.vibeSection}>
          <div className={styles.vibeGrid}>
            <div className={styles.vibeText}>
              <h2>Not Just a Room. <br/> A Lifestyle.</h2>
              {demo?.about ? (
                <p>{demo.about}</p>
              ) : (
                <>
                  <p>Every corner of {businessName} is designed to inspire. From locally roasted coffee in the lobby to custom-designed furniture in every suite, we&apos;ve curated an environment that feels both luxurious and entirely like home.</p>
                  <p>Our 28-room property is intentionally intimate — because we believe great hospitality is personal.</p>
                </>
              )}
              <a href="#rooms" className={styles.link}>View Rooms →</a>
            </div>
            <div className={styles.vibeImage} style={{ backgroundImage: `url(${photo})` }}></div>
          </div>
        </section>

        {/* Rooms — real services as stays; invented rooms + prices stay generic-only */}
        <section id="rooms" className={styles.roomsSection}>
          <div className={styles.sectionHeader}>
            <h2>Signature Rooms</h2>
            <p>Each room is uniquely designed with local art and premium amenities.</p>
          </div>
          {demo?.services && demo.services.length > 0 ? (
            <div className={styles.roomsGrid}>
              {demo.services.map((service, i) => (
                <div key={i} className={styles.roomCard}>
                  <div className={styles.roomInfo}>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <div className={styles.roomFooter}>
                      <a href="#book">Book Now</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : isGeneric ? (
            <div className={styles.roomsGrid}>
              <div className={styles.roomCard}>
                <div className={styles.roomImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=600&auto=format&fit=crop')" }}></div>
                <div className={styles.roomInfo}>
                  <h3>The Studio</h3>
                  <p>Perfect for solo travelers or couples. Features a king bed, rain shower, and curated minibar.</p>
                  <div className={styles.roomFooter}>
                    <span>From $199/night</span>
                    <a href="#book">Details</a>
                  </div>
                </div>
              </div>
              <div className={styles.roomCard}>
                <div className={styles.roomImage} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=600&auto=format&fit=crop')" }}></div>
                <div className={styles.roomInfo}>
                  <h3>The Loft Suite</h3>
                  <p>Spacious open-plan living with panoramic city views, freestanding tub, and private terrace.</p>
                  <div className={styles.roomFooter}>
                    <span>From $349/night</span>
                    <a href="#book">Details</a>
                  </div>
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

        {/* Experiences — showcase copy only; real hotels show their services under Rooms */}
        {isGeneric && (
        <section id="experiences" className={styles.experiencesSection}>
          <div className={styles.sectionHeader}>
            <h2>Curated Experiences</h2>
            <p>More than a stay — it&apos;s a lifestyle.</p>
          </div>
          <div className={styles.experiencesGrid}>
            <div className={styles.expCard}>
              <span className={styles.expIcon} aria-hidden="true">
                <ServiceMark industry="hotel" size={28} />
              </span>
              <h3>Rooftop Coffee Bar</h3>
              <p>Start your morning with single-origin pour-overs and city views.</p>
            </div>
            <div className={styles.expCard}>
              <span className={styles.expIcon} aria-hidden="true">
                <ServiceMark industry="hotel" size={28} />
              </span>
              <h3>Morning Yoga</h3>
              <p>Complimentary sunrise yoga sessions on the terrace.</p>
            </div>
            <div className={styles.expCard}>
              <span className={styles.expIcon} aria-hidden="true">
                <ServiceMark industry="hotel" size={28} />
              </span>
              <h3>Art Walks</h3>
              <p>Guided tours of the neighborhood&apos;s best galleries and studios.</p>
            </div>
            <div className={styles.expCard}>
              <span className={styles.expIcon} aria-hidden="true">
                <ServiceMark industry="hotel" size={28} />
              </span>
              <h3>Wine & Cheese</h3>
              <p>Evening social hour with curated local wines and artisan cheeses.</p>
            </div>
          </div>
        </section>
        )}

        {/* Reviews — generic demos only; never fabricate reviews for a real business */}
        {isGeneric && (
        <section id="reviews" className={styles.reviewsSection}>
          <div className={styles.sectionHeader}>
            <h2>Guest Stories</h2>
            <p>Rated 4.9/5 on TripAdvisor</p>
          </div>
          <div className={styles.reviewsGrid}>
            <div className={styles.reviewCard}>
              <p>&ldquo;This hotel is a hidden gem. The attention to detail is extraordinary — from the hand-written welcome note to the locally curated minibar. We didn&apos;t want to leave.&rdquo;</p>
              <strong>— Sarah & James, London</strong>
            </div>
            <div className={styles.reviewCard}>
              <p>&ldquo;The rooftop coffee bar alone is worth the stay. Add in the incredible rooms and the neighborhood location, and you have perfection.&rdquo;</p>
              <strong>— Marco T., New York</strong>
            </div>
            <div className={styles.reviewCard}>
              <p>&ldquo;Finally a hotel that feels like it was designed by someone who actually travels. Every detail is thoughtful. Already booked my next stay.&rdquo;</p>
              <strong>— Aisha K., Dubai</strong>
            </div>
          </div>
        </section>
        )}

        {/* Neighborhood — real address for real hotels; showcase tags stay generic-only */}
        <section id="location" className={styles.locationSection}>
          <div className={styles.locationContent}>
            <h2>Live Like a Local</h2>
            {demo?.address ? (
              <p>{demo.address}</p>
            ) : isGeneric ? (
              <>
                <p>Step outside and you&apos;re immediately immersed in the city&apos;s best cafes, galleries, and boutiques. Ask our concierge for the hidden gems you won&apos;t find in a guidebook.</p>
                <div className={styles.tags}>
                  <span className={styles.tag}>Art Galleries</span>
                  <span className={styles.tag}>Craft Cocktails</span>
                  <span className={styles.tag}>Vintage Shopping</span>
                  <span className={styles.tag}>Live Music</span>
                  <span className={styles.tag}>Farm-to-Table Dining</span>
                </div>
              </>
            ) : (
              <p>Location details can be added here after the property confirms them.</p>
            )}
          </div>
        </section>

        {/* Booking CTA — honest panel; no dead availability form */}
        <section id="book" className={styles.bookingSection}>
          <div className={styles.bookingContent}>
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
                  className={styles.btnDark}
                  style={{ textDecoration: 'none' }}
                >
                  Book Online
                </a>
              )}
              {demo?.phone && tel && (
                <a href={tel} className={styles.btnDark} style={{ textDecoration: 'none' }}>
                  Call {demo.phone}
                </a>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          <div className={styles.footerCol}>
            <h2>{businessName}</h2>
            <p>The Boutique Experience</p>
          </div>
          <div className={styles.footerCol}>
            <h4>Contact</h4>
            {demo?.address && <p>📍 {demo.address}</p>}
            {demo?.email && (
              <p>
                ✉️ <a href={`mailto:${demo.email}`}>{demo.email}</a>
              </p>
            )}
            {demo?.phone && tel && (
              <p>
                📞 <a href={tel}>{demo.phone}</a>
              </p>
            )}
            {isGeneric && (
              <>
                <p>📍 100 Creative Way, Arts District</p>
                <p>📞 (555) 789-0123</p>
              </>
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

export default HotelTemplate2;
