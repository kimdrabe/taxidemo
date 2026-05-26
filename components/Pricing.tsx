'use client'

import { useEffect, useRef } from 'react'
import styles from './Pricing.module.css'

const plans = [
  {
    name: 'Taxi',
    price: '2,50',
    unit: 'Grundpreis',
    desc: 'Für die schnelle Fahrt in Overath und Umgebung.',
    features: ['1,50 €/km', 'Bar oder Karte', '24h verfügbar'],
  },
  {
    name: 'Mietwagen',
    price: '3,50',
    unit: 'Grundpreis',
    desc: 'Mehr Komfort für Ihre Fahrten – auch mit Voranmeldung.',
    features: ['1,80 €/km', 'Klimaanlage', 'Getränke inklusive'],
    popular: true,
  },
  {
    name: 'Krankentransport',
    price: '6,00',
    unit: 'Grundpreis',
    desc: 'Einfühlsame Beförderung zu Arzt und Therapie.',
    features: ['1,50 €/km', 'Sitzend oder liegend', 'Sanitäter-Begleitung'],
  },
]

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const cards = el.querySelectorAll(`.${styles.card}`)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="pricing" ref={ref}>
      <div className={styles.container}>
        <h2 className="section-title">Unsere Tarife</h2>
        <p className="section-subtitle">
          Faire Preise für jede Fahrt – transparent und ohne Überraschungen
        </p>
        <p className={styles.hint}>
          Alle Preise pro Fahrt zzgl. km. Sondertarife für Schüler-, KiTa-, und Dauerkunden auf Anfrage.
        </p>
        <div className={styles.grid}>
          {plans.map((p) => (
            <div
              key={p.name}
              className={`${styles.card} ${p.popular ? styles.popular : ''}`}
            >
              {p.popular && <span className={styles.badge}>Empfohlen</span>}
              <h3 className={styles.name}>{p.name}</h3>
              <div className={styles.price}>
                <span className={styles.amount}>{p.price}</span>
                <span className={styles.unit}>{p.unit}</span>
              </div>
              <p className={styles.desc}>{p.desc}</p>
              <ul className={styles.features}>
                {p.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a href="tel:+49220474444" className={`btn ${p.popular ? 'btn-primary' : 'btn-dark'}`}>
                Jetzt anrufen
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
