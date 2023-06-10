import { useState, useEffect } from 'react';
import '../styles/Cart.css';
import CartItem from './CartItem';

function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true);
	const total = cart.reduce((acc, { amount, price }) => acc + amount * price, 0);

	const toggleCart = () => {
		setIsOpen(!isOpen);
	};

	const removeFromCart = (item) => {
		const updatedCart = cart.filter((cartItem) => cartItem.name !== item.name);
		updateCart(updatedCart);
	};

	const emptyCart = () => {
		updateCart([]);
	};

	// Save the cart to localStorage after each modification
	useEffect(() => {
		localStorage.setItem('cart', JSON.stringify(cart));
	}, [cart]);

	// Get the cart from localStorage when the page is loaded
	useEffect(() => {
		const savedCart = localStorage.getItem('cart');

		if (savedCart) {
			updateCart(JSON.parse(savedCart));
		}
	}, [updateCart]);

	return isOpen ? (
		<div className="jh-cart">
			<button className="jh-cart-toggle-button" onClick={toggleCart}>
				Close
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Cart</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<CartItem
								key={`${name}-${index}`}
								name={name}
								price={price}
								amount={amount}
								onRemove={() => removeFromCart({ name })}
							/>
						))}
					</ul>
					<h3>Total: {total}€</h3>
					<button className="empty-cart-button" onClick={emptyCart}>
						Empty the cart
					</button>
				</div>
			) : (
				<div>Your cart is empty</div>
			)}
		</div>
	) : (
		<div className="jh-cart-closed">
			<button className="jh-cart-toggle-button" onClick={toggleCart}>
				Open Cart
			</button>
		</div>
	);
}

export default Cart;
