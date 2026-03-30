import { createContext, useState } from "react";

// Create context
export const CartContext = createContext();

//  provider
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Removing items by index
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  //   cleare cart / after successful order
  const clearCart = () => {
    setCart([]);
  };

  // sum of item prices
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, totalPrice, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
