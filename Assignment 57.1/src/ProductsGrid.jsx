import React, { useState } from "react";
import ProductCard from "./ProductCard.jsx";

const products = [
  {
    id: 1,
    title: "Black Printed Coffee Mug",
    description: "A sleek black coffee mug with a modern design.",
    category: "Mugs",
    price: 15.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
    onSale: false,
  },
  {
    id: 2,
    title: "Father's Day Coffee Mug",
    description: "A special mug for Father's Day.",
    category: "Mugs",
    price: 19.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&h=400&fit=crop",
    onSale: false,
  },
  {
    id: 3,
    title: "Green Printed Tshirt",
    description: "A stylish green tshirt with a unique print.",
    category: "Tshirts",
    price: 34.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&h=400&fit=crop",
    onSale: false,
  },
  {
    id: 4,
    title: "Personalised Mug",
    description: "A mug that can be personalised with your name.",
    category: "Mugs",
    price: 15.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=400&h=400&fit=crop",
    onSale: false,
  },
  {
    id: 5,
    title: "Printed Brown Tshirt",
    description: "A stylish brown tshirt with a unique print.",
    category: "Tshirts",
    price: 20.0,
    originalPrice: 34.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop",
    onSale: true,
  },
  {
    id: 6,
    title: "Printed Dark Blue Tshirt",
    description: "A stylish dark blue tshirt with a unique print.",
    category: "Tshirts",
    price: 24.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop",
    onSale: false,
  },
  {
    id: 7,
    title: "Printed Green Tshirt",
    description: "A stylish green tshirt with a unique print.",
    category: "Tshirts",
    price: 28.0,
    originalPrice: 35.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=400&fit=crop",
    onSale: true,
  },
  {
    id: 8,
    title: "Printed Tshirt Coffee Black Color",
    description: "A stylish black coffee tshirt with a unique print.",
    category: "Tshirts",
    price: 25.0,
    originalPrice: 35.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    onSale: true,
  },
  {
    id: 9,
    title: "Typography Teal Printed Tshirt",
    description: "A stylish teal tshirt with a unique typography print.",
    category: "Tshirts",
    price: 32.0,
    originalPrice: 54.0,
    rating: 0,
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=400&h=400&fit=crop",
    onSale: true,
  },
];

function ProductGrid({ setProduct }) {
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
          <ProductCard
            key={product.id}
            product={product}
            setProduct={setProduct}
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
