import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const promotions = [
    {
      id: 1,
      title: "Save up to 30% on Autumn must-haves",
      subtitle: "Shop now",
      bgColor: "bg-gradient-to-br from-amber-100 to-orange-200",
      textColor: "text-gray-800",
      image: "/lovable-uploads/5859deaf-82ef-4b21-b96e-0e8bc515be87.png"
    },
    {
      id: 2,
      title: "Winter Collection Preview",
      subtitle: "Get early access",
      bgColor: "bg-gradient-to-br from-blue-100 to-indigo-200",
      textColor: "text-gray-800",
      image: null
    },
    {
      id: 3,
      title: "Holiday Decorations Sale",
      subtitle: "Up to 40% off",
      bgColor: "bg-gradient-to-br from-red-100 to-rose-200",
      textColor: "text-gray-800",
      image: null
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promotions.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promotions.length) % promotions.length);
  };

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      {/* Left side - Fall-inspired decor */}
      <div className="bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg p-8 flex flex-col justify-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Fall-inspired<br />decor
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Put a seasonal spin on your home
        </p>
        <Button className="bg-gray-800 hover:bg-gray-700 text-white rounded-full px-6 py-3 w-fit">
          Discover more
        </Button>
      </div>

      {/* Right side - Promotional slider */}
      <div className="relative overflow-hidden rounded-lg group">
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {promotions.map((promo) => (
            <div
              key={promo.id}
              className={`min-w-full h-64 ${promo.bgColor} p-8 flex flex-col justify-end relative`}
            >
              {promo.image && (
                <div className="absolute inset-0">
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              )}
              <div className="relative z-10">
                <h3 className={`text-2xl font-bold mb-2 ${promo.image ? 'text-white' : promo.textColor}`}>
                  {promo.title}
                </h3>
                <p className={`text-lg font-medium ${promo.image ? 'text-white' : promo.textColor}`}>
                  {promo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <Button
          variant="outline"
          size="sm"
          className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 p-0 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Slide indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {promotions.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;