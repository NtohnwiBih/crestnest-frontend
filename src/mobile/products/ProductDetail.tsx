import { useState } from 'react';
import { ArrowLeft, Heart, Share, ShoppingCart, Star, Plus, Minus, Truck, Shield, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useNavigate, 
    // useParams 
} from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
//   const { slug } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState('Natural Titanium');
  
  // Mock product data - in real app this would be fetched based on slug
  const product = {
    id: 1,
    title: "iPhone 15 Pro Max - Premium Smartphone",
    price: "FCFA 1,299,000",
    originalPrice: "FCFA 1,599,000",
    rating: 4.8,
    reviews: 1847,
    supplier: "Apple Official Store",
    isVerified: true,
    inStock: true,
    stockCount: 23,
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    variants: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium'],
    description: "Experience the most advanced iPhone ever with the A17 Pro chip, titanium design, and Action Button. Features a 48MP Main camera system with 5x Telephoto zoom.",
    features: [
      "A17 Pro chip with 6-core GPU",
      "48MP Main camera, 12MP Ultra Wide, 12MP 2x Telephoto",
      "Action Button for quick shortcuts",
      "Titanium design with Ceramic Shield front",
      "USB-C connector",
      "Up to 29 hours video playback"
    ]
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="flex items-center justify-between p-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold">Product Details</h1>
          <div className="flex gap-2">
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Share className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="pb-24">
        {/* Product Images */}
        <div className="aspect-square bg-muted m-4 rounded-2xl relative">
          <div className="absolute top-4 left-4">
            <Badge className="bg-destructive text-destructive-foreground">
              -19%
            </Badge>
          </div>
          <div className="w-full h-full flex items-center justify-center text-6xl">
            📱
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            {product.images.map((_, index) => (
              <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-primary' : 'bg-muted-foreground/30'}`} />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="px-4 space-y-4">
          <div>
            <h1 className="text-xl font-bold mb-2">{product.title}</h1>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-amber-500 fill-current" />
                <span className="font-medium">{product.rating}</span>
                <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-sm text-muted-foreground">{product.supplier}</span>
                {product.isVerified && (
                  <Badge variant="secondary" className="px-1.5 py-0.5 text-xs">
                    ✓
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-primary">{product.price}</span>
              <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
            </div>
          </div>

          {/* Stock Status */}
          <Card className="p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-green-700">In Stock</span>
              </div>
              <span className="text-sm text-muted-foreground">{product.stockCount} available</span>
            </div>
          </Card>

          {/* Variants */}
          <div>
            <h3 className="font-semibold mb-3">Color</h3>
            <div className="grid grid-cols-2 gap-2">
              {product.variants.map((variant) => (
                <Button
                  key={variant}
                  variant={selectedVariant === variant ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setSelectedVariant(variant)}
                >
                  {variant}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <h3 className="font-semibold mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                size="icon"
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <Button 
                variant="outline" 
                size="icon"
                onClick={increaseQuantity}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold mb-3">Key Features</h3>
            <div className="space-y-2">
              {product.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Info */}
          <div className="grid grid-cols-3 gap-3">
            <Card className="p-3 text-center">
              <Truck className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-xs font-medium">Free Shipping</p>
              <p className="text-xs text-muted-foreground">2-3 days</p>
            </Card>
            <Card className="p-3 text-center">
              <Shield className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-xs font-medium">Warranty</p>
              <p className="text-xs text-muted-foreground">1 year</p>
            </Card>
            <Card className="p-3 text-center">
              <RotateCcw className="h-5 w-5 mx-auto mb-2 text-primary" />
              <p className="text-xs font-medium">Returns</p>
              <p className="text-xs text-muted-foreground">30 days</p>
            </Card>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-semibold mb-3">Description</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="grid grid-cols-2 gap-3">
          <Button 
            variant="outline" 
            className="flex items-center gap-2"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to Cart
          </Button>
          <Button 
            className="flex items-center gap-2"
            onClick={() => navigate('/checkout')}
          >
            Buy Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;