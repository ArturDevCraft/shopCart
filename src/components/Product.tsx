import { useAppDispatch } from '../hooks';
import { cartActions } from '../store/cart-slice';

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
		<li>
			<h3>{name}</h3>
			<img src={image} alt={name} />
			<p>{price}</p>
			<button onClick={handleAdd}>Add to Cart</button>
		</li>
	);
};

export default Product;
