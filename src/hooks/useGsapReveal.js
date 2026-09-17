import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Scroll-linked reveal for a group of children inside a scope element.
 * Children are selected with `[data-reveal]` and staggered in.
 *
 * @param {object} options
 * @param {string} options.selector  querySelector for the animated children
 * @param {number} options.y         travel distance in px
 * @param {number} options.stagger   seconds between children
 * @param {number} options.start     ScrollTrigger start string
 */
export function useGsapReveal({
  selector = '[data-reveal]',
  y = 28,
  stagger = 0.09,
  duration = 0.85,
  start = 'top 82%',
} = {}) {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return undefined;

    const targets = gsap.utils.toArray(selector, root);
    if (!targets.length) return undefined;

    if (prefersReduced()) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: 'all' });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          stagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: root,
            start,
            once: true,
          },
        }
      );
    }, root);

    return () => ctx.revert();
  }, [selector, y, stagger, duration, start]);

  return scope;
}

/**
 * Subtle parallax on a single element as it crosses the viewport.
 */
export function useParallax({ distance = 40 } = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReduced()) return undefined;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -distance / 10 },
        {
          yPercent: distance / 10,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [distance]);

  return ref;
}
