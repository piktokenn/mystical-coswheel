import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';

const Accessories = () => {
  const accessories = [
    {
      name: "Smart Helmet",
      price: "$89",
      image: "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Bluetooth-enabled helmet with built-in speakers and LED lights"
    },
    {
      name: "Extra Battery Pack",
      price: "$299",
      image: "https://images.unsplash.com/photo-1607604762246-c26e4e163a50?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Extend your range with an additional 48V 13Ah battery pack"
    },
    {
      name: "Premium Lock Set",
      price: "$79",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Heavy-duty U-lock with cable for maximum security"
    },
    {
      name: "Phone Mount",
      price: "$39",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description: "Universal phone holder with 360° rotation and shock absorption"
    }
  ];

  return (
    <section id="accessories" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Accessories</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete your riding experience with our premium accessories
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accessories.map((accessory, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={accessory.image} 
                  alt={accessory.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{accessory.name}</CardTitle>
                <p className="text-2xl font-bold text-orange-500">{accessory.price}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{accessory.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <ShoppingBag className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Accessories;