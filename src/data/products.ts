
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  description: string;
  sizes: string[];
  colors: string[];
  isNew?: boolean;
  isSale?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic Cotton T-Shirt",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop",
    category: "Basics",
    description: "A timeless classic that belongs in every wardrobe. Made from 100% organic cotton for ultimate comfort and breathability.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Black", "Navy", "Gray"],
    isNew: true,
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Elegant Midi Dress",
    price: 89.99,
    originalPrice: 129.99,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop",
    category: "Dresses",
    description: "Perfect for both office and evening wear. Features a flattering A-line silhouette with elegant draping.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Burgundy"],
    isSale: true,
    rating: 4.7,
    reviews: 89
  },
  {
    id: 3,
    name: "Premium Denim Jacket",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1000&fit=crop",
    category: "Outerwear",
    description: "Crafted from premium denim with vintage-inspired details. A versatile piece that elevates any outfit.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Blue", "Dark Blue", "Black"],
    rating: 4.6,
    reviews: 67
  },
  {
    id: 4,
    name: "Comfortable Joggers",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop",
    category: "Bottoms",
    description: "Ultimate comfort meets style. Perfect for lounging or casual outings with a modern tapered fit.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Gray", "Black", "Navy", "Olive"],
    rating: 4.3,
    reviews: 156
  },
  {
    id: 5,
    name: "Silk Blouse",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1564257577817-0ad9f8d0c7a2?w=800&h=1000&fit=crop",
    category: "Tops",
    description: "Luxurious silk blouse with a sophisticated drape. Perfect for professional settings or special occasions.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["White", "Cream", "Blush", "Black"],
    isNew: true,
    rating: 4.8,
    reviews: 45
  },
  {
    id: 6,
    name: "Wool Blend Coat",
    price: 299.99,
    originalPrice: 399.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop",
    category: "Outerwear",
    description: "Sophisticated wool blend coat with timeless design. Features a classic silhouette and premium construction.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Camel", "Black", "Navy", "Gray"],
    isSale: true,
    rating: 4.9,
    reviews: 23
  },
  {
    id: 7,
    name: "Casual Sneakers",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop",
    category: "Shoes",
    description: "Comfortable and stylish sneakers for everyday wear. Features premium materials and modern design.",
    sizes: ["6", "7", "8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray"],
    rating: 4.4,
    reviews: 201
  },
  {
    id: 8,
    name: "Leather Handbag",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop",
    category: "Accessories",
    description: "Handcrafted leather handbag with spacious interior and elegant design. Perfect for work or weekend.",
    sizes: ["One Size"],
    colors: ["Brown", "Black", "Tan"],
    rating: 4.7,
    reviews: 78
  },
  {
    id: 9,
    name: "Striped Sweater",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=800&h=1000&fit=crop",
    category: "Knitwear",
    description: "Cozy striped sweater perfect for layering. Made from soft cotton blend for all-day comfort.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Navy/White", "Black/Gray", "Red/White"],
    rating: 4.2,
    reviews: 93
  },
  {
    id: 10,
    name: "High-Waist Jeans",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&h=1000&fit=crop",
    category: "Bottoms",
    description: "Flattering high-waist jeans with a modern slim fit. Crafted from premium stretch denim for comfort.",
    sizes: ["24", "25", "26", "27", "28", "29", "30", "31", "32"],
    colors: ["Dark Wash", "Light Wash", "Black"],
    isNew: true,
    rating: 4.6,
    reviews: 167
  },
  {
    id: 11,
    name: "Formal Blazer",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    category: "Outerwear",
    description: "Sharp tailored blazer for professional settings. Features a modern cut with attention to detail.",
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Charcoal"],
    rating: 4.8,
    reviews: 54
  },
  {
    id: 12,
    name: "Summer Sandals",
    price: 59.99,
    originalPrice: 79.99,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1000&fit=crop",
    category: "Shoes",
    description: "Comfortable summer sandals with cushioned footbed. Perfect for warm weather and casual outings.",
    sizes: ["6", "7", "8", "9", "10", "11"],
    colors: ["Tan", "Black", "White"],
    isSale: true,
    rating: 4.3,
    reviews: 112
  }
];
