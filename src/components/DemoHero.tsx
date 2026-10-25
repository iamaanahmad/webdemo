import React from 'react';
import type { BusinessDemoData } from '@/templates/demo-data';
import { fallbackHeroImage } from '@/templates/demo-data';
import { RatingBadge } from './DemoBits';
import styles from './DemoHero.module.css';

/**
 * Shared photo hero for every demo template.
 *
 * - Background is the demo's own heroImage, falling back to a relevant
 *   per-industry stock photo (never a flat gradient, never the same
 *   hardcoded Unsplash photo for every business).
 * - Headline is the business name; subhead is its tagline, else its about
 *   blurb. No invented slogans.
 * - CTAs link only to real destinations: the business's booking URL, its
 *   published phone number, and an on-page anchor. No dead booking forms.
 */
export type DemoHeroProps = {
  demo?: BusinessDemoData | null;
  businessName: string;
  industry: string;
  /** 'banner' (centered photo banner), 'split' (text + photo side by side), 'full' (viewport hero) */
  layout?: 'banner' | 'split' | 'full';
  /** 'serif' (editorial), 'sans' (modern), 'condensed' (bold/athletic) headline face */
  display?: 'serif' | 'sans' | 'condensed';
  /** Button/eyebrow accent color for this industry */
  accent?: string;
  /** On-page anchor for the contact/book section of this template */
  contactHref?: string;
  /** On-page anchor for the services section of this template */
  servicesHref?: string;
};

export default function DemoHero({
  demo,
  businessName,
  industry,
  layout = 'banner',
  display = 'sans',
  accent = '#2563eb',
  contactHref = '#contact',
  servicesHref = '#services',
}: DemoHeroProps) {
  const name = demo?.businessName || businessName;
  const photo = demo?.heroImage || fallbackHeroImage(industry);
  const subhead = demo?.tagline || demo?.about;
  const tel = demo?.phone ? `tel:${demo.phone.replace(/[^+0-9]/g, '')}` : null;

  const content = (
    <div className={styles.heroContent}>
      {demo?.city && <p className={styles.eyebrow}>{demo.city}</p>}
      <h1>{name}</h1>
      {subhead && <p className={styles.subhead}>{subhead}</p>}
      <RatingBadge demo={demo} />
      <div className={styles.heroButtons}>
        {demo?.bookingUrl && (
          <a
            href={demo.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
            style={{ background: accent }}
          >
            Book Now
          </a>
        )}
        {tel && (
          <a href={tel} className={styles.btnOutline}>
            Call {demo?.phone}
          </a>
        )}
        <a href={servicesHref} className={styles.btnGhost}>
          Explore Services
        </a>
      </div>
    </div>
  );

  if (layout === 'split') {
    return (
      <section className={`${styles.hero} ${styles.split} ${styles[display]}`}>
        <div className={styles.splitText}>
          {content}
          <p className={styles.contactHint}>
            <a href={contactHref}>Contact details ↓</a>
          </p>
        </div>
        <div className={styles.splitPhoto}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={photo} alt={name} loading="eager" />
        </div>
      </section>
    );
  }

  return (
    <section
      className={`${styles.hero} ${layout === 'full' ? styles.full : styles.banner} ${styles[display]}`}
      style={{ backgroundImage: `url(${photo})` }}
    >
      <div className={styles.overlay} />
      {content}
    </section>
  );
}
