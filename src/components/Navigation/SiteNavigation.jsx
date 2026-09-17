import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone } from 'react-icons/fa6';
import { HiBars3, HiXMark } from 'react-icons/hi2';
import Logo from '../ui/Logo';
import ActionLink from '../ui/ActionLink';
import { navLinks, company } from '../../data/content';
import { useScrolled } from '../../hooks/useScrolled';
import { scrollToTarget } from '../../hooks/useLenis';
import styles from './SiteNavigation.module.css';

const headerVariants = {
  hidden: { y: -28, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
  },
};

const listVariants = {
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.35 } },
};

const itemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const drawerVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: 'auto',
    opacity: 1,
    transition: { duration: 0.38, ease: [0.16, 1, 0.3, 1] },
  },
  exit: { height: 0, opacity: 0, transition: { duration: 0.25, ease: 'easeIn' } },
};

export default function SiteNavigation() {
  const scrolled = useScrolled(8);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    setOpen(false);
    scrollToTarget(href);
  };

  return (
    <motion.header
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      data-purpose="global-header"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.inner}>
        <a
          className={styles.brand}
          href="#top"
          data-purpose="brand-identity"
          onClick={(e) => handleNavClick(e, 'body')}
          aria-label={`${company.name} — home`}
        >
          <Logo height={40} />
        </a>

        <motion.nav
          className={styles.nav}
          data-purpose="primary-navigation"
          variants={listVariants}
          initial="hidden"
          animate="visible"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              className={styles.navLink}
              href={link.href}
              variants={itemVariants}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.label}
              <span className={styles.navUnderline} aria-hidden="true" />
            </motion.a>
          ))}
        </motion.nav>

        <div className={styles.actions} data-purpose="header-cta-group">
          <a className={styles.phone} href={company.phoneHref}>
            <FaPhone className={styles.phoneIcon} aria-hidden="true" />
            <span>{company.phoneDisplay}</span>
          </a>

          <ActionLink
            href="#quote"
            variant="quiet"
            className={styles.quoteButton}
            data-purpose="quote-button"
          >
            Get a Free Quote
          </ActionLink>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <HiXMark size={22} /> : <HiBars3 size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="mobile-menu"
            className={styles.drawer}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className={styles.drawerNav} aria-label="Mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  className={styles.drawerLink}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a className={styles.drawerPhone} href={company.phoneHref}>
                <FaPhone aria-hidden="true" />
                <span>{company.phoneDisplay}</span>
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
