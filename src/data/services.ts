import { Service } from '../types';

export const standardCleaningProcess = [
  'Pre-inspection of tank interior, exterior, valves, and water level',
  'Drain remaining water safely using high-capacity submersible dewatering pump',
  'Mechanical sludge & sediment removal from the bottom surface using slurry vacuum',
  'High-pressure rotary jet scrubbing of tank walls and floor (150-200 bar)',
  'Complete vacuum extraction of loose grime, algae, and contaminated residue',
  'Antibacterial application & deep eco-friendly sanitization treatment',
  'Ultraviolet (UV) radiation or food-grade chemical disinfection stage',
  'Final clean-water rinse, quality inspection, and refill-ready clearance certificate'
];

export const standardEquipment = [
  'High-Pressure German Jet Cleaner (160+ Bar)',
  'Heavy-Duty Submersible Sludge Dewatering Pump',
  'Industrial Wet & Dry Slurry Vacuum Extractor',
  'UV Radiator / Disinfection Wand',
  'Safe Low-Voltage Waterproof Inspection Lighting',
  'Food-Grade Eco Sanitizers & Tank Wall Scrubbers',
  'Personal Protective Equipment (PPE, Masks, Harness)'
];

export const standardSafetyPrecautions = [
  'Technicians fully trained, verified, and equipped with mandatory PPE & non-slip boots',
  'Low-voltage 24V DC lighting inside enclosed or underground sumps to prevent electrical risk',
  'Gas and oxygen level checks before entering deep confined underground sumps',
  'Only 100% food-grade, chlorine-safe, non-toxic sanitizing compounds used',
  'Complete pipeline isolation during cleaning to ensure no residue enters household taps'
];

