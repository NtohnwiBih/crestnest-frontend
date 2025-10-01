import { useState } from 'react';
import { Search, Menu, ShoppingCart, Heart, Home, Grid, Tag, User, Mail } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';

const DealsPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

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
      image: '/placeholder.svg',
      title: "Women Sets Fashion Two Piece Satin Sets...",
      price: "FCFA 5,619-6,...",
      supplier: "Yiwu Ouze Clothing Co., Ltd.",
      isVerified: true
    },
    {
      id: 2,
      slug: "sport-fitness-backless-2piece-set-2022",
      image: '/placeholder.svg',
      title: "2022 Sport Fitness Backless 2piece Set...",
      price: "FCFA 7,357-8,...",
      supplier: "Yiwu Ouze Clothing Co., Ltd.",
      isVerified: true
    },
    {
      id: 3,
      slug: "summer-outfits-women-t-shirt",
      image: '/placeholder.svg',
      title: "Summer Outfits Women T Shirt and...",
      price: "FCFA 2,571-3,...",
      supplier: "Fashion Co., Ltd.",
      isVerified: true
    },
    {
      id: 4,
      slug: "ladies-short-sets-summer-solid-outfits",
      image: '/placeholder.svg',
      title: "Ladies Short Sets Summer Solid Outfits...",
      price: "FCFA 4,145-4,...",
      supplier: "Style Corp.",
      isVerified: true
    },
    {
      id: 5,
      slug: "cotton-women-summer-biker-shorts",
      image: '/placeholder.svg',
      title: "Cotton Women Summer Biker Shorts...",
      price: "FCFA 2,239-2,...",
      supplier: "Cotton Co.",
      isVerified: true
    },
    {
      id: 6,
      slug: "summer-two-piece-outfits-for-women",
      image: '/placeholder.svg',
      title: "Summer Two Piece Outfits for Women...",
      price: "FCFA 4,044-4,...",
      supplier: "Summer Fashion Ltd.",
      isVerified: true
    }
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
        <div className="p-4 pb-20">
          <Card className="p-4 mb-4 bg-gradient-to-r from-red-50 to-red-100">
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
              <Card key={product.id} className="p-4 shadow-sm">
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
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <div className="flex">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === 'deals';
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

export default DealsPage;
