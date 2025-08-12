import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';

interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  range: string;
  speed: string;
  chargeTime: string;
  id: string;
}

const ProductCard = ({ name, price, image, range, speed, chargeTime, id }: ProductCardProps) => {
  const navigate = useNavigate();
  const numericPrice = parseFloat(price.replace('$', '').replace(',', ''));
  
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full flex flex-col">
      <div 
        className="aspect-video overflow-hidden"
        onClick={() => navigate(`/product/${id}`)}
      >
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader onClick={() => navigate(`/product/${id}`)}>
        <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
          {name}
        </CardTitle>
        <div className="text-2xl font-bold text-orange-500">{price}</div>
      </CardHeader>
      <CardContent onClick={() => navigate(`/product/${id}`)} className="flex-grow">
        <div className="space-y-2">
          <div className="text-sm text-gray-600">
            <span className="font-medium">Range:</span> {range}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Max Speed:</span> {speed}
          </div>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Charge Time:</span> {chargeTime}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 mt-auto">
        <AddToCartButton 
          product={{
            id,
            name,
            price: numericPrice,
            image,
            type: 'bike'
          }}
        />
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => navigate(`/product/${id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;