import { useState, useCallback, useMemo } from "react";
import { initialCartItems, validCoupons } from "../data/cartData";

/**
 * Custom hook to manage cart state and operations
 * @returns {Object} Cart state and methods
 */
export const useCart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");

  // Update item quantity
  const updateQuantity = useCallback((itemId, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  // Remove item from cart
  const removeItem = useCallback((itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }, []);

  // Apply coupon code
  const applyCoupon = useCallback((couponCode) => {
    const code = couponCode.trim().toUpperCase();

    if (!code) {
      setCouponError("Please enter a coupon code");
      return false;
    }

    if (validCoupons[code]) {
      setAppliedCoupon({ code, ...validCoupons[code] });
      setCouponError("");
      return true;
    } else {
      setCouponError("Invalid coupon code");
      setAppliedCoupon(null);
      return false;
    }
  }, []);

  // Remove applied coupon
  const removeCoupon = useCallback(() => {
    setAppliedCoupon(null);
    setCouponError("");
  }, []);

  // Calculate subtotal
  const subtotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  // Calculate discount
  const discount = useMemo(() => {
    if (!appliedCoupon) return 0;

    if (appliedCoupon.type === "percentage") {
      return (subtotal * appliedCoupon.value) / 100;
    }
    return Math.min(appliedCoupon.value, subtotal);
  }, [subtotal, appliedCoupon]);

  // Calculate total
  const total = useMemo(() => {
    return Math.max(0, subtotal - discount);
  }, [subtotal, discount]);

  // Check if cart is empty
  const isEmpty = cartItems.length === 0;

  // Get total items count
  const itemCount = useMemo(() => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  }, [cartItems]);

  return {
    cartItems,
    appliedCoupon,
    couponError,
    subtotal,
    discount,
    total,
    isEmpty,
    itemCount,
    updateQuantity,
    removeItem,
    applyCoupon,
    removeCoupon,
  };
};

export default useCart;
