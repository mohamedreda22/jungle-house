import React from 'react';
import '../styles/Cart.css'

function CartItem({ name, price, amount, onRemove }) {
  const handleRemove = () => {
    onRemove();
  };

  return (
    <li>
      {name} {price}€ x {amount}
      <button className='remove-button' onClick={handleRemove}>Remove</button>
    </li>
  );
}

export default CartItem;