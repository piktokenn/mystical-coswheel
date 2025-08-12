import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const DealerLocator = () => {
  const [zipCode, setZipCode] = useState('');
  const [dealers, setDealers] = useState([
    {
      name: "COSWHEEL San Francisco",
      address: "123 Market St, San Francisco, CA 94105",
      phone: "(415) 555-0123",
      distance: "2.3 miles",
      hours: "Mon-Sat: 9AM-7PM, Sun: 10AM-6PM",
      services: ["Test Rides", "Sales", "Service", "Accessories"]
    },
    {
      name: "COSWHEEL Berkeley",
      address: "456 University Ave, Berkeley, CA 94704",
      phone: "(510) 555-0456",
      distance: "8.7 miles",
      hours: "Mon-Sat: 10AM-6PM, Sun: 11AM-5PM",
      services: ["Test Rides", "Sales", "Service"]
    },
    {
      name: "COSWHEEL Oakland",
      address: "789 Broadway, Oakland, CA 94607",
      phone: "(510) 555-0789",
      distance: "12.1 miles",
      hours: "Mon-Fri: 9AM-6PM, Sat: 10AM-5PM",
      services: ["Test Rides", "Sales"]
    }
  ]);

  const handleSearch = () => {
    // In a real app, this would make an API call
    console.log('Searching for dealers near:', zipCode);
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find a Dealer</h2>
          <p className="text-xl text-gray-600">
            Locate your nearest COSWHEEL dealer for test rides and service
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Interactive Map</p>
                <p className="text-sm text-gray-500">Enter your zip code to see nearby dealers</p>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter ZIP code"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                />
                <Button onClick={handleSearch}>
                  <Navigation className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-4">
              {dealers.map((dealer, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{dealer.name}</h3>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5" />
                        <span>{dealer.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>{dealer.phone}</span>
                      </div>
                      <div className="flex items-start">
                        <Clock className="h-4 w-4 mr-2 mt-0.5" />
                        <span>{dealer.hours}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-sm font-medium mb-1">Services:</p>
                      <div className="flex flex-wrap gap-1">
                        {dealer.services.map((service, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Button className="w-full mt-4" size="sm">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealerLocator;