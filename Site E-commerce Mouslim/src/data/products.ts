export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  costPrice: number;
  description: string;
  detailedDescription: string;
  features: string[];
  image: string;
  images: string[];
  aliExpressProductURL: string;
  aliExpressPrice: number;
  stock: number;
  rating: number;
  reviews: number;
  deliveryTime: string;
}

// Configuration pour l'automatisation dropshipping future
export const dropshippingConfig = {
  // Placeholders pour intégration API future (AutoDS, DSers, Zendrop)
  apiEndpoint: "YOUR_DROPSHIPPING_API_ENDPOINT",
  apiKey: "YOUR_API_KEY_HERE",
  webhookURL: "YOUR_WEBHOOK_URL",
  autoOrderProcessing: false, // À activer lors de l'intégration
};

export const products: Product[] = [
  {
    id: "coran-led-001",
    name: "Coran Lumineux LED avec Télécommande",
    category: "Corans & Livres sacrés",
    price: 44.99,
    costPrice: 22.99,
    description: "Coran élégant avec éclairage LED intégré et télécommande. Parfait pour la lecture nocturne et la décoration spirituelle.",
    detailedDescription: "Découvrez notre Coran lumineux premium avec système LED innovant. Cette édition unique combine spiritualité et technologie moderne pour une expérience de lecture exceptionnelle. L'éclairage LED doux et réglable permet une lecture confortable à tout moment, tandis que la télécommande offre un contrôle pratique des différents modes d'éclairage. Idéal pour créer une ambiance sereine lors de vos moments de recueillement.",
    features: [
      "Éclairage LED multicolore avec télécommande",
      "Texte arabe clair et lisible",
      "Design élégant et moderne",
      "Socle stable inclus",
      "Parfait pour la décoration intérieure",
      "Basse consommation d'énergie",
      "7 modes d'éclairage différents",
      "Matériaux de qualité premium"
    ],
    image: "https://images.unsplash.com/photo-1710203759001-eaa32d1b2c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdXJhbiUyMGJvb2slMjBpc2xhbWljfGVufDF8fHx8MTc2Mzg1NTE2NHww&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1710203759001-eaa32d1b2c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdXJhbiUyMGJvb2slMjBpc2xhbWljfGVufDF8fHx8MTc2Mzg1NTE2NHww&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1710203759001-eaa32d1b2c53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdXJhbiUyMGJvb2slMjBpc2xhbWljfGVufDF8fHx8MTc2Mzg1NTE2NHww&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    aliExpressProductURL: "https://fr.aliexpress.com/item/1005010200789399.html",
    aliExpressPrice: 22.99,
    stock: 50,
    rating: 4.8,
    reviews: 127,
    deliveryTime: "7-15 jours"
  },
  {
    id: "tapis-priere-002",
    name: "Tapis de Prière Premium avec Mousse Mémoire",
    category: "Prière",
    price: 24.99,
    costPrice: 8.99,
    description: "Tapis de prière ultra confortable avec mousse à mémoire de forme. Épais, doux et facile à transporter.",
    detailedDescription: "Vivez une expérience de prière incomparable avec notre tapis premium doté d'une mousse à mémoire de forme. Conçu pour offrir un confort maximal lors de vos prières, ce tapis épais protège vos genoux tout en restant léger et facile à transporter. Son design élégant aux motifs islamiques traditionnels apporte une touche de beauté à vos moments de recueillement. La surface antidérapante assure stabilité et sécurité pendant la prière.",
    features: [
      "Mousse à mémoire de forme ultra-confortable",
      "Épaisseur premium pour protection optimale",
      "Design islamique élégant",
      "Surface antidérapante",
      "Facile à plier et transporter",
      "Tissu doux et résistant",
      "Dimensions généreuses",
      "Lavable en machine"
    ],
    image: "https://images.unsplash.com/photo-1630313312052-2699ebbf3374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBtYXQlMjBpc2xhbXxlbnwxfHx8fDE3NjM4OTU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1630313312052-2699ebbf3374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBtYXQlMjBpc2xhbXxlbnwxfHx8fDE3NjM4OTU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1630313312052-2699ebbf3374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmF5ZXIlMjBtYXQlMjBpc2xhbXxlbnwxfHx8fDE3NjM4OTU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    aliExpressProductURL: "https://fr.aliexpress.com/item/1005006111349732.html",
    aliExpressPrice: 8.99,
    stock: 80,
    rating: 4.9,
    reviews: 203,
    deliveryTime: "7-15 jours"
  },
  {
    id: "chapelet-electronique-003",
    name: "Chapelet Électronique Compteur de Dhikr",
    category: "Dhikr & Méditation",
    price: 29.99,
    costPrice: 15.59,
    description: "Compteur de dhikr électronique moderne avec écran digital. Pratique pour suivre vos invocations quotidiennes.",
    detailedDescription: "Modernisez votre pratique du dhikr avec notre chapelet électronique innovant. Doté d'un écran digital clair et d'un système de comptage précis, cet appareil vous permet de suivre facilement vos invocations quotidiennes. Compact et élégant, il se glisse facilement dans la poche ou le sac. La fonction mémoire enregistre automatiquement vos comptages, tandis que la batterie longue durée assure une utilisation prolongée. Parfait pour les musulmans modernes qui souhaitent maintenir leur pratique spirituelle avec praticité.",
    features: [
      "Écran LCD digital clair",
      "Compteur jusqu'à 99 999",
      "Fonction mémoire intégrée",
      "Design compact et ergonomique",
      "Bouton de réinitialisation facile",
      "Batterie longue durée",
      "Légèrement sonore à chaque clic",
      "Disponible en plusieurs couleurs"
    ],
    image: "https://images.unsplash.com/photo-1756626287699-86f20c0e1dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNiaWglMjBwcmF5ZXIlMjBiZWFkc3xlbnwxfHx8fDE3NjM4OTU3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1756626287699-86f20c0e1dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNiaWglMjBwcmF5ZXIlMjBiZWFkc3xlbnwxfHx8fDE3NjM4OTU3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1756626287699-86f20c0e1dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNiaWglMjBwcmF5ZXIlMjBiZWFkc3xlbnwxfHx8fDE3NjM4OTU3Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    aliExpressProductURL: "https://fr.aliexpress.com/item/1005006684125957.html",
    aliExpressPrice: 15.59,
    stock: 65,
    rating: 4.7,
    reviews: 89,
    deliveryTime: "7-15 jours"
  },
  {
    id: "stickers-muraux-004",
    name: "Stickers Muraux Islamiques Design",
    category: "Décoration",
    price: 12.99,
    costPrice: 2.0,
    description: "Collection de stickers muraux avec calligraphie islamique. Transformez votre intérieur en un espace spirituel et élégant.",
    detailedDescription: "Embellissez votre maison avec notre collection exclusive de stickers muraux islamiques. Ces autocollants de haute qualité présentent une magnifique calligraphie arabe et des motifs géométriques traditionnels. Faciles à appliquer et à retirer sans laisser de traces, ils sont parfaits pour décorer votre salon, chambre, ou espace de prière. Résistants et durables, ces stickers conservent leur beauté pendant des années. Créez une ambiance sereine et spirituelle dans votre foyer avec ces œuvres d'art murales abordables.",
    features: [
      "Calligraphie islamique authentique",
      "Facile à poser et à retirer",
      "Ne laisse pas de traces",
      "Résistant et durable",
      "Plusieurs designs disponibles",
      "Convient à toutes les surfaces lisses",
      "Impression haute qualité",
      "Pack complet avec plusieurs éléments"
    ],
    image: "https://images.unsplash.com/photo-1760976060816-ae283ac4d3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwZGVjb3JhdGlvbiUyMHdhbGx8ZW58MXx8fHwxNjM4OTU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    images: [
      "https://images.unsplash.com/photo-1760976060816-ae283ac4d3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwZGVjb3JhdGlvbiUyMHdhbGx8ZW58MXx8fHwxNjM4OTU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      "https://images.unsplash.com/photo-1760976060816-ae283ac4d3aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc2xhbWljJTIwZGVjb3JhdGlvbiUyMHdhbGx8ZW58MXx8fHwxNjM4OTU3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
    ],
    aliExpressProductURL: "https://fr.aliexpress.com/w/wholesale-sticers-muraux-islam.html",
    aliExpressPrice: 2.0,
    stock: 120,
    rating: 4.6,
    reviews: 156,
    deliveryTime: "7-15 jours"
  }
];

// Export JSON pour intégration dropshipping
/* 
DROPSHIPPING_PRODUCTS_JSON = {
  "products": [
    {
      "id": "coran-led-001",
      "aliexpressURL": "https://fr.aliexpress.com/item/1005010200789399.html",
      "costPrice": 22.99,
      "sellPrice": 44.99,
      "margin": 22.00
    },
    {
      "id": "tapis-priere-002",
      "aliexpressURL": "https://fr.aliexpress.com/item/1005006111349732.html",
      "costPrice": 8.99,
      "sellPrice": 24.99,
      "margin": 16.00
    },
    {
      "id": "chapelet-electronique-003",
      "aliexpressURL": "https://fr.aliexpress.com/item/1005006684125957.html",
      "costPrice": 15.59,
      "sellPrice": 29.99,
      "margin": 14.40
    },
    {
      "id": "stickers-muraux-004",
      "aliexpressURL": "https://fr.aliexpress.com/w/wholesale-sticers-muraux-islam.html",
      "costPrice": 2.00,
      "sellPrice": 12.99,
      "margin": 10.99
    }
  ]
}
*/
