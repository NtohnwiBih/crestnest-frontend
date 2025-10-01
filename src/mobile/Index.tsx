import { useState } from 'react';
import { Search, Menu, ShoppingCart, Heart, Home, Grid, Tag, User, Mail, X, Download, Star, Clock, TrendingUp, ArrowBigRight } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';
import ProductCard from '@/components/ProductCard';
import { usePWAInstall } from '@/hooks/usePWAInstall';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import product1 from "@/assets/images/product1.jpg";
import product2 from "@/assets/images/product2.jpg";
import product3 from "@/assets/images/product3.jpg";
import product4 from "@/assets/images/product4.jpg";
import product5 from "@/assets/images/product5.jpg";
import product6 from "@/assets/images/product6.jpg";
import product7 from "@/assets/images/product7.jpeg";
import product8 from "@/assets/images/product8.jpeg";
import product9 from "@/assets/images/product9.jpeg";
import product10 from "@/assets/images/product10.jpeg";
import product11 from "@/assets/images/product11.jpeg";
import product12 from "@/assets/images/product12.jpeg";
import product13 from "@/assets/images/product13.jpeg";
import product14 from "@/assets/images/product14.jpeg";
import product15 from "@/assets/images/product15.jpeg";
import product16 from "@/assets/images/product16.jpeg";
import product17 from "@/assets/images/product17.jpeg";
import product18 from "@/assets/images/product18.jpeg";
import product19 from "@/assets/images/product19.jpeg";
import product20 from "@/assets/images/product20.jpeg";

