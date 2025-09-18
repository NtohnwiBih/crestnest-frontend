import { useState } from 'react';
import { ArrowLeft, MapPin, CreditCard, Truck, Shield, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [shippingMethod, setShippingMethod] = useState('standard');

  // Mock cart data
  const cartItems = [
    {
      id: 1,
      title: "iPhone 15 Pro Max",
      price: 1299000,
      quantity: 1,
      variant: "Natural Titanium"
    },
    {
      id: 2,
      title: "AirPods Pro (2nd generation)",
      price: 249000,
      quantity: 2,
      variant: "White"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingCost = shippingMethod === 'express' ? 15000 : 0;
  const tax = Math.round(subtotal * 0.1); // 10% tax
  const total = subtotal + shippingCost + tax;

  const formatPrice = (price: number) => {
    return `FCFA ${price.toLocaleString()}`;
  };

  const handlePlaceOrder = () => {
    // In real app, this would process the payment
    // alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="flex items-center p-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/cart')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-semibold ml-4">Checkout</h1>
        </div>
      </div>

      <div className="pb-32">
        {/* Order Summary */}
        <div className="p-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Order Summary</h3>
            <div className="space-y-3">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div className="flex-1">
                    <p className="font-medium">{item.title}</p>
                    <p className="text-muted-foreground">{item.variant} × {item.quantity}</p>
                  </div>
                  <span className="font-medium">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Shipping Address */}
        <div className="px-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Shipping Address</h3>
            </div>
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" placeholder="123 Main Street" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Douala" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" placeholder="+237 6XX XXX XXX" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Shipping Method */}
        <div className="px-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <Truck className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Shipping Method</h3>
            </div>
            <div className="space-y-3">
              <div 
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  shippingMethod === 'standard' ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setShippingMethod('standard')}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Standard Delivery</p>
                    <p className="text-sm text-muted-foreground">2-3 business days</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">Free</p>
                    {shippingMethod === 'standard' && (
                      <Check className="h-4 w-4 text-primary ml-auto mt-1" />
                    )}
                  </div>
                </div>
              </div>
              
              <div 
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  shippingMethod === 'express' ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setShippingMethod('express')}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Express Delivery</p>
                    <p className="text-sm text-muted-foreground">Next business day</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">FCFA 15,000</p>
                    {shippingMethod === 'express' && (
                      <Check className="h-4 w-4 text-primary ml-auto mt-1" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Payment Method */}
        <div className="px-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">Payment Method</h3>
            </div>
            <div className="space-y-3">
              <div 
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setPaymentMethod('card')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <CreditCard className="h-5 w-5" />
                    <span className="font-medium">Credit/Debit Card</span>
                  </div>
                  {paymentMethod === 'card' && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>
              </div>
              
              <div 
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  paymentMethod === 'momo' ? 'border-primary bg-primary/5' : 'border-border'
                }`}
                onClick={() => setPaymentMethod('momo')}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">M</span>
                    </div>
                    <span className="font-medium">Mobile Money</span>
                  </div>
                  {paymentMethod === 'momo' && (
                    <Check className="h-4 w-4 text-primary" />
                  )}
                </div>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="mt-4 space-y-3">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="expiry">Expiry Date</Label>
                    <Input id="expiry" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="123" />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'momo' && (
              <div className="mt-4">
                <Label htmlFor="momoNumber">Mobile Money Number</Label>
                <Input id="momoNumber" placeholder="+237 6XX XXX XXX" />
              </div>
            )}
          </Card>
        </div>

        {/* Security Badge */}
        <div className="px-4 mb-6">
          <Card className="p-3 bg-green-50 border-green-200">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Secure Payment</p>
                <p className="text-sm text-green-600">Your payment information is encrypted and secure</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Final Total */}
        <div className="px-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-3">Payment Summary</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? 'Free' : formatPrice(shippingCost)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>{formatPrice(tax)}</span>
              </div>
              <div className="border-t pt-2 mt-3">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span className="text-primary">{formatPrice(total)}</span>
                </div>
              </div>
            </div>
          </Card>
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
            onClick={handlePlaceOrder}
          >
            Place Order
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;