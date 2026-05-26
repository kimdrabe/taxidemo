'use client'

import { useEffect, useRef } from 'react'
import styles from './Features.module.css'

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="9" x2="15" y2="15" />
        <line x1="15" y1="9" x2="9" y2="15" />
      </svg>
    ),
    title: 'Taxi & Mietwagen',
    description: 'Schnelle Personenbeförderung und Mietwagen-Service. Ob Kurzstrecke oder Fernfahrt – wir bringen Sie sicher ans Ziel.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Krankentransport',
    description: 'Zuverlässige und einfühlsame Beförderung zu Arztterminen, Therapien oder Krankenhausaufenthalten.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    title: 'Schüler- & KiTa-Fahrten',
    description: 'Verlässliche Fahrten für Kinder zur Schule, KiTa oder zu Aktivitäten. Sicherheit und Pünktlichkeit stehen an erster Stelle.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: 'Flughafen & Bahnhof',
    description: 'Stressfreie Fahrt zum Flughafen Köln/Bonn oder Bahnhof. Wir holen Sie ab und bringen Sie pünktlich hin.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: 'Besorgungs- & Kurierfahrten',
    description: 'Dokumente, Pakete oder Einkäufe – wir übernehmen zuverlässig Ihre Botengänge in Overath und Umgebung.',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
        <polygon points="12 15 17 21 7 21 12 15" />
      </svg>
    ),
    title: 'Fern- & Dialysefahrten',
    description: 'Auch auf längeren Strecken und für regelmäßige Dialyse-Termine sind wir Ihr verlässlicher Partner.',
  },
]

export default function Features() {
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
      { threshold: 0.1 }
    )

    cards.forEach((card) => observer.observe(card))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="leistungen" ref={ref}>
      <div className={styles.container}>
        <h2 className="section-title">Unsere Leistungen</h2>
        <p className="section-subtitle">
          Personenbeförderung rund um Overath – für jede Fahrt die passende Lösung
        </p>
        <div className={styles.grid}>
          {services.map((s, i) => (
            <div
              key={s.title}
              className={styles.card}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
