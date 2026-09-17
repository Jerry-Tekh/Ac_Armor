import { motion } from 'framer-motion';
import { scrollToTarget } from '../../hooks/useLenis';
import styles from './ActionLink.module.css';

/**
 * Every CTA on the page routes through here so hash links go through Lenis
 * and press/hover feedback stays consistent.
 *
 * variants: solid | ghost | white | inline | quiet
 */
export default function ActionLink({
  href = '#',
  variant = 'solid',
  size = 'md',
  className = '',
  children,
  onClick,
  ...rest
}) {
  const isHash = href.startsWith('#') && href.length > 1;

  const handleClick = (event) => {
    if (isHash) {
      event.preventDefault();
      scrollToTarget(href);
      if (window.history.replaceState) {
        window.history.replaceState(null, '', href);
      }
    }
    onClick?.(event);
  };

  return (
    <motion.a
      href={href}
      onClick={handleClick}
      className={[styles.base, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(' ')}
      whileHover={{ y: variant === 'inline' ? 0 : -1 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: 'spring', stiffness: 420, damping: 30 }}
      {...rest}
    >
      {children}
    </motion.a>
  );
}
