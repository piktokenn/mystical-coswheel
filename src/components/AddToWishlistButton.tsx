import React from 'react';
import { Button } from '@/components/ui/button';
import { useWishlist } from '@/context/WishlistContext';
import { toast } from 'sonner';
import { Heart } from 'lucide-react';

interface AddToWishlistButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

const AddToWishlistButton: React.FC<AddToWishlistButtonProps> = ({ product }) => {
  const { dispatch } = useWishlist();

  const handleAddToWishlist = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      }
    });
    
    toast.success(`${product.name} added to wishlist!`);
  };

  return (
    <Button 
      variant="outline" 
      className="w-full"
      onClick={handleAddToWishlist}
    >
      <Heart className="h-4 w-4 mr-2" /> Add to Wishlist
    </Button>
  );
};

export default AddToWishlistButton;