import React from 'react';
import type { BusinessDemoData } from '@/templates/demo-data';

/**
 * Shared personalization bits. Inline styles on purpose: these drop into any
 * of the 12 industry templates without touching their CSS modules.
 */

/** "★ 4.8 · 214 Google reviews" pill shown in the hero when we know the rating. */
export function RatingBadge({ demo }: { demo?: BusinessDemoData | null }) {
  if (!demo?.rating) return null;
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        marginTop: '1rem',
        padding: '0.5rem 1rem',
        borderRadius: '999px',
        background: 'rgba(0,0,0,0.45)',
        color: '#fff',
        fontSize: '0.9rem',
        fontWeight: 600,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
    >
      <span style={{ color: '#fbbf24' }}>★</span>
      <span>{demo.rating.toFixed(1)}</span>
      {demo.reviewCount ? (
        <span style={{ fontWeight: 400, opacity: 0.85 }}>
          · {demo.reviewCount} Google reviews
        </span>
      ) : null}
    </div>
  );
}

/** Picks the personalized value when present, otherwise the template default. */
export function pick<T>(value: T | undefined | null, fallback: T): T {
  return value ?? fallback;
}
