import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Check, X } from 'lucide-react';
import { products } from '@/data/products';

const ProductComparisonTool = () => {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['t26', 't20']);
  const [showComparison, setShowComparison] = useState(false);

  const toggleProduct = (id: string) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(productId => productId !== id));
    } else if (selectedProducts.length < 3) {
      setSelectedProducts([...selectedProducts, id]);
    }
  };

  const compareProducts = () => {
    if (selectedProducts.length > 1) {
      setShowComparison(true);
    }
  };

  const comparisonProducts = products.filter(product => 
    selectedProducts.includes(product.id)
  );

  const featuresToCompare = [
    { name: 'Price', key: 'price', format: (value: number) => `$${value}` },
    { name: 'Range', key: 'range' },
    { name: 'Top Speed', key: 'speed' },
    { name: 'Charge Time', key: 'chargeTime' },
    { name: 'Motor Power', key: 'motorPower', values: { t26: '750W', t20: '500W', ct20: '1000W' } },
    { name: 'Suspension', key: 'suspension', values: { t26: 'Front', t20: 'Front', ct20: 'Full' } },
    { name: 'Brakes', key: 'brakes', values: { t26: 'Hydraulic', t20: 'Mechanical', ct20: 'Hydraulic' } },
    { name: 'Display', key: 'display', values: { t26: 'Color LCD', t20: 'Basic LCD', ct20: 'Advanced LCD' } },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compare Models</h2>
          <p className="text-xl text-gray-600">
            Select up to 3 models to compare side-by-side
          </p>
        </div>

        {!showComparison ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map(product => (
              <div 
                key={product.id}
                className={`border-2 rounded-lg p-6 cursor-pointer transition-all ${
                  selectedProducts.includes(product.id) 
                    ? 'border-orange-500 bg-orange-50' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => toggleProduct(product.id)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold">{product.name}</h3>
                    <p className="text-orange-500 font-bold">${product.price}</p>
                  </div>
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedProducts.includes(product.id) 
                      ? 'bg-orange-500 border-orange-500' 
                      : 'border-gray-300'
                  }`}>
                    {selectedProducts.includes(product.id) && (
                      <Check className="h-4 w-4 text-white" />
                    )}
                  </div>
                </div>
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-contain mt-4"
                />
                <div className="mt-4 space-y-2">
                  <p><span className="font-medium">Range:</span> {product.range}</p>
                  <p><span className="font-medium">Top Speed:</span> {product.speed}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  {comparisonProducts.map(product => (
                    <TableHead key={product.id} className="text-center">
                      {product.name}
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {featuresToCompare.map((feature, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    {comparisonProducts.map(product => {
                      let value;
                      if (feature.values) {
                        value = feature.values[product.id as keyof typeof feature.values];
                      } else {
                        value = product[feature.key as keyof typeof product];
                        if (feature.format) {
                          value = feature.format(value as number);
                        }
                      }
                      return (
                        <TableCell key={product.id} className="text-center">
                          {value || '-'}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}

        <div className="mt-8 text-center">
          {!showComparison ? (
            <Button 
              onClick={compareProducts}
              disabled={selectedProducts.length < 2}
              className="bg-orange-500 hover:bg-orange-600"
            >
              Compare Selected Models
            </Button>
          ) : (
            <Button 
              variant="outline"
              onClick={() => setShowComparison(false)}
            >
              Back to Selection
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductComparisonTool;