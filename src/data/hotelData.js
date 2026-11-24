export const HOTEL_DATA = {
  name: "The Grand Azure Resort & Spa",
  shortName: "Grand Azure Bentota",
  tagline: "A Coastal Ayurvedic Sanctuary on Sri Lanka's Golden Southern Shore",
  stars: 5,
  rating: 4.96,
  reviewsCount: 780,
  currency: "LKR",
  currencySymbol: "LKR ",
  address: "Yalegama, Galle Road, Bentota 80500, Southern Province, Sri Lanka",
  phone: "+94 34 227 8888",
  mobile: "+94 77 849 8888",
  email: "reservations@grandazure.lk",
  checkInTime: "2:00 PM",
  checkOutTime: "12:00 PM",
  heroImage: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=2000&q=80",
  about: {
    headline: "Ayurvedic Luxury on Bentota's Golden Coast",
    subtitle: "Where the serene Bentota River meets the sparkling Indian Ocean.",
    description: "Nestled along the pristine golden sands of Bentota in Sri Lanka's Southern Province, The Grand Azure Resort & Spa blends timeless colonial Ceylon elegance with world-class tropical luxury. Indulge in authentic centuries-old Ayurvedic therapies, fresh Negombo lagoon seafood, and private infinity villas overlooking the turquoise Indian Ocean.",
    stats: [
      { label: "Suites & Private Villas", value: "48" },
      { label: "Oceanfront Pools", value: "3" },
      { label: "Fine Dining Venues", value: "3" },
      { label: "Guest Satisfaction", value: "99.6%" }
    ]
  },
  rooms: [
    {
      id: "room-deluxe-ocean",
      name: "Deluxe Ocean Panorama Suite",
      tag: "Most Popular",
      category: "Suites",
      price: 85000,
      size: "65 m²",
      capacity: "2 Adults, 1 Child",
      bed: "1 King Bed",
      view: "Indian Ocean Sunset View",
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
      description: "Spacious luxury suite overlooking the Bentota coastline. Features handcrafted Ceylon teak furnishings, an expansive ocean sun terrace, and an Italian marble soaking bath.",
      amenities: [
        "Private Oceanfront Balcony",
        "Deep Soaking Freestanding Tub",
        "Complimentary Ceylon Silver Tips Tea Bar",
        "High-Speed Fiber Wi-Fi",
        "Daily Sri Lankan & International Breakfast",
        "Handcrafted Ayurvedic Bath Essentials"
      ]
    },
    {
      id: "room-cliff-pool-villa",
      name: "Oceanfront Private Plunge Pool Villa",
      tag: "Best for Couples",
      category: "Villas",
      price: 145000,
      size: "130 m²",
      capacity: "2 Adults",
      bed: "1 Emperor Four-Poster Bed",
      view: "Private Beach & Ocean View",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
      description: "An exclusive beachfront haven with a private 10-meter freshwater plunge pool, enclosed tropical frangipani garden, and 24-hour dedicated Ceylon butler service.",
      amenities: [
        "Private 10m Freshwater Plunge Pool",
        "24-Hour Dedicated Butler Service",
        "Outdoor Open-air Rain Shower",
        "Daily Sunset Ceylon Arrack Cocktails",
        "In-villa Check-in with Fresh King Coconut",
        "Complimentary Mini-Bar Replenished Daily"
      ]
    },
    {
      id: "room-garden-sanctuary",
      name: "Ayurvedic Garden Pavilion",
      tag: "Peace & Wellness",
      category: "Suites",
      price: 65000,
      size: "58 m²",
      capacity: "2 Adults",
      bed: "1 King Bed or 2 Twins",
      view: "Lush Cinnamon & Orchid Gardens",
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
      description: "Surrounded by medicinal Ceylon herbal flora, lotus ponds, and gentle tropical birdsong. Perfect for guests seeking holistic Ayurvedic relaxation and restorative sleep.",
      amenities: [
        "Private Herbal Garden Verandah",
        "Handcrafted Teak Daybed",
        "Organic Ayurvedic Bath Aromas",
        "Daily Morning Sunrise Yoga Session",
        "Complimentary High-speed Wi-Fi",
        "Herbal Infusions & Fresh Fruit Basket"
      ]
    },
    {
      id: "room-presidential-residence",
      name: "Royal Bentota 2-Bedroom Ocean Residence",
      tag: "Ultimate Luxury",
      category: "Villas",
      price: 285000,
      size: "260 m²",
      capacity: "4 Adults, 2 Children",
      bed: "2 Master King Suites",
      view: "360° Bentota Beach & Ocean View",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80",
      description: "The crown jewel of The Grand Azure. Two master en-suite wings, an 18-meter oceanfront lap pool, private chef kitchen, and private access to the golden beach.",
      amenities: [
        "18-Meter Private Oceanfront Pool",
        "On-Demand Private Executive Chef",
        "Complimentary Colombo VIP Airport Chauffeur",
        "Full Dining Pavilion for 8 Guests",
        "In-Villa Traditional Ayurvedic Spa Ritual",
        "Curated Wine & Ceylon Spirit Cellar"
      ]
    }
  ],
  dining: [
    {
      id: "d-1",
      name: "The Bentota Ocean Grill & Seafood",
      type: "Fine Dining • Fresh Catch & Sri Lankan Seafood",
      hours: "6:30 PM - 11:00 PM",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80",
      description: "Savor celebrated Negombo lagoon mud crabs, jumbo tiger prawns, and yellowfin tuna caught daily by local Southern fishermen, prepared over coconut-husk charcoal."
    },
    {
      id: "d-2",
      name: "The Cinnamon Sunset Lounge",
      type: "Ceylon Arrack Cocktails & Tapas",
      hours: "4:00 PM - 12:00 AM",
      image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80",
      description: "Watch the sun dip below the Indian Ocean while sipping artisan cocktails crafted from aged Ceylon arrack, fresh ginger, and southern cinnamon."
    },
    {
      id: "d-3",
      name: "Lotus Pavilion Breakfast & Tea Room",
      type: "Traditional Sri Lankan Hoppers & Artisan Ceylon Tea",
      hours: "6:30 AM - 11:00 AM",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      description: "Live egg hopper and string hopper stations, fresh king coconut water, tropical papayas, and single-estate Nuwara Eliya black teas."
    }
  ],
  amenities: [
    {
      title: "Ayurvedic Wellness Spa & Herbal Baths",
      description: "Authentic therapies administered by resident Ayurvedic doctors, including Shirodhara, herbal steam baths, and deep-relaxation body rituals."
    },
    {
      title: "Three Cascading Oceanfront Pools",
      description: "Freshwater infinity pools overlooking Bentota beach with shaded cabanas, fresh king coconuts, and chilled face towels."
    },
    {
      title: "Private Golden Beach & River Access",
      description: "Direct frontage on both the golden Indian Ocean beach and the tranquil Bentota River with catamaran boat tours and water sports."
    },
    {
      title: "CMB Highway VIP Chauffeur Transfer",
      description: "Direct airport pick-up from Bandaranaike International Airport (CMB) via the Southern Expressway in luxury air-conditioned vehicles."
    },
    {
      title: "Galle Fort & Cinnamon Island Tours",
      description: "Custom concierge excursions to UNESCO World Heritage Galle Fort (45 mins away) and private lagoon cinnamon peelers."
    },
    {
      title: "Sunrise Yoga & Meditation Pavilion",
      description: "Complimentary morning oceanfront Hatha yoga led by certified instructors overlooking the tranquil morning surf."
    }
  ],
  gallery: [
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80",
    "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1000&q=80"
  ],
  addOns: [
    {
      id: "addon-transfer",
      name: "Bandaranaike Airport (CMB) VIP Chauffeur Transfer",
      price: 26000,
      description: "Roundtrip luxury highway transfer from CMB airport with cold towels & king coconut water."
    },
    {
      id: "addon-ayurveda",
      name: "Traditional Ayurvedic Shirodhara & Herbal Bath (90 Min)",
      price: 32000,
      description: "Warm herbal oil forehead stream followed by aromatic medicinal floral bath."
    },
    {
      id: "addon-crab",
      name: "Candlelit Lagoon Seafood & Negombo Crab Feast",
      price: 38000,
      description: "Private beach canopy dinner with fresh garlic butter crabs and chilled sparkling wine."
    },
    {
      id: "addon-tea",
      name: "Artisan Ceylon Silver Tips High Tea for Two",
      price: 14000,
      description: "Exclusive single-origin handpicked tea tasting with fresh tropical scones and savories."
    }
  ]
};

// Formatting utility for Sri Lankan Rupees
export const formatLKR = (amount) => {
  return `LKR ${Math.round(amount).toLocaleString('en-US')}`;
};
