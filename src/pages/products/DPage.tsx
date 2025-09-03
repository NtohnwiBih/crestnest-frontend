import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Shield, Truck, ChevronRight } from "lucide-react";

interface ProductVariation {
  type: string;
  options: Array<{
    value: string;
    available: boolean;
    color?: string;
  }>;
}

interface CustomizationOption {
  title: string;
  description: string;
  verified?: boolean;
}

interface ProductDetails {
  id: string;
  title: string;
  images: string[];
  priceRange: {
    min: number;
    max: number;
    currency: string;
  };
  samplePrice: {
    price: number;
    currency: string;
  };
  variations: ProductVariation[];
  customizationOptions: CustomizationOption[];
  supplier: {
    name: string;
    verified: boolean;
    customizationAbility: string;
  };
  shipping: {
    description: string;
    additionalInfo: string;
  };
  protection: {
    title: string;
    description: string;
  };
  attributes: Array<{
    key: string;
    value: string;
  }>;
  recommendations: Array<{
    id: string;
    image: string;
    title: string;
    price: string;
  }>;
}

interface ProductDetailsPageProps {
  product: ProductDetails;
}

const DPage = ({ product }: ProductDetailsPageProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariations, setSelectedVariations] = useState<Record<string, string>>({});
  const [selectedCustomizations, setSelectedCustomizations] = useState<Set<number>>(new Set());

  const handleVariationSelect = (type: string, value: string) => {
    setSelectedVariations(prev => ({
      ...prev,
      [type]: value
    }));
  };

  const handleCustomizationToggle = (index: number) => {
    setSelectedCustomizations(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-8xl mx-auto px-8 pb-8">
        <div className="grid grid-cols-3 gap-8 my-4">
          <div className="col-span-2">
            {/* Left side - Product Images */}
            <div className="mb-8">
              <div className="flex gap-4 h-[600px]">
                <div className="flex flex-col space-y-2 overflow-y-auto w-24 flex-shrink-0">
                  {product.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`w-20 h-20 flex-shrink-0 border-2 cursor-pointer overflow-hidden rounded-lg ${
                        selectedImage === index ? 'border-orange-500' : 'border-gray-300'
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

                <Card className="overflow-hidden flex-1 h-full">
                  <div className="w-full h-full bg-gray-100">
                    <img 
                      src={product.images[selectedImage]} 
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>

             {/* Other Recommendations */}
            <div className="mb-6">
                <h2 className="text-base font-medium text-foreground mb-3">Other recommendations for your business</h2>
                <div className="flex gap-3 overflow-x-auto pb-2">
                {product.recommendations.map((item) => (
                    <Card key={item.id} className="w-32 flex-shrink-0 overflow-hidden hover:shadow-sm transition-shadow cursor-pointer">
                    <div className="aspect-square bg-gray-light">
                        <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-2">
                        <h4 className="text-xs font-medium text-foreground line-clamp-2 mb-1">
                        {item.title}
                        </h4>
                        <p className="text-sm font-bold text-orange-primary">
                        {item.price}
                        </p>
                    </div>
                    </Card>
                ))}
                </div>
            </div>

            {/* Tabs Section */}
            <Tabs defaultValue="attributes" className="mb-6">
                <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="attributes">Attributes</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="supplier">Supplier</TabsTrigger>
                <TabsTrigger value="description">Description</TabsTrigger>
                </TabsList>
                
                <TabsContent value="attributes" className="mt-4">
                <div>
                    <h3 className="text-base font-medium text-foreground mb-3">Key attributes</h3>
                    <Card className="overflow-hidden">
                    <div className="divide-y divide-gray-border">
                        {product.attributes.map((attr, index) => (
                        <div key={index} className="flex py-2 px-4">
                            <div className="w-32 text-sm text-text-muted">{attr.key}</div>
                            <div className="flex-1 text-sm font-medium text-foreground">{attr.value}</div>
                        </div>
                        ))}
                    </div>
                    </Card>
                </div>
                
                {/* Lead Time */}
                <div className="mt-6">
                    <h3 className="text-base font-medium text-foreground mb-3">Lead time</h3>
                    <Card className="p-4">
                    <p className="text-sm text-foreground">7-15 days for sample production</p>
                    <p className="text-sm text-text-muted">15-30 days for mass production</p>
                    </Card>
                </div>

                {/* Customization Options Details */}
                <div className="mt-6">
                    <h3 className="text-base font-medium text-foreground mb-3">Customization options</h3>
                    <Card className="p-4 space-y-3">
                    <div>
                        <h4 className="text-sm font-medium text-foreground">Customized logo</h4>
                        <p className="text-sm text-text-muted">Min. order: 1,000 pieces</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-foreground">Customized packaging</h4>
                        <p className="text-sm text-text-muted">Min. order: 1,000 pieces</p>
                    </div>
                    <div>
                        <h4 className="text-sm font-medium text-foreground">Graphic customization</h4>
                        <p className="text-sm text-text-muted">Min. order: 1,000 pieces</p>
                    </div>
                    </Card>
                </div>
                </TabsContent>
                
                <TabsContent value="reviews">
                <div className="text-center py-8 text-text-muted">
                    No reviews available for this product.
                </div>
                </TabsContent>
                
                <TabsContent value="supplier">
                <Card className="p-4">
                    <h3 className="font-medium text-foreground mb-2">{product.supplier.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                    {product.supplier.verified && (
                        <>
                        <Shield className="w-4 h-4 text-success" />
                        <span className="text-sm text-success">Verified Supplier</span>
                        </>
                    )}
                    </div>
                    <p className="text-sm text-text-muted">
                    Customization ability: {product.supplier.customizationAbility}
                    </p>
                </Card>
                </TabsContent>
                
                <TabsContent value="description">
                <Card className="p-4">
                    <p className="text-sm text-foreground">
                    High-quality {product.title.toLowerCase()} with premium materials and excellent craftsmanship. 
                    Perfect for wholesale and custom orders.
                    </p>
                </Card>
                </TabsContent>
            </Tabs>
          </div>

          {/* Right side - Product Details */}
          <div className="col-span-1">
            <div className="space-y-4 border rounded-lg p-4 bg-white">
              <div>
                <h1 className="text-lg font-medium text-gray-900 mb-3">
                  {product.title}
                </h1>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl font-bold text-orange-500">
                    {product.priceRange.currency}{product.priceRange.min.toFixed(2)}
                  </span>
                  <span className="text-orange-500">-</span>
                  <span className="text-xl font-bold text-orange-500">
                    {product.priceRange.currency}{product.priceRange.max.toFixed(2)}
                  </span>
                </div>
                
                <div className="flex items-center gap-2 text-sm mb-3">
                  <span className="text-gray-600">Sample price:</span>
                  <span className="font-medium text-orange-500">
                    {product.samplePrice.currency}{product.samplePrice.price.toFixed(2)}
                  </span>
                  <Button variant="link" className="h-auto p-0 text-xs text-orange-500">
                    Get sample
                  </Button>
                </div>
              </div>

              {/* Variations */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 text-sm">Variations</h3>
                  <Button variant="link" className="h-auto p-0 text-xs text-orange-500">
                    Select all
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {product.variations.map((variation) => (
                    <div key={variation.type}>
                      <div className="text-sm text-gray-900 mb-2">
                        {variation.type}: <span className="text-gray-600">{selectedVariations[variation.type] || 'Select'}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        {variation.options.map((option) => (
                          <Button
                            key={option.value}
                            variant={selectedVariations[variation.type] === option.value ? "default" : "outline"}
                            size="sm"
                            className={`h-8 px-2 text-xs ${
                              selectedVariations[variation.type] === option.value 
                                ? "bg-orange-500 border-orange-500 text-white" 
                                : "border-gray-300 text-gray-700 hover:bg-gray-50"
                            } ${!option.available ? "opacity-50" : ""}`}
                            disabled={!option.available}
                            onClick={() => handleVariationSelect(variation.type, option.value)}
                          >
                            {option.color && (
                              <div 
                                className="w-3 h-3 rounded-full mr-1 border border-gray-300"
                                style={{ backgroundColor: option.color }}
                              />
                            )}
                            {option.value}
                          </Button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customization Options */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 text-sm">Customization options</h3>
                  <Button variant="link" className="h-auto p-0 text-xs text-orange-500">
                    Select all
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {product.customizationOptions.map((option, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Checkbox 
                        checked={selectedCustomizations.has(index)}
                        onCheckedChange={() => handleCustomizationToggle(index)}
                        className="mt-0.5"
                      />
                      <div className="text-sm">
                        <span className="text-gray-900">{option.title}</span>
                        {option.description && (
                          <span className="text-gray-600 ml-1">({option.description})</span>
                        )}
                        {option.verified && (
                          <Badge className="ml-1 bg-green-500 text-white text-xs px-1 py-0">
                            verified
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supplier Info */}
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-2">Supplier's customization ability</h3>
                <div className="flex items-center gap-1">
                  <Shield className="w-3 h-3 text-green-500" />
                  <span className="text-xs text-gray-900">{product.supplier.customizationAbility}</span>
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h3 className="font-medium text-gray-900 text-sm mb-1 flex items-center gap-1">
                  <Truck className="w-3 h-3" />
                  Shipping
                </h3>
                <p className="text-xs text-gray-900">{product.shipping.description}</p>
                <p className="text-xs text-gray-600">{product.shipping.additionalInfo}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                <Button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white text-sm h-8">
                  Add to cart
                </Button>
                <Button variant="outline" className="flex-1 border-orange-500 text-orange-500 hover:bg-orange-50 text-sm h-8">
                  Chat now
                </Button>
              </div>

              {/* Protection */}
              <Card className="p-3 bg-orange-50 border-orange-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-orange-500" />
                    <div>
                      <h4 className="font-medium text-gray-900 text-sm">{product.protection.title}</h4>
                      <p className="text-xs text-gray-600">{product.protection.description}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DPage;