import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

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

interface ProductSliderProps {
  title: string;
  subtitle: string;
  products: Product[];
  itemsPerView?: number;
}

const ProductSlider = ({ title, subtitle, products, itemsPerView = 3 }: ProductSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex > products.length - itemsPerView ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      return prev === 0 ? products.length - itemsPerView : prev - 1;
    });
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isHovered]);

  return (
    <div 
      className="bg-gray-100 rounded-sm relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between p-2">
         <h3 className="text-sm font-medium text-foreground">{title}</h3>
         <p className="text-xs text-muted-foreground">{subtitle}</p>
      </div>
      
      <div className="p-2 relative">
        {/* Navigation buttons - only visible on hover */}
        <Button 
          variant="outline" 
          size="sm" 
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-md"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-white shadow-md"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Horizontal card display */}
        <div className="flex gap-4 px-2">
          {visibleProducts.map((product) => (
            <div key={product.id} className="flex-1 bg-gray-50 rounded-sm p-2 hover:shadow-sm transition-shadow cursor-pointer">
              <div className="aspect-square mb-2">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover rounded-sm"
                />
              </div>
              <div>
                <h4 className="text-xs font-medium text-foreground line-clamp-2 mb-1">
                  {product.title}
                </h4>
                <div className="mb-1">
                  <p className="text-sm font-bold text-orange-primary">
                    {product.price}
                  </p>
                  {product.originalPrice && (
                    <div className="flex items-center gap-1 mt-1">
                      <span className="text-xs text-text-muted line-through">{product.originalPrice}</span>
                      {product.discount && (
                        <span className="text-xs bg-red-500 text-white px-1 rounded">{product.discount}</span>
                      )}
                    </div>
                  )}
                </div>
                <p className="text-xs text-text-muted truncate">
                  {product.supplier}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;