# AC Armor — Landing Page

Vite + React port of the AC Armor HVAC security cage landing page. The original
markup, copy, palette and layout are reproduced exactly; Tailwind utilities have
been translated into scoped CSS Modules and the page has been given a real
motion layer.

## Stack

| Concern | Choice |
| --- | --- |
| Build | Vite 5 |
| UI | React 18 (JSX, function components) |
| Styling | CSS Modules + CSS custom properties |
| Page-load / scroll motion | GSAP 3 + ScrollTrigger |
| Interaction motion | Framer Motion |
| Smooth scrolling | Lenis (driven by the GSAP ticker) |
| Icons | react-icons (`fa6`, `fi`, `hi2`) |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
npm run preview  # serve the production build
```

## Structure

```
src/
├── main.jsx                  React entry
├── App.jsx                   Section composition + Lenis boot
├── data/content.js           All copy and product data, lifted verbatim
├── styles/
│   ├── tokens.css            Palette, type, spacing, motion tokens
│   ├── global.css            Reset, technical-grid background, a11y
│   └── shared.module.css     Composable primitives (shell, hairlines)
├── hooks/
│   ├── useLenis.js           Smooth scroll + scrollToTarget() for anchors
│   ├── useGsapReveal.js      ScrollTrigger stagger + parallax helpers
│   └── useScrolled.js        Header elevation state
└── components/
    ├── ui/                   Logo (inline SVG), ActionLink (all CTAs)
    ├── Navigation/           Sticky header + mobile drawer
    ├── Hero/                 Orchestrated load sequence + product plate
    ├── TrustBand/            Four-column credential matrix
    ├── Products/             Catalog grid + 3-variant ProductCard
    ├── Quote/                Conversion bridge
    └── Footer/               Contact coordinates
```

Each component owns a sibling `*.module.css`. Cross-component primitives are
shared with `composes: … from '../../styles/shared.module.css'` rather than
duplicated.

## Motion notes

Motion is deliberately concentrated rather than sprayed across every element:

- **One page-load sequence.** A single GSAP timeline in `Hero.jsx` runs
  eyebrow → masked headline lines → body → CTAs → footnote → viewfinder
  corners. The product plate settles in alongside it via Framer Motion.
- **Scroll reveals** are handled by `useGsapReveal`, which staggers any child
  marked `data-reveal` once as it enters the viewport.
- **Interaction feedback** (hover lift, press, nav underline, image
  desaturation) is Framer Motion and CSS transitions — it answers a user
  action rather than playing on its own.
- **Lenis** is wired into `gsap.ticker` so ScrollTrigger reads the interpolated
  scroll position. All in-page anchors route through `scrollToTarget()`.
- `prefers-reduced-motion: reduce` short-circuits Lenis and every timeline;
  content renders in its final state.

## Editing content

Copy, phone number, email, product tiers and spec pills all live in
`src/data/content.js`. Nothing is hardcoded in JSX, so changing a tier name or
swapping an image URL is a one-line edit.

## Images

The four product photographs still point at the original remote URLs. For
production, download them into `public/images/` and update the `src` values in
`content.js` so the page doesn't depend on a third-party host.
