import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, RotateCw, ZoomIn } from 'lucide-react';

const InteractiveProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);

  const products = [
    {
      name: "HZEBIKES T26 Pro",
      price: "$1,499",
      images: [
        "https://images.unsplash.com/photo-1571333250630-f0230c320b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ],
      features: [
        "750W Bafang Motor",
        "48V 17.5Ah Battery",
        "70 Mile Range",
        "Full Suspension",
        "Hydraulic Brakes",
        "Smart Display"
      ],
      colors: ["Black", "White", "Orange", "Blue"]
    }
  ];

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="relative bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={products[selectedProduct].images[0]}
                alt={products[selectedProduct].name}
                className="w-full h-96 object-cover"
                style={{ transform: `scale(${zoom}) rotate(${rotation}deg)` }}
              />
              <div className="absolute top-4 right-4 flex space-x-2">
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={() => setZoom(Math.min(zoom + 0.1, 2))}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  size="icon"
                  variant="secondary"
                  onClick={handleRotate}
                >
                  <RotateCw className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="flex space-x-2 mt-4">
              {products[selectedProduct].images.map((img, index) => (
                <button
                  key={index}
                  className="w-20 h-20 rounded-lg overflow-hidden border-2 border-transparent hover:border-orange-500"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-4">{products[selectedProduct].name}</h2>
            <p className="text-3xl font-bold text-orange-500 mb-6">{products[selectedProduct].price}</p>
            
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="space-y-2">
                {products[selectedProduct].features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-4 mb-6">
              <h3 className="text-lg font-semibold">Available Colors</h3>
              <div className="flex space-x-2">
                {products[selectedProduct].colors.map((color) => (
                  <button
                    key={color}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:border-orange-500 hover:text-orange-500"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                Add to Cart
              </Button>
              <Button variant="outline" className="w-full">
                Book Test Ride
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveProductShowcase;