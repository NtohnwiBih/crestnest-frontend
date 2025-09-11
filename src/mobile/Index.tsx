import { useState } from 'react';
import { Search, Menu, ShoppingCart, User, Heart, Bell, Home, Grid, Tag, Settings, X, Download, Mail, Star, Clock, TrendingUp, ArrowBigRight } from 'lucide-react';
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
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const IndexMobile = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('home');
  const [showInstallBanner, setShowInstallBanner] = useState(true);
  const { isInstallable, isInstalled, installApp } = usePWAInstall();

  const handleInstallClick = async () => {
    const success = await installApp();
    if (success) {
      setShowInstallBanner(false);
    }
  };

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

  const topDeals = [
    { id: 1, name: 'Flash Sale Phone', price: '$499', originalPrice: '$799', image: '/placeholder.svg', rating: 4.8, discount: '38%' },
    { id: 2, name: 'Bluetooth Speaker', price: '$89', originalPrice: '$149', image: '/placeholder.svg', rating: 4.7, discount: '40%' },
    { id: 3, name: 'Tablet Pro', price: '$599', originalPrice: '$899', image: '/placeholder.svg', rating: 4.6, discount: '33%' },
    { id: 4, name: 'Gaming Chair', price: '$199', originalPrice: '$299', image: '/placeholder.svg', rating: 4.5, discount: '33%' },
    { id: 5, name: 'Smart TV 55"', price: '$699', originalPrice: '$999', image: '/placeholder.svg', rating: 4.7, discount: '30%' },
  ];

  const topRanking = [
    { id: 1, name: 'iPhone 15 Pro', price: '$1199', originalPrice: '$1299', image: '/placeholder.svg', rating: 4.9, rank: 1 },
    { id: 2, name: 'MacBook Air M3', price: '$1399', originalPrice: '$1499', image: '/placeholder.svg', rating: 4.8, rank: 2 },
    { id: 3, name: 'AirPods Pro', price: '$249', originalPrice: '$279', image: '/placeholder.svg', rating: 4.7, rank: 3 },
    { id: 4, name: 'iPad Air', price: '$699', originalPrice: '$799', image: '/placeholder.svg', rating: 4.6, rank: 4 },
    { id: 5, name: 'Apple Watch', price: '$399', originalPrice: '$449', image: '/placeholder.svg', rating: 4.8, rank: 5 },
  ];

  const newArrivals = [
    { id: 1, name: 'VR Headset Pro', price: '$799', originalPrice: null, image: '/placeholder.svg', rating: 4.5, isNew: true },
    { id: 2, name: 'Smart Ring', price: '$299', originalPrice: null, image: '/placeholder.svg', rating: 4.3, isNew: true },
    { id: 3, name: 'Foldable Phone', price: '$1899', originalPrice: null, image: '/placeholder.svg', rating: 4.7, isNew: true },
    { id: 4, name: 'AI Assistant Hub', price: '$399', originalPrice: null, image: '/placeholder.svg', rating: 4.4, isNew: true },
    { id: 5, name: 'Solar Power Bank', price: '$89', originalPrice: null, image: '/placeholder.svg', rating: 4.2, isNew: true },
  ];

  const bottomTabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'categories', label: 'Categories', icon: Grid },
     { id: 'messager', label: 'Messenger', icon: Mail },
    { id: 'deals', label: 'Deals', icon: Tag },
    { id: 'my-nest  ', label: 'My Nest', icon: User },
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

      {/* Top Deals Slider */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Tag className="h-5 w-5 text-primary" />
            Top Deals
          </h3>
          <Button variant="ghost" size="sm" className="text-primary">
            <ArrowBigRight className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-3 px-4">
            {topDeals.map((product) => (
              <Card key={product.id} className="w-35 p-1 shadow-sm flex-shrink-0">
                <div className="aspect-square bg-muted rounded-xl mb-3 relative overflow-hidden">
                  <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground px-2 py-0.5 text-xs">
                    -{product.discount}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm mb-2 line-clamp-2 leading-tight">{product.name}</h4>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-primary font-bold text-sm">{product.price}</span>
                  <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  {/* <div className="flex items-center gap-1">
                    <span className="text-xs text-amber-500">⭐</span>
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>
                  <Button size="sm" className="h-6 px-2 text-xs rounded-full">
                    Add
                  </Button> */}
                </div>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Top Ranking */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Top Ranking
          </h3>
          <Button variant="ghost" size="sm" className="text-primary">
            <ArrowBigRight className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-3 px-4">
            {topRanking.map((product) => (
              <Card key={product.id} className="w-35 p-1  shadow-sm flex-shrink-0">
                <div className="aspect-square bg-muted rounded-xl mb-3 relative overflow-hidden">
                  <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground px-2 py-0.5 text-xs font-bold">
                    #{product.rank}
                  </Badge>
                </div>
                <h4 className="font-medium text-sm mb-2 line-clamp-2 leading-tight">{product.name}</h4>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-primary font-bold text-sm">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through">{product.originalPrice}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-amber-500 fill-current" />
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>
                  <Button size="sm" className="h-6 px-2 text-xs rounded-full">
                    Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* New Arrivals */}
      <div className="mt-6">
        <div className="flex items-center justify-between mb-4 px-4">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            New Arrivals
          </h3>
          <Button variant="ghost" size="sm" className="text-primary">
            <ArrowBigRight className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-3 px-4">
            {newArrivals.map((product) => (
              <Card key={product.id} className="w-40 p-1 shadow-sm flex-shrink-0">
                <div className="aspect-square bg-muted rounded-xl mb-3 relative overflow-hidden">
                  <Badge className="absolute top-2 left-2 bg-green-500 px-2 py-0.5 text-xs">
                    NEW
                  </Badge>
                </div>
                <h4 className="font-medium text-sm mb-2 line-clamp-2 leading-tight">{product.name}</h4>
                <div className="flex items-center gap-1 mb-1">
                  <span className="text-primary font-bold text-sm">{product.price}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-amber-500 fill-current" />
                    <span className="text-xs text-muted-foreground">{product.rating}</span>
                  </div>
                  <Button size="sm" className="h-6 px-2 text-xs rounded-full">
                    Add
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
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
          <Card className="p-4  shadow-sm bg-gradient-to-r from-blue-50 to-blue-100">
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
          <Card className="p-4  shadow-sm bg-gradient-to-r from-green-50 to-green-100">
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
            className="p-6  shadow-sm hover:shadow-md transition-shadow"
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
      <Card className="p-4 mb-4  bg-gradient-to-r from-red-50 to-red-100">
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
          <Card key={product.id} className="p-4  shadow-sm">
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
      <Card className="p-6 mb-6  shadow-sm">
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
          <Card key={item.label} className=" shadow-sm">
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
       {/* PWA Install Banner */}
      {isInstallable && !isInstalled && showInstallBanner && (
        <div className="bg-primary text-primary-foreground p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Download className="w-5 h-5" />
            <div>
              <p className="text-sm font-medium">Install CrestNest</p>
              <p className="text-xs opacity-90">Add to home screen for better experience</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="secondary" 
              onClick={handleInstallClick}
            >
              Install
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="h-8 w-8 text-primary-foreground"
              onClick={() => setShowInstallBanner(false)}
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
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
                className="pl-10 pr-4 rounded-full  bg-muted"
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
        {activeTab === 'my-nest' && renderProfileContent()}
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

export default IndexMobile;