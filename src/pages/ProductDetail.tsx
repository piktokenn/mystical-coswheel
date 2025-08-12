import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';
import { toast } from 'sonner';
import Header from '@/components/Header';
import { products } from '@/data/products';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => navigate('/products')}>Back to Products</Button>
        </div>
      </div>
    );
  }

  const handlePrevImage = () => {
    setSelectedImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1));
  };

  const handleNextImage = () => {
    setSelectedImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ChevronLeft className="h-4 w-4 mr-2" /> Back to Products
        </Button>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="relative">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            
            <div className="flex justify-between mt-4">
              <Button variant="outline" size="icon" onClick={handlePrevImage}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex space-x-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 ${
                      index === selectedImage ? 'border-orange-500' : 'border-gray-200'
                    }`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
              <Button variant="outline" size="icon" onClick={handleNextImage}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-5 w-5 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600 ml-2">(42 reviews)</span>
                </div>
              </div>
              <div className="text-3xl font-bold text-orange-500">${product.price}</div>
            </div>
            
            <p className="text-gray-700 mb-6">
              {product.description || "Premium electric bike with advanced features for urban commuting and off-road adventures."}
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <Truck className="h-6 w-6 text-orange-500 mr-2" />
                <div>
                  <p className="font-medium">Free Shipping</p>
                  <p className="text-sm text-gray-600">Delivered in 3-5 days</p>
                </div>
              </div>
              <div className="flex items-center">
                <Shield className="h-6 w-6 text-orange-500 mr-2" />
                <div>
                  <p className="font-medium">2-Year Warranty</p>
                  <p className="text-sm text-gray-600">Frame, motor & battery</p>
                </div>
              </div>
              <div className="flex items-center">
                <RefreshCw className="h-6 w-6 text-orange-500 mr-2" />
                <div>
                  <p className="font-medium">30-Day Returns</p>
                  <p className="text-sm text-gray-600">No questions asked</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                >
                  -
                </Button>
                <span className="mx-4 text-lg">{quantity}</span>
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={() => setQuantity(q => q + 1)}
                >
                  +
                </Button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <AddToCartButton 
                product={{
                  id: product.id,
                  name: product.name,
                  price: product.price,
                  image: product.image,
                  type: 'bike'
                }}
                quantity={quantity}
              />
              <Button variant="outline" className="flex-1">
                Book Test Ride
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="description">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specs">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            
            <TabsContent value="description">
              <Card className="mt-4">
                <CardContent className="p-6">
                  <p className="text-gray-700">
                    The {product.name} is designed for riders who demand performance and reliability. 
                    With its powerful motor and long-lasting battery, you can conquer any terrain with ease. 
                    The ergonomic design ensures comfort during long rides, while the advanced suspension 
                    system absorbs shocks for a smooth experience.
                  </p>
                  <p className="text-gray-700 mt-4">
                    Features include a smart LCD display, integrated lighting system, and multiple riding 
                    modes to suit your needs. Whether you're commuting to work or exploring trails, the 
                    {product.name} delivers an exceptional riding experience.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="specs">
              <Card className="mt-4">
                <CardContent className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold mb-2">General</h3>
                      <div className="space-y-2">
                        <p><span className="font-medium">Model:</span> {product.name}</p>
                        <p><span className="font-medium">Weight:</span> 62 lbs</p>
                        <p><span className="font-medium">Max Load:</span> 300 lbs</p>
                        <p><span className="font-medium">Frame Material:</span> Aluminum Alloy</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Performance</h3>
                      <div className="space-y-2">
                        <p><span className="font-medium">Motor:</span> 750W Bafang</p>
                        <p><span className="font-medium">Battery:</span> 48V 13Ah</p>
                        <p><span className="font-medium">Range:</span> {product.range}</p>
                        <p><span className="font-medium">Top Speed:</span> {product.speed}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="reviews">
              <Card className="mt-4">
                <CardContent className="p-6">
                  <div className="text-center py-8">
                    <p className="text-gray-600">No reviews yet. Be the first to review this product!</p>
                    <Button className="mt-4">Write a Review</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;