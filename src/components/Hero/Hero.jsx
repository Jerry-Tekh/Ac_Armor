import { useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { FiArrowRight } from 'react-icons/fi';
import { FaPhone } from 'react-icons/fa6';
import ActionLink from '../ui/ActionLink';
import { hero, company } from '../../data/content';
import styles from './Hero.module.css';

const CORNERS = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];

export default function Hero() {
  const root = useRef(null);

  /**
   * One orchestrated page-load sequence rather than scattered effects:
   * eyebrow → headline lines → body → CTAs → footnote, with the product
   * plate settling in alongside it.
   */
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
      .matches;

    if (reduced) {
      gsap.set(el.querySelectorAll('[data-hero]'), { opacity: 1, y: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      // Only the first tween of a timeline renders immediately, so lock the
      // start state for everything up front — this runs before paint.
      gsap.set('[data-hero]', { opacity: 0 });
      gsap.set('[data-hero="line"]', { yPercent: 110 });

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        delay: 0.15,
      });

      tl.fromTo(
        '[data-hero="eyebrow"]',
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          '[data-hero="line"]',
          { opacity: 0, yPercent: 110 },
          { opacity: 1, yPercent: 0, duration: 0.95, stagger: 0.09 },
          '-=0.28'
        )
        .fromTo(
          '[data-hero="body"]',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.7 },
          '-=0.55'
        )
        .fromTo(
          '[data-hero="cta"]',
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 },
          '-=0.45'
        )
        .fromTo(
          '[data-hero="footnote"]',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.6 },
          '-=0.35'
        )
        .fromTo(
          '[data-hero="corner"]',
          { opacity: 0, scale: 0.4 },
          { opacity: 1, scale: 1, duration: 0.45, stagger: 0.06 },
          '-=0.5'
        );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={styles.section}
      data-purpose="hero-composition"
      id="protection"
      ref={root}
    >
      <div className={styles.shell}>
        <div className={styles.grid}>
          {/* ---------- editorial column ---------- */}
          <div className={styles.editorial} data-purpose="hero-editorial">
            <div className={styles.eyebrow} data-hero="eyebrow">
              <span className={styles.pulse} aria-hidden="true" />
              <span className={styles.eyebrowText}>{hero.eyebrow}</span>
            </div>

            <h1 className={styles.headline}>
              {hero.headline.map((line) => (
                <span className={styles.lineMask} key={line}>
                  <span className={styles.line} data-hero="line">
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            <p className={styles.body} data-hero="body">
              {hero.body}
            </p>

            <div className={styles.ctaGroup}>
              <span data-hero="cta" className={styles.ctaSlot}>
                <ActionLink href="#quote" variant="solid" className={styles.primaryCta}>
                  <span>GET A FREE QUOTE</span>
                  <FiArrowRight className={styles.arrow} aria-hidden="true" />
                </ActionLink>
              </span>

              <span data-hero="cta" className={styles.ctaSlot}>
                <ActionLink
                  href={company.phoneHref}
                  variant="ghost"
                  className={styles.secondaryCta}
                >
                  <FaPhone className={styles.phoneIcon} aria-hidden="true" />
                  <span>CALL {company.phoneDisplay}</span>
                </ActionLink>
              </span>
            </div>

            <div className={styles.footnote} data-hero="footnote">
              <span className={styles.hash}>#</span>
              <span>{hero.footnote}</span>
            </div>
          </div>

          {/* ---------- product plate ---------- */}
          <div className={styles.stage} data-purpose="hero-image-stage">
            <motion.figure
              className={styles.plate}
              initial={{ opacity: 0, y: 34, rotateX: 4 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              <div className={styles.frame}>
                <img
                  className={styles.image}
                  src={hero.image.src}
                  alt={hero.image.alt}
                  loading="eager"
                  decoding="async"
                />

                {CORNERS.map((corner) => (
                  <span
                    key={corner}
                    className={`${styles.corner} ${styles[corner]}`}
                    data-hero="corner"
                    aria-hidden="true"
                  />
                ))}
              </div>

              <figcaption className={styles.specTag}>
                <span className={styles.specLeft}>
                  <span className={styles.tick} aria-hidden="true" />
                  <span className={styles.specName}>{hero.figureLabel}</span>
                </span>
                <span className={styles.specRight}>{hero.figureSpec}</span>
              </figcaption>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
