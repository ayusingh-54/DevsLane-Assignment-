import React, { useState } from "react";
import ProductCard from "./ProductCard";
import ProductDetail from "./ProductDetail";
import { products } from "./data/productsData";

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseDetail = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="max-w-[1100px] mx-auto my-9 bg-amber-100 p-9 shadow-lg">
      <header className="flex justify-between items-center gap-4 mb-6">
        <div className="brand">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
            alt="logo"
            className="h-7"
          />
        </div>
        <div className="controls">
          <select
            aria-label="Sort"
            className="px-3 py-2 border border-gray-200 rounded-md bg-white"
          >
            <option>Default sorting</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </header>

      <main className="flex flex-col items-center">
        <section className="w-full max-w-5xl px-3 py-1">
          <div className="grid grid-cols-3 gap-7 max-lg:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
            {products.map((p) => (
              <ProductCard key={p.id} p={p} onClick={handleProductClick} />
            ))}
          </div>

          <nav
            className="mt-7 flex gap-2.5 justify-center"
            aria-label="Pagination"
          >
            <button className="border border-transparent bg-red-400 text-white px-3 py-2 rounded-md">
              1
            </button>
            <button className="border border-gray-100 bg-white px-3 py-2 rounded-md">
              2
            </button>
            <button className="border border-gray-100 bg-white px-3 py-2 rounded-md">
              »
            </button>
          </nav>
        </section>
      </main>

      <footer className="mt-8 text-gray-500 text-[13px] text-center">
        Copyright © 2025 | DevsLane
      </footer>

      {selectedProduct && (
        <ProductDetail product={selectedProduct} onClose={handleCloseDetail} />
      )}
    </div>
  );
}
