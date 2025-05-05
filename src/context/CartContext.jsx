import React, { createContext, useState, useContext } from "react";

// Create a context for the cart
const CartContext = createContext();

// Provide the cart context to the app
export const CartProvider = ({ children }) => {
  const [err,seterr] = useState("");
  const [notification,setnotification] = useState("");
  // Cart state, initialized from localStorage or as an empty array
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Add a product to the cart
  const addToCart = (product) => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const itemExists = storedCart.some((cart) => cart.id === product.id);
    if (itemExists) {
   seterr("Items already added to the cart");
        setTimeout(() => seterr(""), 3000);
    
    }
    else {
      const updatedCart = [...cart, product];
      setCart(updatedCart); // Update the cart state
      localStorage.setItem("cart", JSON.stringify(updatedCart));// Save to localStorage
      setnotification("Items added");
        setTimeout(() => setnotification(""), 3000);
      
    }
  };

  // Remove a product from the cart by its ID
  const removeFromCart = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart); // Update the cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart,err,notification }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
