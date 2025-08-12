import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, Zap, Clock, MapPin } from 'lucide-react';

const InteractiveHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const slides = [
    {
      title: "Ride the Future",
      subtitle: "Discover the perfect electric bike for your urban adventures",
      image: "https://www.coswheelebike.com/cdn/shop/files/02_c39a1928-2df5-41c9-9593-01f55007f635.jpg?v=1725635639&width=500"
    },
    {
      title: "Power Meets Style",
      subtitle: "750W motor with 70-mile range in a sleek design",
      image: "https://www.coswheelebike.com/cdn/shop/files/GT20-main-01.jpg?v=1753253453&width=500"
    },
    {
      title: "Conquer Any Terrain",
      subtitle: "Full suspension and all-terrain tires for ultimate versatility",
      image: "https://www.coswheelebike.com/cdn/shop/files/GT20main-03.jpg?v=1753253453&width=500"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("${slide.image}")`
            }}
          />
        ))}
      </div>
      
      <div className={`relative z-10 text-center text-white px-4 transition-all duration-1000 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {slides[currentSlide].title}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {slides[currentSlide].subtitle}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Zap className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">750W Motor</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <Clock className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">70 Mile Range</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <MapPin className="h-8 w-8 mx-auto mb-2" />
            <p className="text-sm">GPS Tracking</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Shop Now
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
            Book Test Ride
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-orange-500' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default InteractiveHero;