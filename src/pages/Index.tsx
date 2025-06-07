
import { useState } from 'react';
import { ShoppingBag, Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  const featuredProducts = products.slice(0, 8);

  const addToCart = (product: any) => {
    setCartItems(prev => [...prev, { ...product, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-primary">
              StyleHub
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/products" className="text-foreground hover:text-primary transition-colors">
                Shop All
              </Link>
              <Link to="/women" className="text-foreground hover:text-primary transition-colors">
                Women
              </Link>
              <Link to="/men" className="text-foreground hover:text-primary transition-colors">
                Men
              </Link>
              <Link to="/accessories" className="text-foreground hover:text-primary transition-colors">
                Accessories
              </Link>
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-accent rounded-lg transition-colors">
                <Search className="h-5 w-5" />
              </button>
              <button className="p-2 hover:bg-accent rounded-lg transition-colors relative">
                <ShoppingBag className="h-5 w-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <div className="flex flex-col space-y-4">
                <Link to="/products" className="text-foreground hover:text-primary transition-colors">
                  Shop All
                </Link>
                <Link to="/women" className="text-foreground hover:text-primary transition-colors">
                  Women
                </Link>
                <Link to="/men" className="text-foreground hover:text-primary transition-colors">
                  Men
                </Link>
                <Link to="/accessories" className="text-foreground hover:text-primary transition-colors">
                  Accessories
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-background to-accent/20 py-20 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Discover Your
              <span className="text-primary block">Perfect Style</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Explore our curated collection of premium clothing and accessories. 
              From casual wear to formal attire, find pieces that define your unique style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center font-medium"
              >
                Shop Collection
              </Link>
              <Link 
                to="/about" 
                className="border border-border px-8 py-3 rounded-lg hover:bg-accent transition-colors text-center font-medium"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Featured Collection
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Handpicked pieces from our latest arrivals. These items represent the best of contemporary fashion.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={addToCart}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/products" 
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 lg:py-24 bg-accent/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
            Shop by Category
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/women" className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-purple-100 to-pink-100 hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Women's Collection</h3>
                <p className="text-white/90">Elegant & Contemporary</p>
              </div>
            </Link>
            
            <Link to="/men" className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-blue-100 to-indigo-100 hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Men's Collection</h3>
                <p className="text-white/90">Classic & Modern</p>
              </div>
            </Link>
            
            <Link to="/accessories" className="group relative overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-amber-100 to-orange-100 hover:scale-105 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Accessories</h3>
                <p className="text-white/90">Complete Your Look</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">StyleHub</h3>
              <p className="text-background/80 mb-4">
                Your destination for premium fashion and timeless style.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/women" className="hover:text-background transition-colors">Women</Link></li>
                <li><Link to="/men" className="hover:text-background transition-colors">Men</Link></li>
                <li><Link to="/accessories" className="hover:text-background transition-colors">Accessories</Link></li>
                <li><Link to="/sale" className="hover:text-background transition-colors">Sale</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Customer Care</h4>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/contact" className="hover:text-background transition-colors">Contact Us</Link></li>
                <li><Link to="/shipping" className="hover:text-background transition-colors">Shipping Info</Link></li>
                <li><Link to="/returns" className="hover:text-background transition-colors">Returns</Link></li>
                <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Facebook</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Pinterest</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
            <p>&copy; 2024 StyleHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
