import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ChevronRight, ChevronDown} from "lucide-react";
import product1 from "@/assets/images/product1.jpg";
import product2 from "@/assets/images/product2.jpg";
import product3 from "@/assets/images/product3.jpg";
import product4 from "@/assets/images/product4.jpg";
import product5 from "@/assets/images/product5.jpg";
import product6 from "@/assets/images/product6.jpg";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

interface Category {
  id: string;
  name: string;
  subcategories?: Category[];
}

const categories: Category[] = [
  {
    id: "beauty",
    name: "Beauty",
    subcategories: [
      {
        id: "hair-extensions",
        name: "Hair Extensions & Wigs",
        subcategories: [
          { id: "human-hair-wigs", name: "Human Hair Wigs" },
          { id: "human-hair-extensions", name: "Human Hair Extensions" },
          { id: "human-hair-extensions-light", name: "Human Hair Extensions (light color)" },
          { id: "wigs", name: "Wigs" },
          { id: "braiding-hair", name: "Braiding Hair" },
          { id: "toupee", name: "Toupee" },
          { id: "braiding-hair-bulk", name: "Braiding Hair" },
          { id: "blend-hair", name: "Blend Hair" }
        ]
      },
      {
        id: "womens-clothing",
        name: "Women's Clothing",
        subcategories: [
          { id: "sportswear", name: "Sportswear" },
          { id: "mouldings", name: "Mouldings" },
          { id: "underwear-sleepwear", name: "Underwear & Sleepwear" },
          { id: "womens-shoes", name: "Women's Shoes" },
          { id: "home-textiles", name: "Home Textiles" },
          { id: "aesthetic-medicine", name: "Aesthetic medicine" }
        ]
      }
    ]
  },
  {
    id: "apparel",
    name: "Apparel & Accessories",
    subcategories: [
      { id: "womens-apparel", name: "Women's Apparel" },
      { id: "mens-apparel", name: "Men's Apparel" },
      { id: "accessories", name: "Accessories" }
    ]
  },
  {
    id: "construction",
    name: "Construction & Real Estate"
  },
  {
    id: "shoes",
    name: "Shoes & Accessories"
  },
  {
    id: "home-garden",
    name: "Home & Garden"
  },
  {
    id: "furniture",
    name: "Furniture"
  },
  {
    id: "consumer-electronics",
    name: "Consumer Electronics"
  },
  {
    id: "personal-care",
    name: "Personal Care & Household Cleaning"
  }
];

const rankingTypes = [
  { id: "global", name: "Global rankings" },
  { id: "us", name: "US rankings" },
  { id: "europe", name: "Europe rankings" }
];

const topRankingProducts = [
  {
    id: 1,
    image: product1,
    title: "Raw Burmese Curly Human Hair Wig Wholesale HD Lace...",
    price: "US$14.80-26.90",
    supplier: "Wholesale HD Lace Co.",
    isVerified: true,
    ranking: 1,
    minOrder: "1 piece",
    hotSelling: "score:4.7",
    topDays: "1 days in top 1"
  },
  {
    id: 2,
    image: product2,
    title: "KBL Pre Pluck hd Lace Wig Human Hair Lace Wig...",
    price: "US$10.0",
    supplier: "KBL Hair Co.",
    isVerified: true,
    ranking: 2,
    minOrder: "10 sets",
    hotSelling: "score:4.7",
    topDays: "1 days in top 3"
  },
  {
    id: 3,
    image: product3,
    title: "Brazilian Full Lace human Hair Wig for Black Women...",
    price: "US$10.0",
    supplier: "Brazilian Hair Ltd.",
    isVerified: true,
    ranking: 3,
    minOrder: "10 sets",
    hotSelling: "score:4.6",
    topDays: "1 days in top 3"
  },
  {
    id: 4,
    image: product4,
    title: "Raw Indian Hair HD Lace Front Wig Virgin Cuticle Aligned...",
    price: "US$78.0-81.90",
    supplier: "Indian Hair Co.",
    isVerified: true,
    ranking: 4,
    minOrder: "1 piece",
    hotSelling: "score:4.6",
    topDays: "1 days in top 20"
  },
  {
    id: 5,
    image: product5,
    title: "Raw Indian Natural Glueless human Hair Wig Human Hair Lace...",
    price: "US$18-35",
    supplier: "Natural Hair Corp.",
    isVerified: true,
    ranking: 5,
    minOrder: "1 piece",
    hotSelling: "score:4.6",
    topDays: "1 days in top 20"
  },
  {
    id: 6,
    image: product6,
    title: "Cheap Price Hot Sale 5one Straight Bob Wig Brazilian Human...",
    price: "US$13.78-52.50",
    supplier: "Brazilian Bob Co.",
    isVerified: true,
    ranking: 6,
    minOrder: "1 piece",
    hotSelling: "score:4.5",
    topDays: "1 days in top 20"
  }
];

