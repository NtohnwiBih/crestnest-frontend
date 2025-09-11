import { Button } from "@/components/ui/button";
import { Card } from "./ui/card";

interface Product {
  id: number;
  image: string;
  title: string;
  price: string;
  supplier: string;
  isVerified: boolean;
  originalPrice?: string;
  discount?: string;
}

interface RankedProductsSectionProps {
  title: string;
  subtitle: string;
  products: Product[];
}

const RankedProductsSection = ({ title, subtitle, products }: RankedProductsSectionProps) => {
  return (
    <div className="border bg-card text-card-foreground rounded-sm">
      <div className="flex items-center justify-between px-4 py-2">
        <div>
          <h2 className="text-sm font-semibold text-foreground">{title}</h2>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>

        <Button variant="outline" size="sm" className="text-xs h-6 px-2">
          View More
        </Button>
      </div>
      
      <div className="px-4">
        <div className="flex gap-4">
          {products.slice(0, 3).map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-sm transition-shadow">
              <div className="relative">
                <div className="aspect-square bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 min-w-0 p-2">
                <h4 className="text-xs font-medium text-foreground truncate leading-tight">
                  {product.supplier}
                </h4>
                <p className="text-xs text-orange-primary font-medium mt-1">
                  {product.title}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankedProductsSection;