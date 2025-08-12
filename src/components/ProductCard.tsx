import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
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
        <CardDescription className="text-2xl font-bold text-orange-500">{price}</CardDescription>
      </CardHeader>
      <CardContent onClick={() => navigate(`/product/${id}`)}>
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <span>Range: {range}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Max Speed: {speed}</span>
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <span>Charge Time: {chargeTime}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
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