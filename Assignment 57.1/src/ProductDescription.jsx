import { useState } from "react";

function ProductDescription({ product, setProduct }) {
  const [quantity, setQuantity] = useState(1);

  function goBack() {
    setProduct(null);
  }

  const longDescription = `Neque porro quisquam est, qui dolore ipsum quia dolor sit amet, consectetur adipisci velit, sed quia non incidunt lores ta porro ame. numquam eius modi tempora incidunt lores ta porro ame.`;

  return (
    <div className="product-detail">
      <button className="back-button" onClick={goBack}>
        ← Back to Products
      </button>

      <div className="product-detail-container">
        <div className="product-detail-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-detail-info">
          <h1 className="product-detail-title">{product.title}</h1>

          <p className="product-detail-price">${product.price.toFixed(2)}</p>

          <p className="product-detail-description">{longDescription}</p>

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
            <button className="add-to-cart-btn">ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;
