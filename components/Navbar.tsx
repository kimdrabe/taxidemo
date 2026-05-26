'use client'

import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const links = [
  { label: 'Leistungen', href: '#leistungen' },
  { label: 'So geht\'s', href: '#ablauf' },
  { label: 'Preise', href: '#pricing' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoTop}>TAXI</span>
          <span className={styles.logoDivider} />
          <span className={styles.logoBottom}>GATZ</span>
        </a>

        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className={styles.link} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="tel:+49220474444" className={`btn btn-primary ${styles.navCta}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            0 22 04 – 74 44 4
          </a>
        </nav>

        <button className={styles.burger} onClick={() => setOpen(!open)} aria-label="Menü">
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
          <span className={`${styles.bar} ${open ? styles.barOpen : ''}`} />
        </button>
      </div>
    </header>
  )
}
