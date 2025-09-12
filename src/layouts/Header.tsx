import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ShoppingCart, User, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import VerificationModal from "@/components/VerificationModal";
import CategoryDropdown from "@/components/dropdown/category";
import FeaturedDropdown from "@/components/dropdown/featured";
import { useState } from "react";
import LocationDropdown from "@/components/dropdown/location";
import LangCurrencyDropdown from "@/components/dropdown/language";
import logo from "/img/logo-sm-152.png"

interface HeaderProps {
  onTopRankingClick?: () => void;
  onNewArrivalsClick?: () => void;
}

const Header = ({ onTopRankingClick, onNewArrivalsClick }: HeaderProps = {}) => {
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [supplierFormData, setSupplierFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: undefined as Date | undefined
  });
  const [showSupplierDialog, setShowSupplierDialog] = useState(false);
  const [showMegaDropdown, setShowMegaDropdown] = useState(false);
  const [showFeaturedDropdown, setShowFeaturedDropdown] = useState(false);

  const handleSupplierFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!supplierFormData.firstName || !supplierFormData.lastName || 
        !supplierFormData.email || !supplierFormData.password || 
        !supplierFormData.confirmPassword || !supplierFormData.dateOfBirth) {
      alert('Please fill in all fields');
      return;
    }
    
    if (supplierFormData.password !== supplierFormData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // Close supplier dialog and open verification modal
    setShowSupplierDialog(false);
    setShowVerificationModal(true);
  };

  const handleVerificationComplete = () => {
    setShowVerificationModal(false);
    // For now, just show success message - full redirect would need Supabase
    alert('Verification complete! Your supplier account has been created successfully.');
  };

  const handleOAuthLogin = (provider: string, context: string) => {
    console.log(`${provider} OAuth login for ${context}`);
  };

  return (
    <header className="shadow-xs bg-background relative z-10" style={{ transform: 'scale(var(--scale-factor, 1))', transformOrigin: 'top left', width: 'calc(100% / var(--scale-factor, 1))' }}>
      <div className="px-3 py-1 space-y-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-xl font-bold flex items-center">
              <img 
                src={logo} 
                alt="Crest Nest Logo" 
                className="h-4 w-auto mr-2 sm:h-4 md:h-6 lg:h-8" 
              />
              <span className="mr-1">Crest</span> 
              <span className="text-primary">Nest</span>
            </div>
          </div>

          <div className="flex-1 max-w-2xl">
            <div className="relative flex">
              <Input 
                placeholder="women's clothing" 
                className="pr-16 sm:pr-20 h-7 sm:h-7 text-sm sm:text-base"
                defaultValue="women's clothing"
              />
              <Button className="absolute right-0 top-0 h-7 sm:h-7 px-4 sm:px-8 rounded-l-none text-xs sm:text-sm">
                Search
              </Button>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <LocationDropdown/>
            <LangCurrencyDropdown/>
            <ShoppingCart className="h-4 w-4 text-text-muted" />
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="ghost" size="sm" className="h-7 px-2">
                  <User className="h-3 w-3 mr-1" />
                  Sign in
                </Button>
              </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Sign in your account</DialogTitle>
                  <p className="text-gray-600 dark:text-gray-400">Welcome back to Crest Nest</p>
                </DialogHeader>
                {/* OAuth Section */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleOAuthLogin('Google', 'sign in')}
                      type="button" 
                      className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="ml-2">Google</span>
                    </button>

                    <button 
                      onClick={() => handleOAuthLogin('Microsoft', 'sign in')}
                      type="button" 
                      className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#f25022" d="M11.4 11.4H.6V.6h10.8v10.8z"/>
                        <path fill="#00a4ef" d="M23.4 11.4H12.6V.6h10.8v10.8z"/>
                        <path fill="#7fba00" d="M11.4 23.4H.6V12.6h10.8v10.8z"/>
                        <path fill="#ffb900" d="M23.4 23.4H12.6V12.6h10.8v10.8z"/>
                      </svg>
                      <span className="ml-2">Microsoft</span>
                    </button>
                  </div>

                  <div className="mt-4 relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-background text-gray-500 dark:text-gray-400">Or continue with email</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                  <Button className="w-full bg-orange-primary hover:bg-orange-hover">
                    Sign In
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm" className="h-7 px-3 text-xs bg-orange-primary hover:bg-orange-hover">
                  Create account
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Create your account</DialogTitle>
                                <p className="text-gray-600 dark:text-gray-400">Join thousands of buyers worldwide</p>
                </DialogHeader>
                {/* OAuth Section */}
                <div className="mb-6">
                  <div className="grid grid-cols-2 gap-3">
                    <button 
                      onClick={() => handleOAuthLogin('Google', 'create account')}
                      type="button" 
                      className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      <span className="ml-2">Google</span>
                    </button>

                    <button 
                      onClick={() => handleOAuthLogin('Microsoft', 'create account')}
                      type="button" 
                      className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24">
                        <path fill="#f25022" d="M11.4 11.4H.6V.6h10.8v10.8z"/>
                        <path fill="#00a4ef" d="M23.4 11.4H12.6V.6h10.8v10.8z"/>
                        <path fill="#7fba00" d="M11.4 23.4H.6V12.6h10.8v10.8z"/>
                        <path fill="#ffb900" d="M23.4 23.4H12.6V12.6h10.8v10.8z"/>
                      </svg>
                      <span className="ml-2">Microsoft</span>
                    </button>
                  </div>

                  <div className="mt-4 relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-background text-gray-500 dark:text-gray-400">Or create account with email</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" type="text" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <Input id="confirmPassword" type="password" placeholder="Confirm your password" />
                  </div>
                  <Button className="w-full bg-orange-primary hover:bg-orange-hover">
                    Create account
                  </Button>
                  <p className="text-xs text-text-muted text-center">
                    By creating an account, you agree to our Terms of Service and Privacy Policy
                  </p>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        
        <nav className="flex items-center space-x-6 mt-2 relative">
          <button 
            className="text-xs font-medium flex items-center gap-1 hover:text-orange-primary transition-colors"
            onMouseEnter={() => setShowMegaDropdown(true)}
          >
            All categories
            <ChevronDown className="h-3 w-3" />
          </button>
          <button 
            className="text-xs text-text-muted hover:text-orange-primary transition-colors border-b-2 border-transparent hover:border-orange-primary"
            onMouseEnter={() => setShowFeaturedDropdown(true)}
          >
            Featured selections
          </button>
          <button className="text-xs text-text-muted">Order protections</button>
          <div className="flex-1"></div>
          <button className="text-xs text-text-muted">AI sourcing agent</button>
          <button className="text-xs text-text-muted">Buyer Central</button>
          <button className="text-xs text-text-muted">Help Center</button>
          <button className="text-xs text-text-muted">App & extension</button>
          <Dialog open={showSupplierDialog} onOpenChange={setShowSupplierDialog}>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="text-xs text-text-muted">
                Become a supplier
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Become a Supplier</DialogTitle>
                <p className="text-gray-600 dark:text-gray-400">Start selling to global buyers</p>
              </DialogHeader>
              {/* OAuth Section */}
              <div className="">
                <div className="grid grid-cols-2 gap-3">
                  <button 
                    onClick={() => handleOAuthLogin('Google', 'sign in')}
                    type="button" 
                    className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span className="ml-2">Google</span>
                  </button>

                  <button 
                    onClick={() => handleOAuthLogin('Microsoft', 'sign in')}
                    type="button" 
                    className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm bg-white dark:bg-gray-700 text-sm font-medium text-gray-500 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#f25022" d="M11.4 11.4H.6V.6h10.8v10.8z"/>
                      <path fill="#00a4ef" d="M23.4 11.4H12.6V.6h10.8v10.8z"/>
                      <path fill="#7fba00" d="M11.4 23.4H.6V12.6h10.8v10.8z"/>
                      <path fill="#ffb900" d="M23.4 23.4H12.6V12.6h10.8v10.8z"/>
                    </svg>
                    <span className="ml-2">Microsoft</span>
                  </button>
                </div>

                <div className="mt-4 relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-background text-gray-500 dark:text-gray-400">Or continue with email</span>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSupplierFormSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="supplier-first-name">First name</Label>
                  <Input 
                    id="supplier-first-name" 
                    type="text" 
                    placeholder="Enter your first name"
                    value={supplierFormData.firstName}
                    onChange={(e) => setSupplierFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-last-name">Last name</Label>
                  <Input 
                    id="supplier-last-name" 
                    type="text" 
                    placeholder="Enter your last name"
                    value={supplierFormData.lastName}
                    onChange={(e) => setSupplierFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-email">Email address</Label>
                  <Input 
                    id="supplier-email" 
                    type="email" 
                    placeholder="Enter your email"
                    value={supplierFormData.email}
                    onChange={(e) => setSupplierFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-dob">Date of birth</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !supplierFormData.dateOfBirth && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {supplierFormData.dateOfBirth ? (
                          format(supplierFormData.dateOfBirth, "PPP")
                        ) : (
                          <span>Pick your date of birth</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={supplierFormData.dateOfBirth}
                        onSelect={(date) =>
                          setSupplierFormData((prev) => ({ ...prev, dateOfBirth: date }))
                        }
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        autoFocus
                        className={cn("p-3 pointer-events-auto")}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-password">Password</Label>
                  <Input 
                    id="supplier-password" 
                    type="password" 
                    placeholder="Create a password"
                    value={supplierFormData.password}
                    onChange={(e) => setSupplierFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="supplier-confirmPassword">Confirm password</Label>
                  <Input 
                    id="supplier-confirmPassword" 
                    type="password" 
                    placeholder="Confirm your password"
                    value={supplierFormData.confirmPassword}
                    onChange={(e) => setSupplierFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-primary hover:bg-orange-hover">
                  Create account
                </Button>
                <p className="text-xs text-text-muted text-center">
                  By creating an account, you agree to our Terms of Service and Privacy Policy
                </p>
              </form>
            </DialogContent>
          </Dialog>
        </nav>
      </div>

      <CategoryDropdown 
        isOpen={showMegaDropdown}
        onClose={() => setShowMegaDropdown(false)}
      />

      <FeaturedDropdown 
        isOpen={showFeaturedDropdown}
        onClose={() => setShowFeaturedDropdown(false)}
        onTopRankingClick={() => {
          setShowFeaturedDropdown(false);
          onTopRankingClick?.();
        }}
        onNewArrivalsClick={() => {
          setShowFeaturedDropdown(false);
          onNewArrivalsClick?.();
        }}
      />

      <VerificationModal 
        isOpen={showVerificationModal}
        onClose={handleVerificationComplete}
      />
    </header>
  );
};

export default Header;
