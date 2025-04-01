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

	return (
		<button
			className={`${classes.button} ${cartItems.length ? classes.active : ''}`}
			onClick={handleClick}
		>
			<CartIco />
		</button>
	);
};

export default CartBtn;
