import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Footer";
import ProductGrid from "./ProductsGrid";
import ProductDescription from "./ProductDescription";

function App() {
  return (
    
      <div className="app">
        {/* Header */}
        <header className="header">
          <Link to="/" className="logo">
            amazon
          </Link>
        </header>

        {/* Main Content */}
        <main className="main-container">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<ProductGrid />} />
              <Route path="/product/:id" element={<ProductDescription />} />
            </Routes>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
   
  );
}

export default App;
