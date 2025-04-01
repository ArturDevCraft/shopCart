import { useAppDispatch, useAppSelector } from '../hooks';
import { cartActions } from '../store/cart-slice';
import classes from './Product.module.css';
import { ReactComponent as CartPlus } from '../assets/cartplus.svg';
import { withProductDetails } from './withProductDetails';

interface ProductType {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	onClick?: () => void;
	children?: React.ReactNode;
	quantity?: number;
}

const Product: React.FC<ProductType> = ({
	id,
	name,
	description,
	image,
	price,
	onClick,
	children,
	quantity,
}) => {
	const dispatch = useAppDispatch();
	const prodDetailsId = useAppSelector((state) => state.ui.productIsVisible);

	const handleAdd = () => {
		dispatch(
			cartActions.addProductToCart({
				id,
				name,
				description,
				image,
				price,
				quantity,
			})
		);
	};
	return (
		<li
			className={`${prodDetailsId === 0 ? classes.item : classes.prodDetails}`}
		>
			<h3 className={classes.title} onClick={onClick}>
				{name}
			</h3>
			<img className={classes.image} src={image} alt={name} onClick={onClick} />
			<p className={classes.price}>${price}</p>
			<button className={classes.button} onClick={handleAdd}>
				<CartPlus />
			</button>
			{children}
		</li>
	);
};

// export default Product;
export default withProductDetails(Product);
