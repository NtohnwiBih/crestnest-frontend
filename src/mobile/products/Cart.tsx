import { useState } from 'react';
import { ArrowLeft, Plus, Minus, Trash2, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: 1299000,
      quantity: 1,
      variant: "Natural Titanium",
      supplier: "Apple Official Store",
      isVerified: true,
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: "AirPods Pro (2nd generation)",
      price: 249000,
      quantity: 2,
      variant: "White",
      supplier: "Apple Official Store", 
      isVerified: true,
      image: '/placeholder.svg'
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500000 ? 0 : 25000; // Free shipping over 500k FCFA
  const total = subtotal + shipping;

  const formatPrice = (price: number) => {
    return `FCFA ${price.toLocaleString()}`;
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
          <div className="flex items-center p-4">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-semibold ml-4">Shopping Cart</h1>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-6">
            <ShoppingBag className="h-12 w-12 text-muted-foreground" />
          </div>
          <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground text-center mb-6">
            Add some products to your cart to see them here
          </p>
          <Button onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/')}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="font-semibold ml-4">Shopping Cart</h1>
          </div>
          <Badge variant="secondary" className="px-2 py-1">
            {cartItems.length} items
          </Badge>
        </div>
      </div>

      <div className="pb-32">
        {/* Cart Items */}
        <div className="p-4 space-y-4">
          {cartItems.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex gap-3">
                <div className="w-20 h-20 bg-muted rounded-xl flex-shrink-0 flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                
                <div className="flex-1 space-y-2">
                  <div>
                    <h3 className="font-medium text-sm line-clamp-2">{item.title}</h3>
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-muted-foreground">{item.supplier}</span>
                      {item.isVerified && (
                        <Badge variant="secondary" className="px-1 py-0.5 text-xs">
                          ✓
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">{item.variant}</p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">{formatPrice(item.price)}</span>
                    
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-8 w-8"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={() => removeItem(item.id)}
                  >
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="px-4 mt-6">
          <Card className="p-4">
            <h3 className="font-semibold mb-4">Order Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span className={shipping === 0 ? "text-green-600" : ""}>
                  {shipping === 0 ? "Free" : formatPrice(shipping)}
                </span>
              </div>
              {shipping === 0 && (
                <p className="text-xs text-green-600">
                  🎉 You've qualified for free shipping!
                </p>
              )}
              <div className="border-t pt-2 mt-3">
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Recommended Items */}
        <div className="px-4 mt-6">
          <h3 className="font-semibold mb-3">You might also like</h3>
          <div className="grid grid-cols-2 gap-3">
            {[1, 2].map((item) => (
              <Card key={item} className="p-3">
                <div className="aspect-square bg-muted rounded-xl mb-2 flex items-center justify-center text-2xl">
                  📱
                </div>
                <p className="text-sm font-medium line-clamp-2">iPhone 15 Pro Case</p>
                <p className="text-sm text-primary font-bold">FCFA 25,000</p>
                <Button size="sm" className="w-full mt-2 text-xs">
                  Add to Cart
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t p-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-muted-foreground">Total:</span>
            <span className="text-lg font-bold text-primary">{formatPrice(total)}</span>
          </div>
          <Button 
            className="w-full"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;