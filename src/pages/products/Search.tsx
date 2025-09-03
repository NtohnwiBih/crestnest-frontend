import { useState } from "react";
import {
  List,
  ChevronDown,
  LayoutGrid
} from "lucide-react";
import { Button } from "@/components/ui/button";
import tshirtImage from "@/assets/images/tshirt-1.jpg";
import blouseImage from "@/assets/images/blouse-1.jpg";
import dressImage from "@/assets/images/dress-1.jpg";
import sportsBraImage from "@/assets/images/sportsbra-1.jpg";
import Header from "@/layouts/Header";
import ProductNavigation from "@/components/ProductNavigation";
import FilterSidebar from "@/components/FilterSidebar";
import SupplierProfile from "@/components/SupplierProfile";
import ProductCard from "@/components/ProductCard";
import Footer from "@/layouts/Footer";

// Mock product data
const products = [
  {
    id: 1,
    name: "2024 Heavy Cotton 50% Polyester T Shirt",
    slug: "2024-heavy-cotton-50-polyester-t-shirt",
    image: tshirtImage,
    price: "$3.60-4",
    minOrder: "50 pieces",
    supplier: "Suzhou Richmond...",
    verified: true,
    years: "4 years",
    rating: 4.5,
    orders: 124,
    isFactory: true,
    countryFlag: "🇨🇳"
  },
  {
    id: 2,
    name: "Cheap 30% Cotton 50% Polyester Print T Neck",
    slug: "cheap-30-cotton-50-polyester-print-t-neck",
    image: blouseImage,
    price: "$0.99-1.70",
    minOrder: "100 pieces",
    supplier: "Jiangsu Direct Fashion Co. Ltd",
    verified: true,
    years: "2 years",
    rating: 4.8,
    orders: 89,
    isFactory: false,
    countryFlag: "🇨🇳"
  },
  {
    id: 3,
    name: "100% Cotton 210 Gsm 4 Viscose Fiber T Shirts",
    slug: "100-cotton-210-gsm-4-viscose-fiber-t-shirts",
    image: dressImage,
    price: "$2.70-3.90",
    minOrder: "20 pieces",
    supplier: "Wuxi Tianyuanyuan International...",
    verified: true,
    years: "6 years",
    rating: 4.2,
    orders: 234,
    isFactory: true,
    countryFlag: "🇨🇳"
  },
  {
    id: 4,
    name: "Wholesale Custom Print Sleeves T Shirt",
    slug: "wholesale-custom-print-sleeves-t-shirt",
    image: sportsBraImage,
    price: "$1.48-2.50",
    minOrder: "50 pieces",
    supplier: "Suzhou OVERLAY Import & Export...",
    verified: false,
    years: "1 year",
    rating: 4.0,
    orders: 45,
    isFactory: false,
    countryFlag: "🇨🇳"
  },
  {
    id: 5,
    name: "Factory Direct Custom 100% Polyester",
    slug: "factory-direct-custom-100-polyester",
    image: tshirtImage,
    price: "$6.10-7.20",
    minOrder: "30 pieces",
    supplier: "Guangzhou Garment Co.",
    verified: true,
    years: "8 years",
    rating: 4.7,
    orders: 456,
    isFactory: true,
    countryFlag: "🇨🇳"
  },
  {
    id: 6,
    name: "Printed Women's Ladies Summer Women T Shirt",
    slug: "printed-womens-ladies-summer-women-t-shirt",
    image: blouseImage,
    price: "$1.70-2.10",
    minOrder: "100 pieces",
    supplier: "Jiangxi Direct Fashion Co. Ltd",
    verified: true,
    years: "5 years",
    rating: 4.6,
    orders: 178,
    isFactory: false,
    countryFlag: "🇨🇳"
  }
];

const Search = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

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

      <ProductNavigation />
      <div className="flex">
        <FilterSidebar />

        <main className="flex-1 px-4">
          <div>
            <SupplierProfile />

            <div className="flex items-center justify-between mb-4">
                <p className="text-xs text-text-muted">
                  Showing 100,000+ products from global suppliers for "women's clothing"
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-2 text-xs text-text-muted">
                    <span className="text-sm">Sort by</span>
                    <Button variant="outline" size="sm">
                        Relevance <ChevronDown className="h-3 w-3 ml-1" />
                    </Button>
                  </div>

                  <div className="flex border border-border rounded">
                    <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <LayoutGrid className="h-4 w-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="h-4 w-4" />
                  </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                    {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        slug={product.slug}
                        image={product.image}
                        title={product.name}
                        price={product.price}
                        supplier={product.supplier}
                        isVerified={product.verified}
                        isLive={product.id === 6}
                    />
                    ))}
                </div>
            </div>
        </main>
      </div>
      <Footer/>
    </div>
  );
};

export default Search;