import Header from "@/layouts/Header";
import ProductCard from "@/components/ProductCard";
import ProductSlider from "@/components/ProductSlider";
import RankedProductsSection from "@/components/RankedProducts";
import { useState } from "react";
import product1 from "@/assets/images/product1.jpg";
import product2 from "@/assets/images/product2.jpg";
import product3 from "@/assets/images/product3.jpg";
import product4 from "@/assets/images/product4.jpg";
import product5 from "@/assets/images/product5.jpg";
import product6 from "@/assets/images/product6.jpg";
import product7 from "@/assets/images/product7.jpeg";
import product8 from "@/assets/images/product8.jpeg";
import product9 from "@/assets/images/product9.jpeg";
import product10 from "@/assets/images/product10.jpeg";
import product11 from "@/assets/images/product11.jpeg";
import product12 from "@/assets/images/product12.jpeg";
import product13 from "@/assets/images/product13.jpeg";
import product14 from "@/assets/images/product14.jpeg";
import product15 from "@/assets/images/product15.jpeg";
import product16 from "@/assets/images/product16.jpeg";
import product17 from "@/assets/images/product17.jpeg";
import product18 from "@/assets/images/product18.jpeg";
import product19 from "@/assets/images/product19.jpeg";
import product20 from "@/assets/images/product20.jpeg";
import Footer from "@/layouts/Footer";
import HeroSection from "@/components/HeroSection";
import TopRanking from "./sections/TopRanking";
import NewArrivals from "./sections/NewArrivals";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  // const [showFilters, setShowFilters] = useState(false);
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
  },
  {
    id: 7,
    slug: "casual-loose-women-tracksuit-2piece",
    image: product7,
    title: "Casual Loose Women Tracksuit 2Piece...",
    price: "FCFA 6,229-7,...",
    supplier: "Urban Wear Ltd.",
    isVerified: true
  },
  {
    id: 8,
    slug: "fashion-ladies-office-blazer-pants",
    image: product8,
    title: "Fashion Ladies Office Blazer & Pants...",
    price: "FCFA 10,549-11,...",
    supplier: "Office Style Inc.",
    isVerified: true
  },
  {
    id: 9,
    slug: "crop-top-and-shorts-summer-sets",
    image: product9,
    title: "Crop Top and Shorts Summer Sets...",
    price: "FCFA 3,999-4,...",
    supplier: "Trendy Co.",
    isVerified: false
  },
  {
    id: 10,
    slug: "two-piece-knitwear-set-women",
    image: product10,
    title: "Two Piece Knitwear Set Women...",
    price: "FCFA 8,229-9,...",
    supplier: "Knits & Co.",
    isVerified: true
  },
  {
    id: 11,
    slug: "ladies-sportswear-yoga-2pcs",
    image: product11,
    title: "Ladies Sportswear Yoga 2Pcs Set...",
    price: "FCFA 5,449-6,...",
    supplier: "Activewear Pro.",
    isVerified: true
  },
  {
    id: 12,
    slug: "womens-casual-linen-shirt-and-pants",
    image: product12,
    title: "Women's Casual Linen Shirt & Pants...",
    price: "FCFA 7,899-8,...",
    supplier: "Linen Works Ltd.",
    isVerified: false
  },
  {
    id: 13,
    slug: "fashion-denim-jacket-and-jeans",
    image: product13,
    title: "Fashion Denim Jacket & Jeans Set...",
    price: "FCFA 11,199-12,...",
    supplier: "Denim World Ltd.",
    isVerified: true
  },
  {
    id: 14,
    slug: "party-wear-dress-sets-women",
    image: product14,
    title: "Party Wear Dress Sets for Women...",
    price: "FCFA 9,750-10,...",
    supplier: "Glamour Line Co.",
    isVerified: true
  },
  {
    id: 15,
    slug: "ladies-casual-sweatshirt-pants",
    image: product15,
    title: "Ladies Casual Sweatshirt & Pants...",
    price: "FCFA 4,899-5,...",
    supplier: "Comfort Wear Ltd.",
    isVerified: false
  },
  {
    id: 16,
    slug: "beachwear-two-piece-floral-set",
    image: product16,
    title: "Beachwear Two Piece Floral Set...",
    price: "FCFA 6,550-7,...",
    supplier: "Beach & Sun Ltd.",
    isVerified: true
  },
  {
    id: 17,
    slug: "autumn-coat-and-skirt-outfits",
    image: product17,
    title: "Autumn Coat and Skirt Outfits...",
    price: "FCFA 12,200-13,...",
    supplier: "Autumn Trends Inc.",
    isVerified: true
  },
  {
    id: 18,
    slug: "luxury-silk-sleepwear-women-2pcs",
    image: product18,
    title: "Luxury Silk Sleepwear Women 2Pcs...",
    price: "FCFA 15,399-16,...",
    supplier: "Silk Dreams Co.",
    isVerified: true
  },
  {
    id: 19,
    slug: "elegant-formal-suit-for-ladies",
    image: product19,
    title: "Elegant Formal Suit for Ladies...",
    price: "FCFA 13,799-14,...",
    supplier: "Formal Wear Ltd.",
    isVerified: true
  },
  {
    id: 20,
    slug: "trendy-summer-dress-sets-women",
    image: product20,
    title: "Trendy Summer Dress Sets Women...",
    price: "FCFA 5,699-6,...",
    supplier: "Trendy Line Ltd.",
    isVerified: false
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
                  <div key={product.id} onClick={() => navigate(`/product/${product.slug}`)}>
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
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer/>
    </div>
  );
};

export default Index;