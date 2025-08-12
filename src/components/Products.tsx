// ... existing imports
import { Link } from 'react-router-dom';

const Products = () => {
  // ... existing code

  return (
    <section id="products" className="py-20 bg-gray-50">
      {/* ... existing code */}
      
      <div className="text-center mt-12">
        <p className="text-gray-600 mb-4">
          Click on any product to view detailed specifications and more images
        </p>
        <Link to="/products" className="text-orange-500 hover:text-orange-600 font-medium">
          View All Products →
        </Link>
      </div>
    </section>
  );
};