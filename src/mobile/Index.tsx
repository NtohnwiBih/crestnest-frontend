import { useState } from 'react';
import { Search, Menu, ShoppingCart, User, Heart, Bell, Home, Grid, Tag, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';
import product1 from "@/assets/images/product1.jpg";
import product2 from "@/assets/images/product2.jpg";
import product3 from "@/assets/images/product3.jpg";
import product4 from "@/assets/images/product4.jpg";
import product5 from "@/assets/images/product5.jpg";
import product6 from "@/assets/images/product6.jpg";
import ProductCard from '@/components/ProductCard';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');

  const categories = [
    { name: 'Electronics', icon: '📱', color: 'bg-blue-50 text-blue-600' },
    { name: 'Fashion', icon: '👕', color: 'bg-pink-50 text-pink-600' },
    { name: 'Home', icon: '🏠', color: 'bg-green-50 text-green-600' },
    { name: 'Sports', icon: '⚽', color: 'bg-orange-50 text-orange-600' },
    { name: 'Beauty', icon: '💄', color: 'bg-purple-50 text-purple-600' },
    { name: 'Books', icon: '📚', color: 'bg-indigo-50 text-indigo-600' },
  ];

const products = [
    {
      id: 1,
      slug: "women-sets-fashion-two-piece-satin-sets",
      image: product1,
      title: "Women Sets Fashion Two Piece Satin Sets...",
      price: "FCFA 5,619-6,...",
      supplier: "Yiwu Ouze Clothing Co., Ltd.",
      isVerified: true
    },
    {
      id: 2,
      slug: "sport-fitness-backless-2piece-set-2022",
      image: product2,
      title: "2022 Sport Fitness Backless 2piece Set...",
      price: "FCFA 7,357-8,...",
      supplier: "Yiwu Ouze Clothing Co., Ltd.",
      isVerified: true
    },
    {
      id: 3,
      slug: "summer-outfits-women-t-shirt",
      image: product3,
      title: "Summer Outfits Women T Shirt and...",
      price: "FCFA 2,571-3,...",
      supplier: "Fashion Co., Ltd.",
      isVerified: true
    },
    {
      id: 4,
      slug: "ladies-short-sets-summer-solid-outfits",
      image: product4,
      title: "Ladies Short Sets Summer Solid Outfits...",
      price: "FCFA 4,145-4,...",
      supplier: "Style Corp.",
      isVerified: true
    },
    {
      id: 5,
      slug: "cotton-women-summer-biker-shorts",
      image: product5,
      title: "Cotton Women Summer Biker Shorts...",
      price: "FCFA 2,239-2,...",
      supplier: "Cotton Co.",
      isVerified: true
    },
    {
      id: 6,
      slug: "summer-two-piece-outfits-for-women",
      image: product6,
      title: "Summer Two Piece Outfits for Women...",
      price: "FCFA 4,044-4,...",
      supplier: "Summer Fashion Ltd.",
      isVerified: true
    }
  ];

  const bottomTabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Categories', icon: Grid },
    { id: 'deals', label: 'Deals', icon: Tag },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const renderHomeContent = () => (
    <div className="pb-20">
      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 mx-4 mt-4 rounded-2xl p-6 text-primary-foreground shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Flash Sale</h2>
            <p className="text-sm opacity-90 mb-4">Up to 70% off on selected items</p>
            <Button variant="secondary" size="sm" className="rounded-full font-medium px-6">
              Shop Now
            </Button>
          </div>
          <div className="text-6xl opacity-20">🛍️</div>
        </div>
      </div>

      {/* Quick Categories Grid */}
      <div className="px-4 mt-6">
        <h3 className="text-lg font-semibold mb-4">Shop by Category</h3>
        <div className="grid grid-cols-3 gap-3">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="p-4 flex flex-col items-center justify-center h-20 border-0 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-2xl mb-1">{category.icon}</span>
              <span className="text-xs font-medium text-center">{category.name}</span>
            </Card>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 mt-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Featured Products</h3>
          <Button variant="ghost" size="sm" className="text-primary">
            View All
          </Button>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {products.map((product) => (
                <ProductCard
                key={product.id}
                slug={product.slug}
                image={product.image}
                title={product.title}
                price={product.price}
                supplier={product.supplier}
                isVerified={product.isVerified}
                isLive={product.id === 6}
                />
            ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 mt-6">
        <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 border-0 shadow-sm bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm">Wishlist</p>
                <p className="text-xs text-muted-foreground">12 items</p>
              </div>
            </div>
          </Card>
          <Card className="p-4 border-0 shadow-sm bg-gradient-to-r from-green-50 to-green-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-medium text-sm">Orders</p>
                <p className="text-xs text-muted-foreground">Track orders</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );

  const renderCategoriesContent = () => (
    <div className="p-4 pb-20">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="p-6 border-0 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-3 ${category.color}`}>
                <span className="text-3xl">{category.icon}</span>
              </div>
              <h3 className="font-medium">{category.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">Browse collection</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderDealsContent = () => (
    <div className="p-4 pb-20">
      <Card className="p-4 mb-4 border-0 bg-gradient-to-r from-red-50 to-red-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
            <Tag className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-red-700">Limited Time Offers</h3>
            <p className="text-sm text-red-600">Hurry! These deals won't last long</p>
          </div>
        </div>
      </Card>
      
      <div className="space-y-3">
        {products.map((product) => (
          <Card key={product.id} className="p-4 border-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-muted rounded-xl relative">
                <Badge className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground px-1.5 py-0.5 text-xs">
                  -
                </Badge>
              </div>
              <div className="flex-1">
                <h4 className="font-medium text-sm mb-1">{product.title}</h4>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-primary font-bold">{product.price}</span>
                  <span className="text-sm text-muted-foreground line-through"></span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-amber-500">⭐</span>
                  <span className="text-xs text-muted-foreground"></span>
                </div>
              </div>
              <Button size="sm" className="rounded-full px-4">
                Buy Now
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );

  const renderProfileContent = () => (
    <div className="p-4 pb-20">
      <Card className="p-6 mb-6 border-0 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
            <User className="h-8 w-8 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Welcome!</h3>
            <p className="text-sm text-muted-foreground">Sign in to access your account</p>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <Button className="w-full rounded-full">Sign In</Button>
          <Button variant="outline" className="w-full rounded-full">Create Account</Button>
        </div>
      </Card>

      <div className="space-y-2">
        {[
          { icon: Heart, label: 'My Wishlist', count: '12 items' },
          { icon: ShoppingCart, label: 'Order History', count: '5 orders' },
          { icon: Bell, label: 'Notifications', count: '3 new' },
          { icon: Settings, label: 'Settings', count: null },
        ].map((item) => (
          <Card key={item.label} className="border-0 shadow-sm">
            <Button variant="ghost" className="w-full justify-start p-4 h-auto">
              <item.icon className="h-5 w-5 mr-3 text-muted-foreground" />
              <div className="flex-1 text-left">
                <p className="font-medium">{item.label}</p>
                {item.count && <p className="text-xs text-muted-foreground">{item.count}</p>}
              </div>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background relative">
      {/* Mobile Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b">
        <div className="flex items-center gap-3 px-4 py-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <div className="py-6">
                <h2 className="text-xl font-bold mb-6">Menu</h2>
                <div className="space-y-1">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant="ghost"
                      className="w-full justify-start gap-3 h-12 rounded-xl"
                    >
                      <span className="text-lg">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </Button>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 rounded-full border-0 bg-muted"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="relative rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative rounded-full">
              <ShoppingCart className="h-5 w-5" />
              <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center">
                3
              </Badge>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen pb-16">
        {activeTab === 'home' && renderHomeContent()}
        {activeTab === 'categories' && renderCategoriesContent()}
        {activeTab === 'deals' && renderDealsContent()}
        {activeTab === 'profile' && renderProfileContent()}
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <div className="flex">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <Button
                key={tab.id}
                variant="ghost"
                className={`flex-1 flex-col gap-1 h-16 rounded-none ${
                  isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
                <span className={`text-xs ${isActive ? 'font-medium text-primary' : ''}`}>
                  {tab.label}
                </span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Index;