import Logo from '../ui/Logo';
import { company } from '../../data/content';
import styles from './SiteFooter.module.css';

export default function SiteFooter() {
  return (
    <footer
      className={styles.footer}
      data-purpose="architectural-footer"
      id="contact"
    >
      <div className={styles.shell}>
        <div className={styles.brand}>
          <Logo height={28} muted />
          <span className={styles.copyright}>{company.copyright}</span>
        </div>

        <div className={styles.contact}>
          <a className={styles.link} href={company.phoneHref}>
            {company.phoneDisplay}
          </a>
          <span className={styles.dot} aria-hidden="true">
            •
          </span>
          <a className={styles.link} href={company.emailHref}>
            {company.email}
          </a>
          <span className={styles.dot} aria-hidden="true">
            •
          </span>
          <span className={styles.locality}>{company.locality}</span>
        </div>
      </div>
    </footer>
  );
}
