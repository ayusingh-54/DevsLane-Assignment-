import { useCallback } from "react";
import { CartTable, CartActions, CartTotals } from "../components/Cart";
import { useCart } from "../context/CartContext";

/**
 * Shopping Cart Page Component
 * Main page that combines all cart components
 */
const CartPage = () => {
  const {
    cartItems,
    appliedCoupon,
    couponError,
    subtotal,
    discount,
    total,
    isEmpty,
    loading,
    error,
    updateQuantity,
    removeItem,
    applyCoupon,
    removeCoupon,
  } = useCart();

  const handleUpdateCart = useCallback(() => {
    // This could trigger a save to localStorage or API
    alert("Cart updated successfully!");
  }, []);

  const handleCheckout = useCallback(() => {
    if (isEmpty) {
      alert("Your cart is empty!");
      return;
    }
    // Navigate to checkout or show checkout modal
    alert(`Proceeding to checkout with total: $${total.toFixed(2)}`);
  }, [isEmpty, total]);

  // Loading state
  if (loading) {
    return (
      <div className="cart-page">
        <div className="cart-loading">
          <div className="loading-spinner"></div>
          <p>Loading cart...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="cart-page">
        <div className="cart-error">
          <p>❌ Error loading cart: {error}</p>
          <button onClick={() => window.location.reload()}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-container">
        {/* Cart Table Section */}
        <div className="cart-main">
          <CartTable
            items={cartItems}
            onQuantityChange={updateQuantity}
            onRemove={removeItem}
          />

          {!isEmpty && (
            <CartActions
              onApplyCoupon={applyCoupon}
              appliedCoupon={appliedCoupon}
              onRemoveCoupon={removeCoupon}
              couponError={couponError}
              onUpdateCart={handleUpdateCart}
            />
          )}
        </div>

        {/* Cart Totals Section */}
        {!isEmpty && (
          <div className="cart-sidebar">
            <CartTotals
              subtotal={subtotal}
              discount={discount}
              total={total}
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
