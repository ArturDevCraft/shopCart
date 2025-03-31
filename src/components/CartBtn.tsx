import classes from './CartBtn.module.css';

import { ReactComponent as CartIco } from '../assets/cart.svg';
import { useAppDispatch } from '../hooks';
import { uiActions } from '../store/ui-slice';

const CartBtn = () => {
	const dispatch = useAppDispatch();

	const handleClick = () => {
		dispatch(uiActions.toggleCart());
	};

	return (
		<button className={classes.button} onClick={handleClick}>
			<CartIco />
		</button>
	);
};

export default CartBtn;
