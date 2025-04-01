import { useAppDispatch } from '../hooks';
import { cartActions } from '../store/cart-slice';
import classes from './Product.module.css';

const Product: React.FC<{
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
}> = ({ id, name, description, image, price }) => {
	const dispatch = useAppDispatch();

	const handleAdd = () => {
		dispatch(
			cartActions.addProductToCart({ id, name, description, image, price })
		);
	};
	return (
		<li className={classes.item}>
			<h3 className={classes.title}>{name}</h3>
			<img className={classes.image} src={image} alt={name} />
			<p className={classes.price}>${price}</p>
			<button className={classes.button} onClick={handleAdd}>
				Add to Cart
			</button>
		</li>
	);
};

export default Product;
