import { FiPlus } from 'react-icons/fi';
import { useGsapReveal } from '../../hooks/useGsapReveal';
import { faq } from '../../data/content';
import styles from './Faq.module.css';

export default function Faq() {
  const scope = useGsapReveal({ y: 26, stagger: 0.08, start: 'top 84%' });

  return (
    <section
      className={styles.section}
      id="faq"
      data-purpose="ac-security-cage-faq"
      ref={scope}
      aria-labelledby="faq-heading"
    >
      <div className={styles.shell}>
        <header className={styles.intro} data-reveal>
          <span className={styles.eyebrow}>{faq.eyebrow}</span>
          <h2 className={styles.heading} id="faq-heading">
            {faq.heading}
          </h2>
          <p className={styles.body}>{faq.body}</p>
        </header>

        <div className={styles.list} data-reveal>
          {faq.items.map((item, index) => (
            <details className={styles.item} key={item.question}>
              <summary className={styles.question}>
                <span className={styles.index} aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.iconWrap} aria-hidden="true">
                  <FiPlus className={styles.icon} />
                </span>
              </summary>
              <div className={styles.answer}>
                <span className={styles.answerLabel}>AC ARMOR RESPONSE</span>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}