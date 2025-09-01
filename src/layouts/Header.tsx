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

const Header = () => {
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

  return (
    <header className="shadow-xs bg-background relative z-10" style={{ transform: 'scale(var(--scale-factor, 1))', transformOrigin: 'top left', width: 'calc(100% / var(--scale-factor, 1))' }}>
      <div className="px-3 py-1 space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-xl font-bold text-teal-primary">
              <span className="text-gray-900" >Crest</span> <span>Nest</span>
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
            <span className="text-xs text-text-muted">Deliver to: CM</span>
            <span className="text-xs text-text-muted">English-XAF</span>
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
                </DialogHeader>
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
                </DialogHeader>
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
            className="text-xs text-text-muted hover:text-orange-primary transition-colors border-b-2 border-transparent hover:border-orange-primary pb-1"
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
                </DialogHeader>
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
      />

      <VerificationModal 
        isOpen={showVerificationModal}
        onClose={handleVerificationComplete}
      />
    </header>
  );
};

export default Header;