const IndexMobile = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showInstallBanner, setShowInstallBanner] = useState(true);
  const { isInstallable, isInstalled, installApp } = usePWAInstall();

  const handleInstallClick = async () => {
    const success = await installApp();
    if (success) {
      setShowInstallBanner(false);
    }
  };

  const categories = [
    'For you',
    'Featured',
    'Deals',
    'Home & Garden',
    'Sports & Entertainment',
    'Jewelry, Eyewear & Watches',
    'Gifts & Crafts',
    'Tools & Hardware',
    'Apparel & Accessories',
    'Consumer Electronics',
    'Beauty',
    'Shoes & Accessories',
    'Luggage, Bags & Cases',
    'Packaging & Printing',
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
    },
    {
      id: 7,
      slug: "casual-loose-women-tracksuit-2piece",
      image: product7,
      title: "Casual Loose Women Tracksuit 2Piece...",
      price: "FCFA 6,229-7,...",
      supplier: "Urban Wear Ltd.",
      isVerified: true
    },
    {
      id: 8,
      slug: "fashion-ladies-office-blazer-pants",
      image: product8,
      title: "Fashion Ladies Office Blazer & Pants...",
      price: "FCFA 10,549-11,...",
      supplier: "Office Style Inc.",
      isVerified: true
    },
    {
      id: 9,
      slug: "crop-top-and-shorts-summer-sets",
      image: product9,
      title: "Crop Top and Shorts Summer Sets...",
      price: "FCFA 3,999-4,...",
      supplier: "Trendy Co.",
      isVerified: false
    },
    {
      id: 10,
      slug: "two-piece-knitwear-set-women",
      image: product10,
      title: "Two Piece Knitwear Set Women...",
      price: "FCFA 8,229-9,...",
      supplier: "Knits & Co.",
      isVerified: true
    },
    {
      id: 11,
      slug: "ladies-sportswear-yoga-2pcs",
      image: product11,
      title: "Ladies Sportswear Yoga 2Pcs Set...",
      price: "FCFA 5,449-6,...",
      supplier: "Activewear Pro.",
      isVerified: true
    },
    {
      id: 12,
      slug: "womens-casual-linen-shirt-and-pants",
      image: product12,
      title: "Women's Casual Linen Shirt & Pants...",
      price: "FCFA 7,899-8,...",
      supplier: "Linen Works Ltd.",
      isVerified: false
    },
    {
      id: 13,
      slug: "fashion-denim-jacket-and-jeans",
      image: product13,
      title: "Fashion Denim Jacket & Jeans Set...",
      price: "FCFA 11,199-12,...",
      supplier: "Denim World Ltd.",
      isVerified: true
    },
    {
      id: 14,
      slug: "party-wear-dress-sets-women",
      image: product14,
      title: "Party Wear Dress Sets for Women...",
      price: "FCFA 9,750-10,...",
      supplier: "Glamour Line Co.",
      isVerified: true
    },
    {
      id: 15,
      slug: "ladies-casual-sweatshirt-pants",
      image: product15,
      title: "Ladies Casual Sweatshirt & Pants...",
      price: "FCFA 4,899-5,...",
      supplier: "Comfort Wear Ltd.",
      isVerified: false
    },
    {
      id: 16,
      slug: "beachwear-two-piece-floral-set",
      image: product16,
      title: "Beachwear Two Piece Floral Set...",
      price: "FCFA 6,550-7,...",
      supplier: "Beach & Sun Ltd.",
      isVerified: true
    },
    {
      id: 17,
      slug: "autumn-coat-and-skirt-outfits",
      image: product17,
      title: "Autumn Coat and Skirt Outfits...",
      price: "FCFA 12,200-13,...",
      supplier: "Autumn Trends Inc.",
      isVerified: true
    },
    {
      id: 18,
      slug: "luxury-silk-sleepwear-women-2pcs",
      image: product18,
      title: "Luxury Silk Sleepwear Women 2Pcs...",
      price: "FCFA 15,399-16,...",
      supplier: "Silk Dreams Co.",
      isVerified: true
    },
    {
      id: 19,
      slug: "elegant-formal-suit-for-ladies",
      image: product19,
      title: "Elegant Formal Suit for Ladies...",
      price: "FCFA 13,799-14,...",
      supplier: "Formal Wear Ltd.",
      isVerified: true
    },
    {
      id: 20,
      slug: "trendy-summer-dress-sets-women",
      image: product20,
      title: "Trendy Summer Dress Sets Women...",
      price: "FCFA 5,699-6,...",
      supplier: "Trendy Line Ltd.",
      isVerified: false
    }
  ];

  const topDeals = [
    { id: 1, name: 'Flash Sale Phone', slug: 'flash-sale-phone', price: '$499', originalPrice: '$799', image: '/placeholder.svg', rating: 4.8, discount: '38%' },
    { id: 2, name: 'Bluetooth Speaker', slug: 'bluetooth-speaker', price: '$89', originalPrice: '$149', image: '/placeholder.svg', rating: 4.7, discount: '40%' },
    { id: 3, name: 'Tablet Pro', slug: 'tablet-pro', price: '$599', originalPrice: '$899', image: '/placeholder.svg', rating: 4.6, discount: '33%' },
    { id: 4, name: 'Gaming Chair', slug: 'gaming-chair', price: '$199', originalPrice: '$299', image: '/placeholder.svg', rating: 4.5, discount: '33%' },
    { id: 5, name: 'Smart TV 55"', slug: 'smart-tv-55', price: '$699', originalPrice: '$999', image: '/placeholder.svg', rating: 4.7, discount: '30%' },
  ];

  const topRanking = [
    { id: 1, name: 'iPhone 15 Pro', slug: 'iphone-15-pro', price: '$1199', originalPrice: '$1299', image: '/placeholder.svg', rating: 4.9, rank: 1 },
    { id: 2, name: 'MacBook Air M3', slug: 'macbook-air-m3', price: '$1399', originalPrice: '$1499', image: '/placeholder.svg', rating: 4.8, rank: 2 },
    { id: 3, name: 'AirPods Pro', slug: 'airpods-pro', price: '$249', originalPrice: '$279', image: '/placeholder.svg', rating: 4.7, rank: 3 },
    { id: 4, name: 'iPad Air', slug: 'ipad-air', price: '$699', originalPrice: '$799', image: '/placeholder.svg', rating: 4.6, rank: 4 },
    { id: 5, name: 'Apple Watch', slug: 'apple-watch', price: '$399', originalPrice: '$449', image: '/placeholder.svg', rating: 4.8, rank: 5 },
  ];

  const newArrivals = [
    { id: 1, name: 'VR Headset Pro', slug: 'vr-headset-pro', price: '$799', originalPrice: null, image: '/placeholder.svg', rating: 4.5, isNew: true },
    { id: 2, name: 'Smart Ring', slug: 'smart-ring', price: '$299', originalPrice: null, image: '/placeholder.svg', rating: 4.3, isNew: true },
    { id: 3, name: 'Foldable Phone', slug: 'foldable-phone', price: '$1899', originalPrice: null, image: '/placeholder.svg', rating: 4.7, isNew: true },
    { id: 4, name: 'AI Assistant Hub', slug: 'ai-assistant-hub', price: '$399', originalPrice: null, image: '/placeholder.svg', rating: 4.4, isNew: true },
    { id: 5, name: 'Solar Power Bank', slug: 'solar-power-bank', price: '$89', originalPrice: null, image: '/placeholder.svg', rating: 4.2, isNew: true },
  ];

  const bottomTabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'categories', label: 'Categories', icon: Grid, path: '/products/search' },
    { id: 'messenger', label: 'Messenger', icon: Mail, path: '/messenger' },
    { id: 'deals', label: 'Deals', icon: Tag, path: '/deals' },
    { id: 'my-nest', label: 'My Nest', icon: User, path: '/my-nest' },
  ];

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
                      key={category}
                      variant="ghost"
                      className="w-full justify-start h-12 rounded-xl"
                      onClick={() => navigate('/categories')}
                    >
                      <span className="font-medium">{category}</span>
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
                className="pl-10 pr-4 rounded-full bg-muted"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="relative rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="relative rounded-full" onClick={() => navigate('/cart')}>
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
                  <Card key={product.id} onClick={() => navigate(`/product/${product.slug}`)} className="w-35 p-1 shadow-sm flex-shrink-0">
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
                  <Card key={product.id} onClick={() => navigate(`/product/${product.slug}`)} className="w-35 p-1 shadow-sm flex-shrink-0">
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
                  <Card key={product.id} onClick={() => navigate(`/product/${product.slug}`)} className="w-40 p-1 shadow-sm flex-shrink-0">
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
                <div key={product.id} onClick={() => navigate(`/product/${product.slug}`)}>
                  <ProductCard
                    slug={product.slug}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    supplier={product.supplier}
                    isVerified={product.isVerified}
                    isLive={product.id === 6}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <div className="flex">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === 'home';
            return (
              <Link key={tab.id} to={tab.path} className="flex-1">
                <Button
                  variant="ghost"
                  className={`w-full flex-col gap-1 h-16 rounded-none ${
                    isActive ? 'text-primary bg-primary/5' : 'text-muted-foreground'
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? 'text-primary' : ''}`} />
                  <span className={`text-xs ${isActive ? 'font-medium text-primary' : ''}`}>
                    {tab.label}
                  </span>
                </Button>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default IndexMobile;
