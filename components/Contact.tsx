'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className={styles.section} id="kontakt">
      <div className={styles.container}>
        <div className={styles.info}>
          <h2 className="section-title" style={{ textAlign: 'left' }}>Kontakt</h2>
          <p className={styles.subtitle}>
            Rufen Sie uns an, schreiben Sie uns oder kommen Sie vorbei – wir sind immer für Sie da.
          </p>

          <div className={styles.details}>
            <a href="tel:+49220474444" className={styles.detail}>
              <div className={styles.detailIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <span className={styles.detailLabel}>Telefon</span>
                <span className={styles.detailValue}>0 22 04 – 74 44 4</span>
              </div>
            </a>

            <a href="mailto:taxi-gatz@web.de" className={styles.detail}>
              <div className={styles.detailIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <span className={styles.detailLabel}>E-Mail</span>
                <span className={styles.detailValue}>taxi-gatz@web.de</span>
              </div>
            </a>

            <div className={styles.detail}>
              <div className={styles.detailIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <span className={styles.detailLabel}>Adresse</span>
                <span className={styles.detailValue}>Kleinhurden 3, 51491 Overath</span>
              </div>
            </div>

            <div className={styles.detail}>
              <div className={styles.detailIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <span className={styles.detailLabel}>Öffnungszeiten</span>
                <span className={styles.detailValue}>24 Stunden – Mo. bis So. & Feiertage</span>
              </div>
            </div>
          </div>

          <a href="tel:+49220474444" className={`btn btn-primary ${styles.callBtn}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Jetzt anrufen
          </a>
        </div>

        <div className={styles.formWrapper}>
          <h3 className={styles.formTitle}>Nachricht senden</h3>
          {sent ? (
            <div className={styles.success}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-yellow)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <p>Vielen Dank! Wir melden uns schnellstmöglich bei Ihnen.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="text" placeholder="Name *" required className={styles.input} />
              <input type="tel" placeholder="Telefon *" required className={styles.input} />
              <input type="email" placeholder="E-Mail" className={styles.input} />
              <select className={styles.input}>
                <option value="">Gewünschte Leistung</option>
                <option>Taxi / Mietwagen</option>
                <option>Krankentransport</option>
                <option>Schüler- / KiTa-Fahrt</option>
                <option>Flughafen / Bahnhof</option>
                <option>Besorgungs- / Kurierfahrt</option>
                <option>Fern- / Dialysefahrt</option>
              </select>
              <textarea placeholder="Ihre Nachricht *" required rows={4} className={`${styles.input} ${styles.textarea}`} />
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Nachricht senden
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
