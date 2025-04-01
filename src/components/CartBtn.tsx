import classes from './CartBtn.module.css';

import { ReactComponent as CartIco } from '../assets/cart.svg';
import { useAppDispatch, useAppSelector } from '../hooks';
import { uiActions } from '../store/ui-slice';

const CartBtn = () => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(uiActions.toggleCart());
	};

	const cartItems = useAppSelector((state) => state.cart.items);
	let totalItems: number = 0;
	if (cartItems) {
		totalItems = cartItems.reduce((totalNumberOfItems, item) => {
			return totalNumberOfItems + item.quantity;
		}, 0);
	}
	return (
		<button
			className={`${classes.button} ${cartItems.length ? classes.active : ''}`}
			onClick={handleClick}
		>
			<CartIco />
			{totalItems !== 0 && <span className={classes.total}>{totalItems}</span>}
		</button>
	);
};

export default CartBtn;
