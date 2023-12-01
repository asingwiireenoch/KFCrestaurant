import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart, purchaseItems }) => {
  const totalCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <span>{item.name} - Quantity: {item.quantity} - ${item.price.toFixed(2) * item.quantity}</span>
              <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="total-cost">Total Cost: ${totalCost.toFixed(2)}</p>
      {cartItems.length > 0 && (
        <button className="purchase-btn" onClick={purchaseItems}>
          Purchase
        </button>
      )}
    </div>
  );
};

export default Cart;
