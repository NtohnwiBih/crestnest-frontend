import Header from "@/layouts/Header";
import ProductCard from "@/components/ProductCard";
import ProductSlider from "@/components/ProductSlider";
import RankedProductsSection from "@/components/RankedProducts";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import product1 from "@/assets/images/product1.jpg";
import product2 from "@/assets/images/product2.jpg";
import product3 from "@/assets/images/product3.jpg";
import product4 from "@/assets/images/product4.jpg";
import product5 from "@/assets/images/product5.jpg";
import product6 from "@/assets/images/product6.jpg";
import Footer from "@/layouts/Footer";
import HeroSection from "@/components/HeroSection";
import TopRanking from "./sections/TopRanking";
import NewArrivals from "./sections/NewArrivals";

const Index = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [currentView, setCurrentView] = useState("main");

const products = [
    {
      id: 1,
      slug: "women-sets-fashion-two-piece-satin-sets",
      image: product1,
      title: "Women Sets Fashion Two Piece Satin Sets...",
      price: "FCFA 5,619-6,...",
      supplier: "Yiwu Ouze Clothing Co., Ltd.",
      isVerified: true
    },
    {
      id: 2,
      slug: "sport-fitness-backless-2piece-set-2022",
      image: product2,
      title: "2022 Sport Fitness Backless 2piece Set...",
      price: "FCFA 7,357-8,...",
      supplier: "Yiwu Ouze Clothing Co., Ltd.",
      isVerified: true
    },
    {
      id: 3,
      slug: "summer-outfits-women-t-shirt",
      image: product3,
      title: "Summer Outfits Women T Shirt and...",
      price: "FCFA 2,571-3,...",
      supplier: "Fashion Co., Ltd.",
      isVerified: true
    },
    {
      id: 4,
      slug: "ladies-short-sets-summer-solid-outfits",
      image: product4,
      title: "Ladies Short Sets Summer Solid Outfits...",
      price: "FCFA 4,145-4,...",
      supplier: "Style Corp.",
      isVerified: true
    },
    {
      id: 5,
      slug: "cotton-women-summer-biker-shorts",
      image: product5,
      title: "Cotton Women Summer Biker Shorts...",
      price: "FCFA 2,239-2,...",
      supplier: "Cotton Co.",
      isVerified: true
    },
    {
      id: 6,
      slug: "summer-two-piece-outfits-for-women",
      image: product6,
      title: "Summer Two Piece Outfits for Women...",
      price: "FCFA 4,044-4,...",
      supplier: "Summer Fashion Ltd.",
      isVerified: true
    }
  ];

  // Top deals with discounts
  const topDeals = [
    { ...products[0], id: 101, originalPrice: "FCFA 8,500", discount: "-34%" },
    { ...products[1], id: 102, originalPrice: "FCFA 11,200", discount: "-31%" },
    { ...products[2], id: 103, originalPrice: "FCFA 4,100", discount: "-37%" },
    { ...products[3], id: 104, originalPrice: "FCFA 6,800", discount: "-39%" },
    { ...products[4], id: 105, originalPrice: "FCFA 3,600", discount: "-38%" },
    { ...products[5], id: 106, originalPrice: "FCFA 6,500", discount: "-38%" },
    { ...products[0], id: 107, originalPrice: "FCFA 8,500", discount: "-34%" },
    { ...products[1], id: 108, originalPrice: "FCFA 11,200", discount: "-31%" },
    { ...products[2], id: 109, originalPrice: "FCFA 4,100", discount: "-37%" },
    { ...products[3], id: 110, originalPrice: "FCFA 6,800", discount: "-39%" }
  ];

  // Extended product data for sliders - top 10 products each
  const mostDemandedProducts = [
    ...products,
    ...products.map(p => ({ ...p, id: p.id + 10 })),
    ...products.slice(0, 4).map(p => ({ ...p, id: p.id + 20 }))
  ].slice(0, 10);
  
  const newestArrivals = [
    ...products.reverse(),
    ...products.map(p => ({ ...p, id: p.id + 30 })),
    ...products.slice(0, 4).map(p => ({ ...p, id: p.id + 40 }))
  ].slice(0, 10);

  if (currentView === "topRanking") {
    return <TopRanking/>;
  }

  if (currentView === "newArrivals") {
    return <NewArrivals/>;
  }

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
      
      <Header 
       onTopRankingClick={() => setCurrentView("topRanking")}
       onNewArrivalsClick={() => setCurrentView("newArrivals")}
      />
      
      <div className="flex">
        
        <main className="flex-1 p-4">
         {/* Homepage layout with sliders */}
          <div className="space-y-4">
            <HeroSection/>
            <div className="mb-4">
              <ProductSlider 
                title="Top Deals with Discounts" 
                subtitle="Limited time offers you can't miss"
                products={topDeals}
                itemsPerView={6}
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <RankedProductsSection 
                title="Top Ranking" 
                subtitle="Explore the most demanded & sold products"
                products={mostDemandedProducts}
              />
              <ProductSlider 
                title="Newest Arrivals" 
                subtitle="Stay ahead with the lastest offerings"
                products={newestArrivals}  />
            </div>
            
            <div className="mb-4">
              <h2 className="text-sm font-medium text-foreground mb-3">Mixed Categories</h2>
              <div className="grid grid-cols-6 gap-2">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    slug={product.slug}
                    image={product.image}
                    title={product.title}
                    price={product.price}
                    supplier={product.supplier}
                    isVerified={product.isVerified}
                    isLive={product.id === 6}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Button 
              onClick={() => setShowFilters(!showFilters)}
              variant="outline"
              className="text-xs"
            >
              {showFilters ? 'Back to Homepage' : 'Search Products'}
            </Button>
          </div>
        </main>
      </div>

      <Footer/>
    </div>
  );
};

export default Index;