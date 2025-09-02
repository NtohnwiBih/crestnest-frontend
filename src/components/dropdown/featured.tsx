import { Target, Tag, Sparkles, Package, Beaker, Zap, Building } from "lucide-react";

interface FeaturedDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onTopRankingClick: () => void;
}

const FeaturedDropdown = ({ isOpen, onClose, onTopRankingClick }: FeaturedDropdownProps) => {
  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-background border border-gray-border shadow-lg z-50"
      onMouseLeave={onClose}
    >
      <div className="flex">
        {/* Main Featured Sections */}
        <div className="flex-1 p-8">
          <div className="grid grid-cols-3 gap-8 max-w-4xl">
            {/* Top ranking */}
            <div className="text-center group cursor-pointer" onClick={onTopRankingClick}>
              <div className="w-32 h-32 mx-auto mb-4 border border-gray-border rounded-lg flex items-center justify-center group-hover:border-orange-primary transition-colors">
                <Target className="h-12 w-12 text-text-muted group-hover:text-orange-primary transition-colors" />
              </div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-orange-primary transition-colors">
                Top ranking
              </h3>
            </div>

            {/* New arrivals */}
            <div className="text-center group cursor-pointer">
              <div className="w-32 h-32 mx-auto mb-4 border border-gray-border rounded-lg flex items-center justify-center group-hover:border-orange-primary transition-colors relative">
                <Sparkles className="h-12 w-12 text-text-muted group-hover:text-orange-primary transition-colors" />
                <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded font-bold">
                  NEW
                </div>
              </div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-orange-primary transition-colors">
                New arrivals
              </h3>
            </div>

            {/* Top deals */}
            <div className="text-center group cursor-pointer">
              <div className="w-32 h-32 mx-auto mb-4 border border-gray-border rounded-lg flex items-center justify-center group-hover:border-orange-primary transition-colors">
                <Tag className="h-12 w-12 text-text-muted group-hover:text-orange-primary transition-colors" />
              </div>
              <h3 className="text-sm font-medium text-foreground group-hover:text-orange-primary transition-colors">
                Top deals
              </h3>
            </div>
          </div>
        </div>

        {/* Right Sidebar Services */}
        <div className="w-64 bg-gray-50 border-l border-gray-border p-6">
          <div className="space-y-4">
            <button className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors group">
              <div className="flex items-center text-sm text-text-muted group-hover:text-foreground">
                <Package className="h-4 w-4 mr-3" />
                Dropshipping center
              </div>
            </button>
            
            <button className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors group">
              <div className="flex items-center text-sm text-text-muted group-hover:text-foreground">
                <Beaker className="h-4 w-4 mr-3" />
                Sample center
              </div>
            </button>
            
            <button className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors group">
              <div className="flex items-center text-sm text-text-muted group-hover:text-foreground">
                <Zap className="h-4 w-4 mr-3" />
                Fast customization
              </div>
            </button>
            
            <button className="w-full text-left p-3 rounded-lg hover:bg-white transition-colors group">
              <div className="flex items-center text-sm text-text-muted group-hover:text-foreground">
                <Building className="h-4 w-4 mr-3" />
                Online Trade Show
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDropdown;