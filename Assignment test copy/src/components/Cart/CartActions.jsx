import PropTypes from "prop-types";
import CouponForm from "./CouponForm";

/**
 * Cart actions component with coupon form and update cart button
 */
const CartActions = ({
  onApplyCoupon,
  appliedCoupon,
  onRemoveCoupon,
  couponError,
  onUpdateCart,
}) => {
  return (
    <div className="cart-actions">
      <CouponForm
        onApplyCoupon={onApplyCoupon}
        appliedCoupon={appliedCoupon}
        onRemoveCoupon={onRemoveCoupon}
        error={couponError}
      />
      <button className="update-cart-btn" onClick={onUpdateCart}>
        UPDATE CART
      </button>
    </div>
  );
};

CartActions.propTypes = {
  onApplyCoupon: PropTypes.func.isRequired,
  appliedCoupon: PropTypes.shape({
    code: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["percentage", "fixed"]).isRequired,
    value: PropTypes.number.isRequired,
  }),
  onRemoveCoupon: PropTypes.func.isRequired,
  couponError: PropTypes.string,
  onUpdateCart: PropTypes.func.isRequired,
};

CartActions.defaultProps = {
  appliedCoupon: null,
  couponError: "",
};

export default CartActions;
