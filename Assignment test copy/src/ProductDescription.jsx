import { useState } from "react";
import { useCart } from "./context/CartContext";

function ProductDescription({ product, onBack }) {
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart, isInCart, getItemQuantity } = useCart();

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  // Use product description from API or fallback
  const displayDescription =
    product.description ||
    "Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.";

  const inCart = isInCart(product.id);
  const cartQuantity = getItemQuantity(product.id);

  return (
    <div className="product-detail">
      <button className="back-button" onClick={onBack}>
        ← Back to Products
      </button>

      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image || product.thumbnail} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>

          {product.category && (
            <p className="product-detail-category">{product.category}</p>
          )}

          <p className="product-detail-price">${product.price.toFixed(2)}</p>

          {product.rating && (
            <div className="product-detail-rating">
              <span className="rating-stars">
                {"★".repeat(Math.round(product.rating))}
                {"☆".repeat(5 - Math.round(product.rating))}
              </span>
              <span className="rating-value">
                ({product.rating.toFixed(1)})
              </span>
            </div>
          )}

          <p className="product-detail-description">{displayDescription}</p>

          {inCart && (
            <p className="in-cart-notice">
              ✓ {cartQuantity} item(s) already in cart
            </p>
          )}

          <div className="product-detail-actions">
            <input
              type="number"
              className="quantity-input"
              value={quantity}
              min="1"
              onChange={(e) =>
                setQuantity(Math.max(1, parseInt(e.target.value) || 1))
              }
            />
            <button
              className={`add-to-cart-btn ${addedToCart ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {addedToCart ? "✓ ADDED!" : "ADD TO CART"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
