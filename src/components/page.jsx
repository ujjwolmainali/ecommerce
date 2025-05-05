import React, { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";
import "./cart.css";
import { useLocation } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart } = useCart(); // Using context for cart data and remove function
  const [quantities, setQuantities] = useState({});

  // Initialize quantities based on the cart
  useEffect(() => {
    const initialQuantities = cart.reduce((acc, product) => {
      acc[product.id] = 1; // Default quantity is 1 for each product
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cart]);

  // Handle quantity increment
  const incrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Handle quantity decrement
  const decrementQuantity = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] - 1), // Ensure quantity doesn't go below 1
    }));
  };

  // Calculate total price
  const calculateTotal = () =>
    cart
      .reduce(
        (total, item) => total + item.price * (quantities[item.id] || 1),
        0
      )
      .toFixed(2);

  return (
    <>
      <div className="shop">
        <h3>My Cart</h3>
        <h4>
          <span className="Home">
            <a href="#">Home</a>
          </span>
          / <span style={{ color: "green" }}>Store/My Cart</span>
        </h4>
      </div>
      <div className="cart-container">
        <h2>My Cart</h2>
        <table className="cart-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => (
              <tr key={product.id}>
                <td className="cartproduct-info">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="cartproduct-image"
                  />
                  <span>{product.title}</span>
                </td>
                <td>${product.price}</td>
                <td className="quantity-control">
                  <button onClick={() => decrementQuantity(product.id)}>-</button>
                  <input
                    type="text"
                    readOnly
                    value={quantities[product.id] || 1}
                    className="quantity-input"
                  />
                  <button onClick={() => incrementQuantity(product.id)}>+</button>
                </td>
                <td>
                  ${(product.price * (quantities[product.id] || 1)).toFixed(2)}
                </td>
                <td>
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(product.id)}
                  >
                    &times;
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </>
  );
};

export default Cart;
