import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  slug: string;
  image: string;
  title: string;
  price: string;
  supplier?: string;
  isVerified?: boolean;
  isLive?: boolean;
  ranking?: number;
  isCompact?: boolean;
}

const ProductCard = ({ image, title, price, supplier, isVerified, isLive, ranking, isCompact }: ProductCardProps) => {
  if (isCompact) {
    return (
      <div
       className="flex space-x-2 p-2 hover:bg-gray-50 rounded-sm cursor-pointer relative">
        {ranking && (
          <div className="absolute top-1 left-1 bg-orange-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center z-10">
            {ranking}
          </div>
        )}
        <img 
          src={image} 
          alt={title}
          className="w-12 h-12 object-cover rounded-sm border border-gray-border"
        />
        <div className="flex-1 min-w-0">
          <h4 className="text-xs font-medium text-foreground truncate leading-tight">
            {title}
          </h4>
          <p className="text-xs text-orange-primary font-medium mt-1">
            {price}
          </p>
          <p className="text-xs text-text-muted truncate">
            {supplier}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Card className="overflow-hidden hover:shadow-sm transition-shadow relative">
      {ranking && (
        <div className="absolute top-2 left-2 bg-orange-primary text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center z-10">
          {ranking}
        </div>
      )}
      {isLive && (
        <Badge className="absolute top-1 right-1 bg-red-500 text-white z-10 text-xs px-1">
          LIVE
        </Badge>
      )}
      <div className="block">
        <div className="aspect-square bg-gray-light">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-2">
          <h3 className="text-xs font-medium text-foreground line-clamp-2 mb-1">
            {title}
          </h3>
          <div className="text-sm font-bold text-foreground mb-1">
            {price}
          </div>
          {supplier && (
            <div className="flex items-center gap-1 mt-1">
              {isVerified && (
                <Badge variant="secondary" className="text-xs px-1 py-0">
                  Verified
                </Badge>
              )}
              <span className="text-xs text-text-muted truncate">{supplier}</span>
            </div>
          )}
        </div>
      </div>
      <div className="px-1 pb-2">
        <div className="flex gap-1">
          <Button size="sm" variant="outline" className="flex-1 text-xs h-6 px-2">
            Chat now
          </Button>
          <Button size="sm" variant="outline" className="flex-1 text-xs h-6 px-2">
            Contact Supplier
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;