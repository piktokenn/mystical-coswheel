import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';

const SpecSheet = () => {
  const [selectedModel, setSelectedModel] = useState('t26');

  const specs = {
    t20: {
      name: "T20",
      overview: {
        "Motor": "500W Bafang Geared Hub Motor",
        "Battery": "48V 10.4Ah Samsung Lithium-ion",
        "Range": "40-50 miles",
        "Top Speed": "25 mph",
        "Weight": "55 lbs",
        "Max Load": "280 lbs"
      },
      frame: {
        "Frame Material": "6061 Aluminum Alloy",
        "Frame Size": "16\" (Small)",
        "Fork": "Front Suspension Fork",
        "Rear Shock": "None",
        "Handlebar": "Aluminum 680mm",
        "Seatpost": "Aluminum 30.4mm"
      },
      drivetrain: {
        "Shifter": "Shimano 6-speed",
        "Rear Derailleur": "Shimano Tourney",
        "Crankset": "48T Chainring",
        "Cassette": "14-28T",
        "Chain": "KMC Z7"
      },
      brakes: {
        "Front Brake": "Mechanical Disc 160mm",
        "Rear Brake": "Mechanical Disc 160mm",
        "Brake Levers": "Mechanical"
      },
      wheels: {
        "Rims": "Aluminum Double Wall",
        "Tires": "20\" x 4.0\" Fat Tires",
        "Hubs": "Aluminum Sealed Bearing"
      },
      electronics: {
        "Display": "LCD Display",
        "Throttle": "Thumb Throttle",
        "Lights": "LED Headlight & Taillight",
        "USB Port": "No"
      }
    },
    t26: {
      name: "T26",
      overview: {
        "Motor": "750W Bafang Geared Hub Motor",
        "Battery": "48V 13Ah Samsung Lithium-ion",
        "Range": "50-60 miles",
        "Top Speed": "28 mph",
        "Weight": "62 lbs",
        "Max Load": "300 lbs"
      },
      frame: {
        "Frame Material": "6061 Aluminum Alloy",
        "Frame Size": "18\" (Medium)",
        "Fork": "Front Suspension Fork",
        "Rear Shock": "None",
        "Handlebar": "Aluminum 720mm",
        "Seatpost": "Aluminum 30.4mm"
      },
      drivetrain: {
        "Shifter": "Shimano 7-speed",
        "Rear Derailleur": "Shimano Tourney",
        "Crankset": "52T Chainring",
        "Cassette": "14-28T",
        "Chain": "KMC Z7"
      },
      brakes: {
        "Front Brake": "Tektro Hydraulic Disc 180mm",
        "Rear Brake": "Tektro Hydraulic Disc 180mm",
        "Brake Levers": "Tektro Hydraulic"
      },
      wheels: {
        "Rims": "Aluminum Double Wall",
        "Tires": "26\" x 4.0\" Fat Tires",
        "Hubs": "Aluminum Sealed Bearing"
      },
      electronics: {
        "Display": "LCD Color Display",
        "Throttle": "Thumb Throttle",
        "Lights": "LED Headlight & Taillight",
        "USB Port": "Yes (5V 1A)"
      }
    },
    ct20: {
      name: "CT20",
      overview: {
        "Motor": "1000W Bafang Geared Hub Motor",
        "Battery": "48V 17.5Ah Samsung Lithium-ion",
        "Range": "60-70 miles",
        "Top Speed": "32 mph",
        "Weight": "68 lbs",
        "Max Load": "330 lbs"
      },
      frame: {
        "Frame Material": "6061 Aluminum Alloy",
        "Frame Size": "20\" (Large)",
        "Fork": "Front Suspension Fork",
        "Rear Shock": "Rear Air Suspension",
        "Handlebar": "Aluminum 740mm",
        "Seatpost": "Aluminum Dropper Post"
      },
      drivetrain: {
        "Shifter": "Shimano 9-speed",
        "Rear Derailleur": "Shimano Deore",
        "Crankset": "52T Chainring",
        "Cassette": "11-34T",
        "Chain": "KMC X9"
      },
      brakes: {
        "Front Brake": "Tektro Hydraulic Disc 203mm",
        "Rear Brake": "Tektro Hydraulic Disc 180mm",
        "Brake Levers": "Tektro Hydraulic"
      },
      wheels: {
        "Rims": "Aluminum Double Wall",
        "Tires": "26\" x 4.0\" Fat Tires",
        "Hubs": "Aluminum Sealed Bearing"
      },
      electronics: {
        "Display": "LCD Color Display with USB",
        "Throttle": "Thumb Throttle",
        "Lights": "LED Headlight & Taillight",
        "USB Port": "Yes (5V 2A)"
      }
    }
  };

  const getSpecCategories = (model: any) => ({
    "Overview": model.overview,
    "Frame & Fork": model.frame,
    "Drivetrain": model.drivetrain,
    "Brakes": model.brakes,
    "Wheels & Tires": model.wheels,
    "Electronics": model.electronics
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
          <p className="text-xl text-gray-600">
            Detailed specifications for all COSWHEEL models
          </p>
        </div>
        
        <Tabs value={selectedModel} onValueChange={setSelectedModel}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="t20">T20</TabsTrigger>
            <TabsTrigger value="t26">T26</TabsTrigger>
            <TabsTrigger value="ct20">CT20</TabsTrigger>
          </TabsList>
          
          {Object.entries(specs).map(([key, model]) => (
            <TabsContent key={key} value={key}>
              <Card>
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(getSpecCategories(model)).map(([category, items]) => (
                      <div key={category}>
                        <h3 className="font-semibold text-lg mb-3">{category}</h3>
                        <div className="space-y-2">
                          {Object.entries(items as Record<string, string>).map(([spec, value]) => (
                            <div key={spec} className="flex justify-between text-sm">
                              <span className="text-gray-600">{spec}:</span>
                              <span className="font-medium">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SpecSheet;