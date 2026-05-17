import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>StacLabs</p>
        <h1>Building practical products that solve real problems.</h1>
        <p className={styles.copy}>
          We partner with teams to design, build, and ship dependable software
          quickly.
        </p>
        <a className={styles.cta} href="mailto:hello@staclabs.com">
          Let&apos;s Build Together
        </a>
      </section>
      <section className={styles.services}>
        <article>
          <h2>Product Engineering</h2>
          <p>
            Modern web applications and platforms built with performance,
            reliability, and maintainability in mind.
          </p>
        </article>
        <article>
          <h2>Delivery Acceleration</h2>
          <p>
            Better workflows, better tooling, and clear execution plans to move
            ideas from concept to production faster.
          </p>
        </article>
        <article>
          <h2>Technical Advisory</h2>
          <p>
            Hands-on guidance for architecture, team practices, and technical
            strategy that scales with your business.
          </p>
        </article>
      </section>
    </main>
  );
}
