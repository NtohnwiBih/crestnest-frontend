import Header from "@/layouts/Header";
import DPage from "./DPage";
import Footer from "@/layouts/Footer";


// Sample product data
const sampleProduct = {
  id: "1",
  title: "Factory Directly Cotton Feeling 3D Printing Custom 100% Polyester Women Plus Size Blank Sublimation Bleached Men's T-shirts",
  images: [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1622445275576-721325763efe?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=400&h=400&fit=crop"
  ],
  priceRange: {
    min: 7.20,
    max: 8.10,
    currency: "US$"
  },
  samplePrice: {
    price: 8.00,
    currency: "US$"
  },
  variations: [
    {
      type: "Color",
      options: [
        { value: "Royal", available: true, color: "#1e40af" },
        { value: "Navy", available: true, color: "#1e3a8a" },
        { value: "Black", available: true, color: "#000000" },
        { value: "White", available: true, color: "#ffffff" },
        { value: "Red", available: false, color: "#dc2626" }
      ]
    },
    {
      type: "Size",
      options: [
        { value: "S", available: true },
        { value: "M", available: true },
        { value: "L", available: true },
        { value: "XL", available: true },
        { value: "2XL", available: true },
        { value: "3XL", available: true }
      ]
    }
  ],
  customizationOptions: [
    { title: "Customized logo", description: "Min. order: 1,000 pieces", verified: true },
    { title: "Customized packaging", description: "Min. order: 500 pieces" },
    { title: "Graphic customization", description: "Min. order: 1,000 pieces" }
  ],
  supplier: {
    name: "Alibaba Verified Supplier",
    verified: true,
    customizationAbility: "Customized logo (Min. order: 1,000 pieces)"
  },
  shipping: {
    description: "Usually ships in 7-15 days after payment",
    additionalInfo: "Shipping fee to be negotiated. Chat with supplier now for more details."
  },
  protection: {
    title: "Trade Assurance",
    description: "Every payment you make on Alibaba.com is secured with strict SSL encryption and PCI DSS data protection protocols"
  },
  attributes: [
    { key: "Material", value: "100% Cotton" },
    { key: "Technics", value: "Knitted" },
    { key: "Feature", value: "Anti-Wrinkle, Anti-Shrink" },
    { key: "Supply Type", value: "OEM Service" },
    { key: "Fabric Type", value: "Knitted" },
    { key: "Sleeve Style", value: "Short Sleeve" },
    { key: "Pattern Type", value: "Print" },
    { key: "Design", value: "With Pattern, Customized Designs" },
    { key: "Style", value: "Casual" },
    { key: "Collar", value: "O-Neck" },
    { key: "Gender", value: "Unisex" },
    { key: "Age Group", value: "Adults" }
  ],
  recommendations: [
    {
      id: "1",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200&h=200&fit=crop",
      title: "Custom Printed T-Shirt Design",
      price: "US$6.50-7.40"
    },
    {
      id: "2", 
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=200&h=200&fit=crop",
      title: "Guangzhou Logo Men's 2024 T-Shirt Solid Color",
      price: "US$5.30-7.50"
    },
    {
      id: "3",
      image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=200&h=200&fit=crop",
      title: "The Best Quality Of Guangzhou Direct Market",
      price: "US$4.90-7.20"
    },
    {
      id: "4",
      image: "https://images.unsplash.com/photo-1622445275576-721325763efe?w=200&h=200&fit=crop",
      title: "Factory Casual Short Sleeve T-shirt",
      price: "US$2.80"
    }
  ]
};

const Details = () => {
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
        <DPage product={sampleProduct} />
      <Footer/>
    </div>
  );
};

export default Details;
