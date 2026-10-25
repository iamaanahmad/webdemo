import React from 'react';
import type { BusinessDemoData } from '@/templates/demo-data';
import styles from './DemoGallery.module.css';

/**
 * Photo strip for demos that carry gallery images. Renders nothing when the
 * demo has no gallery — sections must never appear empty.
 */
export default function DemoGallery({
  demo,
  title = 'Gallery',
}: {
  demo?: BusinessDemoData | null;
  title?: string;
}) {
  const images = demo?.gallery ?? [];
  if (images.length === 0) return null;
  const name = demo?.businessName || 'Gallery';
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.grid}>
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt={`${name} photo ${i + 1}`} loading="lazy" />
        ))}
      </div>
    </section>
  );
}
