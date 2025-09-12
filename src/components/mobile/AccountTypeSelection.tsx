import { useState } from 'react';
import { ArrowLeft, ShoppingBag, Store, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface AccountTypeSelectionProps {
  onBack: () => void;
  onContinue: (accountType: 'buyer' | 'vendor') => void;
}

const AccountTypeSelection = ({ onBack, onContinue }: AccountTypeSelectionProps) => {
  const [selectedType, setSelectedType] = useState<'buyer' | 'vendor' | null>(null);

  const accountTypes = [
    {
      type: 'buyer' as const,
      title: 'Buyer Account',
      subtitle: 'Shop from thousands of products',
      icon: ShoppingBag,
      gradient: 'from-blue-50 to-blue-100',
      iconBg: 'bg-blue-500',
      features: [
        'Browse products from verified vendors',
        'Track orders and delivery status',
        'Save favorites and create wishlists',
        'Access exclusive buyer deals'
      ]
    },
    {
      type: 'vendor' as const,
      title: 'Vendor Account',
      subtitle: 'Sell your products to customers',
      icon: Store,
      gradient: 'from-green-50 to-green-100',
      iconBg: 'bg-green-500',
      features: [
        'List and manage your products',
        'Connect with potential buyers',
        'Track sales and analytics',
        'Access vendor support tools'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <Button
          variant="ghost"
          size="icon"
          onClick={onBack}
          className="rounded-full"
        >
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-2xl font-bold">Choose Account Type</h1>
      </div>

      {/* Welcome Section */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-4">
          <Users className="h-10 w-10 text-primary-foreground" />
        </div>
        <h2 className="text-xl font-semibold mb-2">Join CrestNest</h2>
        <p className="text-muted-foreground">Select the type of account that best fits your needs</p>
      </div>

      {/* Account Type Cards */}
      <div className="space-y-4 mb-8">
        {accountTypes.map((account) => {
          const Icon = account.icon;
          const isSelected = selectedType === account.type;
          
          return (
            <Card
              key={account.type}
              className={`p-6 cursor-pointer transition-all duration-200 ${
                isSelected 
                  ? 'ring-2 ring-primary shadow-lg' 
                  : 'hover:shadow-md'
              }`}
              onClick={() => setSelectedType(account.type)}
            >
              <div className={`bg-gradient-to-r ${account.gradient} rounded-2xl p-6 mb-4`}>
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${account.iconBg} rounded-full flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{account.title}</h3>
                    <p className="text-sm text-muted-foreground">{account.subtitle}</p>
                  </div>
                  {isSelected && (
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-primary-foreground rounded-full"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium text-sm mb-3">What you can do:</h4>
                {account.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                    <p className="text-sm text-muted-foreground">{feature}</p>
                  </div>
                ))}
              </div>
            </Card>
          );
        })}
      </div>

      {/* Statistics */}
      <Card className="p-4 mb-8 bg-gradient-to-r from-purple-50 to-purple-100">
        <div className="flex items-center gap-3">
          <TrendingUp className="h-8 w-8 text-purple-600" />
          <div>
            <h3 className="font-semibold text-purple-800">Join Our Community</h3>
            <p className="text-sm text-purple-600">Over 10,000+ active users buying and selling</p>
          </div>
        </div>
      </Card>

      {/* Continue Button */}
      <Button
        onClick={() => selectedType && onContinue(selectedType)}
        disabled={!selectedType}
        className="w-full rounded-xl h-12 font-medium"
      >
        Continue as {selectedType === 'buyer' ? 'Buyer' : selectedType === 'vendor' ? 'Vendor' : '...'}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>

      {/* Terms */}
      <p className="text-xs text-muted-foreground text-center mt-6 leading-relaxed">
        By continuing, you agree to our{' '}
        <Button variant="link" className="p-0 h-auto text-xs">
          Terms of Service
        </Button>{' '}
        and{' '}
        <Button variant="link" className="p-0 h-auto text-xs">
          Privacy Policy
        </Button>
      </p>
    </div>
  );
};

export default AccountTypeSelection;