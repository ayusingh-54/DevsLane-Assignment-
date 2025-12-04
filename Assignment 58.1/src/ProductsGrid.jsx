import React, { useState } from "react";
import ProductCard from "./ProductCard.jsx";
import products from "./data/products";

function ProductGrid() {
  const [sortBy, setSortBy] = useState("default");

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  function getSortedProducts() {
    let sorted = [...products];

    if (sortBy === "low-to-high") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === "high-to-low") {
      sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === "popularity") {
      sorted.sort((a, b) => b.rating - a.rating);
    }

    return sorted;
  }

  const sortedProducts = getSortedProducts();

  return (
    <>
      {/* Sort Dropdown */}
      <div className="sort-container">
        <select className="sort-dropdown" value={sortBy} onChange={handleSort}>
          <option value="default">Default sorting</option>
          <option value="low-to-high">Sort by price: low to high</option>
          <option value="high-to-low">Sort by price: high to low</option>
          <option value="popularity">Sort by popularity</option>
        </select>
      </div>

      <div className="products-grid">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="pagination">
        <button className="page-btn active">1</button>
        <button className="page-btn">2</button>
        <button className="page-btn">→</button>
      </div>
    </>
  );
}

export default ProductGrid;
