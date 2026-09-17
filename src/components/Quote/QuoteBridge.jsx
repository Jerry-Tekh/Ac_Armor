import { FaPhone } from 'react-icons/fa6';
import { FiMail } from 'react-icons/fi';
import ActionLink from '../ui/ActionLink';
import { useGsapReveal } from '../../hooks/useGsapReveal';
import { quote, company } from '../../data/content';
import styles from './QuoteBridge.module.css';

export default function QuoteBridge() {
  const scope = useGsapReveal({ y: 24, stagger: 0.08, start: 'top 85%' });

  return (
    <section
      className={styles.section}
      data-purpose="conversion-bridge"
      id="quote"
      ref={scope}
    >
      <div className={styles.shell}>
        <span className={styles.eyebrow} data-reveal>
          {quote.eyebrow}
        </span>

        <h2 className={styles.heading} data-reveal>
          {quote.heading}
        </h2>

        <p className={styles.body} data-reveal>
          {quote.body}
        </p>

        <div className={styles.actions} data-reveal>
          <ActionLink
            href={company.phoneHref}
            variant="solid"
            className={styles.action}
          >
            <FaPhone className={styles.icon} aria-hidden="true" />
            <span>Call {company.phoneDisplay}</span>
          </ActionLink>

          <ActionLink
            href={company.emailHref}
            variant="white"
            className={styles.action}
          >
            <FiMail className={styles.icon} aria-hidden="true" />
            <span>Email Site Specs</span>
          </ActionLink>
        </div>

        <p className={styles.footnote} data-reveal>
          {quote.footnote}
        </p>
      </div>
    </section>
  );
}
