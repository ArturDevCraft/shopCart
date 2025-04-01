import classes from './Cart.module.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { uiActions } from '../store/ui-slice';
import Modal from './UI/Modal';
import { cartActions } from '../store/cart-slice';

import { Product as ProdType } from '../store/cart-slice';
const Cart = () => {
	const dispatch = useAppDispatch();
	const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);
	const items = useAppSelector((state) => state.cart.items);

	const handleClose = () => {
		if (cartIsVisible) {
			dispatch(uiActions.toggleCart());
		}
	};

	const handleDecrease = (id: number) => {
		dispatch(cartActions.removeProductFromCart(id));
	};
	const handleIncrease = (item: ProdType) => {
		dispatch(cartActions.addProductToCart(item));
	};
	return (
		<Modal open={cartIsVisible} onClose={handleClose}>
			<h2>Cart</h2>
			<ul className={classes.items}>
				{items.map((item) => (
					<li key={item.id}>
						<p>
							{item.name} - {item.quantity} x ${item.price}
						</p>
						<p className={classes.itemActions}>
							<button onClick={() => handleDecrease(item.id)}>-</button>
							<span>{item.quantity}</span>
							<button onClick={() => handleIncrease(item)}>+</button>
						</p>
					</li>
				))}
			</ul>
			<p className={classes.actions}>
				<button onClick={handleClose}>Close</button>
				<button onClick={handleClose}>Place an order</button>
			</p>
		</Modal>
	);
};

export default Cart;
