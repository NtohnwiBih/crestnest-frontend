import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const SupplierProfile = () => {
  return (
    <Card className="p-3 mb-4">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
            YZ
          </div>
          <div>
            <h3 className="font-semibold text-foreground text-sm">
              Yiwu Ouze Clothing Co., Ltd.
            </h3>
            <div className="flex items-center space-x-2 mt-0.5">
              <Badge variant="secondary" className="text-xs px-1 py-0">
                Verified
              </Badge>
              <span className="text-xs text-text-muted">Apparel & Accessories</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-1">
          <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
            Chat now
          </Button>
          <Button size="sm" variant="outline" className="h-7 px-2 text-xs">
            Contact Supplier
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default SupplierProfile;