import { useState } from 'react';
import { Search, Menu, ShoppingCart, Heart, Bell, Settings, Home, Grid, Tag, User, Mail } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Card } from '@/components/ui/card';
import SignInView from '@/components/mobile/SignInView';
import AccountTypeSelection from '@/components/mobile/AccountTypeSelection';
import CreateAccountForm from '@/components/mobile/CreateAccount';
import VendorVerification from '@/components/mobile/VendorVerification';

const MyNestPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [authView, setAuthView] = useState<'none' | 'signin' | 'account-type' | 'signup' | 'vendor-verification'>('none');
  const [selectedAccountType, setSelectedAccountType] = useState<'buyer' | 'vendor' | null>(null);

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

  const bottomTabs = [
    { id: 'home', label: 'Home', icon: Home, path: '/' },
    { id: 'categories', label: 'Categories', icon: Grid, path: '/products/search' },
    { id: 'messenger', label: 'Messenger', icon: Mail, path: '/messenger' },
    { id: 'deals', label: 'Deals', icon: Tag, path: '/deals' },
    { id: 'my-nest', label: 'My Nest', icon: User, path: '/my-nest' },
  ];

  // Show auth views when needed
  if (authView === 'signin') {
    return (
      <SignInView 
        onBack={() => setAuthView('none')}
        onSwitchToSignUp={() => setAuthView('account-type')}
      />
    );
  }

  if (authView === 'account-type') {
    return (
      <AccountTypeSelection 
        onBack={() => setAuthView('none')}
        onContinue={(accountType) => {
          setSelectedAccountType(accountType);
          setAuthView('signup');
        }}
      />
    );
  }

  if (authView === 'signup' && selectedAccountType) {
    return (
      <CreateAccountForm
        accountType={selectedAccountType}
        onBack={() => setAuthView('account-type')}
        onSuccess={() => {
          setAuthView('none');
          setSelectedAccountType(null);
        }}
        onVendorVerification={() => {
          // Navigate to vendor verification for vendor accounts
          setAuthView('vendor-verification');
        }}
      />
    );
  }

  if (authView === 'vendor-verification') {
    return (
      <VendorVerification 
        onBack={() => setAuthView('signup')}
        onSuccess={() => {
          // Handle successful vendor verification
          setAuthView('none');
          setSelectedAccountType(null);
          // You can show a success message or redirect to vendor dashboard
        }}
      />
    );
  }

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
          <Card className="p-6 mb-6 shadow-sm">
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
              <Button 
                className="w-full rounded-full"
                onClick={() => setAuthView('signin')}
              >
                Sign In
              </Button>
              <Button 
                variant="outline" 
                className="w-full rounded-full"
                onClick={() => setAuthView('account-type')}
              >
                Create Account
              </Button>
            </div>
          </Card>

          <div className="space-y-2">
            {[
              { icon: Heart, label: 'My Wishlist', count: '12 items', onClick: () => {} },
              { icon: ShoppingCart, label: 'Order History', count: '5 orders', onClick: () => navigate('/cart') },
              { icon: Bell, label: 'Notifications', count: '3 new', onClick: () => {} },
              { icon: Settings, label: 'Theme Settings', count: null, onClick: () => navigate('/theme-settings') },
            ].map((item) => (
              <Card key={item.label} className="shadow-sm">
                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-4 h-auto"
                  onClick={item.onClick}
                >
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
      </main>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-sm border-t shadow-lg">
        <div className="flex">
          {bottomTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === 'my-nest';
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

export default MyNestPage;
