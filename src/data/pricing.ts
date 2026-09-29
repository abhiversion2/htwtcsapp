import { PricingTier } from '../types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'tier-small',
    name: 'Small Tank',
    capacityLabel: 'Up to 1,000 Litres',
    minLitres: 100,
    maxLitres: 1000,
    startingPrice: 499,
    description: 'Perfect for 1BHK, 2BHK flats, individual houses, and small terrace Sintex tanks.',
    features: [
      'Complete 6-stage mechanized cleaning',
      'Sludge & mud suction extraction',
      'High-pressure rotary wall jet wash',
      'Food-grade antibacterial disinfection',
      'Lid, ball-valve & pipe visual check',
      'Refill-ready guarantee'
    ]
  },
  {
    id: 'tier-medium',
    name: 'Medium Tank',
    capacityLabel: '1,001 – 5,000 Litres',
    minLitres: 1001,
    maxLitres: 5000,
    startingPrice: 799,
    popular: true,
    description: 'Ideal for independent bungalows, row houses, villas, and small apartment buildings.',
    features: [
      'All Small Tank features included',
      'Underground or overhead tank compatibility',
      'Deep calcium & scale scrubbing',
      'Heavy slurry extraction pump used',
      'UV germicidal sterilization wand stage',
      'Free post-cleaning water TDS check'
    ]
  },
  {
    id: 'tier-large',
    name: 'Large Tank',
    capacityLabel: '5,001 – 10,000 Litres',
    minLitres: 5001,
    maxLitres: 10000,
    startingPrice: 1499,
    description: 'Engineered for residential housing societies, restaurants, schools, and offices.',
    features: [
      'All Medium Tank features included',
      'RCC concrete / masonry deep pore scrub',
      'Multi-technician rapid deployment',
      'Full pipeline flushing & isolation',
      'Digital before & after service photo report',
      'Official hygiene completion certificate'
    ]
  },
  {
    id: 'tier-commercial',
    name: 'Commercial & Society Tank',
    capacityLabel: '10,000+ Litres',
    minLitres: 10001,
    maxLitres: 200000,
    startingPrice: 2999,
    description: 'High capacity solution for large CHS societies, factories, hospitals, and industrial plants.',
    features: [
      'Multi-tank phased sequential cleaning',
      'Zero water disruption for residents/staff',
      'Confined space certified technicians',
      'Industrial grade 3-phase slurry suction',
      'Lab microbial test report (Optional)',
      'Custom AMC & committee proposal support'
    ]
  }
];

export interface AddOnOption {
  id: string;
  name: string;
  price: number;
  description: string;
}

export const pricingAddOns: AddOnOption[] = [
  {
    id: 'addon-uv',
    name: 'Advanced UV-C Germicidal Sanitization',
    price: 249,
    description: 'High-intensity ultraviolet irradiation to eliminate 99.99% of dormant cysts and bacteria.'
  },
  {
    id: 'addon-antibacterial',
    name: 'Anti-Bacterial Nano-Barrier Coating',
    price: 349,
    description: 'Food-safe barrier applied to walls to delay algae and biofilm reattachment for up to 6 months.'
  },
  {
    id: 'addon-water-test',
    name: 'Water Quality TDS & pH Testing Report',
    price: 199,
    description: 'Calibrated laboratory meter check before and after service with digital test summary.'
  }
];
