import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Welcome to My Portfolio</h1>
          <p className={styles.subtitle}>Professional Info & Work</p>
        </section>

        <section className={styles.about}>
          <h2>About Me</h2>
          <p>
            This is a professional portfolio showcasing my skills, projects, and experience.
            The site is built with Next.js and integrated with Vercel Web Analytics to track
            visitor engagement and page views.
          </p>
        </section>

        <section className={styles.features}>
          <h2>Features</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>⚡ Fast Performance</h3>
              <p>Built with Next.js 14 App Router for optimal performance</p>
            </div>
            <div className={styles.card}>
              <h3>📊 Web Analytics</h3>
              <p>Integrated with Vercel Web Analytics for visitor insights</p>
            </div>
            <div className={styles.card}>
              <h3>🎨 Modern Design</h3>
              <p>Clean and professional design that works on all devices</p>
            </div>
            <div className={styles.card}>
              <h3>🚀 Easy to Deploy</h3>
              <p>Deploy to Vercel with zero configuration</p>
            </div>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Ready to Deploy</h2>
          <p>
            Deploy this portfolio to Vercel and start tracking your visitors with Web Analytics.
          </p>
          <code className={styles.code}>vercel deploy</code>
        </section>
      </div>
    </main>
  )
}
