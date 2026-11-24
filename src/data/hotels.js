export const HOTELS = [
  {
    id: "h-1",
    name: "The Grand Azure Resort & Spa",
    tagline: "Ultra-luxury cliffside resort with panoramic Indian Ocean views",
    city: "Uluwatu",
    country: "Indonesia",
    category: "Resort",
    pricePerNight: 340,
    rating: 4.94,
    reviewsCount: 382,
    featured: true,
    badge: "Guest Favorite",
    images: [
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Perched majestically atop the limestone cliffs of Uluwatu, The Grand Azure offers an unforgettable sanctuary where modern luxury meets Balinese heritage. Indulge in private infinity pools, world-class Ayurvedic spa rituals, and cliff-edge dining overlooking azure ocean waters.",
    amenities: [
      "Infinity Pool",
      "Private Beach Access",
      "World-class Spa",
      "Free High-speed Wi-Fi",
      "Free Gourmet Breakfast",
      "Airport VIP Chauffeur",
      "Fitness & Yoga Pavilion",
      "Oceanfront Fine Dining"
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours before check-in",
      pets: "Pet-friendly upon advance notice"
    },
    rooms: [
      {
        id: "r-101",
        name: "Deluxe Ocean Panorama Suite",
        capacity: "2 Guests",
        bed: "1 King Bed",
        size: "65 m²",
        price: 340,
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        features: ["Private Balcony", "Direct Ocean View", "Marble Bathtub", "Nespresso Machine", "High-speed Wi-Fi"]
      },
      {
        id: "r-102",
        name: "Cliffside Pool Villa",
        capacity: "3 Guests",
        bed: "1 King Bed + 1 Daybed",
        size: "120 m²",
        price: 520,
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80",
        features: ["Private Infinity Plunge Pool", "Outdoor Rain Shower", "Personal Butler Service", "Sun Loungers", "Complimentary Minibar"]
      },
      {
        id: "r-103",
        name: "Presidential Horizon Residence",
        capacity: "4 Guests",
        bed: "2 King Bedrooms",
        size: "210 m²",
        price: 890,
        image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80",
        features: ["Large Private Pool", "Full Living & Dining Area", "Dedicated Chef on Request", "Panoramic Jacuzzi", "VIP Airport Transfer"]
      }
    ]
  },
  {
    id: "h-2",
    name: "Hôtel Lumière Haussmann",
    tagline: "Timeless Parisian elegance steps away from Palais Garnier & Opera",
    city: "Paris",
    country: "France",
    category: "Boutique",
    pricePerNight: 295,
    rating: 4.88,
    reviewsCount: 245,
    featured: true,
    badge: "Top Rated",
    images: [
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Located in the heart of Paris's 9th arrondissement, Hôtel Lumière blends classic 19th-century Haussmann architecture with chic Parisian interior design. Enjoy fresh morning croissants on your Juliet balcony overlooking vibrant boulevards.",
    amenities: [
      "Classic French Breakfast",
      "Artisan Cocktail Bar",
      "Concierge & Tour Desk",
      "High-speed Wi-Fi",
      "Air Conditioning",
      "Historic Library Lounge",
      "Valet Parking"
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 24 hours prior to arrival",
      pets: "Small pets welcome"
    },
    rooms: [
      {
        id: "r-201",
        name: "Classic Parisian Room",
        capacity: "2 Guests",
        bed: "1 Queen Bed",
        size: "28 m²",
        price: 295,
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        features: ["Juliet Balcony", "City View", "L'Occitane Toiletries", "Smart HD TV", "Espresso Machine"]
      },
      {
        id: "r-202",
        name: "Opera Deluxe Suite",
        capacity: "2 Guests",
        bed: "1 King Bed",
        size: "45 m²",
        price: 430,
        image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80",
        features: ["Boulevard View", "Clawfoot Soaking Tub", "Complimentary French Champagne", "Dressing Room", "Turndown Service"]
      }
    ]
  },
  {
    id: "h-3",
    name: "The Manhattan Skyline Tower",
    tagline: "Iconic high-rise luxury overlooking Central Park and Midtown",
    city: "New York",
    country: "United States",
    category: "Luxury",
    pricePerNight: 460,
    rating: 4.91,
    reviewsCount: 512,
    featured: true,
    badge: "Prime Location",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Soaring 54 stories above Manhattan, The Skyline Tower delivers sensational views of Central Park and the Manhattan skyline. Featuring a Michelin-starred rooftop restaurant, Olympic-sized heated pool, and bespoke concierge services.",
    amenities: [
      "Heated Indoor Pool",
      "Michelin-Starred Rooftop",
      "State-of-the-Art Gym",
      "24/7 Room Service",
      "Valet Parking",
      "Business Center",
      "Pet Concierge"
    ],
    policies: {
      checkIn: "4:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 72 hours in advance",
      pets: "Dog friendly (up to 25kg)"
    },
    rooms: [
      {
        id: "r-301",
        name: "Skyline King Room",
        capacity: "2 Guests",
        bed: "1 King Bed",
        size: "38 m²",
        price: 460,
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        features: ["Floor-to-ceiling Windows", "Midtown Views", "Walk-in Rain Shower", "Bang & Olufsen Sound System"]
      },
      {
        id: "r-302",
        name: "Central Park View Suite",
        capacity: "3 Guests",
        bed: "1 King Bed + Sofa Bed",
        size: "72 m²",
        price: 720,
        image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80",
        features: ["Unobstructed Central Park Views", "Separate Living Room", "Wine Chiller", "Deep Soaking Marble Tub"]
      }
    ]
  },
  {
    id: "h-4",
    name: "Santorini Caldera Bliss",
    tagline: "Whitewashed cave suites sculpted into volcanic cliffs",
    city: "Oia",
    country: "Greece",
    category: "Resort",
    pricePerNight: 410,
    rating: 4.96,
    reviewsCount: 420,
    featured: true,
    badge: "Iconic Sunset",
    images: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Carved into the dramatic cliffs of Oia, Santorini Caldera Bliss offers unmatched front-row seats to world-famous Aegean sunsets. Private heated infinity jacuzzis, sun-drenched terraces, and authentic Mediterranean fine dining.",
    amenities: [
      "Private Caldera Jacuzzi",
      "Sunset Cocktail Terrace",
      "Champagne Breakfast",
      "Free Wi-Fi",
      "Porter & Luggage Service",
      "Spa Treatments"
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 5 days prior",
      pets: "No pets allowed"
    },
    rooms: [
      {
        id: "r-401",
        name: "Traditional Cave Suite",
        capacity: "2 Guests",
        bed: "1 Queen Bed",
        size: "42 m²",
        price: 410,
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=80",
        features: ["Private Heated Jacuzzi", "Direct Caldera Sunset View", "Handcrafted Cycladic Decor", "Complimentary Local Wine"]
      },
      {
        id: "r-402",
        name: "Honeymoon Infinity Villa",
        capacity: "2 Guests",
        bed: "1 King Bed",
        size: "75 m²",
        price: 640,
        image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
        features: ["Private Edge Plunge Pool", "Expansive Sun Deck", "Daily Champagne & Fruit Basket", "Sunset Dinner on Terrace"]
      }
    ]
  },
  {
    id: "h-5",
    name: "Alpenrose Mountain Lodge & Spa",
    tagline: "Alpine timber haven with snowcapped views and thermal baths",
    city: "Zermatt",
    country: "Switzerland",
    category: "Luxury",
    pricePerNight: 380,
    rating: 4.92,
    reviewsCount: 198,
    featured: false,
    badge: "Ski-in / Ski-out",
    images: [
      "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1548625361-195973792015?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Nestled at the base of the mighty Matterhorn, Alpenrose Lodge is the premier mountain retreat. Experience cozy wood-burning fireplaces, traditional fondue evenings, and heated outdoor mineral pools surrounded by crisp alpine snow.",
    amenities: [
      "Ski-in / Ski-out Access",
      "Heated Alpine Pool & Saunas",
      "Swiss Fondue Chalet",
      "Ski Equipment Locker",
      "Fireplace Lounge",
      "Matterhorn Views"
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 7 days before check-in",
      pets: "Pet-friendly"
    },
    rooms: [
      {
        id: "r-501",
        name: "Matterhorn Pine Room",
        capacity: "2 Guests",
        bed: "1 King Bed",
        size: "35 m²",
        price: 380,
        image: "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=800&q=80",
        features: ["Wood Burning Stove", "Balcony with Mountain View", "Warm Wool Furnishings", "Heated Bathroom Floors"]
      },
      {
        id: "r-502",
        name: "Alpine Chalet Suite",
        capacity: "4 Guests",
        bed: "2 King Beds",
        size: "88 m²",
        price: 650,
        image: "https://images.unsplash.com/photo-1548625361-195973792015?auto=format&fit=crop&w=800&q=80",
        features: ["Private Sauna", "Living Room with Stone Fireplace", "Full Kitchenette", "Panoramic Terrace"]
      }
    ]
  },
  {
    id: "h-6",
    name: "Kyoto Zen Garden Ryokan",
    tagline: "Serene traditional Japanese hospitality amidst historic bamboo groves",
    city: "Kyoto",
    country: "Japan",
    category: "Boutique",
    pricePerNight: 310,
    rating: 4.95,
    reviewsCount: 310,
    featured: false,
    badge: "Cultural Gem",
    images: [
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Immerse yourself in centuries of Japanese tranquility. Featuring authentic tatami mat rooms, private cypress onsen baths, multi-course Kaiseki dinners served in your chamber, and a private stone garden dating back 200 years.",
    amenities: [
      "Private Cypress Onsen (Hot Spring)",
      "Traditional Kaiseki Dining",
      "Japanese Tea Ceremony",
      "Yukata & Kimono Robes",
      "Zen Meditation Garden",
      "Free High-speed Wi-Fi"
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "10:30 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      pets: "No pets"
    },
    rooms: [
      {
        id: "r-601",
        name: "Tatami Garden Chamber",
        capacity: "2 Guests",
        bed: "Traditional Futon Bedding",
        size: "40 m²",
        price: 310,
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
        features: ["Garden View", "Private Hinoki Cypress Tub", "Matcha Tea Set", "Tatami Flooring"]
      },
      {
        id: "r-602",
        name: "Imperial Pavilion Villa",
        capacity: "4 Guests",
        bed: "Luxury Futon Setup",
        size: "95 m²",
        price: 580,
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
        features: ["Private Outdoor Stone Onsen", "Dual Living Chambers", "Private Tea Room", "Dedicated Okami Host"]
      }
    ]
  },
  {
    id: "h-7",
    name: "Burj Al-Noor Desert Oasis",
    tagline: "Spectacular Arabian palace nestled between rolling crimson dunes",
    city: "Dubai",
    country: "United Arab Emirates",
    category: "Luxury",
    pricePerNight: 510,
    rating: 4.89,
    reviewsCount: 275,
    featured: false,
    badge: "Desert Palace",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An architectural marvel rising out of the Dubai dunes. Burj Al-Noor offers authentic Bedouin royalty experiences, private desert pools, falconry sessions, stargazing astronomy lounges, and world-class Arabic hospitality.",
    amenities: [
      "Temperature-controlled Desert Pool",
      "Camel Trekking & Falconry",
      "Hammam Turkish Bath",
      "Dune Stargazing Lounge",
      "Helipad & Chauffeur",
      "Gourmet Bedouin Barbecue"
    ],
    policies: {
      checkIn: "3:00 PM",
      checkOut: "12:00 PM",
      cancellation: "Free cancellation up to 48 hours prior",
      pets: "No pets allowed"
    },
    rooms: [
      {
        id: "r-701",
        name: "Dune View Royal Room",
        capacity: "2 Guests",
        bed: "1 King Bed",
        size: "52 m²",
        price: 510,
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
        features: ["Endless Dune View Terrace", "Onyx Marble Bathroom", "Complimentary Arabic Sweets", "Private Sun Deck"]
      },
      {
        id: "r-702",
        name: "Sultan's Private Pool Villa",
        capacity: "4 Guests",
        bed: "2 King Suites",
        size: "160 m²",
        price: 920,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        features: ["Private Desert Pool", "Open-air Majlis Lounge", "Private Butler & Barista", "Luxury 4x4 Dune Transfer"]
      }
    ]
  },
  {
    id: "h-8",
    name: "Villa Medici Colosseo",
    tagline: "Historic Renaissance mansion overlooking the ancient Roman Forum",
    city: "Rome",
    country: "Italy",
    category: "Boutique",
    pricePerNight: 275,
    rating: 4.87,
    reviewsCount: 189,
    featured: false,
    badge: "Historic Gem",
    images: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Step through arched gates into a Renaissance sanctuary. Villa Medici Colosseo features restored frescoes, an orange-tree courtyard, rooftop prosecco tastings, and walking proximity to Rome's greatest archaeological wonders.",
    amenities: [
      "Rooftop Colosseum View",
      "Internal Citrus Courtyard",
      "Italian Espresso & Wine Bar",
      "Complimentary Walking Tours",
      "Air Conditioning",
      "Free Wi-Fi"
    ],
    policies: {
      checkIn: "2:00 PM",
      checkOut: "11:00 AM",
      cancellation: "Free cancellation up to 48 hours prior",
      pets: "Pets permitted upon request"
    },
    rooms: [
      {
        id: "r-801",
        name: "Classic Roman Courtyard Room",
        capacity: "2 Guests",
        bed: "1 Queen Bed",
        size: "30 m²",
        price: 275,
        image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80",
        features: ["Courtyard View", "Hand-painted Fresco Ceiling", "Italian Marble Bath", "Bialetti Espresso Bar"]
      },
      {
        id: "r-802",
        name: "Colosseo View Deluxe Suite",
        capacity: "3 Guests",
        bed: "1 King Bed + 1 Daybed",
        size: "55 m²",
        price: 440,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
        features: ["Direct View of Ancient Monuments", "Spacious Living Room", "Freestanding Soaking Tub", "Prosecco Welcome"]
      }
    ]
  }
];

export const DESTINATIONS = [
  "All Destinations",
  "Uluwatu, Indonesia",
  "Paris, France",
  "New York, United States",
  "Oia, Greece",
  "Zermatt, Switzerland",
  "Kyoto, Japan",
  "Dubai, United Arab Emirates",
  "Rome, Italy"
];

export const CATEGORIES = [
  "All Types",
  "Resort",
  "Luxury",
  "Boutique"
];
