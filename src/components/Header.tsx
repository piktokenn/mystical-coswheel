// ... existing imports
import CartIcon from './CartIcon';

const Header = () => {
  // ... existing code

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">COSWHEEL</a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </button>
            ))}
            <a href="/products" className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors">
              Products
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <a href="/checkout">
              <CartIcon />
            </a>
            <Button>Get Started</Button>
          </div>

          {/* ... rest of the code */}
        </div>
      </div>
    </header>
  );
};