import classes from './Cart.module.css';
import { useAppDispatch, useAppSelector } from '../hooks';
import { uiActions } from '../store/ui-slice';
import Modal from './UI/Modal';

const Cart = () => {
	const dispatch = useAppDispatch();
	const cartIsVisible = useAppSelector((state) => state.ui.cartIsVisible);
	const items = useAppSelector((state) => state.cart.items);

	const handleClose = () => {
		if (cartIsVisible) {
			dispatch(uiActions.toggleCart());
		}
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
