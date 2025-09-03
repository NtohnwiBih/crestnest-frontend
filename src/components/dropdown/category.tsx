import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Apparel & Accessories",
    icon: "👕",
    subcategories: [
      {
        name: "Sportswear",
        children: [
          { name: "Athletic Shirts", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Sports Bras", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Yoga Pants", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Running Shorts", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Track Suits", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Athletic Shoes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Athletic Shirts", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Sports Bras", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Yoga Pants", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Running Shorts", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Track Suits", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
        ]
      },
      {
        name: "Women's Fashion",
        children: [
          { name: "Dresses", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Blouses", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Skirts", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Suits", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Coats", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Stockings", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Accessories",
        children: [
          { name: "Scarves", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Belts", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Hats", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Tudung", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      }
    ]
  },
  {
    name: "Consumer Electronics",
    icon: "📱",
    subcategories: [
      {
        name: "Mobile Devices",
        children: [
          { name: "Smartphones", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Smart Watches", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Tablets", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Earbuds", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Power Banks", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Computers",
        children: [
          { name: "Laptops", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Desktops", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Monitors", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Keyboards", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Mouse", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Automotive",
        children: [
          { name: "Car Chargers", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Dash Cams", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "GPS Systems", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Electric Scooters", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      }
    ]
  },
  {
    name: "Sports & Entertainment",
    icon: "⚽",
    subcategories: [
      {
        name: "Electric Vehicles",
        children: [
          { name: "Electric Bikes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Electric Scooters", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Electric Motorcycles", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Hoverboards", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Recreation",
        children: [
          { name: "Drones", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "RC Cars", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Sports Equipment", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Gaming Chairs", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Motorcycles",
        children: [
          { name: "Sport Bikes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Cruisers", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Helmets", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Accessories", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      }
    ]
  },
  {
    name: "Jewelry, Eyewear & Watches",
    icon: "💎",
    subcategories: [
      {
        name: "Watches",
        children: [
          { name: "Luxury Watches", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Sport Watches", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Fashion Watches", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Smart Watches", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Jewelry",
        children: [
          { name: "Necklaces", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Rings", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Earrings", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Bracelets", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Eyewear",
        children: [
          { name: "Sunglasses", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Prescription Glasses", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Reading Glasses", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Blue Light Glasses", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      }
    ]
  },
  {
    name: "Shoes & Accessories",
    icon: "👟",
    subcategories: [
      {
        name: "Men's Shoes",
        children: [
          { name: "Dress Shoes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Casual Shoes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Sneakers", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Boots", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Women's Shoes",
        children: [
          { name: "High Heels", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Flats", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Sandals", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Athletic Shoes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Sports Shoes",
        children: [
          { name: "Running Shoes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Basketball Shoes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Tennis Shoes", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Hiking Boots", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      }
    ]
  },
  {
    name: "Home & Garden",
    icon: "🏠",
    subcategories: [
      {
        name: "Furniture",
        children: [
          { name: "Sofas", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Dining Tables", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Beds", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Office Chairs", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Kitchen",
        children: [
          { name: "Cookware", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Small Appliances", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Utensils", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Storage", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      },
      {
        name: "Garden",
        children: [
          { name: "Hand Tools", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Power Tools", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Seeds & Plants", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" },
          { name: "Outdoor Furniture", image: "/lovable-uploads/cbc8e0a0-d93f-4a13-87aa-bdc7c2095873.png" }
        ]
      }
    ]
  }
];

interface MegaDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const Category = ({ isOpen, onClose }: MegaDropdownProps) => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigate = useNavigate();

  const handleSubcategoryClick = (categoryName: string, subcategoryName: string, productName: string) => {
    onClose();
    // Navigate to products page with search params
    const searchParams = new URLSearchParams({
      q: productName,
      category: categoryName,
      subcategory: subcategoryName
    });
    navigate(`/products/search?${searchParams.toString()}`);
  };

  if (!isOpen) return null;

  return (
    <div 
      className="absolute top-full left-0 w-full bg-white border border-gray-200 shadow-xl z-50"
      onMouseLeave={onClose}
    >
      <div className="flex max-h-[400px]">
        {/* Categories Sidebar */}
        <div className="w-80 bg-gray-50 border-r border-gray-200 overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
              <span className="text-lg mr-2">⭐</span>
              Categories for you
            </h3>
            <div className="space-y-1">
              {categories.map((category, index) => (
                <button
                  key={category.name}
                  className={`w-full text-left px-3 py-2.5 text-sm rounded-md transition-colors flex items-center justify-between ${
                    selectedCategory === index 
                      ? 'bg-white text-gray-900 shadow-sm' 
                      : 'text-gray-600 hover:bg-white hover:text-gray-900'
                  }`}
                  onMouseEnter={() => setSelectedCategory(index)}
                >
                  <div className="flex items-center">
                    <span className="mr-3 text-base">{category.icon}</span>
                    {category.name}
                  </div>
                  <ChevronRight className="h-3 w-3" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Subcategories Grid */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {categories[selectedCategory].name}
            </h3>
            <button className="text-sm text-blue-600 hover:underline">
              Browse featured selections
            </button>
          </div>
          
          <div className="space-y-8">
            {categories[selectedCategory].subcategories.map((subcategory) => (
              <div key={subcategory.name} className="space-y-4">
                {/* Subcategory Header */}
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-medium text-gray-900">
                    {subcategory.name}
                  </h4>
                </div>
                
                {/* Child Categories Grid */}
                <div className="grid grid-cols-6 gap-8">
                  {subcategory.children.map((child, index) => (
                    <div 
                      key={child.name}
                      className="text-center group cursor-pointer"
                      onClick={() => handleSubcategoryClick(
                        categories[selectedCategory].name,
                        subcategory.name,
                        child.name
                      )}
                    >
                      <div className="relative rounded-lg mb-2 overflow-hidden bg-gray-100 aspect-square">
                        <img 
                          src={child.image} 
                          alt={child.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                        {/* Sale indicator for some items */}
                        {index % 4 === 0 && (
                          <div className="absolute top-2 right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                            <span className="text-white text-xs font-bold">%</span>
                          </div>
                        )}
                      </div>
                      <p className="text-xs text-gray-600 group-hover:text-gray-900 transition-colors leading-tight">
                        {child.name}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;