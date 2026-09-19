/**
 * Every string here is lifted verbatim from the supplied markup so the
 * rendered page is byte-for-byte the same copy, just driven by data.
 */

import heroAcArmor from '../assets/img/hero-ac-armor.jpg';
import armorI from '../assets/img/armor-i.jpg';
import armorII from '../assets/img/armor-ii.jpg';
import armorIII from '../assets/img/armor-iii.jpg';
import commercialArmor from '../assets/img/commercial-armor.jpg';

export const company = {
  name: 'AC Armor',
  legalName: 'A C Armor, LLC',
  phoneDisplay: '(404) 567-4900',
  phoneHref: 'tel:4045674900',
  email: 'customercare@acarmor.net',
  emailHref: 'mailto:customercare@acarmor.net',
  locality: 'East Point, GA 30344',
  city: 'Atlanta, GA',
  copyright: '© 2008–2025 A C Armor, LLC. Atlanta, GA.',
};

export const navLinks = [
  { label: 'Protection', href: '#protection' },
  { label: 'Products', href: '#products' },
  { label: 'Who We Protect', href: '#who-we-protect' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Contact', href: '#contact' },
];

export const hero = {
  eyebrow: 'HVAC SECURITY • METRO ATLANTA',
  headline: ['Protect Your AC', 'Before Someone', 'Steals It.'],
  body:
    'Outdoor HVAC units are valuable, exposed, and difficult to replace after theft. AC Armor provides durable security cages designed to help protect residential and commercial AC equipment while keeping it accessible for service.',
  footnote:
    'Engineered in East Point, GA • Full Technician Service Clearance • Heavy-Gauge Steel',
  figureLabel: 'FIG 01.0 // AC ARMOR RESIDENTIAL CAGE',
  figureSpec: 'DUAL HASP • AIRFLOW TOLERANCE',
  image: {
    src: heroAcArmor,
    alt:
      'AC Armor powder-coated heavy-duty residential AC security cage enclosing condenser unit',
  },
};

export const trustMetrics = [
  {
    id: 'founded',
    label: 'EST. 2008',
    accent: true,
    title: 'Atlanta Founded & Fabricated',
    detail: 'East Point custom metalwork facility',
  },
  {
    id: 'steel',
    label: 'STEEL DEFENSE',
    accent: false,
    title: 'Tubular & Expanded Mesh',
    detail: 'Heavy gauge structural welds',
  },
  {
    id: 'fit',
    label: 'CUSTOM FIT',
    accent: false,
    title: 'Precision Pad Measurements',
    detail: 'Tailored to all condenser sizes',
  },
  {
    id: 'access',
    label: 'SERVICE ACCESS',
    accent: false,
    title: 'Full Technician Clearance',
    detail: 'Unhindered maintenance entry',
  },
];

export const catalog = {
  eyebrow: 'PRODUCT CATALOG // SPECIFICATION TIERS',
  heading: 'Protection Built Around Your Equipment.',
  body:
    'Four tiers of structural security engineered for your property risk profile, neighborhood density, and compressor footprint.',
};

export const products = [
  {
    id: 'armor-1',
    variant: 'standard',
    tier: 'TIER 01',
    name: 'ARMOR I',
    meta: 'RESIDENTIAL ENTRY',
    subtitle: 'Residential Protection',
    description:
      'A purpose-built AC security cage engineered for standard single-family residential outdoor condensers. Balanced physical deterrence with uncompromised natural airflow.',
    specs: ['Heavy Tubular Steel', 'Padlock Shroud', 'Airflow Optimized'],
    cta: { label: 'Explore Armor I', href: '#quote' },
    image: {
      src: armorI,
      alt: 'Armor I Residential AC Steel Security Cage Enclosure',
    },
  },
  {
    id: 'armor-2',
    variant: 'standard',
    tier: 'TIER 02',
    name: 'ARMOR II',
    meta: 'REINFORCED',
    subtitle: 'Reinforced Protection',
    description:
      'A reinforced cage solution for properties requiring additional physical security and tamper resistance. Features tighter steel spacing and strengthened concrete anchor points.',
    specs: ['Reinforced Spacing', 'Tamper Deflector', 'Concrete Anchor Flanges'],
    cta: { label: 'Explore Armor II', href: '#quote' },
    image: {
      src: armorII,
      alt: 'Armor II Reinforced AC Security Cage with tight steel bar spacing',
    },
  },
  {
    id: 'armor-3',
    variant: 'feature',
    tier: 'HIGH-RISK DEFENSE',
    name: 'ARMOR III',
    meta: 'EXPANDED STEEL',
    subtitle: 'High-Risk & Expanded Mesh Security',
    description:
      'A heavy-duty security cage incorporating dense expanded metal mesh and reinforced steel framing. Engineered for properties at elevated risk or direct unauthorized exterior public access.',
    specs: ['Expanded Steel Mesh', 'Anti-Pry Frame', 'Commercial Hasp'],
    cta: { label: 'Explore Armor III', href: '#quote' },
    image: {
      src: armorIII,
      alt: 'Armor III Heavy Duty AC Security Cage with Expanded Steel Mesh',
    },
  },
  {
    id: 'commercial',
    variant: 'dark',
    tier: 'BANK CONFIGURATIONS',
    name: 'COMMERCIAL ARMOR',
    meta: 'MULTI-UNIT / ROOFTOP',
    subtitle: 'Commercial & Multi-Unit Protection',
    description:
      'Custom engineered security solutions for commercial properties, rooftop banks, and high-exposure institutional HVAC environments across Metro Atlanta.',
    specs: [
      'Multi-Unit Modular Banks',
      'Rooftop Flange Mounts',
      'Master-Key Access Options',
    ],
    cta: { label: 'Discuss Commercial Project', href: '#contact' },
    image: {
      src: commercialArmor,
      alt:
        'Commercial Rooftop HVAC Steel Cages Protecting Industrial Condensers',
    },
  },
];

export const faq = {
  eyebrow: 'FIELD QUESTIONS // INSTALLATION & ACCESS',
  heading: 'Answers Before We Measure Your Site.',
  body:
    'Clear answers on airflow, service access, fit, and the protection level that best matches your equipment and property.',
  items: [
    {
      question: 'Will an AC Armor cage restrict my condenser’s airflow?',
      answer:
        'No. Each cage is designed around the equipment footprint with open structural spacing so the condenser can draw and discharge air as intended. We confirm the unit and pad dimensions before fabrication.',
    },
    {
      question: 'Can an HVAC technician service the unit without removing the cage?',
      answer:
        'Yes. Service clearance is a core part of the design. The cage provides controlled access for routine maintenance while keeping the condenser protected when the technician is not on site.',
    },
    {
      question: 'Does one AC security cage fit every outdoor unit?',
      answer:
        'No. Condensers, pads, line-set locations, and surrounding clearance vary from property to property. AC Armor uses site measurements to match the cage to the actual installation.',
    },
    {
      question: 'When should I choose Armor III instead of Armor I or II?',
      answer:
        'Armor III is intended for higher-risk locations where expanded steel mesh and reinforced framing add a stronger physical barrier. It is a good fit for equipment exposed to public access or repeated tampering risk.',
    },
    {
      question: 'Can you protect several commercial HVAC units in one installation?',
      answer:
        'Yes. Commercial configurations can be planned for multi-unit banks, rooftop equipment, and other high-exposure layouts. The final design is based on the equipment arrangement and service requirements.',
    },
    {
      question: 'What information do I need before requesting a quote?',
      answer:
        'A condenser footprint or clear site measurements are the best starting point. A property address also helps us understand the location and prepare for an accurate structural cage recommendation.',
    },
  ],
};
export const quote = {
  eyebrow: 'PHYSICAL ASSET PROTECTION',
  heading: 'Request an AC Armor Precision Estimate',
  body:
    'Provide your condenser unit footprint or property address in the Atlanta metro area for a rapid, accurate structural cage quote.',
  footnote:
    'Residential single units • Multi-family property developments • Commercial rooftop installations',
};
