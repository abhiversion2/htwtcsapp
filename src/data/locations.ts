import { LocationArea } from '../types';

export const serviceLocations: LocationArea[] = [
  {
    id: 'loc-borivali',
    name: 'Borivali',
    region: 'Western Suburbs, Mumbai',
    pincodes: ['400091', '400092', '400103'],
    popularPlaces: ['Borivali West', 'Borivali East', 'IC Colony', 'Gorai', 'Shimpoli', 'Eksar'],
    isAvailable: true
  },
  {
    id: 'loc-andheri',
    name: 'Andheri',
    region: 'Western Suburbs, Mumbai',
    pincodes: ['400053', '400058', '400069', '400099'],
    popularPlaces: ['Lokhandwala', 'Versova', 'JB Nagar', 'Chakala', 'Marol', 'Seven Bungalows', 'MIDC'],
    isAvailable: true
  },
  {
    id: 'loc-kandivali',
    name: 'Kandivali',
    region: 'Western Suburbs, Mumbai',
    pincodes: ['400067', '400101'],
    popularPlaces: ['Kandivali West', 'Kandivali East', 'Lokhandwala Township', 'Thakur Complex', 'Thakur Village'],
    isAvailable: true
  },
  {
    id: 'loc-malad',
    name: 'Malad',
    region: 'Western Suburbs, Mumbai',
    pincodes: ['400064', '400097'],
    popularPlaces: ['Malad West', 'Malad East', 'Mindspace', 'Evershine Nagar', 'Marve Road', 'Dindoshi'],
    isAvailable: true
  },
  {
    id: 'loc-mira-road',
    name: 'Mira Road',
    region: 'Thane District / MMR',
    pincodes: ['401107'],
    popularPlaces: ['Shanti Park', 'Silver Park', 'Beverly Park', 'Pleasant Park', 'Kanakia Spaces', 'Naya Nagar'],
    isAvailable: true
  },
  {
    id: 'loc-bhayandar',
    name: 'Bhayandar',
    region: 'Thane District / MMR',
    pincodes: ['401101', '401105'],
    popularPlaces: ['Bhayandar West', 'Bhayandar East', 'Maxus Mall Area', 'Navghar', 'Jesal Park'],
    isAvailable: true
  },
  {
    id: 'loc-vasai',
    name: 'Vasai',
    region: 'Palghar / MMR',
    pincodes: ['401201', '401202', '401208'],
    popularPlaces: ['Vasai West', 'Vasai East', 'Evershine City', 'Manickpur', 'Babola', 'Navghar'],
    isAvailable: true
  },
  {
    id: 'loc-virar',
    name: 'Virar',
    region: 'Palghar / MMR',
    pincodes: ['401303', '401305'],
    popularPlaces: ['Virar West', 'Virar East', 'Yashwant Nagar', 'Bolinj', 'Arnala Road', 'Global City'],
    isAvailable: true
  },
  {
    id: 'loc-nalasopara',
    name: 'Nalasopara',
    region: 'Palghar / MMR',
    pincodes: ['401203', '401209'],
    popularPlaces: ['Nalasopara West', 'Nalasopara East', 'Achole Road', 'Tulinj', 'Central Park', 'Chakreshwar'],
    isAvailable: true
  },
  {
    id: 'loc-thane',
    name: 'Thane',
    region: 'Thane City / MMR',
    pincodes: ['400601', '400602', '400607', '400615'],
    popularPlaces: ['Ghodbunder Road', 'Majiwada', 'Vartak Nagar', 'Hiranandani Estate', 'Naupada', 'Kopri', 'Kavesar'],
    isAvailable: true
  },
  {
    id: 'loc-navi-mumbai',
    name: 'Navi Mumbai',
    region: 'Navi Mumbai',
    pincodes: ['400703', '400705', '400706', '400709'],
    popularPlaces: ['Vashi', 'Nerul', 'Kopar Khairane', 'Ghansoli', 'Belapur', 'Seawoods', 'Sanpada', 'Airoli'],
    isAvailable: true
  },
  {
    id: 'loc-panvel',
    name: 'Panvel',
    region: 'Raigad / MMR',
    pincodes: ['410206', '410218'],
    popularPlaces: ['New Panvel', 'Old Panvel', 'Khanda Colony', 'Karanjade', 'Kamothe', 'Kharghar'],
    isAvailable: true
  },
  {
    id: 'loc-mumbai-city',
    name: 'Mumbai South & Central',
    region: 'Mumbai Island City',
    pincodes: ['400001', '400014', '400016', '400028'],
    popularPlaces: ['Dadar', 'Bandra', 'Santacruz', 'Parel', 'Mahim', 'Worli', 'Colaba', 'Chembur'],
    isAvailable: true
  }
];

export const searchLocation = (query: string): LocationArea[] => {
  if (!query.trim()) return serviceLocations;
  const q = query.toLowerCase().trim();
  return serviceLocations.filter(loc =>
    loc.name.toLowerCase().includes(q) ||
    loc.region.toLowerCase().includes(q) ||
    loc.pincodes.some(pin => pin.includes(q)) ||
    loc.popularPlaces.some(place => place.toLowerCase().includes(q))
  );
};
