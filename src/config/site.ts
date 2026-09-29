export interface SiteConfig {
  name: string;
  tagline: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  businessHours: {
    days: string;
    hours: string;
    full: string;
  };
  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    twitter: string;
  };
  emergencyHelpline: string;
  stats: {
    tanksCleaned: string;
    yearsExperience: string;
    serviceAreas: string;
    customerRating: string;
    trainedTechnicians: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "AquaClean Services",
  tagline: "Professional Water Tank Cleaning at Your Doorstep",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  whatsapp: "+91 98765 43210",
  whatsappRaw: "919876543210",
  email: "support@aquaclean.example",
  address: {
    line1: "Shop 14, Royal Crest Commercial Arcade",
    line2: "Near Metro Station, S.V. Road, Borivali West",
    city: "Mumbai",
    state: "Maharashtra",
    pincode: "400092",
    country: "India",
    full: "Shop 14, Royal Crest Arcade, S.V. Road, Borivali West, Mumbai, Maharashtra 400092",
  },
  businessHours: {
    days: "Monday – Sunday",
    hours: "8:00 AM – 7:00 PM",
    full: "Monday – Sunday: 8:00 AM – 7:00 PM",
  },
  social: {
    facebook: "https://facebook.com/aquacleanservices",
    instagram: "https://instagram.com/aquacleanservices",
    linkedin: "https://linkedin.com/company/aquacleanservices",
    twitter: "https://twitter.com/aquaclean",
  },
  emergencyHelpline: "+91 98765 43211",
  stats: {
    tanksCleaned: "5,000+",
    yearsExperience: "10+",
    serviceAreas: "50+",
    customerRating: "4.8/5",
    trainedTechnicians: "35+",
  },
};