const categoryTabs = [
  "All",
  "Beauty", 
  "Apparel & Accessories",
  "Construction & Real Estate",
  "Shoes & Accessories",
  "Home & Garden",
  "Furniture",
  "Consumer Electronics"
];

const subcategorySections = [
  {
    title: "Walking Style Shoes",
    products: topRankingProducts.slice(0, 3)
  },
  {
    title: "Women's T-Shirts", 
    products: topRankingProducts.slice(1, 4)
  },
  {
    title: "Women's Suit Sets",
    products: topRankingProducts.slice(2, 5)
  },
  {
    title: "Wall Panels & Boards",
    products: topRankingProducts.slice(0, 3)
  },
  {
    title: "Bag Making Machines",
    products: topRankingProducts.slice(1, 4)
  },
  {
    title: "Women's Wool & Blends",
    products: topRankingProducts.slice(2, 5)
  }
];

const TopRanking = () => {
  const [selectedRanking, setSelectedRanking] = useState("global");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [selectedFinalCategory, setSelectedFinalCategory] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedSubcategory, setExpandedSubcategory] = useState<string | null>(null);
  const [isDefaultView, setIsDefaultView] = useState(true);
  const [activeTab, setActiveTab] = useState("All");

  const handleApply = () => {
    setShowCategoryDropdown(false);
    setIsDefaultView(false);
    // Filter products based on selected category
  };

  const handleBack = () => {
    if (expandedSubcategory) {
      setExpandedSubcategory(null);
      setSelectedFinalCategory("");
    } else if (expandedCategory) {
      setExpandedCategory(null);
      setSelectedSubcategory("");
    }
  };

  const selectedCategoryData = categories.find(c => c.id === selectedCategory);
  const selectedSubcategoryData = selectedCategoryData?.subcategories?.find(s => s.id === selectedSubcategory);

  return (
    <div className="min-h-screen bg-background" style={{ transform: 'scale(var(--scale-factor, 1))', transformOrigin: 'top left', width: 'calc(100% / var(--scale-factor, 1))', height: 'calc(100% / var(--scale-factor, 1))' }}>
      <style>{`
        :root {
          --scale-factor: 1;
        }
        @media (max-width: 1400px) {
          :root {
            --scale-factor: 0.9;
          }
        }
        @media (max-width: 1200px) {
          :root {
            --scale-factor: 0.8;
          }
        }
        @media (max-width: 1000px) {
          :root {
            --scale-factor: 0.7;
          }
        }
        @media (max-width: 800px) {
          :root {
            --scale-factor: 0.6;
          }
        }
        @media (max-width: 600px) {
          :root {
            --scale-factor: 0.5;
          }
        }
        @media (max-width: 400px) {
          :root {
            --scale-factor: 0.4;
          }
        }
      `}</style>
      <Header />
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4">
          
          <h1 className="text-3xl font-bold text-center mb-8">Top ranking</h1>
          
          {/* Ranking Type and Category Selectors */}
          <div className="flex items-center justify-center gap-4 mb-6">
            {/* Global Rankings Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setSelectedRanking(selectedRanking === "global" ? "us" : "global")}
                className="flex items-center gap-2"
              >
                {rankingTypes.find(r => r.id === selectedRanking)?.name}
                <ChevronDown className="h-4 w-4" />
              </Button>
              
            </div>

            {/* All Categories Dropdown */}
            <div className="relative">
              <Button
                variant="outline"
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                className="flex items-center gap-2"
              >
                All categories
                <ChevronDown className="h-4 w-4" />
              </Button>
              
              {/* Categories Dropdown */}
              {showCategoryDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 w-80">
                  {/* Header */}
                  <div className="p-4 border-b">
                    <div className="flex items-center justify-between gap-2">
                      {(expandedCategory || expandedSubcategory) && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={handleBack}
                          className="p-1"
                        >
                          Back
                        </Button>
                      )}
                      <span className="font-medium">
                        {expandedSubcategory ? "All " + selectedSubcategoryData?.name :
                         expandedCategory ? "All " + selectedCategoryData?.name :
                         "All categories (Full ranking list)"}
                      </span>
                    </div>
                  </div>

                  {/* Categories List */}
                  <div className="max-h-80 overflow-y-auto">
                    {!expandedCategory ? (
                      // Main categories
                      <RadioGroup value={selectedCategory} onValueChange={setSelectedCategory} className="p-2">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                            <div className="flex items-center space-x-2 flex-1">
                              <RadioGroupItem value={category.id} id={category.id} />
                              <Label htmlFor={category.id} className="text-sm flex-1">{category.name}</Label>
                            </div>
                            {category.subcategories && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setExpandedCategory(category.id)}
                                className="p-1"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </RadioGroup>
                    ) : !expandedSubcategory ? (
                      // Subcategories
                      <RadioGroup value={selectedSubcategory} onValueChange={setSelectedSubcategory} className="p-2">
                        {selectedCategoryData?.subcategories?.map((subcategory) => (
                          <div key={subcategory.id} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                            <div className="flex items-center space-x-2 flex-1">
                              <RadioGroupItem value={subcategory.id} id={subcategory.id} />
                              <Label htmlFor={subcategory.id} className="text-sm flex-1">{subcategory.name}</Label>
                            </div>
                            {subcategory.subcategories && (
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => setExpandedSubcategory(subcategory.id)}
                                className="p-1"
                              >
                                <ChevronRight className="h-4 w-4" />
                              </Button>
                            )}
                          </div>
                        ))}
                      </RadioGroup>
                    ) : (
                      // Final level categories
                      <RadioGroup value={selectedFinalCategory} onValueChange={setSelectedFinalCategory} className="p-2">
                        {selectedSubcategoryData?.subcategories?.map((finalCategory) => (
                          <div key={finalCategory.id} className="flex items-center space-x-2 p-2 hover:bg-gray-50 rounded">
                            <RadioGroupItem value={finalCategory.id} id={finalCategory.id} />
                            <Label htmlFor={finalCategory.id} className="text-sm">{finalCategory.name}</Label>
                          </div>
                        ))}
                      </RadioGroup>
                    )}
                  </div>

                  {/* Apply Button */}
                  <div className="p-4 border-t">
                    <Button onClick={handleApply} className="w-full bg-orange-primary hover:bg-orange-hover">
                      Apply
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="border-b bg-white">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center gap-6 overflow-x-auto py-4">
            {categoryTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-sm whitespace-nowrap pb-2 border-b-2 transition-colors ${
                  activeTab === tab 
                    ? 'border-orange-primary text-orange-primary font-medium' 
                    : 'border-transparent text-gray-600 hover:text-orange-primary'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center gap-3 py-3">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-full text-sm">
              Hot selling
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-orange-primary">
              Most popular
            </button>
            <button className="px-4 py-2 border border-gray-300 rounded-full text-sm hover:border-orange-primary">
              Best reviewed
            </button>
          </div>
        </div>
      </div>

      {/* Results Header */}
      <div className="bg-white">
        <div className="max-w-8xl mx-auto px-4 py-4">
          <p className="text-sm text-gray-600">Ranked by orders in the past 90 days</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-9xl mx-auto px-4 py-6">
        {isDefaultView ? (
          /* Default View - Subcategory Sections */
          <div className="space-y-8">
            <div className="grid grid-cols-3 gap-4">
                {subcategorySections.map((section) => (
                <div key={section.title} className="space-y-4 bg-gray-100 p-2 rounded-sm">
                    <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                    <div className="grid grid-cols-3 gap-2">
                    {section.products.map((product, index) => (
                        <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                            <div className="relative">
                                <img 
                                src={product.image} 
                                alt={product.title}
                                className="w-full h-28 object-cover"
                                />
                                <div className="absolute top-2 left-2 bg-orange-primary text-white text-xs px-2 py-1 rounded font-bold">
                                #{index + 1}
                                </div>
                                {index === 0 && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                                    NEW
                                </div>
                                )}
                            </div>
                            
                            <div className="p-3">
                                <p className="text-lg font-bold text-gray-900 mb-1">
                                    {product.price.length > 10 ? `${product.price.substring(0, 10).trim()}...` : product.price}
                                </p>
                                <p className="text-xs text-gray-600 mb-2">Min. order: {product.minOrder}</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
                ))}
            </div>
          </div>
        ) : (
          /* Filtered View - Single Grid */
          <div>
            <div className="grid grid-cols-5 gap-4">
              {topRankingProducts.map((product) => (
                <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-orange-primary text-white text-xs px-2 py-1 rounded font-bold">
                      #{product.ranking}
                    </div>
                    {product.ranking <= 3 && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded font-bold">
                        NEW
                      </div>
                    )}
                  </div>
                  
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 line-clamp-2">
                      {product.title}
                    </h3>
                    <p className="text-lg font-bold text-gray-900 mb-1">
                     {product.price.length > 15 ? `${product.price.substring(0, 15).trim()}...` : product.price}
                    </p>
                    <p className="text-xs text-gray-600 mb-2">Min. order: {product.minOrder}</p>
                    <p className="text-xs text-gray-600 mb-2">{product.hotSelling}</p>
                    <p className="text-xs text-gray-600 mb-3">{product.topDays}</p>
                    <p className="text-xs text-gray-600">{product.supplier}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <Button variant="outline" className="flex items-center gap-2">
                View more
                <ChevronDown className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default TopRanking;