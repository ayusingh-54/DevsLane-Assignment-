import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard.jsx";

// API Base URL
const API_BASE_URL = "https://dummyjson.com";

function ProductGrid({ onProductSelect }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState("default");

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(`${API_BASE_URL}/products?limit=12`);

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();

        // Transform API data to match our product format
        const transformedProducts = data.products.map((product) => ({
          id: product.id,
          title: product.title,
          description: product.description,
          category: product.category,
          price: product.price,
          originalPrice:
            product.discountPercentage > 10
              ? Math.round(
                  product.price / (1 - product.discountPercentage / 100)
                )
              : null,
          rating: product.rating,
          image: product.thumbnail,
          onSale: product.discountPercentage > 10,
        }));

        setProducts(transformedProducts);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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

  // Loading state
  if (loading) {
    return (
      <div className="products-loading">
        <div className="loading-spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="products-error">
        <p>❌ Error loading products: {error}</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );
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
          <ProductCard
            key={product.id}
            product={product}
            onProductSelect={onProductSelect}
          />
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
