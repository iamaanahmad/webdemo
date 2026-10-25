import React from 'react';
import type { BusinessDemoData } from '@/templates/demo-data';

/**
 * Shared personalization bits. Inline styles on purpose: these drop into any
 * of the 12 industry templates without touching their CSS modules.
 */

/** "★ 4.8 · 214 Google reviews" pill shown in the hero when we know the rating.
 *  The review source is rendered as supplied (Google only when the demo says
 *  so or omits it) — never a hardcoded platform claim. */
export function RatingBadge({ demo }: { demo?: BusinessDemoData | null }) {
  if (!demo?.rating) return null;
  const source = demo.reviewSource || 'Google';
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
          · {demo.reviewCount} {source} reviews
        </span>
      ) : null}
    </div>
  );
}

/**
 * Line-icon service mark (stroke SVG, currentColor) — one per industry.
 * Replaces the emoji glyphs the demo JSONs carry, per the UI/UX Pro Max
 * rule: no emojis as icons. The JSON `icon` field is ignored on purpose.
 */
const SERVICE_MARK_PATHS: Record<string, React.ReactNode> = {
  salon: <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />,
  clinic: <path d="M12 5v14M5 12h14" />,
  restaurant: (
    <>
      <path d="M4 17h16" />
      <path d="M5 17a7 7 0 0 1 14 0" />
      <path d="M12 10V7" />
      <path d="M10 7h4" />
    </>
  ),
  hotel: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V8l7-5 7 5v13" />
      <path d="M9 21v-5h6v5" />
    </>
  ),
  education: (
    <>
      <path d="M12 6c-2-1.5-4.5-2-8-2v14c3.5 0 6 .5 8 2 2-1.5 4.5-2 8-2V4c-3.5 0-6 .5-8 2z" />
      <path d="M12 6v14" />
    </>
  ),
  construction: <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />,
  gym: (
    <>
      <path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" />
    </>
  ),
  coworking: (
    <>
      <path d="M4 5h16v11H4z" />
      <path d="M2 19h20" />
    </>
  ),
  services: (
    <>
      <path d="M12 3l7 3v5c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
};

export function ServiceMark({
  industry,
  size = 28,
}: {
  industry: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {SERVICE_MARK_PATHS[industry] ?? SERVICE_MARK_PATHS.services}
    </svg>
  );
}

/** Picks the personalized value when present, otherwise the template default. */
export function pick<T>(value: T | undefined | null, fallback: T): T {
  return value ?? fallback;
}
