import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import AddToCartButton from './AddToCartButton';
import AddToWishlistButton from './AddToWishlistButton';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  range: string;
  speed: string;
  chargeTime: string;
  id: string;
  isNew?: boolean;
  onSale?: boolean;
}

const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  range, 
  speed, 
  chargeTime, 
  id,
  isNew = false,
  onSale = false
}: ProductCardProps) => {
  const navigate = useNavigate();
  
  // Format prices using Intl.NumberFormat
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(price);
  
  const formattedOriginalPrice = originalPrice 
    ? new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
      }).format(originalPrice)
    : null;

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group h-full flex flex-col">
      <div className="relative">
        {isNew && (
          <Badge className="absolute top-2 left-2 bg-green-500">New</Badge>
        )}
        {onSale && (
          <Badge className="absolute top-2 left-2 bg-orange-500">Sale</Badge>
        )}
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
      </div>
      
      <CardHeader onClick={() => navigate(`/product/${id}`)}>
        <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
          {name}
        </CardTitle>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-orange-500">{formattedPrice}</span>
          {formattedOriginalPrice && (
            <span className="text-lg text-gray-500 line-through">
              {formattedOriginalPrice}
            </span>
          )}
        </div>
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
      
      <CardFooter className="flex flex-col gap-2 mt-auto">
        <AddToCartButton 
          product={{
            id,
            name,
            price,
            image,
            type: 'bike'
          }}
        />
        <AddToWishlistButton 
          product={{
            id,
            name,
            price,
            image
          }}
        />
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => navigate(`/product/${id}`)}
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;