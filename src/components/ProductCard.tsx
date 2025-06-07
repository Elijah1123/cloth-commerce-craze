
import { useState } from 'react';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking the button
    setIsAdding(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 300));
    
    onAddToCart(product);
    setIsAdding(false);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFavorite(!isFavorite);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-medium rounded-full">
                New
              </span>
            )}
            {product.isSale && (
              <span className="bg-destructive text-destructive-foreground px-2 py-1 text-xs font-medium rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={toggleFavorite}
            className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
          >
            <Heart 
              className={`h-4 w-4 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} 
            />
          </button>

          {/* Quick Add Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdding}
            className="absolute bottom-3 left-3 right-3 bg-primary text-primary-foreground py-2 px-4 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 font-medium disabled:opacity-50"
          >
            <ShoppingBag className="h-4 w-4" />
            {isAdding ? 'Adding...' : 'Quick Add'}
          </button>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-sm text-muted-foreground mb-1">{product.category}</p>
          <h3 className="font-medium text-foreground mb-2 line-clamp-2">{product.name}</h3>
          
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-foreground">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
