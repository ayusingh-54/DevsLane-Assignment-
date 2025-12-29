import { useState } from "react";
import PropTypes from "prop-types";

/**
 * Coupon code input form component
 */
const CouponForm = ({
  onApplyCoupon,
  appliedCoupon,
  onRemoveCoupon,
  error,
}) => {
  const [couponCode, setCouponCode] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onApplyCoupon(couponCode);
    if (success) {
      setCouponCode("");
    }
  };

  const handleInputChange = (e) => {
    setCouponCode(e.target.value);
  };

  if (appliedCoupon) {
    return (
      <div className="coupon-applied">
        <span className="coupon-badge">
          <span className="coupon-code">{appliedCoupon.code}</span>
          <button
            className="coupon-remove-btn"
            onClick={onRemoveCoupon}
            aria-label="Remove coupon"
          >
            ×
          </button>
        </span>
        <span className="coupon-discount-text">
          {appliedCoupon.type === "percentage"
            ? `${appliedCoupon.value}% off`
            : `$${appliedCoupon.value} off`}
        </span>
      </div>
    );
  }

  return (
    <form className="coupon-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Coupon code"
        value={couponCode}
        onChange={handleInputChange}
        className="coupon-input"
        aria-label="Enter coupon code"
      />
      <button type="submit" className="coupon-btn">
        APPLY COUPON
      </button>
      {error && <span className="coupon-error">{error}</span>}
    </form>
  );
};

CouponForm.propTypes = {
  onApplyCoupon: PropTypes.func.isRequired,
  appliedCoupon: PropTypes.shape({
    code: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["percentage", "fixed"]).isRequired,
    value: PropTypes.number.isRequired,
  }),
  onRemoveCoupon: PropTypes.func.isRequired,
  error: PropTypes.string,
};

CouponForm.defaultProps = {
  appliedCoupon: null,
  error: "",
};

export default CouponForm;
