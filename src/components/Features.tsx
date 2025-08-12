import React from 'react';
import { Battery, Zap, Shield, Smartphone } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Battery,
      title: "Long Battery Life",
      description: "Up to 70 miles on a single charge with our advanced lithium-ion batteries"
    },
    {
      icon: Zap,
      title: "Powerful Motor",
      description: "750W peak motor power for effortless hill climbing and acceleration"
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "Hydraulic disc brakes, LED lights, and integrated safety features"
    },
    {
      icon: Smartphone,
      title: "Smart App",
      description: "Track your rides, monitor battery life, and customize settings via app"
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose COSWHEEL</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the perfect blend of performance, reliability, and innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;