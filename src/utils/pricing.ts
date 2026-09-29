export interface PriceCalculationParams {
  tankType: string;
  capacityLitres: number;
  tankCount: number;
  propertyType: 'residential' | 'commercial' | 'society' | 'industrial';
  additionalDisinfection?: boolean;
}

export interface PriceCalculationResult {
  basePrice: number;
  capacityMultiplier: number;
  tankCountMultiplier: number;
  propertyTypeMultiplier: number;
  addonsCost: number;
  subtotal: number;
  estimatedPrice: number;
  isCustomQuote: boolean;
}

export function calculateTankCleaningPrice(params: {
  tankType: string;
  capacityLitres: number;
  tankCount: number;
  propertyType: 'residential' | 'commercial' | 'society' | 'industrial';
  additionalDisinfection?: boolean;
}): PriceCalculationResult {
  const { tankType, capacityLitres, tankCount, propertyType, additionalDisinfection } = params;

  // Base starting pricing tiers by capacity
  let basePrice = 499;
  let isCustomQuote = false;

  if (capacityLitres <= 1000) {
    basePrice = 499;
  } else if (capacityLitres <= 2500) {
    basePrice = 699;
  } else if (capacityLitres <= 5000) {
    basePrice = 899;
  } else if (capacityLitres <= 10000) {
    basePrice = 1499;
  } else if (capacityLitres <= 20000) {
    basePrice = 2499;
  } else if (capacityLitres <= 50000) {
    basePrice = 4499;
  } else {
    basePrice = 7999;
    isCustomQuote = true;
  }

  // Tank type multiplier
  let tankTypeMultiplier = 1.0;
  if (tankType === 'underground' || tankType === 'sump' || tankType === 'concrete') {
    tankTypeMultiplier = 1.25; // Requires heavy dewatering & confined entry
  } else if (tankType === 'stainless_steel') {
    tankTypeMultiplier = 1.2;
  } else if (tankType === 'loft') {
    tankTypeMultiplier = 1.1; // Difficult ceiling access
  }

  // Property type multiplier
  let propertyMultiplier = 1.0;
  if (propertyType === 'commercial') {
    propertyMultiplier = 1.3;
  } else if (propertyType === 'society') {
    propertyMultiplier = 1.15;
  } else if (propertyType === 'industrial') {
    propertyMultiplier = 1.5;
  }

  // Tank count volume discount: 1 = 1x, 2 = 1.85x, 3 = 2.65x, etc.
  let tankCountFactor = 1;
  if (tankCount === 1) {
    tankCountFactor = 1.0;
  } else if (tankCount === 2) {
    tankCountFactor = 1.85; // 7.5% discount on 2
  } else if (tankCount === 3) {
    tankCountFactor = 2.65; // ~12% discount
  } else if (tankCount >= 4) {
    tankCountFactor = tankCount * 0.82; // 18% volume discount
  }

  // Add-on cost
  let addonsCost = 0;
  if (additionalDisinfection) {
    addonsCost += 249 * tankCount;
  }

  const subtotal = Math.round(basePrice * tankTypeMultiplier * propertyMultiplier * tankCountFactor);
  const estimatedPrice = subtotal + addonsCost;

  return {
    basePrice,
    capacityMultiplier: tankTypeMultiplier,
    tankCountMultiplier: tankCountFactor,
    propertyTypeMultiplier: propertyMultiplier,
    addonsCost,
    subtotal,
    estimatedPrice,
    isCustomQuote
  };
}
