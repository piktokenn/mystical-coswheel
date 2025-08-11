import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-orange-500">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Mail className="h-12 w-12 text-white mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Subscribe to our newsletter for the latest product updates, exclusive offers, and riding tips.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-orange-100"
          />
          <Button variant="secondary" className="bg-white text-orange-500 hover:bg-orange-50">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;