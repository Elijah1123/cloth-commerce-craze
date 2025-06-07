
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Star, ShoppingBag, Minus, Plus, ArrowLeft } from 'lucide-react';
import { products } from '../data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary hover:underline">
            Return to Products
          </Link>
        </div>
      </div>
    );
  }

  const productImages = [
    product.image,
    product.image, // Duplicate for demo
    product.image,
    product.image
  ];

  const handleAddToCart = () => {
    console.log('Adding to cart:', {
      product,
      size: selectedSize,
      color: selectedColor,
      quantity
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary">Products</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link 
          to="/products"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="aspect-square rounded-2xl overflow-hidden bg-accent/20">
              <img 
                src={productImages[activeImageIndex]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImageIndex(index)}
                  className={`flex-1 aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    activeImageIndex === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <img 
                    src={image} 
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category & Badges */}
            <div className="flex items-center gap-3">
              <span className="text-muted-foreground">{product.category}</span>
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

            {/* Title */}
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) 
                        ? 'fill-yellow-400 text-yellow-400' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-foreground">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-lg leading-relaxed">{product.description}</p>

            {/* Size Selection */}
            {product.sizes.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedSize === size
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-input hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Color Selection */}
            {product.colors.length > 0 && (
              <div>
                <h3 className="font-medium mb-3">Color</h3>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border rounded-lg transition-colors ${
                        selectedColor === color
                          ? 'border-primary bg-primary text-primary-foreground'
                          : 'border-input hover:border-primary'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-medium mb-3">Quantity</h3>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-input rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-accent transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-accent transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <ShoppingBag className="h-5 w-5" />
                Add to Cart
              </button>
              
              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className={`p-3 border rounded-lg transition-colors ${
                  isFavorite 
                    ? 'border-red-300 bg-red-50 text-red-500' 
                    : 'border-input hover:border-primary'
                }`}
              >
                <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Product Details */}
            <div className="border-t border-border pt-6 space-y-4">
              <h3 className="font-medium">Product Details</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Premium materials and construction</li>
                <li>• Machine washable</li>
                <li>• Free shipping on orders over $50</li>
                <li>• 30-day return policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
