import { useState } from "react";
import { Button } from "@/components/ui/button";
import product1 from "@/assets/images/product1.jpg";
import product2 from "@/assets/images/product2.jpg";
import product3 from "@/assets/images/product3.jpg";
import product4 from "@/assets/images/product4.jpg";
import product5 from "@/assets/images/product5.jpg";
import product6 from "@/assets/images/product6.jpg";
import ProductCard from "@/components/ProductCard";
import Header from "@/layouts/Header";
import Footer from "@/layouts/Footer";

const categories = [
  "All",
  "Beauty", 
  "Apparel & Accessories",
  "Construction & Real Estate",
  "Shoes & Accessories",
  "Home & Garden",
  "Furniture",
  "Consumer Electronics"
];

const subcategories = {
  "All": ["All", "Human Hair Wigs", "Women's Sets", "Casual Dresses", "Yoga Leggings", "Club Dresses", "Mouldings"],
  "Beauty": ["All", "Human Hair Wigs", "Hair Extensions", "Makeup", "Skincare", "Nail Art"],
  "Apparel & Accessories": ["All", "Women's Sets", "Casual Dresses", "Yoga Leggings", "Club Dresses", "Jewelry"],
  "Construction & Real Estate": ["All", "Mouldings", "Building Materials", "Hardware", "Tools"],
  "Shoes & Accessories": ["All", "Women's Shoes", "Men's Shoes", "Bags", "Belts"],
  "Home & Garden": ["All", "Home Decor", "Garden Tools", "Furniture", "Kitchen"],
  "Furniture": ["All", "Living Room", "Bedroom", "Office", "Outdoor"],
  "Consumer Electronics": ["All", "Phones", "Computers", "Audio", "Cameras"]
};

const mockProducts = [
  { 
    id: "1", 
    name: "Shipping S25 Ultra Phone", 
    slug: "shipping-s25-ultra-phone",
    price: "$15.20-39.60", 
    moq: "MOQ 3", 
    image: product1, 
    supplier: "ABC Tech", 
    rating: 4.8, 
    reviews: 1847 
  },
  { 
    id: "2", 
    name: "Best Selling Natural Human Hair Wigs", 
    slug: "best-selling-natural-human-hair-wigs",
    price: "$3.85", 
    moq: "MOQ 1", 
    image: product2, 
    supplier: "Hair Co", 
    rating: 4.9, 
    reviews: 700 
  },
  { 
    id: "3", 
    name: "Autumn Winter Women's Casual Sportswear Set", 
    slug: "autumn-winter-womens-casual-sportswear-set",
    price: "$14.16-40", 
    moq: "MOQ 30", 
    image: product3, 
    supplier: "Fashion Hub", 
    rating: 4.7, 
    reviews: 892 
  },
  { 
    id: "4", 
    name: "2025 Impact Shorts Women Fitness Sports", 
    slug: "2025-impact-shorts-women-fitness-sports",
    price: "$4.61-5.38", 
    moq: "MOQ 2", 
    image: product4, 
    supplier: "FitWear", 
    rating: 4.6, 
    reviews: 456 
  },
  { 
    id: "5", 
    name: "Modern Rosa Mural Wall Sticker", 
    slug: "modern-rosa-mural-wall-sticker",
    price: "$3.98-8.65", 
    moq: "MOQ 1", 
    image: product5, 
    supplier: "Decor Plus", 
    rating: 4.8, 
    reviews: 623 
  },
  { 
    id: "6", 
    name: "Wireless Curls Lace Wig", 
    slug: "wireless-curls-lace-wig",
    price: "$19.50-39.60", 
    moq: "MOQ 1", 
    image: product6, 
    supplier: "Hair Empire", 
    rating: 4.9, 
    reviews: 334 
  }
];

const NewArrivals = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSubcategory, setActiveSubcategory] = useState("All");

  const currentSubcategories = subcategories[activeCategory as keyof typeof subcategories] || subcategories["All"];

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
      {/* Header */}
      <div className="border-b border-border">
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-600">
            <div className="max-w-9xl mx-auto px-4 py-4">
                {/* New Arrivals Banner */}
                <div className="text-white p-6 rounded-lg mb-6">
                    <h1 className="text-2xl font-bold mb-2">New Arrivals</h1>
                    <p className="text-emerald-100">Stay ahead with the latest offerings</p>
                </div>
            </div>
        </div>
      </div>

      {/* Low-MOQ Trials Section */}
      <div className="max-w-9xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Low-MOQ trials</h2>
            <p className="text-sm text-muted-foreground">Stay ahead with the latest offerings</p>
          </div>
          <Button variant="ghost" className="text-orange-primary hover:text-orange-primary/80">
            View more →
          </Button>
        </div>

        {/* Featured Products Carousel */}
        <div className="grid grid-cols-5 gap-4 mb-8">
          {mockProducts.slice(0, 5).map((product) => (
            <ProductCard 
              key={product.id} 
              slug={product.slug}
              image={product.image}
              title={product.name}
              price={product.price}
              supplier={product.supplier}
              isVerified={true}
            />
          ))}
        </div>
      </div>

      {/* Category Tabs */}
      <div className="max-w-9xl mx-auto px-4">
        <div className="border-b border-border mb-6">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setActiveSubcategory("All");
                }}
                className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeCategory === category
                    ? "border-orange-primary text-orange-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Subcategory Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {currentSubcategories.map((subcategory) => (
            <button
              key={subcategory}
              onClick={() => setActiveSubcategory(subcategory)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeSubcategory === subcategory
                  ? "bg-teal-primary text-white"
                  : "bg-gray-100 text-muted-foreground hover:bg-gray-200 hover:text-foreground"
              }`}
            >
              {subcategory}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-6 gap-4 pb-8">
          {mockProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              slug={product.slug}
              image={product.image}
              title={product.name}
              price={product.price}
              supplier={product.supplier}
              isVerified={true}
            />
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default NewArrivals;