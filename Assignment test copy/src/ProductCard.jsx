import { useCart } from "./context/CartContext";

function ProductCard({ product, onProductSelect }) {
  const { addToCart, isInCart } = useCart();

  function handleClick() {
    onProductSelect(product);
  }

  function handleAddToCart(e) {
    e.stopPropagation(); // Prevent card click
    addToCart(product, 1);
  }

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= rating ? "filled" : ""}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const inCart = isInCart(product.id);

  return (
    <div
      className="product-card"
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
        {product.onSale && <span className="sale-badge">Sale!</span>}
        {inCart && <span className="in-cart-badge">In Cart</span>}
      </div>
      <p className="product-category">{product.category}</p>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>
      <div className="product-rating">{renderStars(product.rating)}</div>
      <div className="product-price">
        {product.originalPrice && (
          <span className="original-price">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        <span className={product.onSale ? "current-price" : "regular-price"}>
          ${product.price.toFixed(2)}
        </span>
      </div>
      <button
        className={`quick-add-btn ${inCart ? "in-cart" : ""}`}
        onClick={handleAddToCart}
      >
        {inCart ? "+ Add More" : "Add to Cart"}
      </button>
    </div>
  );
}

export default ProductCard;
