import React from 'react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    type: 'bike' | 'accessory';
  };
  quantity?: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ 
  product, 
  quantity = 1 
}) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity
      }
    });
    
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <Button 
      onClick={handleAddToCart}
      className="w-full bg-orange-500 hover:bg-orange-600"
    >
      Add to Cart
    </Button>
  );
};

export default AddToCartButton;