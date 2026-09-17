import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import ActionLink from '../ui/ActionLink';
import styles from './ProductCard.module.css';

/**
 * One card, three shapes:
 *  - standard : half-width, image on top
 *  - feature  : full-width, image left / copy right, accent tier badge
 *  - dark     : full-width steel panel, copy left / image right
 */
export default function ProductCard({ product }) {
  const { variant } = product;
  const isSplit = variant === 'feature' || variant === 'dark';

  const media = (
    <div className={styles.media}>
      <div className={styles.mediaFrame}>
        <img
          className={styles.image}
          src={product.image.src}
          alt={product.image.alt}
          loading="lazy"
          decoding="async"
        />
        <span className={styles.tier}>{product.tier}</span>
      </div>
    </div>
  );

  const copy = (
    <div className={styles.copy}>
      <div>
        <div className={styles.headRow}>
          <h3 className={styles.name}>{product.name}</h3>
          <span className={styles.meta}>{product.meta}</span>
        </div>

        <p className={styles.subtitle}>{product.subtitle}</p>
        <p className={styles.description}>{product.description}</p>

        <ul className={styles.specs}>
          {product.specs.map((spec) => (
            <li className={styles.spec} key={spec}>
              {spec}
            </li>
          ))}
        </ul>
      </div>

      <ActionLink
        href={product.cta.href}
        variant="inline"
        className={styles.cardCta}
      >
        <span>{product.cta.label}</span>
        <FiArrowRight className={styles.ctaArrow} aria-hidden="true" />
      </ActionLink>
    </div>
  );

  return (
    <motion.article
      className={`${styles.card} ${styles[variant]}`}
      data-purpose={`product-card-${product.id}`}
      data-reveal
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 26 }}
    >
      {isSplit ? (
        <div className={styles.split}>
          {variant === 'dark' ? (
            <>
              <div className={styles.splitCopy}>{copy}</div>
              <div className={styles.splitMedia}>{media}</div>
            </>
          ) : (
            <>
              <div className={styles.splitMedia}>{media}</div>
              <div className={styles.splitCopy}>{copy}</div>
            </>
          )}
        </div>
      ) : (
        <>
          {media}
          {copy}
        </>
      )}
    </motion.article>
  );
}
