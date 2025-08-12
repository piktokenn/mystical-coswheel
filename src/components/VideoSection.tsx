import React from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See HZEBIKES in Action</h2>
          <p className="text-xl text-gray-600">
            Watch how our electric bikes are transforming daily commutes
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-6 cursor-pointer hover:bg-white/20 transition-colors">
                <Play className="h-12 w-12 text-white ml-1" />
              </极div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1541625602330-2277a4c46182?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="HZEBIKES in action"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-600">
            Experience the perfect blend of power, efficiency, and style
          </p>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;