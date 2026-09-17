import { memo } from 'react';
import styles from './Logo.module.css';

/**
 * The original markup embedded this mark as a data-URI <img>. Inlining the
 * same geometry as real SVG keeps it crisp, themeable and animatable.
 */
function Logo({ height = 40, className = '', muted = false, title = 'AC Armor' }) {
  return (
    <svg
      className={`${styles.logo} ${muted ? styles.muted : ''} ${className}`}
      viewBox="0 0 240 48"
      width={(240 / 48) * height}
      height={height}
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(4, 6)">
        <path
          className={styles.shell}
          d="M18 2 L32 7 V19 C32 27 26 33 18 36 C10 33 4 27 4 19 V7 L18 2Z"
          fill="#111315"
          stroke="#111315"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M18 7 L28 10.5 V18.5 C28 24.5 23.5 29 18 31.5 C12.5 29 8 24.5 8 18.5 V10.5 L18 7Z"
          fill="#1A1C20"
        />
        <line
          className={styles.bar}
          x1="12"
          y1="13"
          x2="24"
          y2="13"
          stroke="#D9531E"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          className={styles.bar}
          x1="10"
          y1="18.5"
          x2="26"
          y2="18.5"
          stroke="#F4F3EF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          className={styles.bar}
          x1="12"
          y1="24"
          x2="24"
          y2="24"
          stroke="#F4F3EF"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
        <line
          className={styles.spine}
          x1="18"
          y1="9"
          x2="18"
          y2="29"
          stroke="#D9531E"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </g>
      <text
        x="48"
        y="27"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
        fontSize="19"
        fontWeight="900"
        letterSpacing="0.08em"
        fill="#111315"
      >
        AC ARMOR
      </text>
      <text
        x="48"
        y="38"
        fontFamily="Inter, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="0.22em"
        fill="#71716D"
      >
        HVAC SECURITY • EST. 2008
      </text>
    </svg>
  );
}

export default memo(Logo);
