import { useState } from 'react';
import { Search, ShoppingCart, Heart, Home, Grid, Tag, User, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

const CategoriesPage = () => {
//   const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('For you');

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

  const getCategoryContent = () => {
    switch (selectedCategory) {
      case 'For you':
        return (
          <>
            <div>
              <h3 className="text-base font-semibold mb-3">Recommendations</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Cigar Cutters', image: '/placeholder.svg' },
                  { name: 'Electric Lighter', image: '/placeholder.svg' },
                  { name: 'Cigarette Cases', image: '/placeholder.svg' },
                  { name: 'Smoking Pipes', image: '/placeholder.svg' },
                  { name: 'Candle Lighter', image: '/placeholder.svg' },
                  { name: 'Jet Lighters', image: '/placeholder.svg' },
                  { name: 'Cigar Accessories', image: '/placeholder.svg' },
                  { name: 'Smoking Pen', image: '/placeholder.svg' },
                  { name: 'Cigarette Lighter', image: '/placeholder.svg' },
                ].map((item) => (
                  <Card key={item.name} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs text-center line-clamp-2">{item.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3">Get product inspiration</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { price: 'FCFA 2,057-2,443', minOrder: '20 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 1,286-1,929', minOrder: '200 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 1,466-2,076', minOrder: '50 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 1,286-1,414', minOrder: '2 pieces', image: '/placeholder.svg' },
                ].map((item, idx) => (
                  <Card key={idx} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs font-semibold mb-1">{item.price}</p>
                    <p className="text-xs text-muted-foreground">Min. order: {item.minOrder}</p>
                  </Card>
                ))}
              </div>
            </div>
          </>
        );

      case 'Featured':
        return (
          <>
            <div>
              <h3 className="text-base font-semibold mb-3">Limited-time deals for you</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Ashtrays', image: '/placeholder.svg' },
                  { name: 'Matches', image: '/placeholder.svg' },
                  { name: 'Knife Sets', image: '/placeholder.svg' },
                  { name: 'Decorative Trays', image: '/placeholder.svg' },
                  { name: 'Sharpeners', image: '/placeholder.svg' },
                  { name: 'Cigarette Cases', image: '/placeholder.svg' },
                  { name: 'Fire Pits', image: '/placeholder.svg' },
                  { name: 'Metal Arts', image: '/placeholder.svg' },
                  { name: 'Smoking Pipes', image: '/placeholder.svg' },
                ].map((item) => (
                  <Card key={item.name} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs text-center line-clamp-2">{item.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3">Trending Products</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { price: 'FCFA 399-444', minOrder: '100 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 283-335', minOrder: '50 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 1,200-1,500', minOrder: '25 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 800-950', minOrder: '10 pieces', image: '/placeholder.svg' },
                ].map((item, idx) => (
                  <Card key={idx} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs font-semibold mb-1">{item.price}</p>
                    <p className="text-xs text-muted-foreground">Min. order: {item.minOrder}</p>
                  </Card>
                ))}
              </div>
            </div>
          </>
        );

      case 'Deals':
        return (
          <>
            <div>
              <h3 className="text-base font-semibold mb-3">Hot Deals</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Birthday Candles', image: '/placeholder.svg' },
                  { name: 'Hookahs', image: '/placeholder.svg' },
                  { name: 'Scented Candles', image: '/placeholder.svg' },
                  { name: 'Cigar Accessories', image: '/placeholder.svg' },
                  { name: 'Openers', image: '/placeholder.svg' },
                  { name: 'Smart Kitchen Tools', image: '/placeholder.svg' },
                ].map((item) => (
                  <Card key={item.name} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs text-center line-clamp-2">{item.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3">Best Offers</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { price: 'FCFA 500-650', minOrder: '30 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 750-890', minOrder: '15 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 1,100-1,300', minOrder: '20 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 350-450', minOrder: '50 pieces', image: '/placeholder.svg' },
                ].map((item, idx) => (
                  <Card key={idx} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs font-semibold mb-1">{item.price}</p>
                    <p className="text-xs text-muted-foreground">Min. order: {item.minOrder}</p>
                  </Card>
                ))}
              </div>
            </div>
          </>
        );

      case 'Sports & Entertainment':
        return (
          <>
            <div>
              <h3 className="text-base font-semibold mb-3">Fitness and Sports</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Plate Loaded Machines', image: '/placeholder.svg' },
                  { name: 'Flashlights & Torches', image: '/placeholder.svg' },
                  { name: 'Sauna Suits', image: '/placeholder.svg' },
                  { name: 'Outdoor Fitness Equipment', image: '/placeholder.svg' },
                  { name: 'Smart Fitness Products', image: '/placeholder.svg' },
                  { name: 'Yoga Equipment', image: '/placeholder.svg' },
                ].map((item) => (
                  <Card key={item.name} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs text-center line-clamp-2">{item.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3">Sports Accessories</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { price: 'FCFA 2,500-3,200', minOrder: '10 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 1,800-2,400', minOrder: '15 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 950-1,150', minOrder: '25 pieces', image: '/placeholder.svg' },
                  { price: 'FCFA 450-600', minOrder: '50 pieces', image: '/placeholder.svg' },
                ].map((item, idx) => (
                  <Card key={idx} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs font-semibold mb-1">{item.price}</p>
                    <p className="text-xs text-muted-foreground">Min. order: {item.minOrder}</p>
                  </Card>
                ))}
              </div>
            </div>
          </>
        );

      case 'Home & Garden':
        return (
          <>
            <div>
              <h3 className="text-base font-semibold mb-3">Pet Intelligence</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Pet Bowls & Feeders', image: '/placeholder.svg' },
                  { name: 'Pet Tracker', image: '/placeholder.svg' },
                  { name: 'Bark Control', image: '/placeholder.svg' },
                  { name: 'Pet Interactive Toys', image: '/placeholder.svg' },
                  { name: 'Pet Training Supplies', image: '/placeholder.svg' },
                  { name: 'Cat Litter Box', image: '/placeholder.svg' },
                ].map((item) => (
                  <Card key={item.name} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs text-center line-clamp-2">{item.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-base font-semibold mb-3">Smart Home</h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: 'Smart Speakers', image: '/placeholder.svg' },
                  { name: 'Smart Lights', image: '/placeholder.svg' },
                  { name: 'Security Cameras', image: '/placeholder.svg' },
                  { name: 'Smart Locks', image: '/placeholder.svg' },
                  { name: 'Thermostats', image: '/placeholder.svg' },
                  { name: 'Smart Plugs', image: '/placeholder.svg' },
                ].map((item) => (
                  <Card key={item.name} className="p-2 shadow-sm">
                    <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                    <p className="text-xs text-center line-clamp-2">{item.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </>
        );

      default:
        return (
          <div>
            <h3 className="text-base font-semibold mb-3">{selectedCategory} Products</h3>
            <div className="grid grid-cols-3 gap-3">
              {Array.from({ length: 9 }).map((_, idx) => (
                <Card key={idx} className="p-2 shadow-sm">
                  <div className="aspect-square bg-muted rounded-lg mb-2"></div>
                  <p className="text-xs text-center">Product {idx + 1}</p>
                </Card>
              ))}
            </div>
          </div>
        );
    }
  };

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
          {/* <Sheet>
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
          </Sheet> */}
          
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
        <div className="flex pb-20">
          {/* Left Sidebar */}
          <div className="w-28 border-r bg-muted/30 overflow-y-auto">
            <ScrollArea className="h-[calc(100vh-8rem)]">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`w-full px-3 py-3 text-xs text-left border-b hover:bg-muted/50 transition-colors ${
                    selectedCategory === category ? 'bg-background font-medium text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </ScrollArea>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto">
            <ScrollArea className="h-[calc(100vh-8rem)]">
              <div className="p-4 space-y-6">
                {getCategoryContent()}
              </div>
            </ScrollArea>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <div className="flex">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === 'categories';
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

export default CategoriesPage;