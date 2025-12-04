import { Link } from "react-router-dom";

function ProductCard({ product }) {
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

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-card">
        <div className="product-image-container">
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          {product.onSale && <span className="sale-badge">Sale!</span>}
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
      </div>
    </Link>
  );
}

export default ProductCard;
