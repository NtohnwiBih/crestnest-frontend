import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

const FilterSidebar = () => {
  return (
    <aside className="w-48 bg-background ml-4 border border-gray-border rounded p-3">
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold text-foreground mb-2 text-sm">Filters</h3>
          
          <div className="flex items-center space-x-2 mb-2">
            <Badge className="bg-yellow-400 text-yellow-900 text-xs">
              Trade Assurance
            </Badge>
          </div>
          <p className="text-xs text-text-muted">
            Protects your orders on Alibaba.com
          </p>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium text-foreground mb-3">Supplier features</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="verified" />
              <label htmlFor="verified" className="text-sm text-foreground">
                Verified Supplier
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="verified-pro" />
              <label htmlFor="verified-pro" className="text-sm text-foreground">
                Verified Pro Supplier
              </label>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium text-foreground mb-3">Merge results</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="merge-supplier" />
              <label htmlFor="merge-supplier" className="text-sm text-foreground">
                Merge by supplier
              </label>
            </div>
          </div>
          <p className="text-xs text-text-muted mt-2">
            Only the most relevant item from each supplier will be shown
          </p>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium text-foreground mb-3">Store reviews</h4>
          <p className="text-xs text-text-muted mb-3">
            Based on a 5-star rating system
          </p>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="4star" />
              <label htmlFor="4star" className="text-sm text-foreground">4.0 & up</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="45star" />
              <label htmlFor="45star" className="text-sm text-foreground">4.5 & up</label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="5star" />
              <label htmlFor="5star" className="text-sm text-foreground">5.0</label>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium text-foreground mb-3">Product features</h4>
          <div className="flex items-center space-x-2">
            <Checkbox id="paid-samples" />
            <label htmlFor="paid-samples" className="text-sm text-foreground">
              Paid samples
            </label>
          </div>
        </div>

        <Separator />

        <div>
          <h4 className="font-medium text-foreground mb-3">Categories</h4>
          <div className="space-y-2">
            <button className="text-sm text-blue-link hover:underline block">
              Women's Cardigans
            </button>
            <button className="text-sm text-blue-link hover:underline block">
              Women's Parkas
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;