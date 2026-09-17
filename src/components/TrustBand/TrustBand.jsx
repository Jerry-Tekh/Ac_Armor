import { useGsapReveal } from '../../hooks/useGsapReveal';
import { trustMetrics } from '../../data/content';
import styles from './TrustBand.module.css';

export default function TrustBand() {
  const scope = useGsapReveal({ y: 20, stagger: 0.08, start: 'top 88%' });

  return (
    <section
      className={styles.section}
      data-purpose="technical-trust-matrix"
      id="engineering"
      ref={scope}
      aria-label="Engineering credentials"
    >
      <div className={styles.shell}>
        <div className={styles.grid}>
          {trustMetrics.map((metric) => (
            <div className={styles.cell} key={metric.id} data-reveal>
              <span
                className={`${styles.label} ${
                  metric.accent ? styles.labelAccent : ''
                }`}
              >
                {metric.label}
              </span>
              <span className={styles.title}>{metric.title}</span>
              <span className={styles.detail}>{metric.detail}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
