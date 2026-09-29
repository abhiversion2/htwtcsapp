export type ServiceCategory =
  | 'residential'
  | 'commercial'
  | 'society'
  | 'industrial'
  | 'specialized';

export type TankType =
  | 'overhead'
  | 'underground'
  | 'sump'
  | 'plastic'
  | 'concrete'
  | 'stainless_steel'
  | 'loft';

export type PropertyType = 'residential' | 'commercial' | 'society' | 'industrial';

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  longDescription: string;
  category: ServiceCategory;
  startingPrice: number;
  duration: string;
  icon: string;
  image?: string;
  suitableFor: string[];
  benefits: string[];
  process: string[];
  equipment: string[];
  safetyPrecautions: string[];
  popular?: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  capacityLabel: string;
  minLitres: number;
  maxLitres: number;
  startingPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  date: string;
  serviceType: string;
  verified: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'process' | 'pricing' | 'safety' | 'commercial';
}

export interface LocationArea {
  id: string;
  name: string;
  region: string;
  pincodes: string[];
  popularPlaces: string[];
  isAvailable: boolean;
}

export interface BookingRequest {
  id: string;
  fullName: string;
  mobile: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  serviceId: string;
  serviceName: string;
  tankType: string;
  capacity: number;
  tankCount: number;
  propertyType: PropertyType;
  preferredDate: string;
  preferredTimeSlot: string;
  additionalNotes?: string;
  additionalDisinfection?: boolean;
  estimatedPrice: number;
  status: 'Pending' | 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  bio: string;
  certification: string;
}
