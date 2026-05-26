'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(styles.visible)
        }
      },
      { threshold: 0.1 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.hero}>
      <div className={styles.glowOrbs}>
        <div className={styles.orb} />
        <div className={styles.orb} />
        <div className={styles.orb} />
        <div className={styles.orb} />
      </div>
      <div className={styles.noise} />
      <div ref={contentRef} className={styles.content}>
        <p className={styles.tagline}>Taxi & Mietwagen Gatz</p>
        <h1 className={styles.headline}>
          Seit 2002<br />
          <span className={styles.highlight}>für Sie unterwegs</span>
        </h1>
        <p className={styles.subheadline}>
          Taxi • Mietwagen • Krankentransport – in Overath und Umgebung
        </p>
        <div className={styles.ctas}>
          <a href="tel:+49220474444" className={`btn btn-primary ${styles.callBtn}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            0 22 04 – 74 44 4
          </a>
          <a href="#leistungen" className="btn btn-outline">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
            Leistungen entdecken
          </a>
        </div>
      </div>

      <div className={styles.particles}>
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
        <div className={styles.particle} />
      </div>
      <div className={styles.neonSweep} />
    </section>
  )
}
