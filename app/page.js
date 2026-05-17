import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.headline}>
            Building practical open-source solutions that solve real problems.
          </h1>
          <p className={styles.copy}>
            We partner with engineering teams to design, build, and ship dependable software quickly—specializing in high-performance STAC API architectures and cloud-native geospatial tooling.
          </p>
          
          <div className={styles.ctaGroup}>
            <a href="https://github.com/StacLabs" target="_blank" rel="noopener noreferrer" className={styles.primaryBtn}>
              Explore GitHub
            </a>
            <a href="https://linkedin.com/company/staclabs" target="_blank" rel="noopener noreferrer" className={styles.secondaryBtn}>
              Connect on LinkedIn
            </a>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <img src="/staclabs-logo.png" alt="StacLabs Logo" className={styles.logo} />
        </div>
      </section>

      {/* Flagship Framework Section: SFEOS */}
      <section className={styles.sfeosSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtext}>CORE ECOSYSTEM</span>
          <h2>stac-fastapi-elasticsearch-opensearch</h2>
        </div>
        <div className={styles.sfeosCard}>
          <div className={styles.sfeosInfo}>
            <h3>Enterprise-Grade Spatial Indexing</h3>
            <p>
              StacLabs actively develops and maintains SFEOS, the premier high-performance backend for STAC APIs. 
              In close architectural partnership with <strong>Healy Hyperspatial</strong> and <strong>CloudFerro</strong>, 
              we continually optimize this open-source framework to power some of the world's largest Earth Observation data platforms.
            </p>
            <div className={styles.partnerBadges}>
              <span className={styles.partnerBadge}>Partner: Healy Hyperspatial</span>
              <span className={styles.partnerBadge}>Partner: CloudFerro</span>
            </div>
          </div>
          <div className={styles.sfeosAction}>
            <a href="https://github.com/stac-utils/stac-fastapi-elasticsearch-opensearch" target="_blank" rel="noopener noreferrer" className={styles.viewRepoBtn}>
              View SFEOS Framework <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Extension Section */}
      <section className={styles.featuredSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtext}>LATEST EXTENSION RELEASE</span>
          <h2>Featured Ecosystem Blueprint</h2>
        </div>
        <div className={styles.featuredCard}>
          <div className={styles.cardMain}>
            <div className={styles.cardTag}>STAC API Proposal</div>
            <h3>Multi-Tenant Catalogs Endpoint Extension</h3>
            <p>
              True multi-tenancy for enterprise spatial indices. Safely isolate, recursively nest, and manage independent logical catalogs natively within a single STAC API cluster without database duplication or breaking standard root compliance.
            </p>
            <div className={styles.techBadges}>
              <span>stac-fastapi</span>
              <span>Elasticsearch</span>
              <span>OpenSearch</span>
              <span>Poly-Hierarchy</span>
            </div>
          </div>
          <div className={styles.cardActionContainer}>
            <a 
              href="https://github.com/StacLabs/multi-tenant-catalogs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.viewRepoBtn}
            >
              View Repository <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section (Typography based, no emojis) */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionHeader}>
          <span className={styles.subtext}>HOW WE PARTNER</span>
          <h2>Open Source Acceleration</h2>
        </div>
        <div className={styles.servicesGrid}>
          <article className={styles.serviceCard}>
            <div className={styles.numberIndicator}>01</div>
            <h3>Visibility</h3>
            <p>
              List your existing open-source repository under our ecosystem banner to amplify community discovery, maximize developer onboarding, and drive cross-team alignment.
            </p>
          </article>
          <article className={styles.serviceCard}>
            <div className={styles.numberIndicator}>02</div>
            <h3>Support</h3>
            <p>
              Access dedicated cloud-native architectural guidance to cleanly document, package, benchmark, and enforce production best practices across your spatial codebases.
            </p>
          </article>
          <article className={styles.serviceCard}>
            <div className={styles.numberIndicator}>03</div>
            <h3>Innovation</h3>
            <p>
              Partner with us from baseline concept to production code. Accelerate your product roadmap while natively boosting your organization&apos;s open-source footprint.
            </p>
          </article>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <p className={styles.footerText}>© {new Date().getFullYear()} StacLabs. Open Source Geospatial Infrastructure.</p>
        </div>
      </footer>
    </main>
  );
}
