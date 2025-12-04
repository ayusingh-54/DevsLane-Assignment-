import { useState } from "react";
import Footer from "./Footer";
import ProductGrid from "./ProductsGrid";
import ProductDescription from "./ProductDescription";

function App() {
  const [product, setProduct] = useState(null);

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <a href="#" className="logo" onClick={() => setProduct(null)}>
          amazon
        </a>
      </header>

      {/* Main Content */}
      <main className="main-container">
        <div className="content-wrapper">
          {product ? (
            <ProductDescription product={product} setProduct={setProduct} />
          ) : (
            <ProductGrid setProduct={setProduct} />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
