"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './DemoSwitcher.module.css';

interface DemoSwitcherProps {
  currentIndustry: string;
  businessName: string;
}

const industries = [
  { id: 'clinic', name: 'Clinic Theme', icon: '🩺' },
  { id: 'salon', name: 'Salon Theme', icon: '✨' },
  { id: 'construction', name: 'Construction Theme', icon: '🏗️' },
];

export default function DemoSwitcher({ currentIndustry, businessName }: DemoSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.switcherContainer}>
      {isOpen && (
        <div className={styles.menu}>
          <div className={styles.menuHeader}>
            <h4>Try Another Layout</h4>
            <button onClick={() => setIsOpen(false)} className={styles.closeBtn}>×</button>
          </div>
          <div className={styles.options}>
            {industries.map((ind) => (
              <Link
                key={ind.id}
                href={`/${ind.id}/${businessName}`}
                className={`${styles.option} ${currentIndustry === ind.id ? styles.active : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span className={styles.icon}>{ind.icon}</span>
                {ind.name}
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
        <span className={styles.toggleText}>Change Template</span>
      </button>
    </div>
  );
}
