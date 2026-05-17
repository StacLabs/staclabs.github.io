import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.header}>
          <h1>Building practical open-source solutions that solve real problems.</h1>
          <img src="/staclabs-logo.png" alt="StacLabs Logo" className={styles.logo} />
        </div>
        <p className={styles.copy}>
          We partner with teams to design, build, and ship dependable software quickly - specializing in STAC and open-source geospatial tools.
        </p>
        <div className={styles.links}>
          <p>Let&apos;s Build Together</p>
          <div className={styles.social}>
            <a href="https://github.com/StacLabs" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/company/staclabs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>
      <section className={styles.services}>
        <article>
          <h2>Visibility</h2>
          <p>
            List your existing open-source repository on our GitHub page to increase community discovery and alignment.
          </p>
        </article>
        <article>
          <h2>Support</h2>
          <p>
            Get dedicated architectural help to release, document, package, and enforce technical best practices on your existing tools.
          </p>
        </article>
        <article>
          <h2>Innovation</h2>
          <p>
            Partner with us from the ground up to co-develop new ideas, accelerating your roadmap while boosting your organization's open-source footprint.
          </p>
        </article>
      </section>
      <footer className={styles.footer}>
        <p className={styles.footerText}>In partnership with</p>
        <a href="https://healy-hyperspatial.github.io/" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/stac-utils/stac-fastapi-elasticsearch-opensearch/refs/heads/main/assets/hh-logo-blue.png" alt="Healy Hyperspatial" className={styles.partnerLogo} />
        </a>
      </footer>
    </main>
  );
}
