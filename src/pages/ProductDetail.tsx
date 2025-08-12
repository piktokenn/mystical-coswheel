import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Star, Truck, Shield, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';
import { toast } from 'sonner';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  features: string[];
  specifications: {
    [key: string]: string;
  };
  colors: string[];
  sizes: string[];
  description: string;
  highlights: string[];
  warranty: string;
  shipping: string;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState('Black');
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [quantity, setQuantity] = useState(1);

  const products: Record<string, Product> = {
    t26: {
      id: 't26',
      name: 'COSWHEEL T26 Pro',
      price: 1299,
      originalPrice: 1599,
      images: [
        'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ],
      features: [
        '750W Bafang Geared Hub Motor',
        '48V 17.5Ah Samsung Battery',
        '70 Mile Range',
        '28 mph Top Speed',
        'Full Suspension System',
        'Hydraulic Disc Brakes',
        'Smart LCD Display',
        'USB Charging Port'
      ],
      specifications: {
        'Motor': '750W Bafang Geared Hub',
        'Battery': '48V 17.5Ah Samsung Lithium-ion',
        'Range': '50-70 miles',
        'Top Speed': '28 mph',
        'Weight': '62 lbs',
        'Max Load': '300 lbs',
        'Frame': '6061 Aluminum Alloy',
        'Suspension': 'Front + Rear',
        'Brakes': 'Tektro Hydraulic Disc 180mm',
        'Tires': '26" x 4.0" Fat Tires',
        'Display': 'LCD Color Display',
        'Lights': 'LED Headlight & Taillight',
        'USB Port': '5V 2A'
      },
      colors: ['Black', 'White', 'Orange', 'Blue'],
      sizes: ['Small', 'Medium', 'Large'],
      description: 'The COSWHEEL T26 Pro is our flagship electric bike, combining power, range, and comfort in one exceptional package. Perfect for daily commuting, weekend adventures, and everything in between.',
      highlights: [
        'Industry-leading 70-mile range',
        'Powerful 750W motor for hills',
        'Full suspension for comfort',
        'Premium hydraulic brakes',
        'Smart connectivity features'
      ],
      warranty: '2-year comprehensive warranty covering frame, motor, and battery',
      shipping: 'Free shipping within 2-5 business days'
    },
    t20: {
      id: 't20',
      name: 'COSWHEEL T20',
      price: 999,
      originalPrice: 1199,
      images: [
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ],
      features: [
        '500W Bafang Geared Hub Motor',
        '48V 10.4Ah Samsung Battery',
        '40-50 Mile Range',
        '25 mph Top Speed',
        'Front Suspension',
        'Mechanical Disc Brakes',
        'LCD Display',
        'LED Lights'
      ],
      specifications: {
        'Motor': '500W Bafang Geared Hub',
        'Battery': '48V 10.4Ah Samsung Lithium-ion',
        'Range': '40-50 miles',
        'Top Speed': '25 mph',
        'Weight': '55 lbs',
        'Max Load': '280 lbs',
        'Frame': '6061 Aluminum Alloy',
        'Suspension': 'Front Only',
        'Brakes': 'Mechanical Disc 160mm',
        'Tires': '20" x 4.0" Fat Tires',
        'Display': 'LCD Display',
        'Lights': 'LED Headlight & Taillight',
        'USB Port': '5V 1A'
      },
      colors: ['Black', 'White', 'Red'],
      sizes: ['Small', 'Medium'],
      description: 'The COSWHEEL T20 offers exceptional value with reliable performance and solid range. Perfect for urban commuting and light trail riding.',
      highlights: [
        'Great value for money',
        'Reliable 50-mile range',
        'Lightweight design',
        'Perfect for city riding',
        'Easy to store and transport'
      ],
      warranty: '2-year comprehensive warranty covering frame, motor, and battery',
      shipping: 'Free shipping within 2-5 business days'
    },
    ct20: {
      id: 'ct20',
      name: 'COSWHEEL CT20',
      price: 1599,
      originalPrice: 1899,
      images: [
        'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
      ],
      features: [
        '1000W Bafang Geared Hub Motor',
        '48V 20Ah Samsung Battery',
        '60-70 Mile Range',
        '32 mph Top Speed',
        'Full Suspension System',
        'Hydraulic Disc Brakes',
        'Color LCD Display',
        'USB Charging Port'
      ],
      specifications: {
        'Motor': '1000W Bafang Geared Hub',
        'Battery': '48V 20Ah Samsung Lithium-ion',
        'Range': '60-70 miles',
        'Top Speed': '32 mph',
        'Weight': '68 lbs',
        'Max Load': '330 lbs',
        'Frame': '6061 Aluminum Alloy',
        'Suspension': 'Full Suspension',
        'Brakes': 'Tektro Hydraulic Disc 203mm',
        'Tires': '26" x 4.0" Fat Tires',
        'Display': 'Color LCD Display',
        'Lights': 'LED Headlight & Taillight',
        'USB Port': '5V 2A'
      },
      colors: ['Black', 'White', 'Green', 'Blue'],
      sizes: ['Medium', 'Large'],
      description: 'The COSWHEEL CT20 is our premium model with the most powerful motor and largest battery. Built for serious riders who demand the best performance.',
      highlights: [
        'Most powerful 1000W motor',
        'Longest 70-mile range',
        'Premium full suspension',
        'Highest weight capacity',
        'Advanced display features'
      ],
      warranty: '2-year comprehensive warranty covering frame, motor, and battery',
      shipping: 'Free shipping within 2-5 business days'
    }
  };

  const product = products[id || 't26'];
  
  if (!product) {
    return <div>Product not found</div>;
  }

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-4"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={prevImage}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={nextImage}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex space-x-2 mt-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded overflow-hidden border-2 ${
                    selectedImage === index ? 'border-orange-500' : 'border-transparent'
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">(127 reviews)</span>
            </div>
            
            <div className="mb-4">
              <span className="text-3xl font-bold text-orange-500">${product.price}</span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through ml-2">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Color Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Color</label>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded border ${
                      selectedColor === color
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="px-4 py-2">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            <AddToCartButton
              product={{
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.images[0],
                type: 'bike'
              }}
              quantity={quantity}
            />

            <div className="mt-6 space-y-2 text-sm">
              <div className="flex items-center">
                <Truck className="h-4 w-4 mr-2" />
                <span>{product.shipping}</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-4 w-4 mr-2" />
                <span>{product.warranty}</span>
              </div>
              <div className="flex items-center">
                <RefreshCw className="h-4 w-4 mr-2" />
                <span>30-day return policy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="features" className="mt-8">
          <TabsList>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          
          <TabsContent value="features" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-4">Highlights</h3>
                <ul className="space-y-2">
                  {product.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></div>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="specifications" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b">
                      <span className="font-medium">{key}:</span>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold">John D.</span>
                    </div>
                    <p className="text-gray-600">
                      "Amazing bike! The range is exactly as advertised and the build quality is exceptional."
                    </p>
                  </div>
                  
                  <div className="border-b pb-4">
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <span className="ml-2 font-semibold">Sarah M.</span>
                    </div>
                    <p className="text-gray-600">
                      "Perfect for my daily commute. The motor is powerful enough for hills and the battery lasts all week."
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProductDetail;