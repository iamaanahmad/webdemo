"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DemoSwitcher.module.css';

interface DemoSwitcherProps {
  currentIndustry: string;
  businessName: string;
  currentVariant: string;
  variants: { id: string; name: string }[];
}

export default function DemoSwitcher({ currentIndustry, businessName, currentVariant, variants }: DemoSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // If there's only 1 variant, we don't need a switcher
  if (variants.length <= 1) return null;

  return (
    <div className={styles.switcherContainer}>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuHeader}>
            <h4>Try Another Layout</h4>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>×</button>
          </div>
          <div className={styles.options}>
            {variants.map((v) => (
              <Link
                key={v.id}
                href={`/${currentIndustry}/${businessName}?v=${v.id}`}
                className={`${styles.option} ${currentVariant === v.id ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.icon}>🎨</span>
                {v.name}
              </Link>
            ))}
          </div>
        </div>
      )}
      <button
        className={styles.toggleBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch Demo Layout"
      >
        <span className={styles.toggleIcon}>⚙️</span>
        <span className={styles.toggleText}>Change Layout</span>
      </button>
    </div>
  );
}