export const services: Service[] = [
  // Residential Services
  {
    id: 'res-overhead',
    name: 'Overhead Water Tank Cleaning',
    slug: 'overhead-water-tank-cleaning',
    description: 'Complete 6-stage mechanized cleaning and disinfection for rooftop plastic (Sintex/Penta) and concrete overhead tanks.',
    longDescription: 'Our overhead tank cleaning service removes years of accumulated silt, bird droppings, bacterial biofilm, and algae from your terrace storage tanks. We use mechanized rotary jet sprays and industrial wet vacuuming to leave your tank 100% hygienic without scratching the inner polymer lining.',
    category: 'residential',
    startingPrice: 499,
    duration: '60 - 90 mins',
    icon: 'ShieldCheck',
    image: '/images/overhead-tank.jpg',
    popular: true,
    suitableFor: ['Individual Villas', 'Apartment Flats', 'Row Houses', 'Duplexes', 'Independent Floors'],
    benefits: [
      'Eliminates foul smell, murky discoloration, and sediment from tap water',
      'Removes harmful pathogens like E. Coli, Salmonella, and Giardia cysts',
      'Extends the lifespan of plastic and polymer tank walls',
      'Ensures crystal clear water for bathing, washing, and kitchen RO filters'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'res-underground',
    name: 'Underground Water Tank Cleaning',
    slug: 'underground-water-tank-cleaning',
    description: 'Heavy-duty sludge extraction and pressure washing for underground residential RCC and masonry water tanks.',
    longDescription: 'Underground tanks frequently accumulate heavy silt, mud seepage, and stubborn algae due to lack of sunlight and direct ground contact. Our technicians enter with confined-space safety gear, pump out toxic sludge, and blast away calcified scale.',
    category: 'residential',
    startingPrice: 799,
    duration: '90 - 120 mins',
    icon: 'Droplets',
    image: '/images/hero-tank.jpg',
    popular: true,
    suitableFor: ['Bungalows', 'Stand-alone Houses', 'Residential Societies', 'Row House Compounds'],
    benefits: [
      'Removes deep layers of mud, sand, and groundwater sediment',
      'Seals micro-pores to inhibit stubborn black mold and fungal spores',
      'Improves water motor efficiency by eliminating grit and pebbles',
      'Prevents waterborne illnesses across the household'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'res-home-complete',
    name: 'Home Water Tank Cleaning Combo',
    slug: 'home-water-tank-cleaning',
    description: 'Comprehensive combo cleaning package for both overhead terrace tank and ground sump in residential houses.',
    longDescription: 'Save money and ensure your entire household water chain is thoroughly sterilized with our complete Home Tank Cleaning Combo. We service both your ground/underground sump and rooftop tanks in a single seamless visit.',
    category: 'residential',
    startingPrice: 1199,
    duration: '2 - 3 hours',
    icon: 'Home',
    popular: true,
    suitableFor: ['Independent Houses', 'Bungalows', 'Farmhouses', 'Triplex Homes'],
    benefits: [
      'Simultaneous de-silting and disinfection of both supply ends',
      'Special discounted combo pricing',
      'Free water TDS and clarity check post-service',
      'Zero downtime for your daily water routine'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'res-sump',
    name: 'Residential Sump Cleaning',
    slug: 'sump-cleaning',
    description: 'Specialized deep cleaning and sediment suction for domestic ground-level and basement water collection sumps.',
    longDescription: 'Municipal water arriving in your sump often carries sand, iron oxides, and suspended impurities. Our specialized slurry pumps and wet extraction systems suck out the muck without disturbing your plumbing connections.',
    category: 'residential',
    startingPrice: 699,
    duration: '60 - 90 mins',
    icon: 'Layers',
    suitableFor: ['Bungalows', 'Basements', 'Ground-floor collection pits', 'Duplexes'],
    benefits: [
      'Stops mud from entering your overhead lifting pump',
      'Eliminates stagnant water odor and microbial slime',
      'Safe non-corrosive wall scrubbing'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'res-apartment',
    name: 'Apartment Tank Cleaning',
    slug: 'apartment-tank-cleaning',
    description: 'Quick, quiet, and spotless tank sanitization designed specifically for flat owners and multi-story apartments.',
    longDescription: 'Designed for individual flat tanks, loft tanks, or dedicated apartment line reservoirs. Our compact equipment ensures no leakage, mess, or noise complaints in apartment corridors.',
    category: 'residential',
    startingPrice: 499,
    duration: '45 - 60 mins',
    icon: 'Building',
    suitableFor: ['High-rise flats', 'Loft tanks', 'Individual unit rooftop tanks'],
    benefits: [
      'Mess-free operation inside apartment utility spaces',
      'Quick turnaround with minimal water wastage',
      'Eco-friendly odor-free sterilizing agents'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },

  // Commercial Services
  {
    id: 'com-office',
    name: 'Office Water Tank Cleaning',
    slug: 'office-water-tank-cleaning',
    description: 'Certified commercial cleaning for corporate offices, IT parks, and business centers with minimum disruption.',
    longDescription: 'Corporate spaces require immaculate water quality for cafeteria cooking, pantry water dispensers, and washrooms. We offer scheduled night and weekend shifts to keep your workplace running smoothly.',
    category: 'commercial',
    startingPrice: 1999,
    duration: '2 - 4 hours',
    icon: 'Briefcase',
    suitableFor: ['Corporate Offices', 'IT Parks', 'Co-working Spaces', 'Financial Hubs'],
    benefits: [
      'Scheduled off-hours or weekend service with zero workplace disturbance',
      'Compliance certification for corporate health & safety audits',
      'Laboratory water quality testing report available upon request',
      'Digital invoicing and GST compliance'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'com-restaurant',
    name: 'Restaurant & Café Tank Cleaning',
    slug: 'restaurant-tank-cleaning',
    description: 'FSSAI compliant water tank sanitization for cloud kitchens, restaurants, food courts, and cafes.',
    longDescription: 'Food businesses must adhere to stringent water hygiene guidelines. We provide 100% food-grade sanitization, ensuring bacteria-free cooking and dishwashing water that easily passes food safety inspections.',
    category: 'commercial',
    startingPrice: 1499,
    duration: '2 - 3 hours',
    icon: 'Utensils',
    popular: true,
    suitableFor: ['Fine Dining Restaurants', 'Cafés', 'Cloud Kitchens', 'Bakeries', 'Food Courts'],
    benefits: [
      'Guarantees FSSAI food-safety hygiene compliance',
      'Protects ice machines and commercial coffee makers from scale damage',
      'Zero chemical taint or lingering chlorine flavor in beverages'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'com-hotel',
    name: 'Hotel & Hospitality Tank Cleaning',
    slug: 'hotel-tank-cleaning',
    description: 'High-capacity overhead and underground tank sanitization for boutique hotels, resorts, and lodges.',
    longDescription: 'Guest satisfaction hinges on pristine hot and cold water in rooms and spa areas. Our team works with hotel engineering teams to coordinate seamless block-by-block tank rotations.',
    category: 'commercial',
    startingPrice: 3499,
    duration: '3 - 6 hours',
    icon: 'Sparkles',
    suitableFor: ['Hotels', 'Boutique Resorts', 'Service Apartments', 'Guest Houses'],
    benefits: [
      'Rotational tank cleaning to maintain uninterrupted guest water pressure',
      'Deep stain and hard water scale removal from ceramic and tile sumps',
      'Formal audit certificate for hospitality rating agencies'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'com-school',
    name: 'School & College Tank Cleaning',
    slug: 'school-tank-cleaning',
    description: 'Child-safe hygiene and non-toxic water sanitization for educational institutes, daycares, and universities.',
    longDescription: 'Protecting young students from gastrointestinal infections and seasonal waterborne epidemics is crucial. We clean during vacation breaks or weekends using strictly organic and non-toxic sanitizing formulations.',
    category: 'commercial',
    startingPrice: 2499,
    duration: '3 - 5 hours',
    icon: 'GraduationCap',
    suitableFor: ['Primary Schools', 'High Schools', 'Colleges', 'Daycares', 'Hostels'],
    benefits: [
      'Pure organic, non-toxic sanitization safe for young children',
      'Eliminates biofilm in drinking water fountain storage tanks',
      'Water health certificate provided for school display boards'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'com-hospital',
    name: 'Hospital & Healthcare Tank Cleaning',
    slug: 'hospital-tank-cleaning',
    description: 'Clinical grade hospital sanitization preventing Legionella and nosocomial bacterial water contamination.',
    longDescription: 'Healthcare facilities need the highest degree of sterility. We utilize specialized UV germicidal irradiation and clinical sterilants tested against resistant bacterial strains.',
    category: 'commercial',
    startingPrice: 3999,
    duration: '4 - 6 hours',
    icon: 'Activity',
    suitableFor: ['Hospitals', 'Nursing Homes', 'Diagnostic Centers', 'Dialysis Clinics'],
    benefits: [
      'Tested against Legionella, Pseudomonas, and Coliform strains',
      'UV-C germicidal sterilization wand application',
      'Detailed microbiological test report options'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'com-mall',
    name: 'Mall & Commercial Building Cleaning',
    slug: 'mall-commercial-building-tank-cleaning',
    description: 'Mega-capacity tank cleaning services for shopping malls, multiplexes, and retail centers.',
    longDescription: 'High footfall complexes demand enormous water storage. Our heavy-duty multi-operator teams handle massive concrete chambers swiftly during overnight maintenance windows.',
    category: 'commercial',
    startingPrice: 4999,
    duration: '5 - 8 hours',
    icon: 'ShoppingBag',
    suitableFor: ['Shopping Malls', 'Multiplexes', 'Supermarkets', 'Commercial Plazas'],
    benefits: [
      'Multi-team rapid deployment to handle 50,000+ litre reservoirs',
      'Industrial extraction pumps for fast water transfer and drain',
      'Full compliance with municipal fire and safety guidelines'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },

  // Society Services
  {
    id: 'soc-housing',
    name: 'Housing Society Tank Cleaning',
    slug: 'housing-society-tank-cleaning',
    description: 'Full-society package covering all underground sumps, booster tanks, and terrace tanks with minimal water wastage.',
    longDescription: 'Trusted by over 300+ Cooperative Housing Societies across Mumbai, Thane, and Navi Mumbai. We coordinate with society managing committees, share notice templates for residents, and clean multiple tanks sequentially.',
    category: 'society',
    startingPrice: 2499,
    duration: '4 - 8 hours',
    icon: 'Users',
    popular: true,
    suitableFor: ['Co-operative Housing Societies (CHS)', 'Gated Communities', 'Tower Enclaves', 'Row House Layouts'],
    benefits: [
      'Sequential cleaning to guarantee residents never run out of water',
      'Custom resident notice templates provided 48 hours in advance',
      'Comprehensive before-and-after photo report for AGM and records',
      'Special discounted annual maintenance contracts (AMC)'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'soc-apartment-complex',
    name: 'Apartment Complex Tank Cleaning',
    slug: 'apartment-complex-tank-cleaning',
    description: 'Engineered for high-rise towers with synchronized underground and multi-zone overhead distribution tanks.',
    longDescription: 'Modern towers have complex hydrostatic pressure systems and intermediate break tanks. Our skilled engineers ensure no airlocks occur in distribution lines during or after cleaning.',
    category: 'society',
    startingPrice: 3499,
    duration: 'Full Day / Phased',
    icon: 'Building2',
    suitableFor: ['High-rise Towers', 'Multi-wing Complexes', 'Township Projects'],
    benefits: [
      'Zero airlock guarantee on plumbing return',
      'Complete safety harness procedures for high terrace perimeters',
      'Dedicated project manager on-site'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'soc-multiple',
    name: 'Multiple Tank Cleaning Package',
    slug: 'multiple-tank-cleaning',
    description: 'Volume discount package for properties with 3 to 20+ individual overhead or underground reservoirs.',
    longDescription: 'Have multiple overhead tanks across separate building wings? Our multi-crew deployment operates simultaneously across wings to cut downtime in half while providing progressive bulk discounts.',
    category: 'society',
    startingPrice: 3999,
    duration: '4 - 6 hours',
    icon: 'Boxes',
    suitableFor: ['Colleges', 'Hospitality Groups', 'Multi-wing CHS', 'Cluster Housing'],
    benefits: [
      'Up to 30% discount on 3 or more tanks cleaned together',
      'Parallel crew execution to save time',
      'Single consolidated service report'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'soc-sump',
    name: 'Society Underground Sump Cleaning',
    slug: 'society-underground-sump-cleaning',
    description: 'Heavy slurry suction and bacterial scrub for large volume underground municipal water storage chambers.',
    longDescription: 'Society sumps retain tons of municipal sediment and sludge over 6-12 months. We use high-throughput 3-phase slurry pumps to rapidly exhaust contaminated residue.',
    category: 'society',
    startingPrice: 2999,
    duration: '3 - 5 hours',
    icon: 'HardHat',
    suitableFor: ['CHS Main Sumps', 'Commercial Complexes', 'Fire Fighting Water Sumps'],
    benefits: [
      'Heavy-duty industrial slurry pumps handle thick gravel and clay sludge',
      'Oxygen monitoring and safety tripod winch for deep sump entry',
      'Protects society booster and hydro-pneumatic pumps from grit damage'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'soc-terrace',
    name: 'Terrace Tank Cleaning & Overflow Check',
    slug: 'terrace-tank-cleaning',
    description: 'Rooftop water tank sterilization combined with overflow pipe and ball-valve visual inspection.',
    longDescription: 'Terrace tanks suffer from direct ultraviolet exposure, promoting green micro-algae blooms. We descale the walls, sanitize the interior, and inspect float valves to stop water wastage.',
    category: 'society',
    startingPrice: 1999,
    duration: '2 - 4 hours',
    icon: 'Sun',
    suitableFor: ['All Residential Rooftops', 'Clubhouses', 'Terrace Lofts'],
    benefits: [
      'Eliminates green filament algae and mosquito breeding hazards',
      'Checks float valves and overflow pipes to prevent water leaks',
      'UV radiation finish to prevent rapid algae recurrence'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },

  // Industrial Services
  {
    id: 'ind-industrial',
    name: 'Industrial Water Tank Cleaning',
    slug: 'industrial-water-tank-cleaning',
    description: 'Heavy industrial cleaning and chemical de-scaling for factory process and fire storage tanks.',
    longDescription: 'Industrial manufacturing relies on clean cooling, boiler feed, and process water. We operate with strict adherence to industrial EHS protocols, confined-space permits, and lockout/tagout (LOTO) procedures.',
    category: 'industrial',
    startingPrice: 4999,
    duration: 'Custom Estimate',
    icon: 'Factory',
    popular: true,
    suitableFor: ['Manufacturing Plants', 'Chemical Units', 'Automobile Workshops', 'Food Processing Units'],
    benefits: [
      'Strict adherence to OSHA & Factory Act confined-space safety protocols',
      'Removal of mineral scale, chemical salts, and rust deposits',
      'Zero operational disruption to plant machinery lines'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'ind-large-capacity',
    name: 'Large Capacity Tank Cleaning (50K+ Litres)',
    slug: 'large-capacity-tank-cleaning',
    description: 'Engineered cleaning solutions for mega-scale municipal, institutional, and industrial water reservoirs.',
    longDescription: 'Equipped with heavy diesel dewatering pumps, multi-nozzle high flow jet blasters, and specialized scaffolding to tackle huge industrial cisterns up to 500,000 litres.',
    category: 'industrial',
    startingPrice: 8999,
    duration: '1 - 2 Days',
    icon: 'Maximize',
    suitableFor: ['Industrial Parks', 'Municipal Water Works', 'Power Plants', 'Refineries'],
    benefits: [
      'Capable of managing 50,000L to 500,000L reservoirs',
      'High-velocity centrifugal mud slurry pumps',
      'Comprehensive safety documentation and insurance coverage'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'ind-factory',
    name: 'Factory Water Tank Cleaning',
    slug: 'factory-water-tank-cleaning',
    description: 'Systematic descaling and sanitization for raw water, treated water, and effluent storage tanks.',
    longDescription: 'Factory water storage requires precision cleaning to prevent pipe scaling, nozzle clogging in cooling towers, and bacterial fouling in manufacturing operations.',
    category: 'industrial',
    startingPrice: 4499,
    duration: '4 - 8 hours',
    icon: 'Wrench',
    suitableFor: ['Textile Mills', 'Pharma Plants', 'Engineering Workshops', 'Packaging Units'],
    benefits: [
      'Prevents scale buildup in heat exchangers and cooling circuits',
      'Removes industrial airborne particulate buildup',
      'Fast turnaround during scheduled maintenance shutdowns'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'ind-sump',
    name: 'Industrial Sump Cleaning',
    slug: 'industrial-sump-cleaning',
    description: 'Heavy slurry suction and sediment dredging for industrial effluent, raw water, and storm sumps.',
    longDescription: 'Industrial sumps face severe heavy-metal sedimentation, oil traces, and thick industrial mud. We use explosion-proof vacuum units and acid-resistant pumps for thorough clearance.',
    category: 'industrial',
    startingPrice: 5999,
    duration: '4 - 8 hours',
    icon: 'Cog',
    suitableFor: ['Industrial Basements', 'Effluent Collection Pits', 'Cooling Tower Basins'],
    benefits: [
      'Dredges settled heavy sediments and suspended sludge',
      'Restores sump holding volume capacity to 100%',
      'Environmentally conscious disposal of extracted sludge'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'ind-sanitization',
    name: 'Water Storage Tank Sanitization',
    slug: 'water-storage-tank-sanitization',
    description: 'Deep microbiological decontamination using medical-grade antimicrobial compounds and UV exposure.',
    longDescription: 'Sterilization protocol engineered specifically for industrial water supplies requiring zero microbial colony count. Perfect for pharmaceuticals, beverages, and clean-room facilities.',
    category: 'industrial',
    startingPrice: 3499,
    duration: '3 - 5 hours',
    icon: 'CheckCircle2',
    suitableFor: ['Pharmaceutical Warehouses', 'Bottling Facilities', 'Clean Rooms'],
    benefits: [
      'Eliminates 99.99% of bacteria, molds, and viruses',
      'Residue-free neutral rinse testing with calibrated litmus and TDS meters',
      'Validates water storage for purity audits'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },

  // Specialized Services
  {
    id: 'spec-disinfection',
    name: 'Water Tank Disinfection',
    slug: 'water-tank-disinfection',
    description: 'High-level chemical and UV-C germicidal disinfection destroying bacteria, viruses, and microbial biofilms.',
    longDescription: 'Even after a tank is washed, microscopic biofilms cling to microscopic surface pores. Our 2-stage disinfection combines food-safe anti-microbial wash with concentrated UV-C radiation wands.',
    category: 'specialized',
    startingPrice: 599,
    duration: '45 - 60 mins',
    icon: 'Zap',
    popular: true,
    suitableFor: ['All Tank Types', 'Post-Contamination Recovery', 'Annual Maintenance'],
    benefits: [
      'Destroys 99.99% of waterborne bacteria, viruses, and cysts',
      'Food-grade disinfectant leaves no unpleasant odor or lingering taste',
      'Long-lasting bacteriostatic barrier inhibits rapid re-growth'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'spec-sanitization',
    name: 'Water Tank Sanitization',
    slug: 'water-tank-sanitization',
    description: 'Eco-friendly, chemical-free sanitization ideal for sensitive households, infants, and elderly residents.',
    longDescription: 'Concerned about harsh chemical residues? Our eco-sanitization utilizes food-grade hydrogen peroxide mist and ultraviolet exposure for completely organic purity.',
    category: 'specialized',
    startingPrice: 699,
    duration: '60 mins',
    icon: 'Leaf',
    suitableFor: ['Homes with Infants', 'Senior Living', 'Ayurvedic Centers', 'Organic Farms'],
    benefits: [
      '100% biodegradable and chemical-free sanitization agents',
      'Zero volatile fumes or skin irritants',
      'Safe for pets and newborn bathing'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'spec-sludge',
    name: 'Sludge & Sediment Removal',
    slug: 'sludge-removal',
    description: 'Industrial wet vacuum extraction to dredge accumulated mud, sand, and decaying silt from tank bottoms.',
    longDescription: 'Heavy sludge at the bottom of water tanks harbors anaerobic bacteria and foul sewer-like smells. Our slurry extractors pump out the muck without contaminating surrounding areas.',
    category: 'specialized',
    startingPrice: 599,
    duration: '45 - 75 mins',
    icon: 'Trash2',
    suitableFor: ['Heavily Soiled Tanks', 'Post-Flooding Sump Contamination', 'Old Neglected Tanks'],
    benefits: [
      'Deep suction extracts stubborn mud without messy manual bucket bailing',
      'Prevents dirt from entering household water filters and washing machines',
      'Restores original tank water storage volume'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'spec-algae',
    name: 'Algae & Fungus Removal',
    slug: 'algae-removal',
    description: 'Anti-fungal scouring and UV radiation to kill green, black, and mustard algae spores permanently.',
    longDescription: 'Algae thriving in terrace tanks produces foul tastes and toxic byproducts. We chemically neutralize the algae root systems and polish the inner walls to stop reattachment.',
    category: 'specialized',
    startingPrice: 549,
    duration: '60 - 90 mins',
    icon: 'Activity',
    suitableFor: ['Sun-exposed Rooftop Tanks', 'Translucent Plastic Tanks', 'Garden Tanks'],
    benefits: [
      'Stops green slime and musty odors in drinking and tap water',
      'Kills algae spores at the root to prevent rapid reappearance',
      'Enhances water clarity immediately'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'spec-sediment',
    name: 'Sediment & Calcium Scale Removal',
    slug: 'sediment-removal',
    description: 'Descaling of hard water white calcium crust, rust stains, and calcified deposits on tank walls.',
    longDescription: 'Hard water causes tough calcium encrustation that harbors bacterial colonies. We use safe organic descalers to break down the crust without etching the tank substrate.',
    category: 'specialized',
    startingPrice: 649,
    duration: '60 - 90 mins',
    icon: 'Layers',
    suitableFor: ['Hard Water Areas', 'Borewell Water Supplies', 'Coastal Saline Zones'],
    benefits: [
      'Dissolves tough mineral scale and rusty discoloration',
      'Restores smooth interior tank surfaces',
      'Protects plumbing fixtures from flaking scale particles'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'spec-inspection',
    name: 'Comprehensive Tank Inspection',
    slug: 'tank-inspection',
    description: 'Detailed structural, leakage, valve, and contamination audit with digital photo report.',
    longDescription: 'Unsure whether your tank needs minor maintenance, crack waterproofing, or deep cleaning? Our technician conducts a 24-point audit of walls, joints, overflow mesh, and water quality.',
    category: 'specialized',
    startingPrice: 349,
    duration: '30 - 45 mins',
    icon: 'Search',
    suitableFor: ['New Homebuyers', 'Society Annual Audits', 'Water Leakage Troubleshooting'],
    benefits: [
      '24-point inspection checklist delivered to your phone/email',
      'Early detection of hairline cracks and water seepage',
      'Inspection fee waived if you book cleaning service'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'spec-emergency',
    name: 'Emergency 2-Hour Tank Cleaning',
    slug: 'emergency-tank-cleaning',
    description: 'Rapid response team for contaminated water emergencies, sewage backflow, or pest entry.',
    longDescription: 'Accidental sewage intrusion, dead bird/rodent discovery, or dirty water flood? Our rapid response unit arrives within 2 hours with emergency sterilization gear to restore safe water.',
    category: 'specialized',
    startingPrice: 1499,
    duration: 'Immediate Priority (2-3 hrs)',
    icon: 'AlertTriangle',
    popular: true,
    suitableFor: ['Post-Monsoon Flooding', 'Dead Animal Discovery', 'Sewage Pipe Backflow', 'Urgent Events'],
    benefits: [
      'Priority rapid dispatch within 120 minutes',
      'Triple-stage biological sterilization',
      'Emergency pipeline flushing and chemical neutralizer'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },

  // Material-specific services
  {
    id: 'mat-plastic',
    name: 'Plastic & Sintex Tank Cleaning',
    slug: 'plastic-tank-cleaning',
    description: 'Gentle yet deep rotary pressure washing for triple-layer and 4-layer HDPE/polyethylene water tanks.',
    longDescription: 'Modern polymer tanks need non-abrasive cleaning to preserve their inner food-grade antibacterial coating. We use soft rotary nozzles that sanitize without scratching.',
    category: 'residential',
    startingPrice: 499,
    duration: '45 - 60 mins',
    icon: 'Shield',
    suitableFor: ['Sintex', 'Plasto', 'Supreme', 'Vectus', 'Ashirvad HDPE Tanks'],
    benefits: [
      'Safeguards anti-bacterial lining inside branded tanks',
      'Removes silt accumulation from convoluted corrugations',
      'Complete lid and vent screen inspection'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'mat-concrete',
    name: 'Concrete & RCC Tank Cleaning',
    slug: 'concrete-tank-cleaning',
    description: 'Industrial heavy pressure scouring and deep pore sanitization for masonry and RCC concrete reservoirs.',
    longDescription: 'Concrete tanks have porous surfaces that absorb dirt and foster deep-rooted fungal growth. We use 200-bar jet blasters to purge pores and apply protective sanitizing sealant.',
    category: 'society',
    startingPrice: 1299,
    duration: '2 - 4 hours',
    icon: 'Box',
    suitableFor: ['Bungalow RCC Tanks', 'Society Underground Sumps', 'Commercial RCC Reservoirs'],
    benefits: [
      'Deep high-pressure pore penetration eliminates stubborn black moss',
      'Removes loose lime and mortar grit',
      'Prevents water seepage into building foundations'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  },
  {
    id: 'mat-stainless',
    name: 'Stainless Steel Tank Cleaning',
    slug: 'stainless-steel-tank-cleaning',
    description: 'Non-corrosive passivation cleaning for SS304 & SS316 food-grade stainless steel storage tanks.',
    longDescription: 'Stainless steel tanks require strictly non-chloride sanitizers to preserve their anti-corrosion passivation layer. We use specialized SS detergents and ultra-soft micro-fiber scouring.',
    category: 'specialized',
    startingPrice: 899,
    duration: '60 - 90 mins',
    icon: 'Sparkles',
    suitableFor: ['Hospitals', 'Pharmaceutical plants', 'Modern luxury villas', 'Breweries'],
    benefits: [
      'Chloride-free sanitization protects stainless steel from pitting',
      'Preserves the mirror finish and food-grade hygiene standards',
      'Restores natural passivation layer on tank surfaces'
    ],
    process: standardCleaningProcess,
    equipment: standardEquipment,
    safetyPrecautions: standardSafetyPrecautions
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getServicesByCategory = (category: string): Service[] => {
  if (category === 'all') return services;
  return services.filter(s => s.category === category);
};
