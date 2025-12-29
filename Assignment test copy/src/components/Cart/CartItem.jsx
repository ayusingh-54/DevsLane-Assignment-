import PropTypes from "prop-types";

/**
 * Individual cart item row component
 */
const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const { id, name, price, quantity, image } = item;
  const subtotal = price * quantity;

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      onQuantityChange(id, newQuantity);
    }
  };

  const handleRemoveClick = () => {
    onRemove(id);
  };

  return (
    <tr className="cart-item">
      <td className="cart-item-product">
        <button
          className="remove-btn"
          onClick={handleRemoveClick}
          aria-label={`Remove ${name} from cart`}
          title="Remove item"
        >
          ×
        </button>
        <img src={image} alt={name} className="cart-item-image" />
        <span className="cart-item-name">{name}</span>
      </td>
      <td className="cart-item-price">${price.toFixed(2)}</td>
      <td className="cart-item-quantity">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="quantity-input"
          aria-label={`Quantity for ${name}`}
        />
      </td>
      <td className="cart-item-subtotal">${subtotal.toFixed(2)}</td>
    </tr>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
