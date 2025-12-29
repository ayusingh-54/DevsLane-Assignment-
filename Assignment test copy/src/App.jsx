import { useState } from "react";
import Footer from "./Footer";
import ProductGrid from "./ProductsGrid";
import ProductDescription from "./ProductDescription";
import CartPage from "./pages/CartPage";
import { CartProvider, useCart } from "./context/CartContext";
import "./styles/cart.css";

// Header component with cart count
function Header({ onLogoClick, onProductsClick, onCartClick }) {
  const { itemCount } = useCart();

  return (
    <header className="header">
      <a href="#" className="logo" onClick={onLogoClick}>
        amazon
      </a>
      <nav className="nav-links">
        <button className="nav-btn" onClick={onProductsClick}>
          Products
        </button>
        <button className="nav-btn cart-nav-btn" onClick={onCartClick}>
          🛒 Cart
          {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
        </button>
      </nav>
    </header>
  );
}

function AppContent() {
  const [product, setProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState("home"); // "home", "product", "cart"

  const handleLogoClick = (e) => {
    e.preventDefault();
    setProduct(null);
    setCurrentPage("home");
  };

  const handleProductsClick = () => {
    setProduct(null);
    setCurrentPage("home");
  };

  const handleCartClick = () => {
    setCurrentPage("cart");
  };

  const handleProductSelect = (selectedProduct) => {
    setProduct(selectedProduct);
    setCurrentPage("product");
  };

  const handleBackToProducts = () => {
    setProduct(null);
    setCurrentPage("home");
  };

  const renderContent = () => {
    switch (currentPage) {
      case "cart":
        return <CartPage />;
      case "product":
        return (
          <ProductDescription product={product} onBack={handleBackToProducts} />
        );
      default:
        return <ProductGrid onProductSelect={handleProductSelect} />;
    }
  };

  return (
    <div className="app">
      <Header
        onLogoClick={handleLogoClick}
        onProductsClick={handleProductsClick}
        onCartClick={handleCartClick}
      />

      <main className="main-container">
        <div className="content-wrapper">{renderContent()}</div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

export default App;
