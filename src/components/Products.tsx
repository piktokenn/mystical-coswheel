import React from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Link } from 'react-router-dom';

const Products = () => {
  // Get the first 3 products to display on the home page
  const featuredProducts = products.slice(0, 3);

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured E-Bikes</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our top-rated electric bikes for every terrain
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              range={product.range}
              speed={product.speed}
              chargeTime={product.chargeTime}
              id={product.id}
              isNew={product.isNew}
              onSale={product.onSale}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Click on any product to view detailed specifications and more images
          </p>
          <Link to="/products" className="text-orange-500 hover:text-orange-600 font-medium">
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;