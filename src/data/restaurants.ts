export interface Restaurant {
  id: string;
  name: string;
  tagline: string;
  description: string;
  mood: string;
  cuisine: string;
  atmosphere: string;
  image: string;
  heroImage: string;
  gallery: string[];
  location: {
    address: string;
    coordinates: [number, number];
    phone: string;
    email: string;
  };
  hours: {
    [key: string]: string;
  };
  features: string[];
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
  };
}

export const restaurants: Restaurant[] = [
  {
    id: 'fabrica',
    name: 'Fabrica',
    tagline: 'Brunchy Loft Vibes',
    description: 'A sun-drenched loft space where artisanal coffee meets elevated brunch. Think exposed brick, hanging plants, and the perfect spot for your morning ritual.',
    mood: 'Bright & Airy',
    cuisine: 'Modern Brunch & Coffee',
    atmosphere: 'Industrial chic meets cozy comfort',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    ],
    location: {
      address: '15 Republic Square, Yerevan, Armenia',
      coordinates: [40.1776, 44.5126],
      phone: '+374 10 123 456',
      email: 'hello@fabrica.am',
    },
    hours: {
      'Monday': '7:00 AM - 4:00 PM',
      'Tuesday': '7:00 AM - 4:00 PM',
      'Wednesday': '7:00 AM - 4:00 PM',
      'Thursday': '7:00 AM - 4:00 PM',
      'Friday': '7:00 AM - 6:00 PM',
      'Saturday': '8:00 AM - 6:00 PM',
      'Sunday': '8:00 AM - 4:00 PM',
    },
    features: ['Artisanal Coffee', 'Weekend Brunch', 'Free WiFi', 'Outdoor Seating', 'Local Art'],
    colors: {
      primary: '#8B5A3C',
      secondary: '#F4E4BC',
      accent: '#2C1810',
      background: '#FDFBF7',
    },
  },
  {
    id: 'zanzibar',
    name: 'Zanzibar',
    tagline: 'Jungle Cocktail Bar',
    description: 'Step into a tropical paradise where exotic cocktails flow freely. Lush greenery, bamboo accents, and the sounds of distant drums create an immersive escape.',
    mood: 'Tropical & Exotic',
    cuisine: 'Craft Cocktails & Tapas',
    atmosphere: 'Jungle oasis with urban sophistication',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80',
    ],
    location: {
      address: '28 Northern Avenue, Yerevan, Armenia',
      coordinates: [40.1791, 44.4991],
      phone: '+374 10 234 567',
      email: 'jungle@zanzibar.am',
    },
    hours: {
      'Monday': '5:00 PM - 2:00 AM',
      'Tuesday': '5:00 PM - 2:00 AM',
      'Wednesday': '5:00 PM - 2:00 AM',
      'Thursday': '5:00 PM - 2:00 AM',
      'Friday': '5:00 PM - 3:00 AM',
      'Saturday': '5:00 PM - 3:00 AM',
      'Sunday': '5:00 PM - 1:00 AM',
    },
    features: ['Craft Cocktails', 'Live Music', 'Rooftop Terrace', 'Happy Hour', 'Private Events'],
    colors: {
      primary: '#2D5016',
      secondary: '#FF6B35',
      accent: '#1A2E0F',
      background: '#F0F7ED',
    },
  },
  {
    id: 'eltorro',
    name: 'El Torro',
    tagline: 'Spanish Steakhouse',
    description: 'Authentic Spanish flavors meet premium steaks in an elegant setting. Rustic charm with modern sophistication, where every meal is a celebration.',
    mood: 'Elegant & Rustic',
    cuisine: 'Spanish Steakhouse',
    atmosphere: 'Warm and sophisticated with Spanish flair',
    image: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80',
    ],
    location: {
      address: '42 Mashtots Avenue, Yerevan, Armenia',
      coordinates: [40.1833, 44.5167],
      phone: '+374 10 345 678',
      email: 'reservations@eltorro.am',
    },
    hours: {
      'Monday': '6:00 PM - 11:00 PM',
      'Tuesday': '6:00 PM - 11:00 PM',
      'Wednesday': '6:00 PM - 11:00 PM',
      'Thursday': '6:00 PM - 11:00 PM',
      'Friday': '6:00 PM - 12:00 AM',
      'Saturday': '6:00 PM - 12:00 AM',
      'Sunday': '6:00 PM - 10:00 PM',
    },
    features: ['Premium Steaks', 'Spanish Wine List', 'Private Dining', 'Wine Tastings', 'Chef\'s Table'],
    colors: {
      primary: '#8B0000',
      secondary: '#DAA520',
      accent: '#4A0000',
      background: '#FFF8F0',
    },
  },
  {
    id: 'babylon',
    name: 'Babylon',
    tagline: 'Exotic Arabesque',
    description: 'A mystical journey through Middle Eastern flavors in an opulent setting. Rich spices, intricate patterns, and an atmosphere that transports you to ancient times.',
    mood: 'Mystical & Opulent',
    cuisine: 'Middle Eastern Fusion',
    atmosphere: 'Luxurious and mysterious with Arabian nights charm',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80',
    ],
    location: {
      address: '7 Cascade Complex, Yerevan, Armenia',
      coordinates: [40.1904, 44.5167],
      phone: '+374 10 456 789',
      email: 'magic@babylon.am',
    },
    hours: {
      'Monday': '6:00 PM - 11:00 PM',
      'Tuesday': '6:00 PM - 11:00 PM',
      'Wednesday': '6:00 PM - 11:00 PM',
      'Thursday': '6:00 PM - 11:00 PM',
      'Friday': '6:00 PM - 12:00 AM',
      'Saturday': '6:00 PM - 12:00 AM',
      'Sunday': '6:00 PM - 10:00 PM',
    },
    features: ['Hookah Lounge', 'Live Arabic Music', 'Private Rooms', 'Traditional Tea Service', 'Belly Dancing'],
    colors: {
      primary: '#8B4513',
      secondary: '#D2691E',
      accent: '#654321',
      background: '#FDF5E6',
    },
  },
  {
    id: 'antar',
    name: 'Antar',
    tagline: 'Arctic Elegance',
    description: 'A sophisticated Nordic-inspired dining experience where minimalist design meets bold flavors. Clean lines, natural materials, and a cool, contemporary atmosphere.',
    mood: 'Modern & Minimalist',
    cuisine: 'Nordic Fusion',
    atmosphere: 'Clean and sophisticated with Scandinavian design principles',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    heroImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=800&q=80',
    ],
    location: {
      address: '23 Saryan Street, Yerevan, Armenia',
      coordinates: [40.1850, 44.5100],
      phone: '+374 10 567 890',
      email: 'reservations@antar.am',
    },
    hours: {
      'Monday': '6:00 PM - 11:00 PM',
      'Tuesday': '6:00 PM - 11:00 PM',
      'Wednesday': '6:00 PM - 11:00 PM',
      'Thursday': '6:00 PM - 11:00 PM',
      'Friday': '6:00 PM - 12:00 AM',
      'Saturday': '6:00 PM - 12:00 AM',
      'Sunday': '6:00 PM - 10:00 PM',
    },
    features: ['Tasting Menu', 'Wine Pairing', 'Chef\'s Counter', 'Seasonal Ingredients', 'Private Events'],
    colors: {
      primary: '#2C3E50',
      secondary: '#ECF0F1',
      accent: '#34495E',
      background: '#F8F9FA',
    },
  },
]; 