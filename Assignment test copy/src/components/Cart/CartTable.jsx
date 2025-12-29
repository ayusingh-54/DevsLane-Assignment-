import PropTypes from "prop-types";
import CartItem from "./CartItem";

/**
 * Cart table component displaying all cart items
 */
const CartTable = ({ items, onQuantityChange, onRemove }) => {
  if (items.length === 0) {
    return (
      <div className="cart-empty">
        <p>Your cart is empty</p>
      </div>
    );
  }

  return (
    <table className="cart-table">
      <thead>
        <tr>
          <th className="col-product">Product</th>
          <th className="col-price">Price</th>
          <th className="col-quantity">Quantity</th>
          <th className="col-subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
          />
        ))}
      </tbody>
    </table>
  );
};

CartTable.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  onQuantityChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartTable;
