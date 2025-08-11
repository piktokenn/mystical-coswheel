import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bike, Zap, Clock } from 'lucide-react';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  range: string;
  speed: string;
  chargeTime: string;
}

const ProductCard = ({ name, price, image, range, speed, chargeTime }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{name}</CardTitle>
        <CardDescription className="text-2xl font-bold text-orange-500">{price}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Zap className="h-4 w-4 mr-2" />
            <span>Range: {range}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Bike className="h-4 w-4 mr-2" />
            <span>Max Speed: {speed}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span>Charge Time: {chargeTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">View Details</Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;