'use client'

import { useEffect, useRef } from 'react'
import styles from './HowItWorks.module.css'

const steps = [
  { number: '01', title: 'Anrufen', desc: 'Rufen Sie uns einfach an unter 0 22 04 – 74 44 4. Wir sind 24 Stunden für Sie da.' },
  { number: '02', title: 'Fahrtwunsch nennen', desc: 'Teilen Sie uns mit, wann und wohin Sie möchten. Wir nennen Ihnen den Festpreis.' },
  { number: '03', title: 'Entspannen', desc: 'Wir holen Sie ab und bringen Sie sicher ans Ziel. Einfach einsteigen und genießen.' },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const items = el.querySelectorAll(`.${styles.item}`)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.2 }
    )

    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} id="ablauf" ref={ref}>
      <div className={styles.container}>
        <h2 className="section-title">So einfach geht&apos;s</h2>
        <p className="section-subtitle">
          Drei Schritte zu Ihrer Fahrt – ganz ohne App
        </p>
        <div className={styles.timeline}>
          {steps.map((s, i) => (
            <div
              key={s.number}
              className={styles.item}
              style={{ transitionDelay: `${i * 0.2}s` }}
            >
              <div className={styles.number}>{s.number}</div>
              <div className={styles.content}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
