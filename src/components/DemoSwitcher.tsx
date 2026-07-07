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

const WHATSAPP_NUMBER = '917645969281';
const WHATSAPP_MESSAGE = 'Hi, I want to know more about your Web Development services.';

export default function DemoSwitcher({ currentIndustry, businessName, currentVariant, variants }: DemoSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
  const showSwitcher = variants.length > 1;

  return (
    <div className={styles.floatingBar}>
      {/* WhatsApp Icon */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatsappBtn}
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 32 32" width="24" height="24" fill="currentColor">
          <path d="M16.004 0C7.165 0 .003 7.16.003 15.997c0 2.82.737 5.573 2.14 7.998L0 32l8.247-2.11a15.94 15.94 0 007.757 1.986C24.843 31.876 32 24.716 32 15.997 32 7.16 24.843 0 16.004 0zm0 29.29a13.36 13.36 0 01-7.09-2.03l-.508-.302-4.898 1.253 1.307-4.77-.332-.527A13.3 13.3 0 012.59 15.997c0-7.4 6.017-13.41 13.414-13.41 7.4 0 13.41 6.01 13.41 13.41 0 7.4-6.01 13.293-13.41 13.293zm7.35-10.04c-.403-.2-2.383-1.175-2.752-1.31-.37-.133-.638-.2-.907.2-.268.4-1.04 1.31-1.275 1.578-.235.268-.47.302-.873.1-.403-.2-1.7-.626-3.24-1.997-1.197-1.067-2.005-2.385-2.24-2.787-.235-.403-.025-.62.177-.82.18-.18.403-.47.604-.703.2-.235.268-.403.403-.67.133-.268.067-.502-.034-.703-.1-.2-.907-2.185-1.242-2.99-.327-.786-.66-.68-.907-.692l-.772-.013c-.268 0-.704.1-1.073.502-.37.4-1.41 1.377-1.41 3.36 0 1.984 1.443 3.9 1.644 4.168.2.268 2.838 4.33 6.878 6.072.96.415 1.71.663 2.295.848.964.307 1.842.264 2.535.16.774-.115 2.383-.974 2.72-1.914.335-.94.335-1.745.234-1.914-.1-.168-.368-.268-.772-.47z"/>
        </svg>
      </a>

      {/* Layout Switcher */}
      {showSwitcher && (
        <>
          {isOpen && (
            <div className={styles.menu}>
              <div className={styles.menuHeader}>
                <h4>Switch Layout</h4>
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
            className={styles.switchBtn}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Switch Demo Layout"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="16 3 21 3 21 8"></polyline>
              <line x1="4" y1="20" x2="21" y2="3"></line>
              <polyline points="21 16 21 21 16 21"></polyline>
              <line x1="15" y1="15" x2="21" y2="21"></line>
              <line x1="4" y1="4" x2="9" y2="9"></line>
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
