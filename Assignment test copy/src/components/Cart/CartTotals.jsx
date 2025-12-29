import PropTypes from "prop-types";

/**
 * Cart totals component showing subtotal, discount, and total
 */
const CartTotals = ({ subtotal, discount, total, onCheckout }) => {
  return (
    <div className="cart-totals">
      <h2 className="cart-totals-title">Cart totals</h2>

      <div className="cart-totals-row">
        <span className="cart-totals-label">Subtotal</span>
        <span className="cart-totals-value">${subtotal.toFixed(2)}</span>
      </div>

      {discount > 0 && (
        <div className="cart-totals-row discount-row">
          <span className="cart-totals-label">Discount</span>
          <span className="cart-totals-value discount-value">
            -${discount.toFixed(2)}
          </span>
        </div>
      )}

      <div className="cart-totals-row total-row">
        <span className="cart-totals-label">Total</span>
        <span className="cart-totals-value total-value">
          ${total.toFixed(2)}
        </span>
      </div>

      <button className="checkout-btn" onClick={onCheckout}>
        PROCEED TO CHECKOUT
      </button>
    </div>
  );
};

CartTotals.propTypes = {
  subtotal: PropTypes.number.isRequired,
  discount: PropTypes.number,
  total: PropTypes.number.isRequired,
  onCheckout: PropTypes.func.isRequired,
};

CartTotals.defaultProps = {
  discount: 0,
};

export default CartTotals;
