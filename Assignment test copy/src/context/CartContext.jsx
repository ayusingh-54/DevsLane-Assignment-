import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
} from "react";
import { validCoupons } from "../data/cartData";

// Create Cart Context
const CartContext = createContext(null);

// API Base URL
const API_BASE_URL = "https://dummyjson.com";

/**
 * Cart Provider Component
 * Wraps the app to provide cart state globally
 */
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponError, setCouponError] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch cart data from API on mount
  useEffect(() => {
    const fetchCart = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch cart data (using cart 1 as default)
        const response = await fetch(`${API_BASE_URL}/carts/1`);

        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }

        const data = await response.json();

        // Transform API data to our cart format
        const transformedItems = data.products.map((product) => ({
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: product.quantity,
          image: product.thumbnail,
          discountPercentage: product.discountPercentage,
          total: product.total,
          discountedTotal: product.discountedTotal,
        }));

        setCartItems(transformedItems);
      } catch (err) {
        console.error("Error fetching cart:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

  // Add item to cart
  const addToCart = useCallback((product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);

      if (existingItem) {
        // Update quantity if item exists
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      // Add new item
      return [
        ...prevItems,
        {
          id: product.id,
          name: product.title,
          price: product.price,
          quantity: quantity,
          image: product.thumbnail || product.image,
        },
      ];
    });
  }, []);

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

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
    setAppliedCoupon(null);
    setCouponError("");
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

  // Check if item is in cart
  const isInCart = useCallback(
    (productId) => {
      return cartItems.some((item) => item.id === productId);
    },
    [cartItems]
  );

  // Get item quantity in cart
  const getItemQuantity = useCallback(
    (productId) => {
      const item = cartItems.find((item) => item.id === productId);
      return item ? item.quantity : 0;
    },
    [cartItems]
  );

  const value = {
    cartItems,
    appliedCoupon,
    couponError,
    subtotal,
    discount,
    total,
    isEmpty,
    itemCount,
    loading,
    error,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    applyCoupon,
    removeCoupon,
    isInCart,
    getItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

/**
 * Custom hook to use cart context
 * @returns {Object} Cart state and methods
 */
export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
};

export default CartContext;
