import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.col}>
            <h3 className={styles.logo}>🚕 Taxi & Mietwagen Gatz</h3>
            <p className={styles.text}>
              Ihr zuverlässiger Partner für Personenbeförderung in Overath und Umgebung.
              24 Stunden, 7 Tage die Woche – seit 2002.
            </p>
            <p className={styles.meta}>
              25-jähriges Jubiläum • Familiengeführt seit 2 Gen. • Elektro-Flotte
            </p>
          </div>
          <div className={styles.col}>
            <h4 className={styles.heading}>Kontakt</h4>
            <ul className={styles.list}>
              <li>
                <a href="tel:+49220474444" className={styles.link}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  0 22 04 – 74 44 4
                </a>
              </li>
              <li>
                <a href="mailto:taxi-gatz@web.de" className={styles.link}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  taxi-gatz@web.de
                </a>
              </li>
              <li className={styles.link}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Kleinhurden 3, 51491 Overath
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4 className={styles.heading}>Öffnungszeiten</h4>
            <ul className={styles.list}>
              <li className={styles.hours}>
                <span>Mo – So</span>
                <span className={styles.hoursValue}>24 Stunden</span>
              </li>
              <li className={styles.hours}>
                <span>Feiertage</span>
                <span className={styles.hoursValue}>24 Stunden</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Taxi & Mietwagen Gatz</p>
        </div>
      </div>
    </footer>
  )
}
