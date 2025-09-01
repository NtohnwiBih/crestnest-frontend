import { Badge } from "@/components/ui/badge";

const ProductNavigation = () => {
  return (
    <div className="bg-background">
      <div className="px-4 py-3">
        <div className="flex items-center space-x-8">
          <button className="text-sm font-medium text-foreground border-b-2 border-teal-primary pb-2">
            Products
          </button>
          <button className="text-sm text-text-muted hover:text-foreground">
            Suppliers
          </button>
          <button className="text-sm text-text-muted hover:text-foreground">
            Regional supplies
          </button>
          <button className="text-sm text-blue-link hover:text-blue-600 flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            Verified manufacturers
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductNavigation;