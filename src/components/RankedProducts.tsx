import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";
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
    <div className="bg-gray-100 rounded-sm">
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
          {products.slice(0, 3).map((product, index) => (
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
              {/* <ProductCard
                image={product.image}
                title={product.title}
                price={product.price}
                supplier={product.supplier}
                isVerified={product.isVerified}
                ranking={index + 1}
              /> */}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankedProductsSection;